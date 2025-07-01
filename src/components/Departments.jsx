// DepartmentSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const departments = [
  {
    title: 'Paediatrics',
    description: 'The Department of Paediatrics provides comprehensive medical care for infants, children, and adolescents. Our team of experienced paediatricians is dedicated to monitoring your child’s growth, development, and overall health',
    image: 'https://www.huggies.ru/-/media/F3465A5F9CA849B6A8C8DF847283FE29.ashx',
    icon: 'assets/icons/icon-pediatric.jpg'
  },
  {
    title: 'Physiotherapy',
    description: 'The Physiotherapy Department focuses on restoring, maintaining, and enhancing physical strength, function, and mobility. Our skilled physiotherapists provide personalized care for patients recovering from injuries, surgeries, strokes, or chronic pain conditions.',
    image: 'https://centromedicoabc.com/storage/2022/12/fisioterapeuta.jpg',
    icon: 'assets/icons/physical-therapy.png'
  },
  {
    title: 'Cardiology',
    description: 'Our Cardiology Department offers expert care for heart-related conditions through advanced diagnostics and compassionate treatment. We specialize in managing hypertension, heart attacks, arrhythmias, and more ensuring every patient receives timely.',
    image: 'https://stockhead.com.au/wp-content/uploads/2024/04/AVR-profile-1536x868.jpg',
    icon: 'assets/icons/cardiology.png'
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
