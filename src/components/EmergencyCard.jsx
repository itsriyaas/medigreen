import React from 'react';
import { FaAmbulance, FaProcedures, FaPhoneAlt } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaAmbulance size={40} className="text-danger mb-3" />,
    title: '24/7 Ambulance',
    description: 'Rapid emergency transport service anytime you need it.',
    phone: '+91 8593959881',
  },
  {
    icon: <FaProcedures size={40} className="text-primary mb-3" />,
    title: 'Casualty',
    description: 'Immediate medical care for accidents and emergencies.',
    phone: '+91 8593959881',
  },
  {
    icon: <FaPhoneAlt size={40} className="text-success mb-3" />,
    title: 'Reception',
    description: 'For general queries, assistance, and appointments.',
    phone: '+91 8593959881',
  },
];

const EmergencyCardSection = () => {
  return (
    <section className="emergency-section py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {cardData.map((card, idx) => (
            <div className="col-12 col-md-4" key={idx}>
              <div className="card h-100 text-center p-4 shadow-sm border-0 rounded-4">
                {card.icon}
                <h5 className="fw-bold">{card.title}</h5>
                <p className="text-muted small">{card.description}</p>
                <a href={`tel:${card.phone}`} className="btn btn-danger btn-sm rounded-pill mt-2">
                  Call Now: {card.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyCardSection;
