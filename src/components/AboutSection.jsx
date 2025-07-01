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
              <p className="text-muted mt-3">
                Medigreen Hospital is a state-of-the-art multi-specialty healthcare institution located in Irinjalakuda, Thrissur.
                We are committed to delivering exceptional medical care through a team of experienced doctors, modern facilities,
                and a patient-first approach.
              </p>
              <p className="text-muted">
                With services ranging from general medicine to advanced specialties, Medigreen stands for quality care, compassion,
                and innovation in healing.
              </p>
              <Link to={"/services"}><Button variant="success" className="mt-3">Explore Services</Button></Link>
            </Col>
    
            {/* Right Column - Image */}
            <Col md={6} data-aos="fade-left" className="text-center mt-4 mt-md-0">
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
