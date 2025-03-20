import React from "react";
import "./WhyChooseUs.css";
import { IoIosContact } from "react-icons/io";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCheckCircle,
  FaGlobe,
  FaCloudUploadAlt,
  FaMobileAlt,
} from "react-icons/fa";

// List of reasons
const reasons = [
  { id: 1, text: "Wide range of job opportunities", icon: <FaGlobe /> },
  {
    id: 2,
    text: "Easy requirement posting on app",
    icon: <FaCloudUploadAlt />,
  },
  {
    id: 3,
    text: "Secure payment system with Zings",
    icon: <RiMoneyRupeeCircleFill />,
  },
  { id: 4, text: "Instant access to contact details", icon: <IoIosContact /> },
  {
    id: 5,
    text: "User-friendly & helpful mobile app",
    icon: <FaMobileAlt />,
  },
  {
    id: 6,
    text: "Verified profiles for trust and safety",
    icon: <FaCheckCircle />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <Container>
        {/* <h2 className="text-center section-title">Why Choose Always Source?</h2> */}
        <Row className="mt-4">
          {reasons.map((reason) => (
            <Col
              md={4}
              sm={6}
              key={reason.id}
              className="d-flex justify-content-center py-3"
            >
              <Card className="why-card">
                <Card.Body className="text-center">
                  <div className="icon">{reason.icon}</div>
                  <Card.Text className="reason-text">{reason.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
