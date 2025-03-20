import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaArrowUp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGreaterThan,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          {/* About */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5>AlwaysSource</h5>
            <ul className="footer-links">
              <li>Discover work, post requirements.</li>
              <li>Become Kabil!</li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5>Policies</h5>
            <nav aria-label="Footer Navigation">
              <ul className="footer-links">
                <li>
                  <Link to="/policies/privacy" className="footer-link">
                    <FaGreaterThan size={12} className="me-1 mb-1" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/policies/terms" className="footer-link">
                    <FaGreaterThan size={12} className="me-1 mb-1" />
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/policies/shipping" className="footer-link">
                    <FaGreaterThan size={12} className="me-1  mb-1" />
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/policies/cancellation" className="footer-link">
                    <FaGreaterThan size={12} className="me-1 mb-1" />
                    Cancellation & Refund
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5> Contact</h5>
            <ul className="footer-links">
              <li>
                <Link to="/contact-us" className="footer-link">
                  <FaGreaterThan size={12} className="me-1 mb-1" />
                  Contact Page
                </Link>
              </li>
              <li>
                <FaPhone /> +91 12345 67890
              </li>
              <li>
                <MdEmail /> info@example.com
              </li>
              <li className="socialmedia-icons">
                <FaFacebookF aria-label="Facebook" />
                <FaYoutube aria-label="Youtube" />
                <FaInstagram aria-label="Instagram" />
                <FaTwitter aria-label="Twitter" />
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h5>Newsletter</h5>
            <ul className="footer-links">
              <li>Stay updated with our latest news.</li>
            </ul>
            <Form className="newsletter-form">
              <div className="input-group">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  className="form-control"
                />
                <Button className="btn-signup">Sign Up</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <Container>
          <Row className="justify-content-between">
            <Col md={6}>
              <p>© 2025 AlwaysSource, All Rights Reserved.</p>
            </Col>
            <Col md={6}>
              <a href="#">
                <Link to="/">Find Work </Link>{" "}
              </a>
              |
              <a href="#">
                <Link to="/">Post Jobs</Link>
              </a>
              |
              <a href="#">
                <Link to="/">Help</Link>
              </a>
              |
              <a href="#">
                <Link to="/faq">FAQs</Link>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
