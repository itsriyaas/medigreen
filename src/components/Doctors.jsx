import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const doctors = [
  {
    name: 'Dr. A G Raj',
    title: 'Sr. Consultant General Medicine',
    image: 'https://harrisburgmagazine.com/wp-content/uploads/2020/02/shutterstock_519507367-scaled.jpg',
  },
  {
    name: 'Dr. Joseph Philips',
    title: 'Sr. Consultant & HOD - Internal Medicine',
    image: 'https://cdn.mknc.ru/contents/albums/preview/2000x2000/15000/15281/preview.jpg',
  },
  {
    name: 'Dr. Natasha John',
    title:
      'Head : Department of Neurosciences & Neurosurgery',
    image: 'https://cdn.mknc.ru/contents/albums/preview/2000x2000/13000/13294/preview.jpg',
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
            <div className="card border-0 shadow text-center rounded-4 mb-5 ms-2 me-2" data-aos="fade-up">
              <img
                src={doc.image}
                alt={doc.name}
                className="card-img-top rounded-top"
                style={{ height: '350px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="fw-bold">{doc.name}</h5>
                <hr className="text-success" style={{ width: '60px', margin: 'auto' }} />
                <p className="text-muted small mt-2">{doc.title}</p>
                <a href="#" className="btn btn-danger rounded-pill mt-3">
                  READ MORE <span className="ms-2">➕</span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorsSlider;
