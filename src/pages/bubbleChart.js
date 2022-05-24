import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { DiagramWrap, Heading, TextArea, Subtitle,TopLine } from '../components/Diagram/DiagramElements'

const Wrapp = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 0%;
    margin-bottom: 5%;

    @media screen and (max-width:1600px){
        margin-left: 10%;
    }
`

const SVGWrapp = styled.svg`
    max-width: 1050px;
    @media screen and (max-width:1600px){
        height: 600px;
    }
`

export default function BubbleChart({width, height}) {
  const data = JSON.parse(localStorage.getItem('data'));
  const svgRef = useRef(null);
  const legendRef = useRef(null);

    function renderTreemap() {
    
        var pathsWithColor = [];
        var objPathColor = {};
        var paths = [];
        var intervals = [];
          // create root node
        const root = d3
        .hierarchy(data)
        .sum(function (d) {return detectJSONAttribute(d)})
        .sort(function (a, b) {return b.height - a.height || detectJSONAttribute(b) - detectJSONAttribute(a)});

      function detectJSONAttribute(d){
        if(d.value != null) return d.value;
        else if(d.codeSizeMax != null) return d.codeSizeMax;
              else if(d.methodsNumber != null) return d.methodsNumber;
      }

        generateColorForEachPath(root);
        generateColorForEachSize(root);
        var tool = d3.select("body").append("div").attr("class", "toolTip");
        // create treemap layout
        const treemapRoot = d3.treemap().size([width, height])(root);

        const values = treemapRoot.leaves().map(d => detectJSONAttribute(d.data));
        const min = Math.min.apply(null, values);
        const max = Math.max.apply(null, values);

        var diameter = 850;

        var bubble = d3.pack()
                        .size([diameter, diameter])
                        .padding(0);

        var margin = {
          left: 25,
          right: 25,
          top: 25,
          bottom: 25
        }

        const svg = d3.select(svgRef.current).attr('viewBox','0 0 ' + (diameter + margin.right) + ' ' + diameter)
                                            .attr('width', (diameter + margin.right))
                                            .attr('height', diameter)
                                            .attr('class', 'chart-svg');

        bubble(root);

        var node = svg.selectAll('.node')
          .data(treemapRoot.leaves())
          .enter()
          .append('g').attr('class', 'node')
          .attr('transform', function(d) { return 'translate(' + d.x + ' ' + d.y + ')'; })
          .append('g').attr('class', 'graph');

        node.append("circle")
          .attr("r", function(d) { return d.r; })
          .style("fill", (d) => identifyColor(d))
          .on("mousemove", function (event, d) {
            tool.style("left", event.pageX + 10 + "px")
            tool.style("top", event.pageY - 20 + "px")
            tool.style("display", "inline-block");
            tool.html(d.children ? null : "<b>" + generateParentName(d) + "<br>" + d.data.name  + "<br>" +  detectJSONAttribute(d.data) + "</b>");
        }).on("mouseout", function (d) {
            tool.style("display", "none");
        });

        node.append("text")
          .attr("dy", "0.2em")
          .style("text-anchor", "middle")
          .style('font-size', "12px")
          .text(getLabel)
          .style("fill", "#000000")
          .style('pointer-events', 'none');
        
        node.append("text")
          .attr("dy", "1.3em")
          .style("text-anchor", "middle")
          .style('font-family', 'Roboto')
          .style('font-weight', '100')
          .style('font-size', "7px")
          .text(getValueText)
          .style("fill", "#000000")
          .style('pointer-events', 'none');


          function generateColorForEachSize(d){
            const values = [];
            d.leaves().forEach((elem) => {
                values.push(detectJSONAttribute(elem.data));
            });
            const min = Math.min(...values);
            const max = Math.max(...values)
            console.log(min);
            console.log(max);
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
            console.log(intervals);
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

          console.log(treemapRoot.leaves());
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

          function getLabel(item) {
            if (detectJSONAttribute(item.data) < max / 2.5) {
              return '';
            }
            return item.data.name;
          }
          function getValueText(item) {
            //return item.data.value;
            return '';
          }

        //   function identifyColor(d){
        //     let color = "";
        //     pathsWithColor.forEach((elem) => {
        //         let pathName = generateName(d).substring(0,generateName(d).lastIndexOf("."));
        //         if(pathName === elem.path) {
        //             color = elem.color;
        //         }
        //     });
        //     return color;
        // }

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
    <Wrapp className="treemap">
      <DiagramWrap>
              <SVGWrapp ref={svgRef} />
              <TextArea>
                  <TopLine>{handleDiagramType()}</TopLine>
                  <Heading lightText={false}>{localStorage.getItem("projectName")}</Heading>
                  <Subtitle darkText={true}>{localStorage.getItem("documentName")}</Subtitle>
              </TextArea>
      </DiagramWrap>
      <svg ref={legendRef} />
    </Wrapp>
  );
}