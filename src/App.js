import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Highcharts from "highcharts";
import Highchart3D from "highcharts/highcharts-3d";
import HighchartsReact from "highcharts-react-official";

Highchart3D(Highcharts);

const options = {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  subtitle: {
    text:
      "Source: " +
      '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
      'target="_blank">Counterpoint Research</a>',
    align: "left",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 35,
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
    },
  },
  series: [
    {
      type: "pie",
      name: "Share",
      data: [
        ["Product 1", 23],
        ["Product 2", 18],
        {
          name: "Product 3",
          y: 12,
          sliced: true,
          selected: true,
        },
        ["Product 4*", 9],
        ["Product 5", 8],
        ["Product 6", 30],
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>3D Charts</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default App;
