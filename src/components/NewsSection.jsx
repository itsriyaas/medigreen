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
            <p className="lead">Stay updated with our hospital’s events and announcements</p>
          </div>
        </div>
        <section className="py-5 bg-light">
          <Container>
            <Row className="g-4">
              {newsItems.map((item, index) => (
                <Col key={index} xs={12} md={4} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Subtitle className="mb-2 text-muted small">{item.date}</Card.Subtitle>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0 text-end">
                      <Button variant="outline-success" size="sm">Read More</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
    </>
  );
};

export default NewsSection;
