// DepartmentSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { Link } from 'react-router-dom';

const departments = [
  {
    id: 'Paediatrics',
    title: 'Paediatrics',
    description: 'The Department of Paediatrics provides comprehensive medical care for infants, children, and adolescents. Our team of experienced paediatricians is dedicated to monitoring your child’s growth, development, and overall health',
    fullDescription:'',
    image: '/assets/services/paediatrics.jpg',
    icon: 'assets/icons/paediatrics.png'
  },
  {
    id: 'Physiotherapy',
    title: 'Physiotherapy',
    description: 'The Physiotherapy Department focuses on restoring, maintaining, and enhancing physical strength, function, and mobility. Our skilled physiotherapists provide personalized care for patients recovering from injuries, surgeries, strokes, or chronic pain conditions.',
    fullDescription:'',
    image: '/assets/services/physiotherapy.jpg',
    icon: 'assets/icons/physical-therapy.png'
  },
  {
    id: 'GeneralM',
    title: 'General Medicine',
    description: 'Our General Medicine department serves as the first point of contact for patients seeking diagnosis, treatment, and ongoing care for a wide range of medical conditions. Staffed by experienced physicians and supported by advanced diagnostic tools.',
    fullDescription:'',
    image: '/assets/services/general_medicine.jpg',
    icon: 'assets/icons/health.png'
  },
  {
    id: 'Diabetology',
    title: 'Diabetology ',
    description: 'The Diabetology Department is dedicated to the comprehensive diagnosis, treatment, and long-term management of all types of diabetes and its related complications. We combine clinical expertise with lifestyle guidance to help patients lead healthier lives despite their diagnosis.',
    fullDescription:'',
    image: '/assets/services/diabetology.webp',
    icon: 'assets/icons/diabetes.png'
  },
   {
    id: 'ENT',
    title: 'ENT',
    description: 'Our ENT Department (Otorhinolaryngology) offers comprehensive care for conditions related to the ear, nose, throat, head, and neck. Whether its a simple infection or a complex surgical issue, our specialists provide accurate diagnosis, advanced treatment, and personalized care.',
    fullDescription:'',
    image: '/assets/services/ent.jpeg',
    icon: 'assets/icons/ent.png'
  },
  {
    id: 'Orthopaedic',
    title: 'Orthopaedic',
    description: 'The Orthopaedics Department provides expert care for a wide range of bone, joint, and muscle conditions. From fractures and arthritis to sports injuries and joint replacements, our team of experienced orthopaedic surgeons ensures each patient receives accurate diagnosis and personalized treatment.',
    fullDescription:'',
    image: '/assets/services/orthopaedic.webp',
    icon: 'assets/icons/orthopaedics.png'
  },
   {
    id: 'Surgery',
    title: 'Surgery',
    description: 'The Surgery Department at Medigreen Hospital is committed to delivering safe, effective, and patient-centered surgical care using the latest techniques and technologies.',
    fullDescription:'The Surgery Department at Medigreen Hospital is committed to delivering safe, effective, and patient-centered surgical care using the latest techniques and technologies. Our team of highly skilled surgeons and anesthetists specializes in a wide range of surgical procedures—both elective and emergency—across multiple specialties.',
    image: '/assets/services/surgery.jpg',
    icon: 'assets/icons/surgery.png'
  },
   {
    id: 'Pulmonology',
    title: 'Pulmonology',
    description: 'The Pulmonology Department specializes in the diagnosis, treatment, and management of conditions related to the respiratory system.',
    fullDescription:'The Pulmonology Department specializes in the diagnosis, treatment, and management of conditions related to the respiratory system. Our expert pulmonologists provide comprehensive care for a wide range of lung and breathing disorders, including asthma, chronic obstructive pulmonary disease (COPD), pneumonia, tuberculosis, bronchitis, and sleep-related breathing issues.',
    image: '/assets/services/pulmonology.jpg',
    icon: 'assets/icons/pulmonology.png'
  },
  {
    id: 'Psychiatry',
    title: 'Psychiatry',
    description: 'The Psychiatry Department is dedicated to promoting mental and emotional well-being through expert diagnosis, compassionate care, and individualized treatment.',
    fullDescription:'The Psychiatry Department is dedicated to promoting mental and emotional well-being through expert diagnosis, compassionate care, and individualized treatment. Our team of experienced psychiatrists addresses a wide range of mental health conditions including depression, anxiety, bipolar disorder, schizophrenia, stress-related disorders, and more.',
    image: '/assets/services/psychiatry.jpg',
    icon: 'assets/icons/psychiatry.png'
  },
    {
    id: 'Psychology',
    title: 'Psychology',
    description: 'The Psychology Department is committed to enhancing emotional and psychological well-being through expert care, empathy, and scientifically grounded methods.',
    fullDescription:'The Psychology Department is committed to enhancing emotional and psychological well-being through expert care, empathy, and scientifically grounded methods. Our trained psychologists provide counseling and therapy for individuals facing stress, anxiety, depression, trauma, behavioral issues, and life transitions.',
    image: '/assets/services/psychology.jpg',
    icon: 'assets/icons/brain.png'
  },
  // Add more departments as needed
];

const DepartmentSlider = () => {
  return (
    <div className="container py-5  text-center">
        <p className="text-success fw-semibold">Departments</p>
      <h2 className="fw-bold display-5 mb-4 animate__animated animate__fadeInDown">Our Services</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }}
        navigation
        autoplay={{ delay: 3000 }}
        loop
      >
        {departments.map((dept, index) => (
          <SwiperSlide key={index}>
            <div className="card h-100 mb-5 shadow animate__animated animate__fadeInUp">
              <img src={dept.image} className="card-img-top" alt={dept.title} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body position-relative">
                <div className="position-absolute top-0 start-50 translate-middle bg-success p-3 rounded-circle" style={{ marginTop: '-30px' }}>
                  <img src={dept.icon} alt="icon" style={{ height: '30px' }} />
                </div>
                <h5 className="mt-4 fw-bold">{dept.title}</h5>
                <p className="text-muted small">{dept.description}</p>
                  <button className="btn btn-danger mt-3 rounded-pill px-4">
                    READ MORE <span className="ms-2">➕</span>
                  </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DepartmentSlider;
