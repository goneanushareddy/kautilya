import { Container,Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Faq from '../assets/img/FAQ.jpg';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import React, { useState } from 'react';
function Faqs(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };


    
    return(
        <section>
        <Container>
            <Row>
                <Col xl={12}>
                   <img src={Faq} alt='faq image' className='img-fluid'/> 
                
                </Col>
            </Row>
        </Container>
        <Container className='mt-5 mb-5'>
            <Row>
                <Col xl={12}>
                <Accordion defaultActiveKey={['0']} activeKey={isOpen ? '0' : undefined} onSelect={toggleAccordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="accordion-toggle">
            <span>When does the academic year begin at Kautilya</span>
            <span className="accordion-icon">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>
       <p>
       Generally, the academic year begins by the end of July or Early August. The academic year follows a Trimester system. Each trimester is 12-14 weeks. Each enrolled student will receive official communication on their registered email address a few weeks before the batch commencement date.
       </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <div className="accordion-toggle">
            <span>What are the accreditations and recognitions obtained by the Kautilya School of Public Policy?</span>
            <span className="accordion-icon">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>
        <p>
        Kautilya School of Public Policy is one of the premier schools of GITAM (Deemed To Be University) and GITAM is recognized by the University Grants Commission (UGC) u/s 3 of the UGC act, 1956, and the Telangana state government. The executive committee of the National Assessment & Accreditation Council (NAAC) has accredited GITAM an A++.
        </p>
        </Accordion.Body>
      </Accordion.Item>


      
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <div className="accordion-toggle">
            <span>What are the dates of commencement and completion of the Master of Public Policy Course?</span>
            <span className="accordion-icon">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>
        <p>
        The Kautilya School of Public Policy follows a strict Academic Calendar and runs on a trimester basis. Tentatively, the first term of study starts in July each year and the program culminates once all the six terms are completed in 2 years.

Link: Academic Calendar   </p>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <div className="accordion-toggle">
            <span>What is the medium of instruction</span>
            <span className="accordion-icon">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>
        <p>
        English will be the medium of instruction for all courses for the Master’s Program in Public Policy (MPP). </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <div className="accordion-toggle">
            <span>How is the academic year structured at Kautilya?</span>
            <span className="accordion-icon">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>
        <p>
        Each academic year consists of a trimester system beginning in August. The academic year begins at the end of July or Early August. It is a fully residential two-year program. There are 6 trimesters in total. At the end of the first academic year, the students are mandated to do an internship of 6-8 weeks. The preparation of the Capstone Project ( an academic document based on a public policy issue) begins in the Fifth Trimester. In the final trimester (Sixth Trimester), the students are required to submit their capstone project which is evaluated by their supervisor (internal faculty) and an external faculty after the conduct of a viva on the Capstone project.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <div className="accordion-toggle">
            <span>When does the document verification process take place?</span>
            <span className="accordion-icon">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>
        <p>
        The document verification process requires the verification of educational certificates as outlined in the checklist during the admission process. This is a mandatory requirement. You must carry the original documents of your educational qualifications.
        </p> </Accordion.Body>
      </Accordion.Item>
     
                          </Accordion>
                          
                </Col>
            </Row>
        </Container>

        </section>
    );
}
export default Faqs;