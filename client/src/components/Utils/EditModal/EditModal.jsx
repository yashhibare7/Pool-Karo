import axios from "axios";
import React, { useState, useEffect} from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, setShow, rideId, onUpdate }) => {
  const [newData, setNewData] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
    vehicleName: "",
    ownerName: "",
    phoneNumber: "",
    priceRange: "",
  });

  /*const handleClose = () => {
    setShow(false);
    setNewData({
        id: rideId,
        source: "",
        destination: "",
        date: "",
        time: "",
        vehicleName: "",
        ownerName: "",
        priceRange: "",
    });
  };*/

  useEffect(() => {
    if (show) {
      axios.get(`http://localhost:8080/api/get-ride/${rideId}`)
        .then(res => {
          setNewData(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [show, rideId]);

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/edit-ride/${rideId}`, newData)
      .then(res => {
        onUpdate(rideId, newData);
        setShow(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <Modal show={show} onClick={() => setShow(false)} centered>
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
              value={newData.source}
              onChange={e => setNewData({ ...newData, source: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formDestination">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Destination"
              value={newData.destination}
              onChange={e => setNewData({ ...newData, destination: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              value={newData.date}
              onChange={e => setNewData({ ...newData, date: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter Time"
              value={newData.time}
              onChange={e => setNewData({ ...newData, time: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formVehicleName">
            <Form.Label>Vehicle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vehicle name"
              value={newData.vehicleName}
              onChange={e => setNewData({ ...newData, vehicleName: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formOwnerName">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter owner name"
              value={newData.ownerName}
              onChange={e => setNewData({ ...newData, ownerName: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={newData.phoneNumber}
              onChange={e => setNewData({ ...newData, phoneNumber: e.target.value })}
            /></Form.Group>
          <Form.Group controlId="formPriceRange">
            <Form.Label>Price Range</Form.Label>
            <Form.Control
              type="int"
              placeholder="Enter Price Range"
              name="Price Range"
              value={newData.priceRange}
              onChange={e => setNewData({ ...newData, priceRange: e.target.value })}
            />
          </Form.Group>
          {/* Add other form fields as needed */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
