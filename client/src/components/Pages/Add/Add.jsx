import React, { useState } from "react";
import axios from "axios";
import add from './adds.module.css';
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
        <form>
          <Row md={12} className="mb-2">
            <Col md={6}>
              {" "}
              <label>
                Source:
                <input
                  type="text"
                  name="source"
                  value={formData.source} 
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
            <Col md={6}>
              <label>
                Destination:
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </Row>
          <Row md={12} className="mb-2">
            <Col>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
            <Col>
              {" "}
              <label>
                Time:
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </Row>
          <Row md={12} className="mb-2">
            <Col>
              {" "}
              <label>
                Vehicle Name:
                <input
                  type="text"
                  name="vehicleName"
                  value={formData.vehicleName}
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
            <Col>
              {" "}
              <label>
                Owner Name:
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
          </Row>
          <Row md={12} className="mb-2">
            <Col>
              {" "}
              <label>
                Phone Number:
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
            </Col>
            <Col>
              {" "}
              <label>
                Price Range:
                <input
                  type="text"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />
            </Col>
          </Row>
          <Row md={12} className="mb-2">
            <Button type="submit">Submit</Button>
          </Row>
        </form>
      </Container>
    </Container>
  );
};

export default Add;
