import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import loginImg from './../../images/login.png'
import registerImg from './../../images/sign.png'

const Login = () => {
  const {
    error,
    isLogin,
    setUser,
    setUserName,
    setError,
    toggleLogin,
    signInUsingGoogle,
    handleRegistration,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || "/home";


// google sing in handling
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        user && alert("Google Sign In Successfully done");
        setUser(user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };


  return (
    <div className="my-4">
      <div className="row mx-2 gy-2">
      <h2 className="text-center">Please {isLogin ? "Login" : "Register"}</h2>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img style={{my:'auto'}} width='100%' height='100%' src={isLogin ? loginImg : registerImg} alt="" />
        </div>
      <div  className="col-lg-6 col-md-6 col-sm-12">
       
        <Form onSubmit={handleRegistration}>
          {!isLogin && (
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onBlur={handleNameChange}
                type="text"
                placeholder="Name"
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={toggleLogin}
              type="checkbox"
              label="Already Registered?"
            />
          </Form.Group>
          <Button style={{ background: "#2e279d" }} type="submit">
            {isLogin ? "Login" : "Register"}
          </Button>
        </Form>
        <br />
        <p className="text-danger">{error}</p>
        <div>
          <hr />
          <Button style={{ background: "#2e279d" }} onClick={handleGoogleLogin}>
            Sing In With Google
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
