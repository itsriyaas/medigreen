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
              Provide comprehensive caring and cost effective medical treatment of global standard , through a team of highly qualified and committed medical professionals with state of the art medical equipment
            </p>
            <hr />
          </div>
          <div>
            <h2 className="fw-bold">Mission</h2>
            <p className="text-muted">
              To establish a health care complex of international Standards for providing cost effective and comprehensive health care to match global bench mark.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="col-lg-6 bg-success text-white p-5 rounded">
          <h2 className="fw-bold text-center mb-4">Our Values</h2>
          <p><strong>Innovation:</strong> Embrace change, encourage innovation, and continually remain at the forefront of advances in healthcare for the good of our patients.</p>
          <p><strong>Compassion:</strong> Demonstrate caring and sensitivity for the diverse backgrounds of our patients and colleagues and generosity in our communities.</p>
          <p><strong>Integrity:</strong> Adhere to high ethical and professional standards, demonstrating commitment to our responsibilities with trust, honesty and respect for all.</p>
          <ul>
            <li>Patient satisfaction</li>
            <li>Patient safety</li>
            <li>Respect of all beliefs</li>
            <li>Commitment to our community</li>
            <li>Team work</li>
            <li>Interpersonal communication</li>
            <li>Motivation</li>
            <li>Equal opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;
