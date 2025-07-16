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
            <p>
              Medigreen Hospital was commissioned on 7th January 2017 under the visionary leadership of <strong>Mr. Ragesh Manu S.R, Managing Director</strong> and his wife <strong>Dr. Ajirani MD [Ukraine]</strong> to take care of all medical needs. Medigreen Hospital come up with an expert insight into health services has set highest standards for quality and care to ensure top-notch healthcare experience.
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
                <FaRegClock size={48} className="text-success me-3" />
                <div>
                  <h6><strong>24 Hours Services</strong></h6>
                  <p className="text-muted mb-0">Facilities include Pharmacy, Casualty, Ambulance Services etc.</p>
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
                <FaPills size={48} className="text-success me-3" />
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
                <FaHeart size={48} className="text-success me-3" />
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
                <FaUserMd size={48} className="text-success me-3" />
                <div>
                  <h6><strong>Humble Staff</strong></h6>
                  <p className="text-muted mb-0">Our professional and kind staff make every visit comfortable.</p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
     <Row className="mb-5 align-items-center">
  <Col md={8}>
    <h2>MD's Message</h2>
    <p className="text-muted">
      Hearty welcome to our web to know about our services and functions. All set to become a landmark in the field of medical care, Medigreen Hospital has gone leaps and bounds to deliver its mission of bringing quality healthcare services for all. We are aligned with our guiding principle “Caring for what matters most”, which is the virtue by which every individual at Medigreen Hospital works. The team of our expert medical professionals will constantly endeavour to provide accessible, affordable and best available healthcare services in Thrissur Dist. Since its commencement, this hospital has continuously evolved in the field of medical science.
    </p>
    <p className="text-muted">
      Great ideologies have greater responsibilities and the goals in healthcare are to safeguard, encourage and at times cultivate the social fabric of the society as a whole. We at Medigreen Hospital are earnestly and continuously striving our best to scale newer heights in the pursuit of excellence. Our hospital has become a name that spells assurance for the well-being of the patients. We are committed to make available to the public the benefits of the most modern and technological developments in the field of medical sciences which are a blend of technology along with impeccable patient care. The hospital has attained the highest standards of healthcare along with administrative efficiency, which has led to its accreditation from ISO Certification, which is on pipeline. Also we have the arrangements that if required concerned doctors visit the houses to check on bed-ridden patients.
    </p>
    <p className="text-muted">
      Through our essence of high teamwork, we bring together all necessary disciplines and skills from many resources of our organization to serve our patients better and attempt to set a league of its own. We assure that we shall strive to carry out all the good proposals from your part, of course, subject to our means and to continue our earnest efforts steadfastly to provide more and more services to the patients and the public where every moment is as new as it is special. Life is about living every second to the fullest and about making every day an experience to enjoy and cherish. We at Medigreen Hospital cherish every moment spent in making your life healthier.
    </p>
    <p className="text-muted">
      Thank you for allowing us to be a part of your healthcare journey.
    </p>
    <p>
      <strong>Ragesh Manu S.R.</strong><br />
      Managing Director - Medigreen Hospital
    </p>
  </Col>

  <Col md={4} className="mb-4">
    <img
      src="assets/md_photo.jpg"
      alt="MD's Photo"
      width={300}
      className="img-fluid rounded"
    />
  </Col>
</Row>

    </Container>
  );
};

export default InfoSection;
