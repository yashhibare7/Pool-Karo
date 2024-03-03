import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import add from "./adds.module.css";
import CardRide from "../../Utils/CardRide";

import RideCard from "../Search/RideCard";

const Profile = (isProfile) => {
  const userId = localStorage.getItem("userId");
  const [rides, setRides] = useState([]);

  useEffect(async () => {
    try {
      const query = await axios.get(
        `http://localhost:8080/api/get-user-rides/${userId}`
      );
      setRides(query.data);
    } catch (error) {
      console.error(error);
    }
  }, [isProfile]);

  const handleDelete = (rideId) => {console.log(rideId)};

  return (
    <div>
      <div className={add.app}>
        <h1>My Rides </h1>
      </div>
      <Row xs={1} md={2} lg={3} className="justify-content-center">
      {rides && rides.map((ride) => <CardRide key={ride._id} ride={ride} handleDelete={handleDelete}/>)}
      </Row>
    </div>
  );
};

export default Profile;
