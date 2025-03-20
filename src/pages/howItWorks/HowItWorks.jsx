import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import step1Img from "../../assets/step-1.png";
import step2Img from "../../assets/services.jpg";
import step3Img from "../../assets/step-3.png";
import step4Img from "../../assets/step-4.png";
import step5Img from "../../assets/step-5.png";
import { FaCheckCircle } from "react-icons/fa";
import Download from "../../components/Download/Download";

function HowItWorks() {
  const steps = [
    {
      title: "Download the Always Source App",
      description:
        "Get started by downloading our app from the App Store or Google Play.",
      points: [
        "Available on both iOS and Android.",
        "Fast and secure installation.",
        "Free to download and use.",
      ],
      image: step1Img,
    },
    {
      title: "Create an Account & Set Up Your Profile",
      description:
        "Register yourself, verify your email, and set up your professional profile.",
      points: [
        "Quick and easy registration process.",
        "Customize your profile with your skills and experience.",
        "Secure your account with two-factor authentication.",
      ],
      image: step2Img,
    },
    {
      title: " Post Your Requirement",
      description:
        "Easily create a detailed post about the job or service you need. Provide all necessary information to attract the right candidates or service providers.",
      points: [
        "Specify your project details.",
        "Set your budget.",
        "Define the timeline.",
      ],
      image: step3Img,
    },
    {
      title: " Browse Opportunities",
      description:
        "Explore a wide range of job postings and service requests. Use filters to find opportunities that match your skills or requirements.",
      points: [
        "Search by category, location, or keywords.",
        "View detailed job descriptions.",
        "Save interesting opportunities for later.",
      ],
      image: step4Img,
    },
    {
      title: " Connect Using Zings",
      description:
        "Use our in-app currency, Zings, to unlock contact details of potential clients or service providers. This system ensures that only serious inquiries are made, saving time for everyone involved.",
      points: [
        "Purchase Zings with real money.",
        "Spend Zings to reveal contact information.",
        "Connect directly with the poster or applicant.",
      ],
      image: step5Img,
    },
  ];

  return (
    <section style={{ backgroundColor: " #f8f9fa" }}>
      <Container className="mt-5 py-5">
        <h1 className="text-center mb-4 fw-bold">How It Works</h1>
        <p className="text-center text-muted">
          Follow these simple steps to get started.
        </p>

        {steps.map((step, index) => (
          <Row key={index} className="align-items-center my-4">
            {index % 2 === 0 ? (
              <>
                <Col md={6}>
                  <Card className="p-3 shadow-sm">
                    <h4>
                      {index + 1}. {step.title}
                    </h4>
                    <p>{step.description}</p>
                    <ListGroup variant="flush">
                      {step.points.map((point, i) => (
                        <ListGroup.Item key={i} className="border-0 ps-3">
                          <FaCheckCircle /> {point}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card>
                </Col>
                <Col md={6} className="text-center">
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    className="img-fluid"
                    style={{ maxWidth: "80%" }}
                  />
                </Col>
              </>
            ) : (
              <>
                <Col md={6} className="text-center">
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    className="img-fluid"
                    style={{ maxWidth: "80%" }}
                  />
                </Col>
                <Col md={6}>
                  <Card className="p-3 shadow-sm">
                    <h4>
                      {index + 1}. {step.title}
                    </h4>
                    <p>{step.description}</p>
                    <ListGroup variant="flush">
                      {step.points.map((point, i) => (
                        <ListGroup.Item key={i} className="border-0 ps-3">
                          <FaCheckCircle /> {point}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
      <Download />
    </section>
  );
}

export default HowItWorks;
