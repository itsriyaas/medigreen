import React from 'react';

const VisionMissionValues = () => {
  return (
    <div className="container py-5">
      <div className="row g-4 align-items-stretch">
        {/* Vision & Mission Section */}
        <div className="col-lg-6 px-5" data-aos="fade-right">
          <div className="mb-5">
            <h2 className="fw-bold">Vision</h2>
            <p className="text-muted">
              Excellence in patient care with professional integrity and teamwork.
            </p>
            <hr />
          </div>
          <div>
            <h2 className="fw-bold">Mission</h2>
            <p className="text-muted">
              To ensure comprehensive medical care through continuous improvement in quality service.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="col-lg-6 bg-success text-white p-5 rounded" data-aos="fade-left">
          <h2 className="fw-bold text-center mb-4">Our Values</h2>
          <p><strong>Respect:</strong> We treat everyone in our community, including patients, their families and colleagues, with dignity.</p>
          <p><strong>Comprehensive care:</strong> We provide complete care through prevention and management of physical and emotional health concerns.</p>
          <p><strong>Quality & Safety:</strong> We ensure high standards through effective decision-making and interaction.</p>
          <p><strong>Integrity:</strong> We uphold professionalism, ethics, and patient trust at all times.</p>
          <p><strong>Teamwork:</strong> Our strength lies in collaborative work and mutual respect.</p>
          
          <div className="text-center mt-4">
            <a href="#" className="btn btn-danger px-4 py-2 rounded-pill fw-bold">
              READ MORE <span className="ms-2">➕</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;
