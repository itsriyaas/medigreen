import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const galleryImages = [
  'assets/gallery/g2.jpg',
  'assets/gallery/g8.jpg',
  'assets/gallery/g9.jpg',
  'assets/gallery/g4.jpg',
  'assets/gallery/amb.jpg',
  'assets/gallery/g14.jpg',
];

const GallerySlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5" id="gallery">
      {/* Title */}
      <div className="text-center mb-4" data-aos="fade-up">
        <p className="text-success fw-semibold">Gallery</p>
        <h2 className="fw-bold display-5">Our Facilities & Events</h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {galleryImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0 shadow rounded-4 overflow-hidden" data-aos="zoom-in">
              <Link to={"/gallery"}>
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="img-fluid w-100"
                  style={{ height: '280px', objectFit: 'cover' }}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
{/* Video Section */}
<div className="mt-5" data-aos="fade-up">
  <div className="d-flex justify-content-center">
    <div className="ratio ratio-16x9" style={{ width: "720px", maxWidth: "100%" }}>
      <video
        src="assets/medigreen_video.mp4"
        title="Gallery Highlight Video"
        controls
        className="rounded"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default GallerySlider;
