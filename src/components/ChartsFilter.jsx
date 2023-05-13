import React, { useState } from "react";
import moment from "moment";
import '../App.css';

const ChartsFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFilterClick = () => {
    if (startDate && endDate) {
      onFilter(moment(startDate), moment(endDate).endOf("month"));
    }
  };

  return (
    <div className="filterDate">

      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          className="filterInput"
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          className="filterInput"
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <button className="filterBtn" onClick={handleFilterClick}>Filter</button>
    </div>
  );
};

export default ChartsFilter;
