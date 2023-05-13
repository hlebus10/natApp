
import React, { useState } from "react";
import moment from "moment";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ChartsFilter from "./ChartsFilter";
import '../App.css';


const GenerateCharts = () => {
  const [charts, setCharts] = useState([]);
  const [filteredCharts, setFilteredCharts] = useState([]);
  const [showFilter, setShowFilter] = useState(false); 

  const generateCharts = () => {
    setShowFilter(true); 
    const startDate = moment("2023-01-01");
    const endDate = moment("2023-12-31");
    const newCharts = [];
    for (let i = 0; i < 5; i++) {
      const data = [];
      const chartStartDate = getRandomDate(startDate, endDate);
      for (let j = 0; j < 100; j++) {
        const x = chartStartDate.clone().add(j, "days").valueOf();
        const y = Math.random() * 100;
        data.push([x, y]);
      }
      const chart = {
        name: `Chart ${i + 1}`,
        data,
      };
      newCharts.push(chart);
    }
    setCharts(newCharts);
    setFilteredCharts(newCharts);
  };

  const handleFilter = (startDate, endDate) => {
    const filtered = charts.filter((chart) => {
      const chartStartMonth = moment(chart.data[0][0]).startOf("month");
      const chartEndMonth = moment(chart.data[chart.data.length - 1][0]).endOf("month");
      if (startDate < chartStartMonth || endDate > chartEndMonth) {
        return false;
      }
      const startIndex = chart.data.findIndex((item) => moment(item[0]).startOf("month") >= startDate);
      const endIndex = chart.data.findIndex((item) => moment(item[0]).endOf("month") >= endDate);
      const newData = chart.data.slice(startIndex, endIndex + 1);
      chart.data = newData;
      return true;
    });
    setFilteredCharts(filtered);
  };

  const options = filteredCharts.map((chart) => ({
    title: {
      text: chart.name,
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Value",
      },
      labels: {
        format: "{value:.0f}", // форматирование значения оси Y до целых чисел
      },
    },
    series: [
      {
        name: chart.name,
        data: chart.data.map(([x, y]) => [x, Math.round(y)]),
      },
    ],
  }));
  

  return (
    <>
      <button onClick={generateCharts} className="generateChartsBtn">
        Generate Charts
      </button>
      {showFilter && <ChartsFilter onFilter={handleFilter} />}
      {filteredCharts.length > 0 ? (
        filteredCharts.map((chart, index) => (
          <div key={index}>
            <HighchartsReact highcharts={Highcharts} options={options[index]} />
          </div>
        ))
      ) : (
        <p className="noChartsMessage">There are no charts.</p>
      )}
    </>
  );
};

const getRandomDate = (startDate, endDate) => {
    const start = startDate.valueOf();
    const end = endDate.valueOf();
    const randomDate = start + Math.random() * (end - start);
    return moment(randomDate);
  };

export default GenerateCharts;