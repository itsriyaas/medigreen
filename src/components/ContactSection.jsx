// src/components/ContactSection.jsx
import React from 'react';
import { BiMobile } from 'react-icons/bi';
import { FaHospital, FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';

const ContactSection = () => {
  return (
    <>
     {/* Banner */}
        <div className="contact-banner text-white d-flex justify-content-center align-items-center">
          <div className="text-center" data-aos="fade-down">
            <h1 className="display-5 fw-bold">Contact Us</h1>
          </div>
        </div>
      <section className="contact-section py-5">
        <div className="container">
          
          <div className="row g-4 align-items-stretch">
            {/* Contact Form */}
            <div className="col-md-6" data-aos="fade-right">
              <form className="p-4 bg-light rounded shadow-sm">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-success">Send Message</button>
              </form>
            </div>
  
            {/* Map Embed */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="h-100 rounded shadow-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.686675050405!2d76.21512299999999!3d10.2868099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081daf88f9c981%3A0x6db43670f899d13b!2sMedigreen%20Hospital!5e0!3m2!1sen!2sin!4v1751359387025!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="border-0 w-100 h-100"
                ></iframe>
              </div>
            </div>
          </div>
           {/* Contact Info */}
            <div className='contact-info mt-5'>
              <p><FaHospital className='me-2'/> Medigreen Hospital</p>
              <p><IoLocationOutline className='me-2' />Manakkalappadi, Thekkumkara, Thrissur, Kerala 680682</p>
              <a href='tel:04802861727'><FaPhone className='me-2'/>0480 2861727</a><br />
              <a href="tel:8593959881"><BiMobile className='me-2'/>8593959881, 9895161727</a><br />
              <a href='mailto:rrmedigreen@gmail.com'><IoMdMail className='me-2'/>rrmedigreen@gmail.com</a>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
