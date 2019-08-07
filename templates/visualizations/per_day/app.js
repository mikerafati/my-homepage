// data.sort(function(a,b){
//     return parseFloat(b.start_time_str) - parseFloat(a.start_time_str);
// });

// data = data.slice();

// data = data.reverse();
// var trace1 = {
//     x: data.map(row => row.start_time_str),
//     y: data.map(row => row["Device ID"]),
//     text: data.map(row => row["Device ID"]),
//     name: "scooter",
//     type: "liner",
//     orientation: "h"
//   };
// var data = [trace1];
// var layout = {
//     title: "scooter per day",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };
//   Plotly.newPlot("plot", data, layout);

// scatters
  var trace1 = {
    x: data.map(row => row.start_time_str),
    y: data.map(row => row["Device ID"]),
    mode: "markers",
    type: "scatter",
    name: "start_time_str",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  };
var data2 = [trace1];
var layout = {
    title: "scooters Usage per day",
    xaxis:{ title:"Date per day"},
    yaxis: {title:"Total scooters"}
};
Plotly.newPlot("plot1", data2, layout);
