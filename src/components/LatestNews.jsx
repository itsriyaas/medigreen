import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const news = [
  {
    title: 'New Pediatric Wing Opened',
    date: 'July 2025',
    description: 'Medigreen Hospital proudly inaugurates a fully-equipped pediatric department for advanced child care.',
    image: 'https://img.freepik.com/premium-photo/hospital-building-red-cross-medical-institution-health-treatment-disease-wallpaper-background_916211-130571.jpg',
  },
  {
    title: 'Free Health Camp - This Sunday',
    date: 'July 2025',
    description: 'Join our free health check-up camp offering blood sugar, pressure, and basic consultation for all age groups.',
    image: 'https://cdn.mknc.ru/contents/albums/preview/2000x2000/12000/12374/preview.jpg',
  },
  {
    title: 'Cardiology Specialist Available Full Time',
    date: 'July 2025',
    description: 'We welcome Dr. Anil Kumar, renowned cardiologist, now available for full-time consultation at Medigreen.',
    image: 'https://media.zenfs.com/en/kentucky_lantern_articles_259/400ba908625248ad4c227772f8fa36c8',
  },
];

const LatestNewsSection = () => {
  return (
    <Container className="py-5">
      <p className="text-success fw-semibold text-center">News</p>
      <h2 className="fw-bold display-5 text-center">Latest News</h2>
      {/* Video Section */}
      <div className="mt-5" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center g-4">

            {/* Video Section */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <figure className="text-center w-100">
                <div className="ratio ratio-16x9" style={{ width: "720px", maxWidth: "100%" }}>
                  <video
                    src="/assets/videos/independance_day.mp4"
                    title="Gallery Highlight Video"
                    controls
                    className="rounded"
                  />
                </div>
                <figcaption className="mt-2 text-muted px-2">
                  On the occasion of 79th Independence Day, Medigreen Hospital
                  Managing Director Mr. Ragesh Manu raising the flag hoisting ceremony
                  in front of Hospital Building.
                </figcaption>
              </figure>
            </div>

            {/* Image Section */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <figure className="text-center w-100">
                <a href='/assets/pdf/Ultrasound Scanning.pptx' download={true}>
                  <img
                    src="/assets/latest_news.png"
                    alt="Latest News"
                    className="img-fluid rounded"
                  />
                </a>
                <figcaption className="mt-2 text-muted px-2">
                  We are happy to announce that our hospital now offers full-fledged Ultrasound Scanning services with the addition of Dr. John Paul, our expert radiologist on board.
                  We are proud to welcome Dr. John Paul to our team, Empower your health journey with advanced ultrasound diagnostics.Your well-being matters!
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </div>


      {/* <Row className="g-4">
        {news.map((item, index) => (
          <Col key={index} md={4} data-aos="fade-up">
            <Card className="h-100 shadow border-0">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
    </Container>
  );
};

export default LatestNewsSection;
