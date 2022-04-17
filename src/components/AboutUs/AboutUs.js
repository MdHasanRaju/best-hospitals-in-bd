import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
      <div className="about">
        <div className="container text-center ">
          <h2 style={{color:"#2e279d"}}  className="fw-bold">About Us</h2>
          <div className="row g-2">
            <div className="col-lg-6">
              <h3 className="text-clr">Our Mission</h3>
              <p>
                There are many different ways to go about curating a successful
                blog — posts can written by physicians, hospital staff,
                patients, or esteemed guests, and often include video,
                announcements, patient stories, health and wellness advice, etc.
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="text-clr">Our Essence</h3>
              <p className="">
                A valuable compendium of innovative research topics, medical
                success stories, reporting on cutting edge medical technology,
                and inspiring stories, the Mount Sinai blog has something to
                teach everyone.
              </p>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-lg-6">
              <h3 className="text-clr">Our Promise</h3>
              <p className="">
                Dedicated to mothers and infants, the Overtake Medical Center
                blog explores everything parents need to know about raising a
                newborn: food choices, sleeping advice, choosing a pediatrician,
                the works.
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="text-clr">Our Vibe</h3>
              <p className="">
                From one of the nation’s top cancer centers, "Cancerwise" offers
                practical, insightful advice for cancer patients, caregivers,
                and medical practitioners. The blog covers everything, from what
                to pack for a hospital stay, to how journaling can ease fatigue.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;