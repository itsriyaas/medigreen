import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const galleryImages = [
  'https://avatars.mds.yandex.net/get-ydo/1817195/2a0000016b0be35138e5abfe01d780d4ea05/diploma',
  'https://i.abcnewsfe.com/a/b50f5b4d-9512-4a34-bc8b-017a30339f85/hospital-room-rf-gty-ml-240329_1711713757738_hpMain.jpg',
  'https://static.tildacdn.com/tild3331-3363-4563-b039-633961356466/1-52.jpg',
  'https://static.tildacdn.com/tild6163-3063-4562-a463-383666356161/3248.jpg',
  'https://i.ytimg.com/vi/aoqDt0XUBxU/maxresdefault.jpg',
  'http://architizer-prod.imgix.net/media/1392745354741sm-010.jpg?w=1680&amp;q=60&amp;auto=format,compress&amp;cs=strip',
];

const GallerySlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5" id="gallery">
      <div className="text-center mb-4" data-aos="fade-up">
        <p className="text-success fw-semibold">Gallery</p>
        <h2 className="fw-bold display-5">Our Facilities & Events</h2>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
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
        {galleryImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0 shadow rounded-4 overflow-hidden" data-aos="zoom-in">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="img-fluid w-100"
                style={{ height: '280px', objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
