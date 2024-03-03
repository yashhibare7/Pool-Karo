import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, setShow, rideId, onUpdate }) => {
  const [newData, setNewData] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
    vehicleName: "",
    ownerName: "",
    priceRange: "",
  });

  const handleClose = () => {
    setShow(false);
    // Clear the form data when the modal is closed
    setNewData({
        source: "",
        destination: "",
        date: "",
        time: "",
        vehicleName: "",
        ownerName: "",
        priceRange: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Call the onUpdate function passed from CardRide
    onUpdate(rideId, newData);
    // Close the modal
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Ride</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Add form fields for each editable field */}
          <Form.Group controlId="formSource">
            <Form.Label>Source</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Source"
              name="Source"
              value={newData.source}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDestination">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Destination"
              name="Destination"
              value={newData.destination}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              name="Date"
              value={newData.date}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter Time"
              name="Time"
              value={newData.time}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formVehicleName">
            <Form.Label>Vehicle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vehicle name"
              name="vehicleName"
              value={newData.vehicleName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formOwnerName">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter owner name"
              name="ownerName"
              value={newData.ownerName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formPriceRange">
            <Form.Label>Price Range</Form.Label>
            <Form.Control
              type="int"
              placeholder="Enter Price Range"
              name="Price Range"
              value={newData.priceRange}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Add other form fields as needed */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
