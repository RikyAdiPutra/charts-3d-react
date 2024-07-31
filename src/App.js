import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Highcharts from "highcharts";
import Highchart3D from "highcharts/highcharts-3d";
import HighchartsReact from "highcharts-react-official";

Highchart3D(Highcharts);

const options = {
  chart: {
    type: "column",
    options3d: {
      enabled: true,
      alpha: 27,
      beta: 20,
      depth: 40,
    },
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [5, 7, 3],
    },
  ],
  xAxis: {
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    labels: {
      enabled: false,
    },
  },
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
