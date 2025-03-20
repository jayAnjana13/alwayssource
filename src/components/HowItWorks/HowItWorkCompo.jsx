import React, { useState } from "react";
import "./HowItWorks.css";
import { FaChevronDown } from "react-icons/fa";
import { Container, Row, Col, Button, Modal, Image } from "react-bootstrap";
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
} from "react-icons/pi";

const HowItWorkCompo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* How It Works Section */}
      <section className="how-it-works">
        <Container>
          <h2 className="text-center section-title fw-bold mb-5">
            How It Works
          </h2>
          <Row>
            {/* Step 1 */}
            <Col md={4}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img
                      src="https://alwayssource.com/_next/image?url=%2Fimages%2Fpost.jpg&w=640&q=75"
                      alt="Post Job"
                      className="flip-image"
                    />
                    <h4>Post Your Requirement</h4>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <PiNumberCircleOneBold size={40} />
                    <h4>Post a Job</h4>
                    <p>
                      Create a job listing with your requirements and get
                      matched with the best professionals.
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            {/* Step 2 */}
            <Col md={4}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img
                      alt="Find Workers"
                      src="https://alwayssource.com/_next/image?url=%2Fimages%2Fbrowse.jpg&w=640&q=75"
                      className="flip-image"
                    />
                    <h4>Browse Opportunities</h4>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <PiNumberCircleTwoBold size={40} />
                    <h4>Get Responses</h4>
                    <p>
                      Receive proposals from verified professionals and compare
                      them to choose the best one.
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            {/* Step 3 */}
            <Col md={4}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img
                      src="https://alwayssource.com/_next/image?url=%2Fimages%2Fconnect.jpg&w=640&q=75"
                      alt="Hire & Get Started"
                      className="flip-image"
                    />
                    <h4>Connect Instantly</h4>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <PiNumberCircleThreeBold size={40} />
                    <h4>Hire & Get Started</h4>
                    <p>
                      Choose the best worker and start your project with
                      confidence.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Centered Button */}
          <Row className="mt-5">
            <Col className="text-center">
              <Button
                className="btn btn-hover-move"
                onClick={() => setShowModal(true)}
              >
                More Details
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal for Detailed Description */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="ms-2">
            How It Works - Detailed Steps
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body-custom">
          <div className="step-container">
            <h5>1. Post Your Requirement</h5>
            <p>
              Easily create a detailed post about the job or service you need.
              Provide all necessary information to attract the right candidates
              or service providers.
            </p>
            <ul>
              <li>Specify your project details</li>
              <li>Set your budget</li>
              <li>Define the timeline</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center my-4">
            <FaChevronDown />
          </div>
          <div className="step-container">
            <h5>2. Browse Opportunities</h5>
            <p>
              Explore a wide range of job postings and service requests. Use
              filters to find opportunities that match your skills or
              requirements.
            </p>
            <ul>
              <li>Search by category, location, or keywords</li>
              <li>View detailed job descriptions</li>
              <li>Save interesting opportunities for later</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center my-4">
            <FaChevronDown />
          </div>
          <div className="step-container">
            <h5> 3. Hire & Get Started</h5>
            <p>
              Use our in-app currency, Zings, to unlock contact details of
              potential clients or service providers. This system ensures that
              only serious inquiries are made, saving time for everyone
              involved.
            </p>
            <ul>
              <li>Purchase Zings with real money</li>
              <li>Spend Zings to reveal contact information</li>
              <li>Connect directly with the poster or applicant</li>
            </ul>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HowItWorkCompo;
