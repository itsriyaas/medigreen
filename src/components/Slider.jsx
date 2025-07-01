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
      image: 'https://cardimed-asia.com/Bilder/hospital-care-hero-low.jpg',
      
    },
    {
      id: 2,
      image: 'https://i.klerk.ru/Mm1g_1WXDW_aJP-ZA2RumuWm4k-u1fkupRxtPkk7b3M/w:2100/h:1179/aHR0cHM6Ly93d3cu/a2xlcmsucnUvdWdj/L2Jsb2dQb3N0LzZj/MzBlM2E4NDg4N2Ux/ODJmZTZkNjRiN2Y0/NTAwMDUxLmpwZw.webp',
      
    },
    {
      id: 3,
      image: 'https://www.dutypoint.com/app/uploads/2020/03/Category-5-ScubaTANK-AB-Morriston-Hospital.webp',
   
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
              style={{ width: '100%', height: '80vh' }}
            />
            <div className="text-center mt-2">{slide.caption}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
