import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

  const {user, signInUsingGoogle} = useAuth();

    return (
      <div className="">
        <div className="w-50 mx-auto">
          <h2>Please Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form><br /><br />
          <div>
            <hr />
              <Button onClick={signInUsingGoogle}>Sing In With Google</Button>
          </div>
        </div>
      </div>
    );
};

export default Login;