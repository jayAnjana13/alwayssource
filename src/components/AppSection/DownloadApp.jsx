import React from "react";
import "./DownloadApp.css";
import { Container, Row, Col } from "react-bootstrap";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googleplay.png";
import { PiLightbulbFilamentLight } from "react-icons/pi";

const DownloadApp = () => {
  const handleDownload = (platform) => {
    let url = "";

    if (platform === "ios") {
      url = "https://apps.apple.com/us/app/example-app/id123456789";
    } else if (platform === "android") {
      url = "https://play.google.com/store/apps/details?id=com.example.app";
    }

    // Open in a new tab
    window.open(url, "_blank");
  };
  return (
    <section>
      <Container className="download-app-section">
        <Row className="align-items-center px-4">
          {/* Left Section */}
          <Col lg={6} md={6} sm={12} className="text-left">
            <h2 className="app-title">Download the AlwaysSource App</h2>
            <p className="app-desc">
              Get instant access to job opportunities and talented
              professionals. Download our app now and start connecting!
            </p>
            <div className="store-buttons">
              <img
                onClick={() => handleDownload("ios")}
                src={appStore}
                alt="App Store"
                className="store-btn"
              />
              <img
                onClick={() => handleDownload("android")}
                src={googlePlay}
                alt="Google Play"
                className="store-btn"
              />
            </div>
          </Col>

          {/* Right Section - Floating Card */}
          <Col lg={6} md={6} sm={12} className="text-center">
            <div className="highlight-card">
              <div className="bulb-container">
                <PiLightbulbFilamentLight size={60} className="mb-4" />
              </div>
              <h3 className="highlight-text">FIND</h3>
              <h3 className="highlight-text">PAID</h3>
              <h3 className="highlight-text">WORK</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadApp;
