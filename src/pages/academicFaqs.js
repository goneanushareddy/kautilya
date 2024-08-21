import { Container,Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import React, { useState } from 'react';
import Faqs from "../components/Faqs";
function AcademicFaqs(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
    const [academicfaq, setfaq] = useState([]);

  useEffect(() => {
   fetchData();
  }, []);
  const fetchData = async () => {
      
    try {

      fetch("https://guprojects.gitam.edu/kautilya-admin/api/fetch-faqdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: 'Academics',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setfaq(data)
        })
        .catch((error) => {
          console.error("Error:", error);
        });


    } catch (error) {
      console.error('Error fetching data:', error);
    }
    

};
      
    
    return(
        <section>
        <Container>
            <Row>
                <Col xl={12}>
                
                  <h1 className='mt-5 academic_faculty_heading'>
                  Academics FAQs
                  </h1>
                </Col>
            </Row>
        </Container>
        <Container className='mt-4 mb-5'>
            <Row>
                <Col xl={12}>
                  <Faqs faq={academicfaq}/>
                          
                </Col>
            </Row>
        </Container>

        </section>
    );
}
export default AcademicFaqs;