// MetroInfoSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRegClock, FaHeart, FaPills, FaUserMd } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';

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
              Medigreen general hospital was commissioned in January 2007 under the visionary leadership of <strong>Mr. Rakesh Manu S.R, Managing Director</strong> and his wife <strong>Dr. Ajirani - MD [Ukraine]</strong> to take care of all medical needs. Medigreen Hospital come up with an expert insight into health services has set highest standards for quality and care to ensure top-notch healthcare experience.
            </p>
            <a href='https://api.whatsapp.com/send?phone=911234567890&text=Hello%20Medigreen%20Hospital' target='_blank'><button className='btn btn-success mb-4'><BsWhatsapp className='me-3' />BOOK AN APPOINTMENT</button></a>
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
