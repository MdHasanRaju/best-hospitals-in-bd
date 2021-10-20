import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
      <Container>
        <Row className="py-5">
          <Col md={4}>
            <h2>What is Ask a Doctor, Secure Messaging?</h2>
            <p>
              Ask a Doctor, Secure Messaging (“Ask a Doctor”) is a chat-based
              virtual care program that allows you to securely text, send
              photos, or video chat with a doctor within seconds. Instead of
              waiting for a doctor’s appointment to get questions answered.
            </p>
          </Col>
          <Col md={8}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Speak up if you have any questions or concerns.
                </Accordion.Header>
                <Accordion.Body>
                  You have a right to question anyone who is involved with your
                  care. To be sure you have all the information you need, it can
                  help to write down questions to ask for the next time you
                  visit the doctor.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Where and when is Ask a Doctor available?
                </Accordion.Header>
                <Accordion.Body>
                  Ask a Doctor is accessible from anywhere you can access the
                  Internet, 24 hours a day, 7 days a week. To get the best care
                  experience, download the Ask a Doctor app by searching for
                  “Ask a Doctor, Secure Messaging” in the App Store for iOS
                  mobile devices or Google Play store for Android devices.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Who is eligible for Ask a Doctor?
                </Accordion.Header>
                <Accordion.Body>
                  Be sure the healthcare professional asks your name and
                  birthdate. Also, don’t hesitate to inform the healthcare
                  professional if you think he or she has confused you with
                  another <person className=""></person>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How is the Emergency Department staffed?
                </Accordion.Header>
                <Accordion.Body>
                  The department is staffed with emergency medicine physicians
                  and nurses, physician assistants, technicians, CNAs and unit
                  coordinators along with specialists from the laboratory,
                  cardiology, respiratory and radiology departments.
                  <person className=""></person>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
};

export default Faq;