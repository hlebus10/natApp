import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";    
    
    
    const AddChartButton = ({ onAddChart }) => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("line");
    const [color, setColor] = useState("#7cb5ec");
  
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleTypeChange = (e) => setType(e.target.value);
    const handleColorChange = (e) => setColor(e.target.value);
  
    const handleAddChart = () => {
      const newChartData = {
        title,
        type,
        color,
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
        categories: Array.from({ length: 10 }, (_, i) => moment().subtract(i, "days").format("MMM DD")),
      };
      onAddChart(newChartData);
      setShowModal(false);
    };
  
    return (
      <>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Chart
        </Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Chart</Modal.Title>
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
            <Button variant="primary" onClick={handleAddChart}>
              Add Chart
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default AddChartButton;