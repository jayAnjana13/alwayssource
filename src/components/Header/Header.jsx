import React from "react";
import "./Header.css";
import { useMediaQuery } from "react-responsive";
import { Button, Carousel } from "react-bootstrap";
import heroImage1 from "../../assets/cat-1.jpg";
import heroImage2 from "../../assets/cat-2.jpg";
import heroImage3 from "../../assets/cat-3.jpg";

const Header = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <header className="hero-section">
      <Carousel>
        <Carousel.Item className="hero-carousel-item">
          <img
            className="d-block w-100 hero-carousel-img"
            src={heroImage1}
            alt="First slide"
          />
          <div className="hero-carousel-overlay"></div>
          <Carousel.Caption className="col-sm-6 col-md-7 col-lg-6">
            <h1>Mai Kaabil Hoon. </h1>
            <p>
              AlwaysSource connects you with opportunities and talent in one
              place, revolutionizing the way you find work and hire
              professionals
            </p>
            <Button
              className="carousel-btn me-2 mt-2"
              size={isLargeScreen ? "lg" : "sm"}
            >
              Become Kaabil Today!
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="hero-carousel-item">
          <img
            className="d-block w-100 hero-carousel-img"
            src={heroImage2}
            alt="Second slide"
          />
          <div className="hero-carousel-overlay"></div>
          <Carousel.Caption className="col-sm-6 col-md-7 col-lg-6">
            <h1>Empowering You to Succeed!</h1>
            <p>
              AlwaysSource connects you with opportunities and talent in one
              place, revolutionizing the way you find work and hire
              professionals
            </p>
            <Button
              size={isLargeScreen ? "lg" : "sm"}
              className="carousel-btn mt-2"
            >
              Become Kaabil Today!
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="hero-carousel-item">
          <img
            className="d-block w-100 hero-carousel-img"
            src={heroImage3}
            alt="Third slide"
          />
          <div className="hero-carousel-overlay"></div>
          <Carousel.Caption className="col-sm-6 col-md-7 col-lg-6">
            <h1> Unlock opportunities & achieve success.</h1>
            <p>
              AlwaysSource connects you with opportunities and talent in one
              place, revolutionizing the way you find work and hire
              professionals
            </p>
            <Button
              size={isLargeScreen ? "lg" : "sm"}
              className="carousel-btn mt-2"
            >
              Become Kaabil Today!
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Header;
