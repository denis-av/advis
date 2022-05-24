import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { Heading, TextArea, Subtitle,TopLine } from '../components/Diagram/DiagramElements'

const DiagramWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    /* margin-left: 10%;
    margin-top: 3%; */
`

const Wrapp = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 0%;
    max-height: 750px;
    margin-bottom: 5%;

    @media screen and (max-width:1600px){
        margin-left: 0%;
    }
`

const SVGWrapp = styled.svg`
    max-width: 1200px;
    @media screen and (max-width:1600px){
        height: 600px;
    }
`

export default function ZoomableTreemap({width, height}) {
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
    var tool = d3.select("body").append("div").attr("class", "toolTip");
    
    var leaves = [];
    var sequence = [];


    function renderTreemap() {
            const svg = d3.select(svgRef.current).attr("width", width + 100)
                                                .attr("height", height + 100)
                                                //.style("margin-left", -margin.left + "px")
                                                //.style("margin-right", -margin.right + "px")
                                                .append("g")
                                                .attr("transform", "translate(100,100)")
                                                .style("shape-rendering", "crispEdges");

            var grandparent = svg.append("g")
                                .attr("class", "grandparent");


            grandparent.append("rect")
                        .attr("y", -margin.top)
                        .attr("width", width)
                        .attr("height", margin.top)
                        .attr("fill", '#bbbbbb');


            grandparent.append("text")
                        .attr("x", 6)
                        .attr("y", 6 - margin.top)
                        .attr("dy", "1em")
                        .style("font-size","13px");
                                        
            // create root node
            const root = d3.hierarchy(data)
                            .sum(function (d) {return detectJSONAttribute(d);})
                            .sort(function (a, b) {return b.height - a.height || detectJSONAttribute(b) - detectJSONAttribute(a)});

            function detectJSONAttribute(d){
                if(d.value != null) return d.value;
                else if(d.codeSizeMax != null) return d.codeSizeMax;
                        else if(d.methodsNumber != null) return d.methodsNumber;
            }

            findPathForColoring(root);

            // create treemap layout
            const treemapRoot = d3.treemap().size([width, height])(root);

            display(treemapRoot);

            function display(d) {
                
                // write text into grandparent
                // and activate click's handler
                grandparent.datum(d.parent)
                            .on("click", (event, d) =>  transition(d))
                            .select("text")
                            .text(name(d));

                // grandparent color
                grandparent.datum(d.parent)
                            .select("rect")
                            .attr("fill", "#bbbbbb");


                var g1 = svg.insert("g", ".grandparent")
                    .datum(d)
                    .attr("class", "depth")
                    .attr("id", d.children.length);


                var g = g1.selectAll("g")
                    .data(d.children)
                    .enter().
                    append("g");

                g.filter(function (d) {return d.children;})
                    .classed("children", true)
                    .on("click", (event, d) =>  transition(d));


                g.selectAll(".child").data(function (d) {return d.children || [d];})
                                        .enter()
                                        .append("rect")
                                        .attr("class", "child")
                                        .call(rect);
                

                g.append("rect")
                    .attr("class", "parent")
                    .call(rect)
                    .append("title")
                    .text(function (d){return d.data.name;});


                g.append("foreignObject")
                    .call(rect)
                    .attr("class", "foreignobj")
                    .append("xhtml:div")
                    .attr("dy", ".75em")
                    .html(function (d) { return '' + '<p class="title"> ' + d.data.name + '</p>' + '<p>' + formatNumber(detectJSONAttribute(d)) + '</p>'; })
                    .attr("class", "textdiv");

                    function transition(d) {
                        if (transitioning || !d) return;
                        transitioning = true;
                        var g2 = display(d),
                            t1 = g1.transition().duration(650),
                            t2 = g2.transition().duration(650);
                        x.domain([d.x0, d.x1]);
                        y.domain([d.y0, d.y1]);
                        svg.style("shape-rendering", null);
                        svg.selectAll(".depth").sort(function (a, b) {return a.depth - b.depth;});
                        g2.selectAll("text").style("fill-opacity", 0);
                        g2.selectAll("foreignObject div").style("display", "none");
                        t1.selectAll("text").call(text).style("fill-opacity", 0);
                        t2.selectAll("text").call(text).style("fill-opacity", 1);
                        t1.selectAll("rect").call(rect);
                        t2.selectAll("rect").call(rect);
                        t1.selectAll(".textdiv").style("display", "none");
                        t1.selectAll(".foreignobj").call(foreign);
                        t2.selectAll(".textdiv").style("display", "block");
                        t2.selectAll(".foreignobj").call(foreign);
                        t1.on("end.remove", function(){this.remove();transitioning = false;});
                    }

                return g;
            }

            function findPathForColoring(d){
                //console.log(d.leaves());
                d.leaves().forEach((elem) => {
                    if(parseInt(detectJSONAttribute(elem.data)) >= parseInt(localStorage.getItem("limitSize"))){
                        let name = generateParentName(elem) + "." + elem.data.name;
                        if(!sequence.includes(name)){
                            sequence.push(name);
                        }
                        while(name.indexOf(".") > 0){
                            name = name.substring(0, name.lastIndexOf("."));
                            if(!sequence.includes(name)){
                                sequence.push(name);
                            }
                        }
                        
                        
                    }
                })
                console.log(sequence);
            }

            function foreign(foreign) { /* added */
                foreign
                    .attr("x", function (d) {
                        return x(d.x0);
                    })
                    .attr("y", function (d) {
                        return y(d.y0);
                    })
                    .attr("width", function (d) {
                        return x(d.x1) - x(d.x0);
                    })
                    .attr("height", function (d) {
                        return y(d.y1) - y(d.y0);
                    });
            }

            function text(text) {
                text.attr("x", function (d) {
                    return x(d.x) + 6;
                })
                    .attr("y", function (d) {
                        return y(d.y) + 6;
                    });
            }
        
            function rect(rect) {
                if(localStorage.getItem("color") === "deep"){
                    rect
                    .attr("x", function (d) {
                        return x(d.x0);
                    })
                    .attr("y", function (d) {
                        return y(d.y0);
                    })
                    .attr("width", function (d) {
                        return x(d.x1) - x(d.x0);
                    })
                    .attr("height", function (d) {
                        return y(d.y1) - y(d.y0);
                    })
                    .attr("fill", function (d) {
                        return "#bbbbbb";
                    })
                    .attr("style", function (d) {
                        var point = countDeep(d)/5;
                        //if (sequence.includes(generateName(d))) return "opacity: " + point.toString();
                        if (sequence.includes(generateName(d))) return "background: rgba(255, 0, 0, " + point.toString() + " )";
                        else return "opacity: 1"
                    });
                }
                else{
                    rect
                    .attr("x", function (d) {
                        return x(d.x0);
                    })
                    .attr("y", function (d) {
                        return y(d.y0);
                    })
                    .attr("width", function (d) {
                        return x(d.x1) - x(d.x0);
                    })
                    .attr("height", function (d) {
                        return y(d.y1) - y(d.y0);
                    })
                    .attr("fill", function (d) {
                        return "#bbbbbb";
                    });
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

            function countDeep(d){
                var name = "";
                var sep = ".";
                d.ancestors().reverse().forEach(function(i){
                    name += i.data.name + sep;
                });
                var count = (name.match(/\./g) || []).length;
                return count -1;
            }
        

            function name(d) {
                return breadcrumbs(d) +
                    (d.parent
                    ? " -  Click zoom out"
                    : " - Click zoom in");
            }
        
            function breadcrumbs(d) {
                var res = "";
                var sep = " > ";
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
                <TextArea style={{ maxHeight:"750px"}}>
                    <TopLine>{handleDiagramType()}</TopLine>
                    <Heading lightText={false}>{localStorage.getItem("projectName")}</Heading>
                    <Subtitle darkText={true}>{localStorage.getItem("documentName")}</Subtitle>
                </TextArea>
        </DiagramWrap>
    </Wrapp>
  );
}