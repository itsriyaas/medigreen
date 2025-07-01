// MetroInfoSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRegClock, FaHeart, FaPills, FaUserMd } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InfoSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col md={6}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <h4>
              Welcome to <strong>Medigreen Hospital</strong>
            </h4>
            <p className="text-muted">
              Medigreen Hospital is a modern, multi-specialty healthcare institution located in Irinjalakuda, Thrissur. Renowned for its commitment to excellence, Medigreen brings together a team of highly skilled medical professionals dedicated to compassionate and quality care. The hospital stands out for its advanced infrastructure, patient-first approach, and unwavering focus on delivering personalized treatment. At Medigreen, every effort is made to ensure the well-being of patients through expertise, empathy, and innovation in healthcare.
            </p>
            <Link to={"/about"}><Button variant="info" className="text-white fw-bold px-4 mb-5">continue</Button></Link>
          </motion.div>
        </Col>

        <Col md={6}>
          <Row className="gy-4">
            <Col xs={12} md={6}>
              <motion.div
                className="d-flex"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <FaRegClock size={48} className="text-info me-3" />
                <div>
                  <h6><strong>24 Hours Services</strong></h6>
                  <p className="text-muted mb-0">Facilities include Pharmacy, Lab, ECG, Digital X-ray, etc.</p>
                </div>
              </motion.div>
            </Col>

            <Col xs={12} md={6}>
              <motion.div
                className="d-flex"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <FaPills size={48} className="text-info me-3" />
                <div>
                  <h6><strong>Medical Consulting</strong></h6>
                  <p className="text-muted mb-0">We ensure ethical, transparent care with a people-centric approach.</p>
                </div>
              </motion.div>
            </Col>

            <Col xs={12} md={6}>
              <motion.div
                className="d-flex"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <FaHeart size={48} className="text-info me-3" />
                <div>
                  <h6><strong>Care with Love</strong></h6>
                  <p className="text-muted mb-0">Treatment with love and empathy to aid faster recovery.</p>
                </div>
              </motion.div>
            </Col>

            <Col xs={12} md={6}>
              <motion.div
                className="d-flex"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <FaUserMd size={48} className="text-info me-3" />
                <div>
                  <h6><strong>Humble Staff</strong></h6>
                  <p className="text-muted mb-0">Our professional and kind staff make every visit comfortable.</p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoSection;
