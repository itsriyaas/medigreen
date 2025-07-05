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
];


const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

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
              <div className="gallery-card shadow-sm rounded-3 overflow-hidden" onClick={() => openImage(src)} style={{ cursor: 'pointer' }}>
                <img src={src} alt={`Gallery ${index + 1}`} className="img-fluid w-100" style={{ height: '220px', objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>
  
        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImage}>
            <div className="image-modal-content">
              <img src={selectedImage} alt="Preview" />
              <button className="btn btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={closeImage}></button>
            </div>
          </div>
        )}
      </div>
     </>
  );
};

export default GallerySection;
