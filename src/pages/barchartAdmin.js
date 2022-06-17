import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function BarChartAdmin({ width, height, data, margin, range }){
    const ref = useRef();

    useEffect(() => {
        // const svg = d3.select(ref.current)
        //     .attr("width", width)
        //     .attr("height", height)
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
      var tool = d3.select("body").append("div").attr("class", "toolTip");
      const svg = d3.select(ref.current).attr("width", width)
      .attr("height", height + 100);
      const chart = svg.append('g')
                      .attr('transform', `translate(${margin}, ${margin})`);

      const yScale = d3.scaleLinear()
                      .range([height, 0])
                      .domain([0, d3.max(range)]);

      chart.append('g')
                      .call(d3.axisLeft(yScale));

    const xScale = d3.scaleBand()
                  .range([0, width])
                  .domain(data.map((d) => d.name))
                  .padding(0.7)

    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d) => xScale(d.name) - 15)
            .attr('y', (d) => yScale(d.value) - 1)
            .attr('height', (d) => height - yScale(d.value))
            .attr('width', width/range.length - 75)
            .attr('fill',(d) => identifyColor(d) )
            .on("mousemove", function (event, d) {
              tool.style("left", event.pageX + 10 + "px")
              tool.style("top", event.pageY - 20 + "px")
              tool.style("display", "inline-block");
              tool.html(d.children ? null : "<b>" + d.name  + "<br>" +  d.value + "</b>");
          }).on("mouseout", function (d) {
              tool.style("display", "none");
          });
       
    }

    function identifyColor(d){
      if(d.name === "Treemap Static"){
        return "#6666ff";
      } 
      else if(d.name === "Treemap Zoomable"){
        return "#ff3300";
      }
      else if(d.name === "Bubble Chart"){
        return "#00ffff";
      }
      else if(d.name === "Bar Chart"){
        return "#33cc33";
      }
      else if(d.name === "SoftwareDeveloper"){
        return "#4040bf";
      }
      else if(d.name === "Analist"){
        return "#996633";
      }
      else if(d.name === "Profesor"){
        return "#993366";
      }
      else if(d.name === "Student"){
        return "#009999";
      }
      else if(d.name === "Elev"){
        return "#e6e600";
      }
      else if(d.name === "Altele"){
        return "#ff5500";
      }
  }


    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default BarChartAdmin

// const draw = () => {
        
//   const svg = d3.select(ref.current);
//   var selection = svg.selectAll("rect").data(data);
//   var yScale = d3.scaleLinear()
//                       .domain([0, d3.max(range)])
//                       .range([0, height-100]);

//  selection.append('g')
//   .call(d3.axisLeft(yScale));

//   selection
//       .transition().duration(300)
//           .attr("height", (d) => yScale(d.value))
//           .attr("y", (d) => height - yScale(d.value))

//   selection
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * width / range.length)
//       .attr("y", (d) => height)
//       .attr("width", width/range.length - 5)
//       .attr("height", 0)
//       .attr("fill", (d) => identifyColor(d))
//       .transition().duration(300)
//           .attr("height", (d) => yScale(d.value))
//           .attr("y", (d) => height - yScale(d.value))
  
//   selection
//       .exit()
//       .transition().duration(300)
//           .attr("y", (d) => height)
//           .attr("height", 0)
//       .remove()
// }