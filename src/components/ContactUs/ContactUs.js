import React from 'react';
import { Container, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
      <div>
        <Container className=" py-4">
          <div className="w-50 mx-auto">
          <h2 className="text-center">Contact Us</h2>
            <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div classNameName="mb-3">
                <label className="form-label" for="name">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                  data-sb-validations="required"
                />
                <div className="invalid-feedback" data-sb-feedback="name:required">
                  Name is required.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" for="emailAddress">
                  Email Address
                </label>
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  data-sb-validations="required, email"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="emailAddress:required"
                >
                  Email Address is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="emailAddress:email"
                >
                  Email Address Email is not valid.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" for="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Message"
                  style={{ height: "10rem" }}
                  data-sb-validations="required"
                ></textarea>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  Message is required.
                </div>
              </div>

              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">Form submission successful!</div>
              </div>

              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>

              <div className="d-grid">
                <button style={{backgroundColor:"#2e279d"}}
                  className="btn text-white btn-lg disabled"
                  id="submitButton"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    );
};

export default ContactUs;