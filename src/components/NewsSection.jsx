import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const newsItems = [
  {
    title: 'New Pediatric Wing Opened',
    date: 'July 1, 2025',
    description: 'We are proud to open a state-of-the-art pediatric wing at Medigreen Hospital.',
    image: 'https://neareasthospital.com/wp-content/uploads/sites/163/2019/04/%C3%87ocuk-Gastroenterolojisi-1024.jpg?ver=36bab1990c5b5501d17e00feed239d53',
  },
  {
    title: 'Free Health Check-up Camp',
    date: 'June 20, 2025',
    description: 'Join our free health camp organized in partnership with local authorities.',
    image: 'https://cms-img.coverfox.com/43.jpg',
  },
  {
    title: 'New MRI Facility Available',
    date: 'June 10, 2025',
    description: 'We’ve added a cutting-edge MRI facility for faster, clearer diagnostics.',
    image: 'https://png.pngtree.com/background/20230614/original/pngtree-medical-facility-with-a-large-mri-machine-picture-image_3462387.jpg',
  },
];

const NewsSection = () => {
  return (
    <>
    {/* Banner */}
        <div className="gallery-banner text-white d-flex justify-content-center align-items-center">
          <div className="text-center" data-aos="fade-down">
            <h1 className="display-5 fw-bold">Latest News</h1>
            <p className="lead">Stay updated with our hospital's events and announcements</p>
          </div>
        </div>
        <section className="py-5 bg-light">
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
                          <img
                            src="/assets/latest_news.png"
                            alt="Latest News"
                            className="img-fluid rounded"
                          />
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
        </section>
    </>
  );
};

export default NewsSection;
