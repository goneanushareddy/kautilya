import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Faculty from "../components/Faculty";
import axios from 'axios';
import '../assets/css/navbar.css';



function Faculty_page (){

   //faculty data
   const [facultydata, setfacultyData] = useState([]);
   useEffect(() => {
       fetchfacultyData();
   }, []);
   const fetchfacultyData = async () => {
     try {
       const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-faculty'); // Replace with your actual API endpoint
       setfacultyData(response.data.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };

   console.log("facultyData", facultydata)
  
    return(
        <>
         <section className="academic_faculty p-3">   
            <Container className='mtb-5 pt-2 mb-5'>
                <h1 className='academic_faculty_heading'>Faculty Members</h1>                
            </Container>

            <Faculty faculty={facultydata} popup={true}/>
            </section>

            <section className='faculty_bg'>
            <Container>
            <Row>
              <Col xs={12} className='d-flex'>
                <Col xs={9} sm={9} className='f-text-container'>
                    <h3 className='f-text'>
                    Kautilya’s Master of Public Policy (MPP) is designed for those looking to rebalance Society, Government and Business towards an equitable society.   </h3>
                    <a href='./mpp' className='f-text-anchor'>LEARN ABOUT THE PROGRAM <img src='./images/redarrow.png' alt='right arrow' /></a>
                </Col>
                </Col>
            </Row>
          </Container>
            </section>
        </>
    );
}
export default Faculty_page;