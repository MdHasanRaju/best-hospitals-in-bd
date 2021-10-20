import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner">
        <div className=" d-flex justify-content-center align-item-center">
          <div className="ms-2">
            <h4 className="text-light">Life & Care</h4>
            <h1 className="text-light">
              Find <span className="text-info fw-bold">The Best</span> Hospital
            </h1>
            <h1 className="text-light">
              Doctors Near By You. Come And Get Booked
            </h1>
            <Button className="bg-danger border-0 rounded-2">Find Doctors</Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;