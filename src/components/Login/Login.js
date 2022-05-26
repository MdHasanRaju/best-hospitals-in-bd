import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";
import loginImg from "./../../images/login.png";

const Login = () => {
  // const {
  //   error,
  //   isLogin,
  //   setUser,
  //   setUserName,
  //   setError,
  //   toggleLogin,
  //   signInUsingGoogle,
  //   handleRegistration,
  //   handleNameChange,
  //   handleEmailChange,
  //   handlePasswordChange,
  //   setIsLoading,
  // } = useAuth();

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

        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(error.message);
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  // google sing in handling
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        if (result) {
          toast("Google Sign In Successfully done!",{ autoClose: 1500 });
          const user = result.user;
          setUser(user);
          history.push(redirect_uri);
        }
      })
      .catch((error) => {
        setError(error.message);
        toast.error('Something went wrong');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="my-4">
      <div className="container">
        <div className="row gy-2">
          <h2 className="text-center">Please Login</h2>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              style={{ my: "auto" }}
              width="100%"
              height="100%"
              src={loginImg}
              alt="login.png"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
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
              {/* <hr /> */}
              <Button
                style={{ background: "#2e279d" }}
                onClick={handleGoogleLogin}
              >
                Sign In With Google
              </Button>
              <ToastContainer />
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Login;
