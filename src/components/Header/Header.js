import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';

const Header = () => {
  const {user, name, error, setError, logOut} = useAuth();
  // console.log(user, logOut);
  
    return (
      <div className="bg-dark">
        <Container>
          <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="text-warning">BestHos.</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  className="me-2 d-inline-block text-decoration-none text-light"
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  className="me-2 d-inline-block text-decoration-none text-light"
                  to="/services"
                >
                  Services
                </NavLink>
                <NavLink
                  className="me-2 d-inline-block text-decoration-none text-light"
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                  className="me-2 d-inline-block text-decoration-none text-light"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </Nav>
              <Form className="d-flex ms-auto">
                {/* <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                /> */}
                {name && <span>{name}</span>}
                <p className="pt-2 me-2 fw-bold text-light">{user.displayName}</p>

                {user?.email ? (
                  <Link to="/home">
                    <Button variant="outline-danger" onClick={logOut}>
                      Log out
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button variant="outline-success">Login</Button>
                  </Link>
                )}
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
};

export default Header;