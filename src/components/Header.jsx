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
      <a href='https://g.co/kgs/7R183MB'><FaMapMarkerAlt/></a>
    </div>
  </div>
);

const MainNavbar = () => {
  return (
    <>
      <TopBar />
      <Navbar expand="lg" bg="white" variant="light" className="border-bottom">
        <Container>
          <Navbar.Brand href="#">
            <img src="src/assets/178 x 61.png" alt="Medigreen Hospital" height="70" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto gap-4">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>Home</NavLink>
<NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>About Us</NavLink>
<NavLink to="/facilities" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>Facilities / Services</NavLink>
 <NavDropdown title="Departments" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paediatrics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Physiotherapy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Another</NavDropdown.Item>
            </NavDropdown>
<NavLink to="/doctors" className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'}>Doctors</NavLink>
<NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'}>Gallery</NavLink>
<NavLink to="/career" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>Career</NavLink>
<NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link text-success ' : 'nav-link'}>Contact</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
