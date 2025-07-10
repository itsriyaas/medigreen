import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
    name: 'Dr. Edwin Joy - MD',
    title:'Physician',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr. Sunitha V. Narayanan. MD',
    title:'Pulmonologist [CIS]',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr. Syam Krishna . MD',
    title:'Psychiatrist',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr. Simmi Thampiraj Phd [PSY]',
    title:'Psychologist',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Sreeja Ragesh - BPT, CSPRS',
    title:'Physiotherapist',
    image: 'assets/avatar-male.png',
  },
  {
    name: 'Dr Rakendu - MBBS',
    title:'RMO',
    image: 'assets/avatar-famale.jpg',
  },
   {
    name: 'Dr Prabhudev',
    title:'RMO',
    image: 'assets/avatar-male.png',
  },
  
];

const DoctorsSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5" id="doctors">
      <div className="text-center mb-4" data-aos="fade-up">
        <p className="text-success fw-semibold">Meet the Team</p>
        <h2 className="fw-bold display-5">Our Doctors</h2>
        <div className="my-3">
          <button className="swiper-button-prev btn btn-light me-2">&#8592;</button>
          <button className="swiper-button-next btn btn-light">&#8594;</button>
        </div>
      </div>

     <Swiper
  modules={[Navigation]}
  spaceBetween={30}
  slidesPerView={1}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  breakpoints={{
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>
  {doctors.map((doc, index) => (
    <SwiperSlide key={index}>
      <div className="card border-0 shadow text-center rounded-4 mb-5" data-aos="fade-up">
        <img
          src={doc.image}
          alt={doc.name}
          className="card-img-top rounded-top mx-auto"
          style={{
            height: '200px',
            width: '200px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginTop: '20px',
          }}
        />
        <div className="card-body">
          <h5 className="fw-bold">{doc.name}</h5>
          <hr className="text-success" style={{ width: '60px', margin: 'auto' }} />
          <p className="text-muted small mt-2">{doc.title}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default DoctorsSlider;
