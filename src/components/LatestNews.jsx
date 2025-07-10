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
      <p className="text-center text-muted mb-5">Stay informed with the latest health updates, events, and services at Medigreen Hospital</p>
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
