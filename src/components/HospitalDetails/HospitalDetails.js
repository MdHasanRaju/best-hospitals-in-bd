import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

const HospitalDetails = () => {
    const {hospitalId} = useParams();
    const [service, setService] = useState([])
    console.log(hospitalId)

    useEffect( () => {
        fetch('/fakeServices.json')
        .then(res => res.json())
        .then(data => {
            const matchedItem = data?.find(d => d.id == hospitalId);
            setService(matchedItem)
        })

    } ,[])

    return (
      <Container>
        <Card className="h-100 text-dark">
          <Card.Img height="100%" className="w-100 " src={service.img} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text>
              {service.desc}
            </Card.Text>
            <Card.Text> <Link to="/home">Go Home</Link> </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
};

export default HospitalDetails;