import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import add from "./adds.module.css";
import Add from "../Add/Add"
import RideCard from "../Search/RideCard";

const Profile = () => {
  const userId = localStorage.getItem("userId");
  const [rides, setRides] = useState();

  useEffect(async () => {
    try {
      const query = await axios.get(
        `http://localhost:8080/api/get-user-rides/${userId}`
      );
      setRides(query.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleCloseCard = (rideId) => {};

  return (
    <div>

      <Navbar />

        <Add/>
      <div className={add.app}>
        <h1>My Rides </h1>
      </div>

      {rides &&
        rides.map((ride) => (
          <RideCard
            key={ride._id}
            ride={ride}
            onClose={() => handleCloseCard(ride._id)}
          />
        ))}
    </div>
  );
};

export default Profile;
