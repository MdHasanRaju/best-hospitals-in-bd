import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo2 from '../../images/hoslogo2.png';
import './Footer.css';

const Footer = () => {
    return (
      <div className="pt-5 pb-2 footer text-light mt-4">
        <Container >
          <Row className='g-1'>
            <Col lg='3' md='6' xs='12'>
              <div>
                <img src={logo2} />
              </div>
              <p className='mt-2'>
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
              <i className="fab fa-facebook me-4 fs-4"></i>
              <i className="fab fa-instagram me-4 fs-4"></i>
              <i className="fab fa-linkedin-in me-4 fs-4"></i>
              <i className="fab fa-twitter me-2 fs-4"></i>
            </Col>
            <Col lg='3' md='6' xs='12'>
              <h5>Services</h5>
              <p>Therapiya</p>
              <p>Dentistry</p>
              <p>Virusology</p>
              <p>Pharmacology</p>
              <p>Cardiology</p>
            </Col>
            <Col lg='3' md='6' xs='12'>
              <h5>Useful Links</h5>
              <p>Home</p>
              <p>About Us</p>
              <p>News</p>
              <p>Doctors</p>
              <p>Contact Us</p>
            </Col>
            <Col lg='3' md='6' xs='12'>
              <h5>Subscribe</h5>
              <p>
                <input className="w-100" type="text" placeholder="Email" />
              </p>
              <Button variant="outline-secondary w-100">Subscribe</Button>
              <p className="mt-4">
                Get The Latest Updates via email. Any time you may unsubscribe
              </p>
            </Col>
          </Row>
          <div>
            <hr className="text-secondary" />
            <div className="d-flex justify-content-between">
              <p className="fw-bolder">© Website 2021 | All Rights Reserved</p>
              <div>
                <small className="ms-2">Privacy</small>
                <small className="ms-2">Terms</small>
                <small className="ms-2">Sitemap</small>
                <small className="ms-2">Help</small>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Footer;