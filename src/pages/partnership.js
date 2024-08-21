import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const Partnership = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/ie-universitys-school-of-politics/'); // Replace with the path you want to navigate to
    };

    return (
        <>
            <section className="capstone">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='mt-5 mb-4 capstone-project-heading'>Partnership</h2>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6} lg={4}>
                            <Card 
                                className="mb-4" 
                                style={{ cursor: 'pointer', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}
                                onClick={handleCardClick}
                            >
                                <Card.Img variant="top" src="./images/partners/partner_thumb.jpg" alt="partners" />
                                <Card.Body>
                                    <Card.Title>IE University’s School of Politics</Card.Title>
                                    <Button 
                                        variant="primary" 
                                        size="sm" 
                                        style={{ borderRadius: '12px' }} 
                                        onClick={handleCardClick}
                                    >
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Partnership;
