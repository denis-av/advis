import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { DiagramWrap, Heading, TextArea, Subtitle,TopLine } from '../components/Diagram/DiagramElements'
import styled from 'styled-components';

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
`

export default function Treemap({width, height}) {
  const data = JSON.parse(localStorage.getItem('data'));
  console.log(data);
  const svgRef = useRef(null);
  const legendRef = useRef(null);
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
                                            // .style("margin-left", -margin.left + "px")
                                            // .style("margin-right", -margin.right + "px")
                                            .append("g")
                                            //.attr("transform", "translate(100,100)")
                                            //.style("shape-rendering", "crispEdges");

        var pathsWithColor = [];
        var objPathColor = {};
        var paths = [];
        var tool = d3.select("body").append("div").attr("class", "toolTip");
        var format = d3.format(",d"); 

        // create root node
        const root = d3
        .hierarchy(data)
        .sum(function (d) {return d.value;})
        .sort(function (a, b) {return b.height - a.height || b.value - a.value});
        
        generateColorForEachPath(root);

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
                tool.html(d.children ? null : "<b>" + generateParentName(d) + "<br>" + d.data.name  + "<br>" +  d.data.value + "</b>");
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
      .data(function(d) { return (d.data.name + "\n" + d.data.value).split(/\n/g); })
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

        console.log(categories);

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

        function identifyColor(d){
            let color = "";
            pathsWithColor.forEach((elem) => {
                let pathName = generateName(d).substring(0,generateName(d).lastIndexOf("."));
                if(pathName === elem.path) {
                    color = elem.color;
                }
            });
            return color;
        }

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
            pathsWithColor.forEach((elem) => {
                let pathName = generateName(d).substring(0,generateName(d).lastIndexOf("."));
                if(pathName === elem.path) {
                    color = elem.color;
                }
            });
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
    <svg ref={legendRef} />
    </Wrapp>
  );
}