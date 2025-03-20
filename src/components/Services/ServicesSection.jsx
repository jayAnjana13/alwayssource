import React from "react";
import "./Services.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import servicesImage from "../../assets/services.jpg";
import factoryImage from "../../assets/factory-img.jpg";
import storeImage from "../../assets/store-image.webp";
import hotelImage from "../../assets/hotel-image.avif";
import AgricultureImage from "../../assets/agri-img.jpg";
import wasteImage from "../../assets/waste-img.jpg";
import securityImage from "../../assets/security-img.jpg";
import cleaningImage from "../../assets/cleaning-img.jpeg";
import saloonImage from "../../assets/saloon-img.webp";

const services = [
  {
    title: "Tuition for Exam Preparation",
    image: servicesImage,
    description:
      "Find experienced tutors for all subjects and exam preparations.",
    price: "$149.00",
    rating: 4.8,
    reviews: 123,
    duration: "1.5 Hrs",
    students: 30,
    instructor: "John Doe",
  },
  {
    title: "Factory Help",
    image: factoryImage,
    description: "Hire skilled workers for your business needs.",
    price: "$129.00",
    rating: 4.4,
    reviews: 98,
    duration: "2 Hrs",
    students: 25,
    instructor: "Jane Smith",
  },
  {
    title: "Store Assistance",
    image: storeImage,
    description: "Get reliable store assistants for your business operations.",
    price: "$99.00",
    rating: 3.4,
    reviews: 87,
    duration: "1 Hr",
    students: 20,
    instructor: "Emily Johnson",
  },
  {
    title: "Hotel & Restaurant Services",
    image: hotelImage,
    description: "Professional hospitality staff for your hotel or restaurant.",
    price: "$159.00",
    rating: 4.9,
    reviews: 150,
    duration: "2.5 Hrs",
    students: 40,
    instructor: "Michael Brown",
  },
  {
    title: "Agricultural Work",
    image: AgricultureImage,
    description: "Get trained workers for farming and agriculture.",
    price: "$139.00",
    rating: 3.5,
    reviews: 75,
    duration: "2 Hrs",
    students: 18,
    instructor: "Sarah Davis",
  },
  {
    title: "Waste Removal",
    image: wasteImage,
    description: "Professional waste disposal services.",
    price: "$89.00",
    rating: 4.4,
    reviews: 65,
    duration: "1 Hr",
    students: 15,
    instructor: "Chris Wilson",
  },
  {
    title: "Security Services",
    image: securityImage,
    description: "Hire trained security personnel for your safety.",
    price: "$179.00",
    rating: 3.4,
    reviews: 120,
    duration: "3 Hrs",
    students: 35,
    instructor: "David Martinez",
  },
  {
    title: "Driving, Cooking, Cleaning",
    image: cleaningImage,
    description:
      "Get skilled professionals for household and driving services.",
    price: "$119.00",
    rating: 4.4,
    reviews: 90,
    duration: "1.5 Hrs",
    students: 22,
    instructor: "Laura Thompson",
  },
  {
    title: "Saloon Services at Home",
    image: saloonImage,
    description: "Professional haircuts and grooming services at your home.",
    price: "$99.00",
    rating: 4.7,
    reviews: 80,
    duration: "1 Hr",
    students: 25,
    instructor: "Anna White",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="section-title text-center fw-bold mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="py-3">
              <Card className="service-card">
                <div className="image-container">
                  <Card.Img variant="top" src={service.image} />
                  <div className="overlay">
                    <Button className="btn-sm btn-left">Join Now</Button>
                    <Button className="btn-sm btn-right">Be Kaabil</Button>
                  </div>
                </div>
                <Card.Body>
                  {/* <h4 className="price">{service.price}</h4> */}
                  <Card.Title>{service.title}</Card.Title>
                  <div className="rating">
                    {"⭐".repeat(Math.round(service.rating))} ({service.rating})
                  </div>{" "}
                  <Card.Text className="description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
