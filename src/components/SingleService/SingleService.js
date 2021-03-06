import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { id, name, img, desc } = service;
  // xs="12" md='6' lg='4'

  return (
    <Col>
      <Card>
        <Card.Img
          style={{ height: "250px" }}
          className="w-100 "
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc.slice(0, 150)}...</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/hospitaldetails/${id}`}>
            <Button style={{backgroundColor:"#6055f6", color:"#ffffff"}} className=" border-0">Get Info</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleService;
