import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <Row className="mb-4">
          {/* Logo & About */}
          <Col md={3}>
            <img src="assets/footer_logo.png" alt="Medigreen Logo" style={{ maxWidth: '120px' }} />
            <p className="mt-3 text-justify">
             Medigreen Hospital is a modern, multi-specialty healthcare institution located in Manakkalappadi, Thekkumkara, Thrissur. Renowned for its commitment to excellence, Medigreen brings together a team of highly skilled medical professionals dedicated to compassionate and quality care. 
            </p>
          </Col>

          {/* Useful Links */}
          <Col md={3}>
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="footerlinks list-unstyled mt-3">
              <Link to={"/about"}><li>+ About us</li></Link>
              <Link to={"/doctors"}><li>+ Doctors</li></Link>
              <Link to={"/facilities"}><li>+ Facilities</li></Link>
              <Link to={"/gallery"}><li>+ Gallery</li></Link>
              <Link to={"/contact"}><li>+ Contact Us</li></Link>
            </ul>
          </Col>

          {/* Latest News */}
          <Col md={3}>
            {/* <h5 className="fw-bold">Latest News</h5>
            <div className="d-flex mt-3">
              <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/17/full/1702832643-9438.jpg?im=FeatureCrop,size=(826,465)" alt="News1" width="100" height="50" className="me-2" />
              <div>
                <strong>Hypertension: Symptoms and Management</strong>
                <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>19 May 2025</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img src="https://www.aljazeera.com/wp-content/uploads/2021/05/AP_21131183493358.jpg?resize=1170%2C780&quality=80" alt="News2" width="100" height="50" className="me-2" />
              <div>
                <strong>Getting to know your Thyroid</strong>
                <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>17 May 2025</p>
              </div>
            </div> */}
          </Col>

          {/* Contact */}
          <Col md={3}>
            <div className='contact-info'>
              <h5 className="fw-bold">Contact Us</h5>
              <a href='https://maps.app.goo.gl/MWZ9bvpw8J43AsiR9' target='_blank'><p><FaMapMarkerAlt className="me-2" /> Medigreen Hospital,<br />Manakkalappadi, Thekkumkara <br />Thrissur, Kerala 680682</p></a>
              <a href='tel:04802861727'><FaPhoneAlt className="me-2" /> <strong>0480 286 1727</strong></a><br />
              <a href='mailto:rrmedigreen@gmail.com'><FaEnvelope className="me-2" />rrmedigreen@gmail.com</a>
              <p><FaClock className="me-2" /> Mon - Sun 24 hours</p>
            </div>
          </Col>
        </Row>

 
      </Container>
             {/* Bottom */}
        <div className="text-center bg-success text-white py-3 mt-3">
          Copyright © 2025 Medigreen Hospital. All Rights Reserved.
          Powered by <strong><a href='https://theaitsolutions.net/' target='_blank' style={{color:"white",textDecoration:'none'}}>Thea IT Solutions</a></strong>
        </div>
    </footer>
  );
};

export default Footer;
