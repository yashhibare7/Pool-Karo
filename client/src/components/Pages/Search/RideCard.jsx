import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight} from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCarSide, FaPhoneAlt, FaRupeeSign, FaEdit } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoMdTime, IoIosPerson } from "react-icons/io";
import moment from "moment";

const RideCard = ({ride,onClose}) => {
  console.log(ride);
  const TripTitle = (ride) => {
    return (
      <span>
        {ride?.source} <FaLongArrowAltRight /> {ride?.destination}
      </span>
    );
  };

  const journeyDate = (ride) => {
    const date = moment(ride?.ride?.date).format("MMMM Do YYYY");

    return <>{date}</>;
  };

  const handleClose = () => {
    // Call the onClose prop passed from SearchComponent
    onClose();
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
                <span>{ride?.ownerName}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-center">
                <FaCarSide />
              </Col>
              <Col xs={10}>
                <span>{ride?.vehicleName}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-center">
                <FaPhoneAlt />
              </Col>
              <Col xs={10}>
                <span>{ride?.phoneNumber}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={2} className="text-center">
                <FaRupeeSign />
              </Col>
              <Col xs={10}>
                <span>{ride?.priceRange}</span>
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
                <span>{ride?.time}</span>
              </Col>
            </Row>

            <Card.Footer>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <Button
                  variant="danger"
                  onClick={handleClose}
                  className="d-flex align-items-center justify-content-center"
                >
                  <IoIosCloseCircle />
                </Button>
              </Col>
            </Row>
          </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default RideCard;
