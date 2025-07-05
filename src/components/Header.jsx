import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const TopBar = () => (
  <div className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="headitems d-flex gap-3 align-items-center">
      <a href='mailto:rrmedigreen@gmail.com'><FaEnvelope /> <span>rrmedigreen@gmail.com</span></a>
      <a href='tel:04802861727'><FaPhoneAlt /> <span>0480 286 1727</span></a>
    </div>
    <div className="header-links d-flex gap-3">
      <a href='https://www.facebook.com/medigreen.hospital/' target='_blank'><FaFacebookF /></a>
      <a href=''><FaTwitter /></a>
      <a href='https://maps.app.goo.gl/HBDkaJ25SJ7fWPpR8' target='_blank' rel="noopener noreferrer"><FaMapMarkerAlt/></a>
    </div>
  </div>
);

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <>
      <TopBar />
      <Navbar expand="lg" bg="white" variant="light" className="border-bottom" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/">
            <img src="assets/medigreen_logo.png" alt="Medigreen Hospital" height="60" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse>
            <Nav className="ms-auto gap-md-3">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'} onClick={closeMenu}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'} onClick={closeMenu}>About Us</NavLink>
              <NavLink to="/facilities" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'} onClick={closeMenu}>Facilities</NavLink>
              <NavLink to="/doctors" className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'} onClick={closeMenu}>Doctors</NavLink>
              <NavLink to="/news" className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'} onClick={closeMenu}>News</NavLink>
              <NavLink to="/career" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'} onClick={closeMenu}>Career</NavLink>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'} onClick={closeMenu}>Gallery</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'} onClick={closeMenu}>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
