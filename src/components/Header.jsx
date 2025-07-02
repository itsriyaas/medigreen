import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const TopBar = () => (
  <div className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="headitems d-flex gap-3 align-items-center">
      <FaEnvelope /> <span>rrmedigreen@gmail.com</span>
      <FaPhoneAlt /> <span>0480 286 1727</span>
    </div>
    <div className="header-links d-flex gap-3">
      <a href=''><FaFacebookF /></a>
      <a href=''><FaTwitter /></a>
      <a href='https://maps.app.goo.gl/HBDkaJ25SJ7fWPpR8' target='_blank'><FaMapMarkerAlt/></a>
    </div>
  </div>
);

const MainNavbar = () => {
  return (
    <>
      <TopBar />
      <Navbar expand="lg" bg="white" variant="light" className="border-bottom">
        <Container>
          <Navbar.Brand href="/">
            <img src="assets/medigreen_logo.png" alt="Medigreen Hospital" height="60" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto gap-md-3">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>Home</NavLink>
<NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>About Us</NavLink>
<NavLink to="/facilities" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>Facilities</NavLink>
<NavLink to="/doctors" className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'}>Doctors</NavLink>
<NavLink to="/news" className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'}>News</NavLink>
<NavLink to="/career" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>Career</NavLink>
<NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'}>Gallery</NavLink>
<NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>Contact</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
