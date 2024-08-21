import { useState, useEffect } from 'react';
import axios from 'axios';
import { Col,Row, Container } from "react-bootstrap";
import Faculty from "../components/Faculty";
import Tabs_section from "../components/Tabs";

import '../assets/css/navbar.css';
import MentorComp from '../components/MentorComponent';
import TabSection from '../components/TabSection';



function Mentorship (){

    const [tabsMentorsdata, setTabsMentorsdata] = useState([]);
    const [mentorsData, setMentorsData] = useState([]);

    useEffect(() => {
      fetchtabsMentorsdata();
      fetchMentorsdata();
  }, []);
    const fetchtabsMentorsdata = async () => {
      try {
        const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-mentors-tabs-data'); // Replace with your actual API endpoint
        setTabsMentorsdata(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    console.log("tabs",tabsMentorsdata)
  
    const fetchMentorsdata = async () => {
        try {
          const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-mentorslist'); // Replace with your actual API endpoint
          setMentorsData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
    console.log("mentors",mentorsData)
    

    // const [masterprogram,change1] = useState([
    //     {
    //       id:1,
    //       name : "Mentors Mix",
    //       description: "<p>The mentors are identified from the following categories approved by the Advisory Board. The mentors can be:</p><ul><li>Advisory Board Members</li><li>Founders of Kautilya</li><li>Visiting Faculties</li><li>GITAM Leadership</li><li>Other distinguished leaders who join us as Friends of Kautilya.</li></ul>",
         
    //     },
    //     {
    //       id:2,
    //       name : "Engagement Framework",
    //       description: "<p>The Mentors and Mentees will be connected for a period of 2 years i.e., during the MPP programme.</p><p><b>The Mentorship Programme offers space for mentors to:</b></p><ul><li>To help young individuals realise their full potential and grow into future leaders in the policy sphere.</li><li>To connect and engage with young individuals who have fresh new perspectives.</li><li>To play an integral part in shaping their life after MPP.</li></ul><p><b>The mentees can benefit from this programme in the following ways:</b></p><ul><li>To get personalized advice and guidance as they make important decisions in their lives in the professional sphere.</li><li>To connect with leaders who have both expertise and experience.</li><li>To get a wider perspective on their journey ahead in the area of public policy.</li></ul>",
           
    //     },
    //     {
    //       id:3,
    //       name : "Feedback and Grievances",
    //       description: "<p>The POC will take feedback from both mentors and mentees every 6 months from the commencement of the program and incorporate feedback to make the mentorship program more effective in the next phase of the program.</p><p>In case of any grievances from the mentor, the POC can be contacted and necessary action will be taken to address the concerns. The mentors can choose to discontinue the mentorship relationship with a particular mentee in case of major concerns.</p>",
    //     },
    //     {
    //         id:4,
    //       name : "Connecting with Mentors",
    //       description: '<p>The process to connect begins with a presentation of the Mentorship Scheme to Students in August by the POC on the envisaged structure of the scheme and to address queries regarding the expectations from it.</p><p>This is followed by the students filling out an application form which will require them to provide options for Mentors from the given list. The students have to shortlist at least 04 mentors from the provided list.</p><p>The two documents to be filled by students on the online application form are:</p><ul><li>Updated 1-page resume (PDF; professional) of the students</li><li>An Expression of Interest (EOI) of 250-350 words for each option of a mentor requested by a student.</li></ul><p>The POC will connect the selected students to their mentors. The mentee and mentor can then take the mentorship engagement forward. In case there are slots available with the Mentors and some Mentees are unable to get any mentors a subsequent cycle of applications will take place to accommodate them after the first round is over.</p>',
           
    //     },
        
        
    //   ]);



    const [mentorshipdata,change] = useState([
        {
          id:1,
          imgURL : "./images/mentorship-program/anita_new_min.png",
          name : "Ms. Anita Bhatia",
        },
        {
            id:2,
          imgURL : "./images/mentorship-program/team5.png",
          name : "Mr. Anil Swarup",
         
        },
        {
            id:3,
            imgURL : "./images/mentorship-program/Arvind_Mayaram1.png",
            name : "Dr. Arvind Mayaram",
           
        },
        {
            id:4,
            imgURL : "./images/mentorship-program/Amir_ullah.png",
            name : "Dr. Amir Ullah Khan",
           
        },
        {
            id:5,
            imgURL : "./images/mentorship-program/Chandrasekhar.png",
            name : "Dr. Chandra Commuri",
           
        },
        {
            id:6,
            imgURL : "./images/mentorship-program/team2.png",
            name : "Mr. Dilip Cherian",
            
        },
        {
            id:7,
            imgURL : "./images/mentorship-program/Faizan.png",
            name : "Dr. Faizan Mustafa",
           
        },
        {
            id:8,
            imgURL : "./images/mentorship-program/HarshaVardhanaSingh.png",
            name : "Dr. Harsha Vardhana Singh",
           
        },
        {
            id:9,
            imgURL : "./images/mentorship-program/Indermit.png",
            name : "Dr. Indermit Gill",
           
        },
        {
            id:10,
            imgURL : "./images/mentorship-program/Manjula-Rao-min.png",
            name : "Ms Manjula Rao",
           
        },
        {
            id:11,
            imgURL : "./images/mentorship-program/Manika.png",
            name : "Ms. Manika Raikwar",
           
        },
        {
            id:12,
            imgURL : "./images/mentorship-program/Maneka.png",
            name : "Dr. Menaka Guruswamy",
           
        },
        {
            id:13,
            imgURL : "./images/mentorship-program/Temkin.png",
            name : "Prof. Moshik Temkin",
           
        },
        {
            id:14,
            imgURL : "./images/mentorship-program/team4.png",
            name : "Amb. Navtej Sarna",
           
        },
        {
            id:15,
            imgURL : "./images/mentorship-program/Nidhi_Razdan-min.png",
            name : "Ms. Nidhi Razdan",
           
        },
        {
            id:16,
            imgURL : "./images/mentorship-program/Mr.-Ovais-Sarmad.png",
            name : "Mr. Ovais Sarmad",
           
        },
        {
            id:17,
            imgURL : "./images/mentorship-program/Prateek-1.png",
            name : "Mr. Prateek Kanwal",
           
        },
        {
            id:18,
            imgURL : "./images/mentorship-program/PV_Ramesh.png",
            name : "Dr. PV Ramesh",
           
        },
        {
            id:19,
            imgURL : "./images/mentorship-program/team1.png",
            name : "Prof. Rajeev Gowda",
           
        },
        {
            id:20,
            imgURL : "./images/mentorship-program/team8.png",
            name : "Mr. Ram Mohan Naidu",
           
        },
        {
            id:21,
            imgURL : "./images/mentorship-program/team3.png",
            name : "Dr. Rathin Roy",
           
        },
        {
            id:22,
            imgURL : "./images/mentorship-program/Shri-Rishi-Kumar-Shukla.png",
            name : "Mr. Rishi Kumar Shukla",
           
        },
        {
            id:23,
            imgURL : "./images/mentorship-program/Bharat-President_GITAM.png",
            name : "Mr. Sribharat Mathukumilli",
           
        },
        {
            id:24,
            imgURL : "./images/mentorship-program/team10.png",
            name : "Prof. Steve Jarding",
           
        },
        {
            id:25,
            imgURL : "./images/mentorship-program/MsSharmila_Chavaly.png",
            name : "Ms. Sharmila Chavaly",
           
        },
        {
            id:26,
            imgURL : "./images/mentorship-program/sanjiv.png",
            name : "Lt. Gen Sanjiv Langer",
           
        },
        {
            id:27,
            imgURL : "./images/mentorship-program/Santosh-Mishra-1.gif",
            name : "Mr. Santosh Mehra",
           
        },
        {
            id:28,
            imgURL : "./images/mentorship-program/Udaibir_Das.png",
            name : "Mr. Udaibir Saran Das",
           
        },
        {
            id:29,
            imgURL : "./images/mentorship-program/Gokhale.png",
            name : "Mr. Vijay Gokhale",
           
        },

        
      ]);
    return(
        <>
         <section className="phd">   
         
            <Container>
                <img src="./images/mentorship-program/banner.jpg" alt='banner' className='mt-3'></img>
                <p className="mt-5 mb-5 mentorship-text">The Mentorship Scheme at Kautilya is envisaged to be one of the key pillars of the Master of Public Policy (MPP) program. Through this program, students are <b>connected to mentors with strong personal, academic, and professional track records</b>  who can positively impact and guide their journeys during and beyond MPP.
                     The Mentorship Programme is an interactive engagement between the mentors and mentees without being prescriptive.</p>
                <h4 className='mt-5 mb-4 mentorship-heading'>Program Scheme</h4>
                <p className='mb-5 mentorship-text'>The mentorship scheme starts in <b>August (1st Trimester)</b> once students have made their initial adjustments and have a better understanding of the academic schedule and the options available to them. The selection and screening process starts in the <b>3rd Week of August.</b>
                     The Mentorship schemecCoordinator will be the Point of Contact (POC) for the students and Mentors.</p>
            </Container>
            
            
            </section>
            <section className="section_bg">
            <Container>
                <Row>
                <Col xl={12} className="mt-4">
                    <a href='#'  className='btn btn-secondary text-dark'> <i className='fa fa-download'></i> Know more </a>
                </Col>
                    <Col xl={12} className="mt-4">
                        {/* <Tabs_section phd={masterprogram}/> */}
                        <TabSection  tabsData={tabsMentorsdata} />
                    </Col>
                
                </Row>
            </Container>
        </section>
        <section className='f-mentors'>
            <Container>
            <h4 className='text-center mb-5'>Mentors List</h4>
            </Container>
          
            <MentorComp faculty={mentorsData}/>
            
        </section>
        </>
    );
}
export default Mentorship;