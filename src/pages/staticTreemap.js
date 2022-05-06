import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Treemap({width, height }) {
  const data = JSON.parse(localStorage.getItem('data'));
  console.log(data);
  const svgRef = useRef(null);
  const legendRef = useRef(null);
  var margin = {top: 30, right:0, bottom: 20, left:20},
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
        const svg = d3.select(svgRef.current).attr("width", width + margin.left)
                                            .attr("height", height + margin.top + margin.bottom)
                                            // .style("margin-left", -margin.left + "px")
                                            // .style("margin-right", -margin.right + "px")
                                            .append("g")
                                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                            //.style("shape-rendering", "crispEdges");

        var pathsWithColor = [];
        var objPathColor = {};
        var paths = [];
        var tool = d3.select("body").append("div").attr("class", "toolTip");
        var format = d3.format(",d"); 

        // create root node
        const root = d3
        .hierarchy(data)
        .sum(function (d) {return d.codeSizeMax;})
        .sort(function (a, b) {return b.height - a.height || b.codeSizeMax - a.codeSizeMax});
        
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
                tool.html(d.children ? null : "<b>" + generateParentName(d) + "<br>" + d.data.name  + "<br>" +  d.data.value+ ' lines' + "</b>");
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
      .data(function(d) { return d.data.name.split(/\n/g); })
      .join("tspan")
        .attr("x", 3)
        .attr("y", (d, i, D) => `${(i === D.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
        .attr('font-size', `${fontSize}px`)
        .attr("font-weight","bold")
        .text(d => d);   
  
        // add text to rects
        // nodes.append('text')
        //         .text((d) => `${d.data.name} ${d.data.value}`)
        //         .attr('width', (d) => d.x1 - d.x0)
        //         .attr('height', (d) => d.y1 - d.y0)
        //         .attr('font-size', `${fontSize}px`)
        //         .attr('x', 3)
        //         .attr('y', fontSize)
        //         .attr("overflow","hidden")
        //         .call(wrapText);



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

  return (
    <div className="treemap">
      <svg ref={svgRef} />
      <svg ref={legendRef} />
    </div>
  );
}