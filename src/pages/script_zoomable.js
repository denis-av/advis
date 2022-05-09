import * as d3 from 'd3';


var el_id = 'chart';
const data = JSON.parse(localStorage.getItem('data'));
console.log(data);
var margin = {top: 30, right: 0, bottom: 20, left: 0},
    width = 1200,
    height = 800 - margin.top - margin.bottom,
    formatNumber = d3.format(","),
    transitioning;
// sets x and y scale to determine size of visible boxes
var x = d3.scaleLinear()
    .domain([0, width])
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([0, height])
    .range([0, height]);
var treemap = d3.treemap()
        .size([width, height])
        .paddingInner(0)
        .round(false);
var svg = d3.select('#'+el_id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.bottom + margin.top)
    .style("margin-left", -margin.left + "px")
    .style("margin.right", -margin.right + "px")
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
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
        .attr("dy", ".75em");

        const root = d3.hierarchy(JSON.parse(localStorage.getItem('data')))
        .sum(function (d) {return d.value;})
        .sort(function (a, b) {return b.height - a.height || b.value - a.value});
        

        // create treemap layout
        const treemapRoot = d3.treemap().size([width, height])(root);
    display(treemapRoot);
    function display(d) {
        // write text into grandparent
        // and activate click's handler
        grandparent
            .datum(d.parent)
            .on("click", transition)
            .select("text")
            .text(name(d));
        // grandparent color
        grandparent
            .datum(d.parent)
            .select("rect")
            .attr("fill", "#bbbbbb");
        var g1 = svg.insert("g", ".grandparent")
            .datum(d)
            .attr("class", "depth");
        var g = g1.selectAll("g")
            .data(d.children)
            .enter().
            append("g");
        // add class and click handler to all g's with children
        g.filter(function (d) {
            return d.children;
        })
            .classed("children", true)
            .on("click", transition);
        g.selectAll(".child")
        .data(function (d) {
            return d.children || [d];
        })
        .enter()
        .append("rect")
        .attr("class", "child")
        .call(rect);
        // add title to parents
        g.append("rect")
            .attr("class", "parent")
            .call(rect)
            .append("title")
            .text(function (d){
                return d.data.name;
            });
        /* Adding a foreign object instead of a text object, allows for text wrapping */
        g.append("foreignObject")
            .call(rect)
            .attr("class", "foreignobj")
            .append("xhtml:div")
            .attr("dy", ".75em")
            .html(function (d) {
                return '' +
                    '<p class="title"> ' + d.data.name + '</p>' +
                    '<p>' + formatNumber(d.value) + '</p>'
                ;
            })
            .attr("class", "textdiv"); //textdiv class allows us to style the text easily with CSS
        function transition(d) {
            console.log(d);
            if (transitioning || !d) return;
            transitioning = true;
            var g2 = display(d),
                t1 = g1.transition().duration(650),
                t2 = g2.transition().duration(650);
            // Update the domain only after entering new elements.
            x.domain([d.x0, d.x1]);
            y.domain([d.y0, d.y1]);
            // Enable anti-aliasing during the transition.
            svg.style("shape-rendering", null);
            // Draw child nodes on top of parent nodes.
            svg.selectAll(".depth").sort(function (a, b) {
                return a.depth - b.depth;
            });
            // Fade-in entering text.
            g2.selectAll("text").style("fill-opacity", 0);
            g2.selectAll("foreignObject div").style("display", "none");
            /*added*/
            // Transition to the new view.
            t1.selectAll("text").call(text).style("fill-opacity", 0);
            t2.selectAll("text").call(text).style("fill-opacity", 1);
            t1.selectAll("rect").call(rect);
            t2.selectAll("rect").call(rect);
            /* Foreign object */
            t1.selectAll(".textdiv").style("display", "none");
            /* added */
            t1.selectAll(".foreignobj").call(foreign);
            /* added */
            t2.selectAll(".textdiv").style("display", "block");
            /* added */
            t2.selectAll(".foreignobj").call(foreign);
            /* added */
            // Remove the old node when the transition is finished.
            t1.on("end.remove", function(){
                this.remove();
                transitioning = false;
            });
        }
        return g;
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
            // .attr("style", function (d) {
            //     var point = countDeep(d)/5;
            //     //if (seq.includes(generateName(d))) return "opacity: " + point.toString();
            //     if (seq.includes(generateName(d))) return "background: rgba(255, 0, 0, 0.5 )";
            //     else return "opacity: 1"
            // });
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

    function name(d) {
        return breadcrumbs(d) +
            (d.parent
            ? " -  Click to zoom out"
            : " - Click inside square to zoom in");
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