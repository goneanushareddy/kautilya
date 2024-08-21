import React, { useState, useEffect } from 'react';
import Faqs from "../components/Faqs";
import Container from 'react-bootstrap/Container';
import axios from 'axios';
//import kautilya from '../kautilya'; 
function Researchfaqs() {

  const [reaserchfaq, setfaq] = useState([]);

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
            type: 'Research',
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
  
  return (
    <section>   
      <Container>
        <img src="./images/FAQ-2.jpg" alt='faq image' className='mb-4 mt-4' />
        <Faqs faq={reaserchfaq}/>
      </Container>
    </section>
  );
}

export default Researchfaqs;