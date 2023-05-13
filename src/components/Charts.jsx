import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ChartRemove from "./ChartRemove";
import '../App.css';


const Charts = () => {
  const [showCharts, setShowCharts] = useState({
    chart1: true,
    chart2: true,
    chart3: true,
  });

  const data1 = [
    [1672533600000, 10],
    [1672620000000, 8],
    [1672706400000, 24],
    [1672792800000, 58],
    [1672879200000, 30],
  ];

  const data2 = [
    [1672533600000, 12],
    [1672620000000, 47],
    [1672706400000, 29],
    [1672792800000, 3],
    [1672879200000, 14],
  ];

  const data3 = [
    [1672533600000, 25],
    [1672620000000, 20],
    [1672706400000, 15],
    [1672792800000, 10],
    [1672879200000, 5],
  ];

  const options1 = {
    title: {
      text: "Chart 1",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Line 1",
        data: data1,
      },
    ],
  };

  const options2 = {
    title: {
      text: "Chart 2",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Line 1",
        data: data3,
      },
    ],
  };

  const options3 = {
    title: {
      text: "Chart 3",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Line 1",
        data: data2,
      },
    ],
  };

    const numCharts = Object.values(showCharts).filter((value) => value).length;


  return (
      <div className="container">
          {/* {numCharts === 0 && <div className="noChartsSettings">No charts</div>} */}
          {numCharts > 0 && (
              <div className="row">
                  {showCharts.chart1 && (
                      <ChartRemove options={options1} onRemove={() => setShowCharts({ ...showCharts, chart1: false })} />
                  )}
                  {showCharts.chart2 && (
                      <ChartRemove options={options2} onRemove={() => setShowCharts({ ...showCharts, chart2: false })} />
                  )}
                  {showCharts.chart3 && (
                      <ChartRemove options={options3} onRemove={() => setShowCharts({ ...showCharts, chart3: false })} />
                  )}
              </div>
          )}
      </div>
  );
};

export default Charts;
