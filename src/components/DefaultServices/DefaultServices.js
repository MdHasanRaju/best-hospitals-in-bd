import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DefaultService from '../DefaultService/DefaultService';

const DefaultServices = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
     fetch("./fakeServices.json")
       .then((res) => res.json())
       .then((data) => setServices(data.slice(0, 6)));
   }, []);

    return (
      <div>
        <Container className="my-4">
          <h2 className="text-center">Total Services: {services.length}</h2>

          <Row xs={1} md={3} className="g-2">
            {services.map((service) => (
              <DefaultService key={service.id} service={service}></DefaultService>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default DefaultServices;