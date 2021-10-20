import React from 'react';
import "./Feature.css";
import { Col, Container, Row } from "react-bootstrap";

const Feature = () => {
  
  return (
    <Container>
    <Row className="text-center my-5">
      <h2 className="text-info fw-bolder">Our Features</h2>
    </Row>
      <Row className="py-5 text-center">
        <Col className="feature-Item" md={3}>
          <span>
            <i class="fas fa-comment-medical"></i>
          </span>
          <p>Online Support 24/7</p>
        </Col>
        <Col className="feature-Item" md={3}>
          <span>
            <i class="fas fa-user-md"></i>
          </span>
          <p>Experienced Doctors</p>
        </Col>
        <Col className="feature-Item" md={3}>
          <span>
            <i class="fas fa-ambulance"></i>
          </span>
          <p>Emergency Ambulance</p>
        </Col>
        <Col className="feature-Item" md={3}>
          <span>
            <i class="fas fa-hand-holding-medical"></i>
          </span>
          <p>Extra Care</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;