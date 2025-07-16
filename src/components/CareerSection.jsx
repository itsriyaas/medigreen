import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const jobOpenings = [
  {
    title: 'Staff Nurse',
    location: 'Medigreen Hospital, Irinjalakuda',
    type: 'Full Time',
  },
  {
    title: 'Pharmacist',
    location: 'Medigreen Hospital, Irinjalakuda',
    type: 'Full Time',
  },
  {
    title: 'Lab Technician',
    location: 'Medigreen Hospital, Irinjalakuda',
    type: 'Part Time',
  },
];

const CareersSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form:', formData);
    alert('Your application has been submitted!');
    // Add integration to backend or email API here
  };

  return (
    <>
     {/* Banner */}
      <div className="doctor-banner text-white d-flex justify-content-center align-items-center">
        <div className="text-center" data-aos="fade-down">
          <h1 className="display-5 fw-bold">Careers</h1>
          <p className="lead">Explore exciting career opportunities at Medigreen Hospital and make a meaningful impact.</p>
        </div>
      </div>
        <Container className="my-5">
              <div className='container'>
              <h4 className="mb-3 fw-bold">Join Our Team</h4>
              <p className='text-muted'>With our state-of-the-art facilities, we are all set to change the face of healthcare in konathukunnu. Medigreen Hospital offers a high order of integrated quality healthcare with the latest generation diagnostic facilities under one roof. We promise to deliver quality medical service affordable for one and all. If you are confident in your skill set and would like to join a compassionate team of health care experts, please feel free to get in touch with us.</p>
            </div>
            <div><p className='ms-2'>Interested candidates may drop us your resume to <a href='mailto:info@medigreenhospital.com' id='mail'>info@medigreenhospital.com</a></p></div>
          {/* <Row className="g-4">
          
            <Col md={6}>
              <h4 className="mb-3 fw-semibold">Open Vacancies</h4>
              {jobOpenings.map((job, idx) => (
                <Card className="mb-3 shadow-sm" key={idx}>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text className="text-muted">{job.location}</Card.Text>
                    <span className="badge bg-success">{job.type}</span>
                  </Card.Body>
                </Card>
              ))}
            </Col>
    
            <Col md={6}>
              <h4 className="mb-3 fw-semibold">Apply Now</h4>
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group className="mb-3">
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                 <Form.Group className="mb-3">
                  <Form.Label>Position Applied For *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="position"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Write a brief message"
                    onChange={handleChange}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Upload Resume (PDF only)</Form.Label>
                  <Form.Control
                    type="file"
                    name="resume"
                    accept=".pdf"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
    
                <Button variant="success" type="submit" className="px-4">
                  Submit Application
                </Button>
              </Form>
            </Col>
          </Row> */}
        </Container>
    </>
  );
};

export default CareersSection;
