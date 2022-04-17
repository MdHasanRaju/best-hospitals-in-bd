import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const DefaultService = ({ service }) => {
  const { id, name, img, desc } = service;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img
            style={{ height: "300px" }}
            className="w-100"
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc.slice(0, 185)}...</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/hospitaldetails/${id}`}>
              <Button
                style={{ backgroundColor: "#6055f6" }}
                className="text-white border-0"
              >
                Get Info
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default DefaultService;
