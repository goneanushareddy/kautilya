import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
const PartnershipInner = () => {
    

    return (
        <>
           <section className="capstone">
            <Container>
                <Row>
                    <Col md={12}>
                       <h5>MoU with IE University’s School of Politics</h5>
                    </Col>
                    <Col md={12}>
                        <img src="./../images/partners/partner_banner.jpg" alt="partners" />
                    <p className='mt-4'>
                    Kautilya School of Public Policy has signed an MoU with IE University’s School of Politics, Global Affairs and Economics (SPEGA) for student exchange, research collaboration, faculty exchange amongst other areas of collaboration. The student exchange will be in effect from the academic year 2024-25.
                    </p>
                    <p>
                    The student exchange would mean students from Kautilya would study various courses at SPEGA . There will be a merit based competitive process for the selection of interested students. The credit equivalence has been established.
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default PartnershipInner;
