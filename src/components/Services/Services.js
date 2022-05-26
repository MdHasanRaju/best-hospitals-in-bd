import React, { useEffect, useState } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./fakeServices.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        data ? setIsLoading(false) : setIsLoading(true);
      });
  }, []);

  return (
    <div>
      <h2 style={{ color: "#2e279d" }} className="text-center mb-4 mt-2">
        MORE HOSPITALS: {services.length}
      </h2>
      <Container className="my-4">
        {services.length ? (
          <Row lg={3} md={2} xs={1} sm={1} className="g-3">
            {services?.map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
            ))}
          </Row>
        ) : (
          <div className="d-flex justify-content-center">
            <Button
              style={{ backgroundColor: "#2e279d", color: "dark" }}
              disabled
            >
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Services;
