import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./fakeServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <Container className="my-4">
            <h2 className="text-center">Total Hospitals: {services.length}</h2>

            <Row xs={1} md={3} className="g-2">
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                        ></SingleService>)
                }
            </Row>
        </Container>
    );
};

export default Services;