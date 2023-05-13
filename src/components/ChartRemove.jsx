import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../App.css";

const ChartRemove = ({ options, onRemove }) => {
  const handleRemoveClick = () => {
    if (typeof onRemove === "function") {
      onRemove();
    }
  };

  return (
    <div className="col-md-4">
      <div className="chart-container">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <button className="removeBtn" onClick={handleRemoveClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ChartRemove;

