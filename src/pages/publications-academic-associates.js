

import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Faqs from "../components/Faqs";
function AcademicAssociates() {
  // const [publicationfaqdata, setfaq] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {

  //   try {

  //     fetch("https://guprojects.gitam.edu/kautilya-admin/api/fetch-faqdata", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         type: 'Publications',
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setfaq(data)
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });


  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }


  // };



  const bannerPath = "https://guprojects.gitam.edu/kautilya-admin/public/publications/"

  const [academicAssobanner, setAcademicAssobanner] = useState([]);
  const [academicAssoData, setAcademicAssoData] = useState([]);

  useEffect(() => {
    fetchAcademicAssobanner();
    fetchAcademicAssoData();
  }, []);
  const fetchAcademicAssobanner = async () => {
    try {
      const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-publication-slider-data'); // Replace with your actual API endpoint
      setAcademicAssobanner(response.data.data[1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchAcademicAssoData = async () => {
    try {
      const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-publication-tabs-data'); // Replace with your actual API endpoint
      setAcademicAssoData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log("AcademicTabsData Tabs", academicAssoData);

  const academicAssoDatafilter = academicAssoData?.filter((each) => each.category === "Academic Associates page");


  return (
    <>
      <section className='ac-associates'>
        <Container>
          <Row>
            <Col xl={12}>
              {/* <img src="images/publications/2.jpg" class="mt-3 mb-5 " alt='publications image' /> */}
              <div className="mt-3 mb-5">


                <picture>

                  <source media="(max-width:620px)" srcSet={`${bannerPath}${academicAssobanner.mobile_banner}`} />
                  <source media="(min-width:621px)" srcSet={`${bannerPath}${academicAssobanner.desktop_banner}`} />
                  <img
                    className="d-block_carousel"
                    src={`${bannerPath}${academicAssobanner.desktop_banner}`}
                    alt={`Slide ${academicAssobanner.category}`}
                  />
                </picture>

              </div>
            </Col>

          </Row>
        </Container>
        {/* <Container>
                <Row>
                    <Col xl={12}>
                    <h5 className='mt-5 mb-4'>Academic Associates - Publications</h5>
                    </Col>
                    
                    </Row>
            </Container> */}
        {/* <Faqs faq={publicationfaqdata} /> */}
        <Faqs faq={academicAssoDatafilter} />


      </section>
    </>
  );
}
export default AcademicAssociates;