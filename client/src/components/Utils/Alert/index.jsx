import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./Alert.css";

const QuantityAlertModal = ({ show, handleClose, errorMessage }) => {
 
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{color:"red"}}>Quantity Validation Alert</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ul>
          {errorMessage.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuantityAlertModal;