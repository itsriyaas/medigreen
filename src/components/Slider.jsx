// Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: 'assets/banner.jpg',
      
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.caption}
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="text-center mt-2">{slide.caption}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
