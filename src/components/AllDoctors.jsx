import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const doctors = [
  {
    name: 'Dr. Ajirani - MD [Ukraine]',
    title: 'General Practitioner',
    image: 'assets/avatar-famale.jpg',
  },
  {
    name: 'Dr. Vipish - MS',
    title: 'Orthopaedic Surgeon',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr. Suresh - MS',
    title:'Laproscopic Surgeon',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr. Nadeera Bhanu',
    title:'Diabetology',
    image: 'assets/avatar-famale.jpg',
  },
  {
    name: 'Dr. Jayachandran MD',
    title:'Paediatrician',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr. Arjun - MBBS',
    title:'Physician',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr. Edwin Joy - MD',
    title:'General Medicine',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr Ragendu - MBBS',
    title:'RMO',
    image: 'assets/avatar-famale.jpg',
  },
   {
    name: 'Dr Prabhudev',
    title:'RMO',
    image: 'assets/avatar-male.png',
  },
  
];

const DoctorsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Banner */}
      <div className="doctor-banner text-white d-flex justify-content-center align-items-center">
        <div className="text-center" data-aos="fade-down">
          <h1 className="display-5 fw-bold">Meet Our Doctors</h1>
          <p className="lead">Compassionate care from trusted hands</p>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="container py-5">
        <div className="row g-4">
          {doctors.map((doc, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index} data-aos="fade-up">
              <div className="card h-100 shadow-sm text-center border-0">
                <img src={doc.image} className="card-img-top" alt={doc.name} style={{ height: '260px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{doc.name}</h5>
                  <p className="text-muted small">{doc.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorsSection;
