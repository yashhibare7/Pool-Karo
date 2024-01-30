import Navbar from "../../Navbar/Navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RideCard from './RideCard';
import search from "./search.module.css";
import SearchComponent from './SearchComponent';

const Search = () => {
  const [rides, setRides] = useState([]);


  useEffect(() => {
    const fetchAllRides = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/get-all-rides');
        setRides(response.data);
      } catch (error) {
        console.error('Error fetching all rides:', error);
      }
    };

    fetchAllRides();
  }, []);

  return (
    <div>
      <Navbar />

      <div className={search.allrides}>
      <h1>All Rides</h1>
      <SearchComponent rides={rides} />
      {rides.map((ride) => (
        <RideCard key={ride._id} ride={ride} />
      ))}
    </div>

    </div>
  );
};

export default Search;
