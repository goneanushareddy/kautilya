import React, { useState, useEffect } from 'react';
//import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Faqs from "../components/Faqs";

import '../assets/css/navbar.css';

function Admissionfaqs (){
  const [admissionfaq, setfaq] = useState([]);

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
          type: 'Admissions',
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
        <>
         <div className="admission_faq faqs mb-5">  
         <img src="./images/faq-1.jpg" alt='faqs' />
          </div>
            <Faqs faq={admissionfaq}/>
           
        </>
    );
}
export default Admissionfaqs;