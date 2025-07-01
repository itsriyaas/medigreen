import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const doctors = [
  {
    name: 'Dr. A G Rajan',
    role: 'Sr. Consultant General Medicine',
    image: 'https://thumbs.dreamstime.com/b/happy-male-medical-doctor-portrait-hospital-190210328.jpg'
  },
  {
    name: 'Dr. Joseph Philips',
    role: 'Sr. Consultant & HOD - Internal Medicine',
    image: 'https://avatars.mds.yandex.net/i?id=6a3e0e3f90f35ce66eea58ac8c30d1763e274a82-8567975-images-thumbs&ref=rim&n=33&w=251&h=200'
  },
  {
    name: 'Dr. Biji Bahuleyan',
    role: 'Head - Neurosurgery & Spine',
    image: 'https://avatars.mds.yandex.net/i?id=feb11099f3edd40e41308ca8711dd7249a18fd6a-5132586-images-thumbs&n=13'
  },
  {
    name: 'Dr. Anjali Nair',
    role: 'Consultant Pediatrician',
    image: 'https://i.pinimg.com/originals/51/15/9c/51159c3691b3da420c7ca94308434939.png'
  }
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
                  <p className="text-muted small">{doc.role}</p>
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
