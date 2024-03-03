import Navbar from "../../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RideCard from "./RideCard";
import { Row } from "react-bootstrap";
import search from "./search.module.css";
import SearchComponent from "./SearchComponent";
import SearchCardRide from "../../Utils/SearchCardRide";

const Search = () => {
  const [rides, setRides] = useState([]);
  

  useEffect(() => {
    const fetchAllRides = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/get-all-rides"
        );
        setRides(response.data);
      } catch (error) {
        console.error("Error fetching all rides:", error);
      }
    };

    fetchAllRides();
  }, []);

  return (
    <div>
      <Navbar />

      <div className={search.allrides}>
        <SearchComponent rides={rides} />
        <Row xs={1} md={2} lg={3} className="justify-content-center">
        {rides.map((ride) => (
          <SearchCardRide key={ride._id} ride={ride} />
        ))}
        </Row>
      </div>
    </div>
  );
};

export default Search;
