// src/SearchComponent.js
import React, { useState } from "react";
import RideCard from "./RideCard";
import SearchCardRide from "../../Utils/SearchCardRide";
import searchcom from "./searchcomponent.module.css";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";

const SearchComponent = ({ rides }) => {
  const [searchSource, setSearchSource] = useState("");
  const [searchDestination, setSearchDestination] = useState("");
  const [searchDate, setSearchDate] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filtered = rides.filter(
      (ride) =>
        ride.source.toLowerCase().includes(searchSource.toLowerCase()) &&
        ride.destination
          .toLowerCase()
          .includes(searchDestination.toLowerCase()) &&
        ride.date.includes(searchDate)
    );
    setSearchResults(filtered);
  };

  const handleCloseCard = (rideId) => {
    setSearchResults((prevResults) =>
      prevResults.filter((ride) => ride._id !== rideId)
    );
  };

  return (
    <div>
      <div className={searchcom.app}>
        <h2>Search Rides</h2>
      </div>
      <div>
        <Container>
          <Form>
            <Row md={12} className="justify-content-center">
              <Col md={3}>
                {" "}
                <Form.Group>
                  <Form.Label> Source:</Form.Label>
                  <Form.Control
                    type="text"
                    name="source"
                    value={searchSource}
                    onChange={(e) => setSearchSource(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label> Destination:</Form.Label>
                  <Form.Control
                    type="text"
                    name="destination"
                    value={searchDestination}
                    onChange={(e) => setSearchDestination(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label> Date:</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row md={6} className="justify-content-center mt-3">
              <Button onClick={handleSearch}>
                Search
              </Button>
            </Row>
          </Form>
        </Container>
      </div>
      {/*<div>
        <label>
          Source:
          <input
            type="text"
            value={searchSource}
            onChange={(e) => setSearchSource(e.target.value)}
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            value={searchDestination}
            onChange={(e) => setSearchDestination(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </label>
        <button className={searchcom.search_button} onClick={handleSearch}>
          Search
        </button>
  </div>*/}
      <div>
        <Row xs={1} md={2} lg={3} className="justify-content-center">
        {searchResults.map((ride) => (
          <RideCard
            key={ride._id}
            ride={ride}
            onClose={() => handleCloseCard(ride._id)}
          />
        ))}
        </Row>
      </div>
    </div>
  );
};

export default SearchComponent;
