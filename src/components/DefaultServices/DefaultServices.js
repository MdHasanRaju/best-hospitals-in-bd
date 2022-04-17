import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import DefaultService from "../DefaultService/DefaultService";

const DefaultServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("./fakeServices.json")
      .then((res) => res.json())
      .then((data) =>{ 
        setServices(data.slice(0, 6))
        data? setIsLoading(false):setIsLoading(true)
      })
  }, []);

  return (
    <div>
      <Container className="my-5">
        <h2 style={{ color: "#2e279d"}} className="text-center fw-bolder mb-3">
          HOSPITALS
        </h2>
        {isLoading ? <div className="d-flex justify-content-center"><Spinner animation="grow" variant="primary" /></div> : 
        (
          <Row xs={1} md={3} className="g-2">
            {services.map((service) => (
              <DefaultService
                key={service.id}
                service={service}
              ></DefaultService>
            ))}
          </Row>
        ) }
      </Container>
    </div>
  );
};

export default DefaultServices;
