var mapName = "chart";
var margin = {top: 30, right:0, bottom: 20, left:20},
             width = 1000,
             height = 600 - margin.top - margin.bottom,
             formatNumber = d3.format(","),
             transitioning;

var x = d3.scaleLinear().domain([0,width]).range([0,width]);
var y = d3.scaleLinear().domain([0, height]).range([0, height]);
var treemap = d3.treemap().size([width, height]).paddingInner(0).round(false);
var leaves = [];

const fontSize = 12;
var svg = d3.select("#" + mapName).append("svg")
                                  .attr("width", width + margin.left)
                                  .attr("height", height + margin.top + margin.bottom)
                                  .style("margin-left", -margin.left + "px")
                                  .style("margin-right", -margin.right + "px")
                                  .append("g")
                                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                                  .style("shape-rendering", "crispEdges");

var pathsWithColor = [];
var paths = [];
var tool = d3.select("body").append("div").attr("class", "toolTip");

d3.json("./data3.json", function(data) {
    var root = d3.hierarchy(data);
    console.log(root);
    treemap(root
        .sum(function (d) {
            return d.value;
        })
        .sort(function (a, b) {
            return b.height - a.height || b.value - a.value
        })
    );
    generateColorForEachPath(root);
    display(root);
    function display(d){
        var nodes = svg.selectAll('g')
            .data(d.leaves())
            .enter()
            .append('g')
            .attr('transform', (movie) => {
              return 'translate(' + movie['x0'] + ', ' + movie['y0'] + ')'
            })
            .attr("overflow","hidden");
        
        nodes.append('rect')
            .attr('width', (d) => d.x1 - d.x0)
            .attr('height', (d) => d.y1 - d.y0)
            .attr('fill', (d) => identifyColor(d))
            .attr("overflow","hidden")
            .on("mousemove", function (d) {
                tool.style("left", d3.event.pageX + 10 + "px")
                tool.style("top", d3.event.pageY - 20 + "px")
                tool.style("display", "inline-block");
                tool.html(d.children ? null : "<b>" + generateParentName(d) + "<br>" + d.data.name  + "<br>" +  d.data.value+ ' lines' + "</b>");
            }).on("mouseout", function (d) {
                tool.style("display", "none");
            });

        nodes.append('text')
            .text((d) => `${d.data.name} ${d.data.value}`)
            .attr('data-width', (d) => d.x1 - d.x0)
            .attr('font-size', `${fontSize}px`)
            .attr('x', 3)
            .attr('y', fontSize)
            .attr("overflow","hidden")
            .call(wrapText);

        return nodes;
    }
});

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
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
        console.log(pathName + " ----- " + elem.path);
        if(pathName === elem.path) {
            color = elem.color;
        }
    });
    console.log(color);
    return color;
}

function wrapText(selection) {
    selection.each(function () {
      const node = d3.select(this);
      const rectWidth = + node.attr('data-width');
      let word;
      const words = node.text().split(' ').reverse();
      let line = [];
      let lineNumber = 0;
      const x = node.attr('x');
      const y = node.attr('y');
      let tspan = node.text('').append('tspan').attr('x', x).attr('y', y).attr("font-weight","bold").attr("overflow","auto");
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
          .attr('dy', `${lineNumber * fontSize}px`)
          .text(text);
      }
    });
  }
