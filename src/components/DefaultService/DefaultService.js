import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DefaultService = ({service}) => {
     const { id, name, img, desc } = service;

    return (
      <div>
        <Col>
          <Card>
            <Card.Img style={{height:"300px"}} className="w-100" variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc.slice(0, 185)}...</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={`/hospitaldetails/${id}`}>
                <small className="">See Details</small>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    );
};

export default DefaultService;