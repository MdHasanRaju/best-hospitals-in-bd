import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo from './../../images/hoslogo.png';
import logo2 from './../../images/hoslogo2.png';
import './Header.css';

const Header = () => {
  const {user, name, logOut} = useAuth();

  const myColor={
    // color:'#2e279d',
    backgroundColor:"white",
    color:'#e83e8c!important',

  }

    return (
      <div style={{backgroundColor:"#ffffff"}}>
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand >
              <img height='50px' width='50px' src={logo} alt="hospital" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  style={{color:"#2e279d"}}
                  className="me-2 d-inline-block text-decoration-none"
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                style={{color:"#2e279d"}}
                  className="me-2 d-inline-block text-decoration-none "
                  to="/services"
                >
                  Services
                </NavLink>
                <NavLink
                style={{color:"#2e279d"}}
                  className="me-2 d-inline-block text-decoration-none "
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                style={{color:"#2e279d"}}
                  className="me-2 d-inline-block text-decoration-none"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </Nav>
              <Form style={{color:"#2e279d"}} className="d-flex ms-auto">
                {name && <span>{name}</span>}
                <p className="pt-2 me-2 fw-bold">{user.displayName}</p>

                {user?.email ? (
                  <Link to="/home">
                    <Button className='common-btn btn-clr' onClick={logOut}>
                      Log out
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button className='common-btn btn-clr'>Login</Button>
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