import React from "react";
import "./About.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import aboutImage from "../../assets/logo-img.png";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <div className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col lg={6} md={12} sm={12} className="text-center">
            <Image
              src={aboutImage}
              alt="About AlwaysSource"
              className="about-image"
              fluid
            />
          </Col>

          {/* Right Side - Content */}
          <Col lg={6} md={12} sm={12}>
            <h4 className="about-title">
              Unlock Your True Potential with AlwaysSource
            </h4>
            <p className="about-text">
              Your skills are powerful. Your dreams are valid. We provide the
              platform to help you showcase your talent, connect with
              opportunities, and take control of your future.
            </p>
            <ul className="about-list">
              <li>
                <FaCheckCircle className="me-1 mb-1" />
                Build your career with meaningful opportunities.
              </li>
              <li>
                <FaCheckCircle className="me-1 mb-1" />
                Find the right jobs or hire skilled professionals.
              </li>
              <li>
                <FaCheckCircle className="me-1 mb-1" />
                Manage everything from your mobile – anytime, anywhere!
              </li>
            </ul>
            <div className="mt-4">
              <Button
                className="about-btn me-3 "
                onClick={() =>
                  window.open("https://play.google.com/store", "_blank")
                }
              >
                Download for Android
              </Button>
              <Button
                className="about-btn"
                onClick={() =>
                  window.open("https://www.apple.com/app-store/", "_blank")
                }
              >
                Download for iOS
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
