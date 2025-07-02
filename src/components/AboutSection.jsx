import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import VisionMissionValues from './VisonMission';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {

  return (
    <>
    {/* Banner */}
        <div className="gallery-banner text-white d-flex justify-content-center align-items-center">
          <div className="text-center" data-aos="fade-down">
            <h1 className="display-5 fw-bold">About Us</h1>
          </div>
        </div>
        <Container className="py-5">
          <Row className="align-items-center">
            {/* Left Column - Text */}
            <Col md={6} data-aos="fade-right">
              <h2 className="fw-bold text-success">About Medigreen Hospital</h2>
              <p className="text-justify mt-3">
                Medigreen general hospital was commissioned in January 2007 under the visionary leadership of <strong>Mr. Rakesh Manu S.R, Managing Director</strong>- and his wife <strong>Dr. Ajirani - MD [Ukraine] </strong>to take care of all medical needs. Medigreen Hospital come up with an expert insight into health services has set highest standards for quality and care to ensure top-notch healthcare experience.</p>
               <p className="text-justify">
                 The hospital designed and conceived in a different way sprawls in 50 cents of land adjacent to Thrissur Kodungallur main road. Medigreen Hospital is equipped with an operation theatre, intensive care unit, 24-Hour Accident & Emergency care unit, most modern radiological equipment, 24 Hour Pharmacies and clinical Laboratories,  operation theatre, full fledged medical ICU, ample car parking facilities and more.The hospital has evolved to its present form from his extraordinary vision. A dream cherished by the management; to provide the most advanced healthcare to the society; a complete hospital that has unique facilities, affordable treatment costs at a location very much in the heart of the city.
              </p>
              <p className="text-justify">
                 Upholding the motto of quality healthcare, adopting state-of-the-art equipment and bringing together most modern facilities, Medigreen Hospital redefines the healthcare scenario of Kerala. Our vision is to assure comprehensive and affordable healthcare for all. Renowned specialists along with well-trained paramedical staff ensure a top-quality healthcare experience. From diagnosis to analysis, each phase of treatment is bestowed with utmost care and dedication.
              </p>
              <Link to={"/services"}><Button variant="success" className="mt-3">Explore Services</Button></Link>
            </Col>
    
            {/* Right Column - Image */}
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="assets/medigreen_hospital.webp"
                alt="Medigreen Hospital"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
        <VisionMissionValues/>
    </>
  );
};

export default AboutUsSection;
