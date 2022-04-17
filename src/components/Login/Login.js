import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const {error, isLogin, setUser, setUserName, setError, toggleLogin, signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, setIsLoading,} = useAuth();


  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from ||"/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        user && alert("Google Sign In Successfully done");
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false))
  }


    return (
      <div className="my-4">
        <div className="w-50 mx-auto">
          <h2>Please {isLogin ? "Login" : "Register"}</h2>
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
            <Button style={{background:"#2e279d"}} type="submit">
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form>
          <br />
          <p className="text-danger">{error}</p>
          <div>
            <hr />
            <Button style={{background:"#2e279d"}} onClick={handleGoogleLogin}>Sing In With Google</Button>
          </div>
        </div>
      </div>
    );
};

export default Login;