import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import Add from "../Add/Add";
import Profile from "./profile";
const ProfileComponent = () => {
  const [addRide, setAddride] = useState(false);

  return (
    <div>
      {" "}
      <Navbar />
      <Container>
        <Row md={6} className="justify-content-center mt-2">
          <Button
            onClick={() => {
              setAddride(!addRide);
            }}
          >
            {addRide ? "View My Rides" : "Add New Ride"}
          </Button>
        </Row>
      </Container>
      {addRide ? <Add /> : <Profile isProfile={addRide} />}
    </div>
  );
};

export default ProfileComponent;
