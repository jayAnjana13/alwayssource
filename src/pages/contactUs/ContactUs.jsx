import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Download from "../../components/Download/Download";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section style={{ backgroundColor: " #f8f9fa" }}>
      <Container className="mt-5 d-flex justify-content-center">
        <Card
          className="p-4 m-4 shadow-lg"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <Card.Body>
            <h2 className="text-center fw-bold mb-4">Contact Us</h2>
            <p className="text-center text-muted">
              We're here to help and answer any questions you might have.
            </p>
            {submitted && (
              <Alert variant="success" className="text-center">
                ✅ Your message has been submitted successfully!
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="mt-3">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="subject"
                  placeholder="Enter your email"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                style={{ backgroundColor: "#06bbcc", border: "none" }}
                type="submit"
                className="w-100"
              >
                Send Message
              </Button>
            </Form>
            {/* Other Contact Details */}
            <div className="mt-4 text-center">
              <h4 className="my-4">Other Ways to Reach Us</h4>
              <p>
                <MdEmail className="me-2 " />
                <strong>Email:</strong> support@alwayssource.com
              </p>
              <p>
                <FaPhoneAlt className="me-2 " />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <MdLocationOn className="me-2 " />
                <strong>Address:</strong> 123 AlwaysSource Street, Tech City, TC
                12345
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Download />
    </section>
  );
}

export default ContactUs;
