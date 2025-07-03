import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const facilities = [
    {
        title: '24/7 Emergency Care',
        image: 'assets/facilities/emergency.jpg',
    },
    {
        title: 'X-Ray & Imaging',
        image: 'assets/facilities/xray.jpg',
    },
    {
        title: '24/7 Pharmacy',
        image: 'assets/facilities/pharmacy.avif',
    },
    {
        title: 'Private Rooms',
        image: 'assets/facilities/private rooms.jpg',
    },
    {
        title: 'Laboratory',
        image: 'assets/facilities/laboratory.jpg',
    },
    {
        title: '24/7 CCTV Surveillance',
        image: 'assets/facilities/cctv.jpg',
    },
    {
        title: 'Physiotherapy',
        image: 'assets/facilities/physiotherapy.jpg',
    },
    {
        title: 'Psychology',
        image: 'assets/facilities/psyhcology.jpg',
    },
];

const FacilitiesPage = () => {
    return (
        <>
            {/* Banner */}
            <div className="gallery-banner text-white d-flex justify-content-center align-items-center">
                <div className="text-center" data-aos="fade-down">
                    <h1 className="display-5 fw-bold">Our Facilities</h1>
                </div>
            </div>
            <Container className="my-5">
                <Row className="g-4">
                    {facilities.map((facility, index) => (
                        <Col xs={12} sm={6} md={4} key={index}>
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Img
                                    variant="top"
                                    src={facility.image}
                                    alt={facility.title}
                                    className="facility-card-img"
                                    style={{ height: '220px', objectFit: 'cover' }}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-semibold">{facility.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default FacilitiesPage;
