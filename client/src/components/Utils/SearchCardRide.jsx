import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCarSide, FaPhoneAlt, FaRupeeSign, FaEdit } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoMdTime, IoIosPerson } from "react-icons/io";
import moment from "moment";

const SearchCardRide = (ride, { handleDelete }) => {
  console.log(ride);
  const TripTitle = (ride) => {
    return (
      <span>
        {ride?.ride?.source} <FaLongArrowAltRight /> {ride?.ride?.destination}
      </span>
    );
  };

  const journeyDate = (ride) => {
    const date = moment(ride?.ride?.date).format("MMMM Do YYYY");

    return <>{date}</>;
  };

  return (
    <Col sm={4} className="mb-3">
      <div className="mx-4">
        <Card style={{ fontWeight: "bold" }} className="mx-auto mt-5">
          <Card.Header style={{ backgroundColor: "#00B9F1" }}>
            {" "}
            <FaLocationDot /> {TripTitle(ride)}
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={2} className="text-center">
                <IoIosPerson />
              </Col>
              <Col xs={10}>
                <span>{ride?.ride?.ownerName}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-center">
                <FaCarSide />
              </Col>
              <Col xs={10}>
                <span>{ride?.ride?.vehicleName}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-center">
                <FaPhoneAlt />
              </Col>
              <Col xs={10}>
                <span>{ride?.ride?.phoneNumber}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-center">
                <FaRupeeSign />
              </Col>
              <Col xs={10}>
                <span>{ride?.ride?.priceRange}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-center">
                <SlCalender />
              </Col>
              <Col xs={10}>
                <span>{journeyDate(ride)}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-center">
                <IoMdTime />
              </Col>
              <Col xs={10}>
                <span>{ride?.ride?.time}</span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default SearchCardRide;
