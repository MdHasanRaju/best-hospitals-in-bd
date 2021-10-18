import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
      <div className="">
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand className="text-warning">BestHos.</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink className="me-2 d-inline-block text-decoration-none text-dark" to="/home">Home</NavLink>
                <NavLink className="me-2 d-inline-block text-decoration-none text-dark" to="/services">Services</NavLink>
                <NavLink className="me-2 d-inline-block text-decoration-none text-dark" to="/about">About Us</NavLink>
                <NavLink className="me-2 d-inline-block text-decoration-none text-dark" to="/contact">Contact Us</NavLink>
              </Nav>
              <Form className="d-flex ms-auto">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
               {/*  <Link>
                  <Button>Log out</Button>
                </Link> */}
                <Link to="/login">
                  <Button variant="outline-success">Login</Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
};

export default Header;