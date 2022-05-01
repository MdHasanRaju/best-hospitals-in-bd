import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import img2 from "./../../images/NoImageFound.png";

const HospitalDetails = () => {
  const { hospitalId } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/fakeServices.json")
      .then((res) => res.json())
      .then((data) => {
        const matchedItem = data?.find((d) => d.id == hospitalId);
        setService(matchedItem);
      });
  }, []);

  return (
    <Container className="my-5 ">
      <Card className="text-light mx-auto ">
        <Card.Img
          height="100%"
          className="w-100"
          src={service?.img && service?.img}
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>{service.desc}</Card.Text>
          <Card.Text>
            <Link to="/home">
              <Button style={{ background: "#2e279d", border: "none" }}>
                Go Home
              </Button>
            </Link>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default HospitalDetails;
