import React from 'react';
import { FaPhoneAlt, FaAmbulance, FaClock } from 'react-icons/fa';

const EmergencyCardSection = () => {
  return (
    <section className="emergency-section py-5 text-white text-center">
      <div className="container">
        <div className="card border-0 shadow-lg rounded-4 p-4 bg-white text-dark">
          <div className="row align-items-center g-4">
            <div className="col-md-3 text-center">
              <FaAmbulance size={60} className="text-danger" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">24x7 Emergency Casualty</h4>
              <p className="text-muted mb-0">
                Our emergency services are available round-the-clock with immediate medical attention.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <a href="tel:+919012345678" className="btn btn-danger btn-lg px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2">
                <FaPhoneAlt /> +91 8593959881
              </a>
              <p className="small mt-2 text-muted"><FaClock /> Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCardSection;
