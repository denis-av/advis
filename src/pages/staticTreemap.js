import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { DiagramWrap, Heading, TextArea, Subtitle,TopLine } from '../components/Diagram/DiagramElements'
import styled from 'styled-components';
import { ColorSelect } from '../components/ProjectUser/ProjectUserElements';

const Wrapp = styled.div`
    //style={{ maxWidth:"1200px", alignContent:"center", justifyContent:"center", marginLeft:"10%", marginTop:"3%", maxHeight:"750px"}}
    /* align-content: center;
    justify-content: center;
    margin-left: 0%;
    margin-top: 3%; */
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 3%;

    @media screen and (max-width: 1600px){
        margin-left: 0%;
        margin-right: 0%;
    }
`

export default function Treemap({width, height}) {
  const data = JSON.parse(localStorage.getItem('data'));
  const svgRef = useRef(null);
  const legendRef = useRef(null);
  const legendIntrvRef = useRef(null);
  var margin = {top: 30, right:100, bottom:0, left: 100},
             width = width,
             //width = 1000,
             height = height,
             // height = 600 - margin.top - margin.bottom,
             formatNumber = d3.format(","),
             transitioning;
             

    var x = d3.scaleLinear().domain([0,width]).range([0,width]);
    var y = d3.scaleLinear().domain([0, height]).range([0, height]);
    var treemap = d3.treemap().size([width, height]).paddingInner(0).round(false);
    var leaves = [];

    function renderTreemap() {
        const svg = d3.select(svgRef.current).attr("width", width + 100)
                                            .attr("height", height + 100)
                                            .append("g");

        var pathsWithColor = [];
        var objPathColor = {};
        var paths = [];
        var intervals = [];
        var intervalsWithColor = [];
        var tool = d3.select("body").append("div").attr("class", "toolTip");
        var format = d3.format(",d"); 

        // create root node
        const root = d3
        .hierarchy(data)
        .sum(function (d) {return detectJSONAttribute(d);})
        .sort(function (a, b) {return b.height - a.height || detectJSONAttribute(b) - detectJSONAttribute(a)});

        function detectJSONAttribute(d){
            if(d.value != null) return d.value;
            else if(d.codeSizeMax != null) return d.codeSizeMax;
                 else if(d.methodsNumber != null) return d.methodsNumber;
        }
        
        generateColorForEachPath(root);
        generateColorForEachSize(root);

        // create treemap layout
        const treemapRoot = d3.treemap().size([width, height])(root);
        //console.log(treemapRoot);
        // create 'g' element nodes based on data
        var nodes = svg.selectAll('g')
                .data(treemapRoot.leaves())
                .enter()
                .append('g')
                .attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; })
                .attr("overflow","hidden");
            
        // create color scheme and fader
        const fader = (color) => d3.interpolateRgb(color, '#fff')(0.3);
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10.map(fader));

        // add treemap rects
        nodes.append('rect')
        .attr("width", function(d) { return d.x1 - d.x0; })
        .attr("height", function(d) { return d.y1 - d.y0; })
            .attr('fill', (d) => identifyColor(d))
            .on("mousemove", function (event, d) {
                tool.style("left", event.pageX + 10 + "px")
                tool.style("top", event.pageY - 20 + "px")
                tool.style("display", "inline-block");
                tool.html(d.children ? null : "<b>" + generateParentName(d) + "<br>" + d.data.name  + "<br>" +  detectJSONAttribute(d.data) + "</b>");
            }).on("mouseout", function (d) {
                tool.style("display", "none");
            });

        const fontSize = 9;

        nodes.append("clipPath")
        .attr("id", function(d) { return "clip-" + d.data.id; })
        .append("rect")
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0);

        nodes.append("text")
            .attr("clip-path", function(d) { return "url(#clip-" + d.data.id + ")"; })
            .selectAll("tspan")
            .data(function(d) { return (d.data.name + "\n" + detectJSONAttribute(d.data)).split(/\n/g); })
            .join("tspan")
                .attr("x", 3)
                .attr("y", (d, i, D) => `${(i === D.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
                .attr('font-size', `${fontSize}px`)
                .attr("font-weight","bold")
                .attr("style","@media only screen and (max-width: 960px)  {font-size: 9px}")
                .text(d => d);   

        let categories = pathsWithColor;
        const legendContainer = d3.select(legendRef.current);
        legendContainer.attr('width', width).attr('height', categories.length * 34);

        categories = categories.filter(
        (category, index, self) => self.indexOf(category) === index,
        );

        const legend = legendContainer.selectAll('g').data(categories).join('g');

        legend.append('rect')
            .attr('width', "17px")
            .attr('height', "17px")
            .attr('x', "17")
            .attr('y', (_, i) => 17 * 2 * i)
            .attr('fill', (d) => d.color);

        legend.append('text')
        .attr('transform', `translate(0, 13)`)
        .attr('x', 17 * 3)
        .attr('y', (_, i) => 17 * 2 * i)
        .style('font-size', "15px")
        .style("color","#ffffff")
        .text((d) => d.path);


        let intervalsOfColors = intervals;
        const legendForScale = d3.select(legendIntrvRef.current);
        legendForScale.attr('width', width).attr('height', intervalsOfColors.length * 34);

        const legendScale = legendForScale.selectAll('g').data(intervalsOfColors).join('g');

        legendScale.append('rect')
            .attr('width', "17px")
            .attr('height', "17px")
            .attr('x', "17")
            .attr('y', (_, i) => 17 * 2 * i)
            .attr('fill', (d) => d.color);

        legendScale.append('text')
            .attr('transform', `translate(0, 13)`)
            .attr('x', 17 * 3)
            .attr('y', (_, i) => 17 * 2 * i)
            .style('font-size', "15px")
            .style("color","#ffffff")
            .text((d) => { return "Obiecte ale căror size aparține intervalului [" + d.min + " , " + d.max + "]"});


        // function identifyColor(d){
        //     let color = "";
        //     if(localStorage.getItem("color") === "pachet"){
        //         pathsWithColor.forEach((elem) => {
        //             let pathName = generateName(d).substring(0,generateName(d).lastIndexOf("."));
        //             if(pathName === elem.path) {
        //                 color = elem.color;
        //             }
        //         });
        //     }
        //     else if(localStorage.getItem("color") === "scale"){
        //         intervals.forEach((elem) => {
        //             if(d.data.value >= elem.min && d.data.value < elem.max){
        //                 color = elem.color;
        //             };
        //         })
        //     }
        //     return color;
        // }

        function generateName(d) {
            var res = "";
            var sep = ".";
            d.ancestors().reverse().forEach(function(i){
                res += i.data.name + sep;
            });
            return res
            .split(sep)
            .filter(function(i){
                return i!== "";
            })
            .join(sep);
        }

        function generateColorForEachSize(d){
            const values = [];
            d.leaves().forEach((elem) => {
                values.push(detectJSONAttribute(elem.data));
            });
            const min = Math.min(...values);
            const max = Math.max(...values)
            let step = (max - min) / 10;
            [ ...Array(10) ].forEach((e, i) => {
                const intrv = {};
                let sum1 = parseInt(min) + parseInt(step * i);
                let sum2 = parseInt(min) + parseInt(step * (i+1));
                intrv.min = sum1;
                intrv.max = sum2;
                intrv.color = generateColorForScale(i);
                intervals.push(intrv);
            });
        }

        function generateColorForScale(d){
            if(d === 0){
                return 'rgb(0, 255, 0)';
            }
            else if(d === 1){
                return 'rgb(60, 255, 0)';
            }
            else if(d === 2){
                return 'rgb(125, 255, 0)';
            }
            else if(d === 3){
                return 'rgb(190, 255, 0)';
            }
            else if(d === 4){
                return 'rgb(255, 255, 0)';
            }
            else if(d === 5){
                return 'rgb(255,255,0)';
            }
            else if(d === 6){
                return 'rgb(255,190,0)';
            }
            else if(d === 7){
                return 'rgb(255,125,0)';
            }
            else if(d === 8){
                return 'rgb(255,60,0)';
            }
            else if(d === 9){
                return 'rgb(255, 0, 0)';
            }
        }

        function generateParentName(d){
            var res = "";
            var sep = ".";
            d.ancestors().reverse().forEach(function(i){
                res += i.data.name + sep;
            });
            res = res.split(sep)
                .filter(function(i){
                    return i!== "";
                })
                .join(sep);
            return res.substring(0,res.lastIndexOf("."));
        }
        
        function getRandomRgb() {
            var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
        
        function generateColorForEachPath(root) {
            root.leaves().forEach((elem) => {
                const fullName = generateName(elem);
                const index = fullName.lastIndexOf(".");
                const path = fullName.substring(0, index);
                if (paths.indexOf(path) === -1) {
                    paths.push(path);
                }
            });
            paths.forEach((elem) => {
                objPathColor = {};
                objPathColor.path = elem;
                objPathColor.color = getRandomRgb();
                pathsWithColor.push(objPathColor);
            });
        }
        
        function identifyColor(d){
            let color = "";
            if(localStorage.getItem("color") === "pachet"){
                pathsWithColor.forEach((elem) => {
                    let pathName = generateName(d).substring(0,generateName(d).lastIndexOf("."));
                    if(pathName === elem.path) {
                        color = elem.color;
                    }
                });
            }
            else if(localStorage.getItem("color") === "scale"){
                intervals.forEach((elem) => {
                    let valueD = detectJSONAttribute(d.data);
                    console.log(valueD);
                    if(valueD >= elem.min && valueD <= elem.max){
                        color = elem.color;
                    };
                })
            }
            return color;
        }

        function wrapText(selection) {
            selection.each(function () {
                const node = d3.select(this);
                const rectWidth = + node.attr('width');
                let word;
                const words = node.text().split(' ').reverse();
                let line = [];
                let lineNumber = 0;
                const x = node.attr('x');
                const y = node.attr('y');
                let tspan = node.text('').append('tspan').attr('height', node.attr('height')).attr('text-overflow','clip').attr('x', x).attr('y', y).attr("font-weight","bold").attr("overflow","auto");
                while (words.length > 1) {
                    word = words.pop();
                    line.push(word);
                    tspan.text(line.join(' '));
                    const tspanLength = tspan.node().getComputedTextLength();
                    if (tspanLength > rectWidth && line.length !== 1) {
                    line.pop();
                    tspan.text(line.join(' '));
                    line = [word];
                    tspan = addTspan(word);
                    }
                }
                addTspan(words.pop());
            
                function addTspan(text) {
                    lineNumber += 1;
                    return node
                    .append('tspan')
                    .attr('x', x)
                    .attr('y', y)
                    .attr("font-weight","bold")
                    .attr("overflow","hidden")
                    .attr('text-overflow','clip')
                    .attr('dy', `${lineNumber * fontSize}px`)
                    .text(text);
                }
            });
        }
  }

  useEffect(() => {
    renderTreemap();
  }, []);

  const handleDiagramType = () => {
    const value = localStorage.getItem("type");
    if(value === "treemapStatic") return "STATIC TREEMAP";
    else if(value === "treemapZoomable" ) return "ZOOMABLE TREEMAP";
        else if(value === "bubbleChart" ) return "BUBBLE CHART";
            else if(value === "collapsible" ) return "COLLAPSIBLE TREE";

  }

  const generateLegend = () => {
      if(localStorage.getItem("color") === "pachet"){
          return (
            <svg ref={legendRef} />
          )
      }else if(localStorage.getItem("color") === "scale"){
          return (
            <svg ref={legendIntrvRef} />
          )
      }
  }

  return (
    // <div className="treemap" style={{ maxWidth:"1200px", alignContent:"center", justifyContent:"center", marginLeft:"10%", marginTop:"3%", maxHeight:"750px"}}>
    //   <svg ref={svgRef} />
    // </div>

    <Wrapp className="treemap">
        <DiagramWrap>
                <svg ref={svgRef} style={{maxWidth:"1100px", maxHeight:"750px", alignContent:"center",justifyContent:"center"}}/>
                <TextArea style={{ maxHeight:"750px"}}>
                    <TopLine>{handleDiagramType()}</TopLine>
                    <Heading lightText={false}>{localStorage.getItem("projectName")}</Heading>
                    <Subtitle darkText={true}>{localStorage.getItem("documentName")}</Subtitle>
                </TextArea>
        </DiagramWrap>
        {generateLegend()}
    </Wrapp>
  );
}