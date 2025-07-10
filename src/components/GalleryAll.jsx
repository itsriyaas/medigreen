import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const galleryImages = [
  'assets/gallery/g2.jpg',
  'assets/gallery/g22.jpg',
  'assets/gallery/g8.jpg',
  'assets/gallery/g9.jpg',
  'assets/gallery/g3.jpg',
  'assets/gallery/g4.jpg',
  'assets/gallery/g10.jpg',
  'assets/gallery/amb.jpg',
  'assets/gallery/g12.jpg',
  'assets/gallery/g13.jpg',
  'assets/gallery/g14.jpg',
  'assets/gallery/g15.jpg',
  'assets/gallery/g16.jpg',
  'assets/gallery/g17.jpg',
  'assets/gallery/g18.jpg',
  'assets/gallery/g19.jpg',
  'assets/facilities/fullyautomated.jpg',
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Banner */}
      <div className="gallery-banner text-white d-flex justify-content-center align-items-center">
        <div className="text-center" data-aos="fade-down">
          <h1 className="display-5 fw-bold">Gallery</h1>
          <p className="lead">Captured Moments</p>
        </div>
      </div>

      <div className="container py-5" id="full-gallery">
        <div className="row g-4">
          {galleryImages.map((src, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index} data-aos="zoom-in">
              <div
                className="gallery-card shadow-sm rounded-3 overflow-hidden"
                onClick={() => openImage(index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={src} alt={`Gallery ${index + 1}`} className="img-fluid w-100" style={{ height: '220px', objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="image-modal d-flex justify-content-center align-items-center" onClick={closeImage} style={{ background: 'rgba(0, 0, 0, 0.9)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
            <div className="position-relative text-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[selectedIndex]}
                alt="Preview"
                className="img-fluid rounded"
                style={{ maxHeight: '90vh', maxWidth: '90vw' }}
              />
              <button className="btn btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={closeImage}></button>
              <button className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3" onClick={prevImage}>
                &#8592;
              </button>
              <button className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3" onClick={nextImage}>
                &#8594;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GallerySection;
