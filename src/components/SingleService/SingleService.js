import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleService = ({service}) => {
    const { id, name, img, desc } = service;
    console.log(name, id)

    return (
      <div>
        <Col >
          <Card>
            <Card.Img className="w-100" variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    );
};

export default SingleService;