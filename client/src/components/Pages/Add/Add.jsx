import React, { useState } from "react";
import axios from "axios";
import add from "./adds.module.css";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";

const Add = () => {
  const userId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
    vehicleName: "",
    ownerName: "",
    priceRange: "",
    userId: userId,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/add-ride", formData);
      alert("Ride added successfully!");
      // Optionally, you can reset the form after submission
      setFormData({
        source: "",
        destination: "",
        date: "",
        time: "",
        vehicleName: "",
        ownerName: "",
        phoneNumber: "",
        priceRange: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding ride");
    }
  };
  return (
    <Container>
      {" "}
      <div className={add.app}>
        {" "}
        <h1>PoolKaro - Share Your Ride</h1>
      </div>
      <h1></h1>
      <Container>
        <Form>
          <Row md={12} className="justify-content-center">
            <Col md={3}>
              {" "}
              <Form.Group>
                <Form.Label> Source:</Form.Label>
                <Form.Control
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label> Destination:</Form.Label>
                <Form.Control
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row md={12} className="justify-content-center">
            <Col md={3}>
              <Form.Group>
                <Form.Label> Date:</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              {" "}
              <Form.Group>
                <Form.Label>Time:</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row md={12} className="justify-content-center">
            <Col md={3}>
              {" "}
              <Form.Group>
                <Form.Label> Vehicle Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="vehicleName"
                  value={formData.vehicleName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              {" "}
              <Form.Group>
                <Form.Label> Owner Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row md={12} className="justify-content-center">
            <Col md={3}>
              {" "}
              <Form.Group>
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              {" "}
              <Form.Group>
                <Form.Label>Price Range:</Form.Label>
                <Form.Control
                  type="text"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row md={6} className="justify-content-center mt-3">
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};

export default Add;
