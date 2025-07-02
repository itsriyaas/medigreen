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
    icon: 'assets/icons/paediatrics.png'
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
  {
    title: 'General Medicine',
    description: 'Our General Medicine department serves as the first point of contact for patients seeking diagnosis, treatment, and ongoing care for a wide range of medical conditions. Staffed by experienced physicians and supported by advanced diagnostic tools.',
    image: 'https://relaxmedi.ru/upload/medialibrary/a49/99e576sig2mo5xqjfdm2tt4w7c2muybe.jpg',
    icon: 'assets/icons/health.png'
  },
  {
    title: 'Diabetology ',
    description: 'The Diabetology Department is dedicated to the comprehensive diagnosis, treatment, and long-term management of all types of diabetes and its related complications. We combine clinical expertise with lifestyle guidance to help patients lead healthier lives despite their diagnosis.',
    image: 'https://www.who.int/images/default-source/searo---images/health-topic-images/diabetes/diabetesbanner.tmb-1920v.jpg?Culture=en&sfvrsn=10b34adb_1',
    icon: 'assets/icons/diabetes.png'
  },
   {
    title: 'ENT',
    description: 'Our ENT Department (Otorhinolaryngology) offers comprehensive care for conditions related to the ear, nose, throat, head, and neck. Whether its a simple infection or a complex surgical issue, our specialists provide accurate diagnosis, advanced treatment, and personalized care.',
    image: 'https://www.hno-emsdetten.de/wp-content/uploads/sites/166/Chronische-Entzuendungen.jpeg',
    icon: 'assets/icons/ent.png'
  },
  {
    title: 'Orthopaedic',
    description: 'The Orthopaedics Department provides expert care for a wide range of bone, joint, and muscle conditions. From fractures and arthritis to sports injuries and joint replacements, our team of experienced orthopaedic surgeons ensures each patient receives accurate diagnosis and personalized treatment.',
    image: 'https://assets-ratgeber.docfinder.at/uploads/Die-beliebtesten-Orthopa%CC%88den.jpg',
    icon: 'assets/icons/orthopaedics.png'
  },
   {
    title: 'Laparoscopic Surgery',
    description: 'Our Laparoscopic Surgery Department specializes in minimally invasive procedures that ensure faster recovery, less pain, and minimal scarring. Using advanced laparoscopic techniques, our expert surgeons perform a variety of diagnostic and surgical procedures with high accuracy and safety.',
    image: 'https://www.soupstock.in/system/files/images/dd/f5/shutterstock_1131832418.jpg',
    icon: 'assets/icons/surgery.png'
  },
   {
    title: 'Psychology',
    description: 'The Psychology Department is dedicated to nurturing mental health through compassionate, evidence-based care. We understand that emotional well-being is just as important as physical health, and our experienced psychologists are here to help individuals navigate life’s challenges with clarity and resilience.',
    image: 'https://i.vuzopedia.ru/storage/app/uploads/public/5a9/028/ca7/5a9028ca7fa15970420108.jpg',
    icon: 'assets/icons/psychology.png'
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
