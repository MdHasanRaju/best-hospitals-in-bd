import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import loginImg from "./../../images/login.png";

const Login = () => {
  const {
    user,
    setUser,
    error,
    setError,
    setIsLoading,
    signInUsingGoogle,
    signInUsingEmailAndPassword,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || "/home";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    if (!isPasswordShown) {
      setIsPasswordShown(true);
      return;
    }
    setIsPasswordShown(false);
  };

  const handleLogin = () => {
    if (password?.length >= 6) {
      signInUsingEmailAndPassword(email, password)
        .then((result) => {
          // Signed in
          setError("");
          toast.success("Login successfully!");
          const user = result.user;
          setUser(user);
          setEmail("");
          setPassword("");
          history.push(redirect_uri);
        })
        .catch((error) => {
          setError(error.message);
          setUser({});
        })
        .finally(() => setIsLoading(false));
    }
    else {
      setError('Something went wrong!')
    }
  };

  // google sing in handling
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        if (result) {
          toast("Google Sign In Successfully done!", { autoClose: 1500 });
          const user = result.user;
          setUser(user);
          history.push(redirect_uri);
        }
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Something went wrong");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="my-4">
      <Container>
        <Row className="gy-2">
          <h2 className="text-center">Please Login</h2>
          <Col lg="6" md="6" xs="12" sm="12">
            <img
              style={{ my: "auto" }}
              width="100%"
              height="100%"
              src={loginImg}
              alt="login.png"
            />
          </Col>
          <Col lg="6" md="6" xs="12" sm="12">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePassword}
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <i
                  role="button"
                  onClick={togglePasswordVisibility}
                  style={{ top: 42, right: 14 }}
                  className={`fa ${
                    isPasswordShown ? " fa-eye-slash" : "fa-eye"
                  } password-icon position-absolute`}
                ></i>
              </Form.Group>
              <Button
                onClick={handleLogin}
                style={{ background: "#2e279d" }}
                type="submit"
              >
                Login
              </Button>
            </Form>
            <br />
            <Link to="/register" className="text-dark text-decoration-none ">
              Already Login? please register
            </Link>
            <p className="text-danger">{error}</p>
            <div>
              <hr />
              <Button
                style={{ background: "#2e279d" }}
                onClick={handleGoogleLogin}
              >
                Sign In With Google
              </Button>
              <ToastContainer />
            </div>
          </Col>

          {/* <div className="col-lg-6 col-md-6 col-sm-12">
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
            <Link to="/register" className="text-dark text-decoration-none ">
              Already Login? please register
            </Link>
            <p className="text-danger">{error}</p>
            <div>
              <hr />
              <Button
                style={{ background: "#2e279d" }}
                onClick={handleGoogleLogin}
              >
                Sing In With Google
              </Button>
            </div>
          </div> */}
        </Row>
      </Container>
    </div>
  );
};

export default Login;
