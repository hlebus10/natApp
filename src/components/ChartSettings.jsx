import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";

const getRandomChartData = () => {
  const seriesData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  const categories = Array.from({ length: 10 }, (_, i) => moment().subtract(i, "days").format("MMM DD"));
  return {
    title: "Chart",
    type: "line",
    color: "#7cb5ec",
    data: seriesData,
    categories,
  };
};

const ChartSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("line");
  const [color, setColor] = useState("#7cb5ec");
  const [chartData1, setChartData1] = useState(getRandomChartData());
  const [chartData2, setChartData2] = useState(getRandomChartData());
  const [chartData3, setChartData3] = useState(getRandomChartData());

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);

  const handleEditChart1 = () => setShowModal(true);
  const handleEditChart2 = () => setShowModal(true);
  const handleEditChart3 = () => setShowModal(true);

  const handleAddChart = (chartData, setChartData) => {
    const newChartData = {
      ...chartData,
      title,
      type,
      color,
    };
    setChartData(newChartData);
    setShowModal(false);
  };
  

  return (
	<>
	  {/* <Button variant="primary" onClick={() => {setChartData1(getRandomChartData()); setChartData2(getRandomChartData()); setChartData3(getRandomChartData())}}>
		  Show Random Charts
		</Button> */}
	  <div className="row mt-4">
		<div className="col-md-4">
		  <HighchartsReact
			highcharts={Highcharts}
			options={{
			  title: { text: chartData1.title },
			  xAxis: { type: "datetime" },
			  series: [{ data: chartData1.data, type: chartData1.type, color: chartData1.color }],
			}}
		  />
		  <Button variant="primary" className="mt-3" onClick={handleEditChart1}>
			Edit Chart
		  </Button>
		</div>
		<div className="col-md-4">
		  <HighchartsReact
			highcharts={Highcharts}
			options={{
			  title: { text: chartData2.title },
			  xAxis: { type: "datetime" },
			  series: [{ data: chartData2.data, type: chartData2.type, color: chartData2.color }],
			}}
		  />
		  <Button variant="primary" className="mt-3" onClick={handleEditChart2}>
			Edit Chart
		  </Button>
		</div>
		<div className="col-md-4">
		  <HighchartsReact
			highcharts={Highcharts}
			options={{
			  title: { text: chartData3.title },
			  xAxis: { type: "datetime" },
			  series: [{ data: chartData3.data, type: chartData3.type, color: chartData3.color }],
			}}
		  />
		  <Button variant="primary" className="mt-3" onClick={handleEditChart3}>
			Edit Chart
		  </Button>
		</div>
	  </div>
	  <Modal show={showModal} onHide={() => setShowModal(false)}>
		<Modal.Header closeButton>
		  <Modal.Title>Edit Chart</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		  <Form>
			<Form.Group>
			  <Form.Label>Title</Form.Label>
			  <Form.Control type="text" value={title} onChange={handleTitleChange} />
			</Form.Group>
			<Form.Group>
			  <Form.Label>Type</Form.Label>
			  <Form.Control as="select" value={type} onChange={handleTypeChange}>
				<option value="line">Line Chart</option>
				<option value="spline">Spline Chart</option>
				<option value="area">Area Chart</option>
				<option value="column">Column Chart</option>
			  </Form.Control>
			</Form.Group>
			<Form.Group>
			  <Form.Label>Color</Form.Label>
			  <Form.Control type="color" value={color} onChange={handleColorChange} />
			</Form.Group>
		  </Form>
		</Modal.Body>
		<Modal.Footer>
		  <Button variant="secondary" onClick={() => setShowModal(false)}>
			Close
		  </Button>
		  <Button variant="primary" onClick={() => handleAddChart(chartData1, setChartData1)}>
  				Save Changes
		  </Button>
		  <Button variant="primary" onClick={() => handleAddChart(chartData2, setChartData2)}>
  				Save Changes
		  </Button>
		  <Button variant="primary" onClick={() => handleAddChart(chartData3, setChartData3)}>
  				Save Changes
		  </Button>

		</Modal.Footer>
	  </Modal>
	</>
  );
};

export default ChartSettings;