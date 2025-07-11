import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const slides = [
    {
      id: 1,
      image: 'assets/banner.jpg',
      mobileImage: '/assets/mobile-banner.jpg', // rename the uploaded file to this
      caption: ''
    }
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
              src={isMobile ? slide.mobileImage : slide.image}
              alt={slide.caption}
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
            {slide.caption && <div className="text-center mt-2">{slide.caption}</div>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
