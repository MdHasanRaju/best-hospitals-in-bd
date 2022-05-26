import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";
import registerImg from "./../../images/sign.png";

const Register = () => {
  const {
    error,
    registrationWithEmailPassword,
    signInUsingGoogle,
    setError,
    setUser,
    setIsLoading,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || "/home";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleName = (e) => {
    setName(e.target.value);
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

  // google sing in handling
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google Sign In Successfully done!");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
        toast.error('Something went wrong')
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegistration = () => {
    registrationWithEmailPassword(name, email, password);
    toast.success("Registration successfully done");
    history.push("/home");
  };

  return (
    <div className="my-4">
      <div className="container">
        <div className="row gy-2">
          <h2 className="text-center">Please Register</h2>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              style={{ my: "auto" }}
              width="100%"
              height="100%"
              src={registerImg}
              alt="register.png"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Full Name"
              onBlur={handleName}
            />
            <input
              className="form-control"
              type="email"
              placeholder="E-mail Address"
              onBlur={handleEmail}
              required
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onBlur={handlePassword}
              required
            />
            <div className="form-button">
              <button
                onClick={handleRegistration}
                id="submit"
                type="submit"
                className="ibtn"
              >
                Register
              </button>
            </div>
          </form> */}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onBlur={handleName}
                  type="text"
                  placeholder="Name"
                  required
                />
              </Form.Group>

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
                onClick={handleRegistration}
                style={{ background: "#2e279d" }}
                type="submit"
              >
                Register
              </Button>
              {/* <ToastContainer/> */}
            </Form>
            <br />
            <p className="text-danger">{error}</p>
            <Link to="/login" className="text-dark text-decoration-none ">
              Already registered? please login
            </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
