import React from "react";
import "./SocialMedia.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="social-media-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="social-title">Join Us on Social Media</h2>
            <p className="social-desc">
              Stay updated, connect with us, and be part of our growing
              community!
            </p>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon youtube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialMedia;
