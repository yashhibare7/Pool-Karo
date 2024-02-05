// src/RideCard.js
import React from 'react';
import ridecard from './ridecard.module.css'

const RideCard = ({ ride,onClose }) => {
  return (
    <div className={ridecard.ride_card}>
      <div className={ridecard.ride_details}>
        <p><strong>Source:</strong> {ride.source}</p>
        <p><strong>Destination:</strong> {ride.destination}</p>
        <p><strong>Date:</strong> {ride.date}</p>
        <p><strong>Time:</strong> {ride.time}</p>
        <p><strong>Vehicle:</strong> {ride.vehicleName}</p>
        <p><strong>Owner:</strong> {ride.ownerName}</p>
        <p><strong>PhoneNumber:</strong>{ride.phoneNumber}</p>
        <p><strong>Price Range:</strong> {ride.priceRange}</p>
      </div>
      <button className={ridecard.closeButton} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default RideCard;

