import React, { useEffect, useState } from 'react';
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
