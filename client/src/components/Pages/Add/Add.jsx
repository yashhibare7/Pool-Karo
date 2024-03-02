import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import add from './adds.module.css';


const Add = () => {
  const userId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    date: '',
    time: '',
    vehicleName: '',
    ownerName: '',
    priceRange: '',
    userId: userId,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/add-ride', formData);
      alert('Ride added successfully!');
      // Optionally, you can reset the form after submission
      setFormData({
        source: '',
        destination: '',
        date: '',
        time: '',
        vehicleName: '',
        ownerName: '',
        phoneNumber: '',
        priceRange: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error adding ride');
    }
  };
  return (
    <div>


        <div className={add.app}>
          
        <h1>PoolKaro - Share Your Ride</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Source:
          <input type="text" name="source" value={formData.source} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Destination:
          <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Vehicle Name:
          <input type="text" name="vehicleName" value={formData.vehicleName} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Owner Name:
          <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Phone Number:
          <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required/>
        </label>

        <label>
          Price Range:
          <input type="text" name="priceRange" value={formData.priceRange} onChange={handleChange} required />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

        </div>
    </div>
  );
};

export default Add;
