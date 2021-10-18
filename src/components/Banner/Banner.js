import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner">
        <div className=" d-flex justify-content-center align-item-center">
          <div>
            <h4>Markets & Resources</h4>
            <h1>Find <span className="text-danger fw-bold">The Best</span> Hospital</h1>
            <h1>Doctors Near By You. Come And Get Booked</h1>
            <Button className="bg-primary">Find Doctors</Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;