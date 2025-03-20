import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Download() {
  const handleDownload = (platform) => {
    let url = "";

    if (platform === "ios") {
      url = "https://apps.apple.com/us/app/example-app/id123456789";
    } else if (platform === "android") {
      url = "https://play.google.com/store/apps/details?id=com.example.app";
    }

    window.open(url, "_blank");
  };

  return (
    <Container className="text-center my-5 ">
      <h1 className="fw-bold">Ready to Get Started?</h1>
      <p
        style={{
          color: "#6c757d",
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px 0",
          fontSize: "18px",
        }}
      >
        Download the AlwaysSource app now and start connecting with
        opportunities and talent!
      </p>
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <Button
            className="px-4 py-2 download-btn"
            style={{
              background: "#06bbcc",
              border: "none",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
            onClick={() => handleDownload("ios")}
          >
            Download for iOS
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            className="px-4 py-2 download-btn"
            style={{
              background: "#06bbcc",
              border: "none",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
            onClick={() => handleDownload("android")}
          >
            Download for Android
          </Button>
        </Col>
      </Row>
      <style>
        {`
          .download-btn {
            margin:10px;
           background-color: #06bbcc;
            border: 1px solid #06bbcc;
            border-radius: 30px;
            transition: transform 0.3s ease-in-out;
          }
          .download-btn:hover {
              transform: scale(1.1);
          }
        `}
      </style>
    </Container>
  );
}

export default Download;
