import { useState } from 'react';
import { Col,Row,Container } from "react-bootstrap";
import Tabs_section from "../components/Tabs";
import Faculty from "../components/Faculty";
function MentorshipProgram () {


    const [facultydata,change] = useState([
        {
          imgURL : "https://kautilya.org.in/wp-content/uploads/2022/03/Subbarao_sir.png",
          name : "Dr. Duvvuri Subbarao",
          description: "Fmr RBI Governor; Distinguished Visiting Professor, Kautilya School of Public Policy",
        },
        {
          imgURL : "https://kautilya.org.in/wp-content/uploads/2022/08/Indermit.png",
          name : "Dr. Indermit Singh Gill",
          description: "Chief Economist, World Bank & Visiting Faculty, Kautilya School of Public Policy",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/team10.png",
            name : "Mr. Steve Jarding",
            description: "Former Professor, Harvard Kennedy School",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/Temkin.png",
            name : "Dr. Moshik Temkin",
            description: "Fellow at The Belfer Center for Science and Intl. Affairs, Harvard Kennedy School",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/07/Gary_Dexter.png",
            name : "Dr. Gary Dexter",
            description: "Visiting Faculty- Kautilya School of Public Policy",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/team1.png",
            name : "Dr. M. V. Rajeev Gowda",
            description: "Vice Chairman, State Institute for Transformation of Karnataka",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/team5.png",
            name : "Mr. Anil Swarup",
            description: "Author, Retired IAS Officer",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/team6.png",
            name : " Amb. Navtej Singh Sarna",
            description: "Former Indian Ambassador to the US & Israel",
        },  
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/team7.png",
            name : " Amb. Vijay Gokhale",
            description: "Fmr.Foreign Secretary of India ",
        },  
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/team8.png",
            name : "  Amb D.B. Venkatesh Varma",
            description: "Former Indian Ambassador to the Russian Federation ",
           
        },  
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/team9.png",
            name : " Mr. Udaibir Das",
            description: "Visiting Faculty, Kautilya School of Public Policy ",
        },  
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/team10.png",
            name : "  Lt. General Sanjiv Langer",
            description: "Fmr. Member of the Armed Forces Tribunal ",
        },   
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/09/anita.png",
            name : " Ms. Anita Bhatia",
            description: "Distinguished Fellow, Kautilya School of Public Policy ",
        }, 
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/08/Faizan.png",
            name : " Dr. Faizan Mustafa",
            description: "Vice Chancellor, Chanakya National Law University, Patna ",
        }, 
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/06/Jandhyala.png",
            name : " Dr. Jandhyala B G Tilak",
            description: "Former Vice Chancellor, National University of Educational Planning and Administration",
        }, 
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/11/Dr_Amarendra_pandey_thumbnail.png",
            name : " Dr. Amrendra Pandey",
            description: "Associate Professor, Kautilya School of Public Policy ",
        }, 
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/11/vasuda_katju_thumbnail.png",
            name : " Dr. Vasudha Katju",
            description: "Assistant Professor, Kautilya School of Public Policy ",
        }, 
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/02/Kanica_Rakhra.png",
            name : " Dr. Kanica Rakhra",
            description: "Assistant Professor, Kautilya School of Public Policy ",
        }, 
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/07/Vishnu-pillai.png",
            name : " Dr. Vishnu S. Pillai",
            description: "Assistant Professor, Kautilya School of Public Policy ",
        }, 
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/07/Junid.png",
            name : " Dr. Judith Spiegel",
            description: "Assistant Professor of Law, Kuwait International Law School, Visiting Faculty, Kautilya School of Public Policy ",
        }, 
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/f06.png",
            name : " Dr. Anjali Mohan",
            description: "Urban & Regional Planner ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/03/Chandrasekhar.png",
            name : " Dr. Chandrasekhar Commuri",
            description: "Visiting Faculty, Kautilya School of Public Policy ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/06/Usha.gif",
            name : " Dr. Usha Ramachandra",
            description: "Former Professor and Director- Centre for Energy Studies, Administrative Staff College of India ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/08/Amir_ullah.png",
            name : "Dr. Amir Ullah Khan",
            description: "Research Director, Center for Development Policy and Practice ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/10/Srinivas_Yanamandra.png",
            name : " Dr. Srinivas Yanamandra",
            description: "Group Head – Regulatory Affairs & Policy ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/10/Sanjaya-Baru-n.png",
            name : " Dr. Sanjaya Baru",
            description: "Writer, Policy Analyst, Economist ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/08/Parikshit_Ghosh.png",
            name : " Dr. Parikshit Ghosh",
            description: "Professor, Delhi School of Economics ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/08/Pavan_Mamidi.png",
            name : " Dr. Pavan Mamidi",
            description: "Director, Centre for Social and Behaviour Change, Ashoka University ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/08/shagataMukherjee.png",
            name : "Dr. Shagata Mukherjee",
            description: "Deputy Director, Centre for Social and Behaviour Change, Ashoka University Academic Lead, Behavioural Insights Unit of India, NITI Aayog ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/08/sharon.png",
            name : "Dr. Sharon Barnhardt",
            description: "Director – Research, Centre for Social and Behaviour Change, Ashoka University ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/04/Arvind_Lodaya.png",
            name : " Mr. Arvind Lodaya",
            description: "Design, Innovation, Branding Consultant, Academic; Visiting Faculty, Kautilya ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/founder3.png",
            name : " Mr. Sridhar Pabbisetty",
            description: "Senior Director School of Government at MIT, Pune. Founding Director, Kautilya School of Public Policy, Visiting Faculty, Kautilya School of Public Policy. ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2021/09/f08.png",
            name : " Dr. Ashwin Mahesh",
            description: "Social Technologist, Urbanist and Entrepreneur ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/02/Aman_Srivastava_min.png",
            name : " Dr. Aman Srivastava",
            description: "Visiting Faculty, Kautilya ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/07/Smita-Sharma-1.png",
            name : " Ms. Smita Sharma",
            description: "Independent Journalist; Visiting Faculty- Kautilya School of Public Policy ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/07/anant-_-mariganti-1.png",
            name : " Dr. Anant Maringanti",
            description: "xecutive Director, Hyderabad Urban Labs Foundation- Visiting Faculty, Kautilya School of Public Policy",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/07/Arjun_Subramaniam_l.png",
            name : " AVM (Dr.) Arjun Subramaniam (Retd)",
            description: "Fighter Pilot, Military Historian, Author, Visiting Faculty, Kautilya ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/11/Kaushikisanyal.png",
            name : " Dr. Kaushiki Sanyal",
            description: "CEO and Co-founder, Sunay Policy Advisory Pvt. Ltd. ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2022/04/Ankur_Kulshreshtra.png",
            name : " Mr. Ankur Kulshrestha",
            description: "Edtech, Fin Prof., Researcher; Visiting Faculty, Kautilya ",
        },
        {
            imgURL : "https://kautilya.org.in/wp-content/uploads/2023/07/Rakesh-Dubbudu.png",
            name : " Mr. Rakesh Dubbudu",
            description: "Founder of FACTLY and DATAFUL",
        },

      ]);
    return(
        <>
<Container>
    <Row>
        <Col xl={12}>
            <img src="./images/mentorship-program/banner.jpg" alt="banner image" />
        </Col>
        <Col xl={12}>
            <p>
            The Mentorship Scheme at Kautilya is envisaged to be one of the key pillars of the Master of Public Policy (MPP) program.
             Through this program, students are connected to mentors with strong personal, academic,
             and professional track records who can positively impact and guide their journeys during and beyond MPP. 
             The Mentorship Programme is an interactive engagement between the mentors and mentees without being prescriptive.
            </p>
        </Col>
    </Row>

    <Row>
        <Col xl={12}>
       <h2>Program Scheme</h2>
       <p>
       The mentorship scheme starts in August (1st Trimester) once students have made their initial adjustments and have a better understanding of the academic schedule and the options available to them. The selection and screening process starts in the 3rd Week of August.
        The Mentorship schemecCoordinator will be the Point of Contact (POC) for the students and Mentors.
       </p>
        </Col>
    </Row>
</Container>

<section className="section_bg">
    <Container>
        <Row>
            <Col xl={12}>
            <button class="btn btn-secondary mb-2" type="button"> <i class="fa-solid fa-circle-down"></i>Know more</button>
            </Col>

            <Col xl={12}>
                <Tabs_section />
            </Col>
        </Row>
    </Container>

</section>
<section>
    <Container>
        <Row>
            <Col xl={12}>
           <h2>Mentors List</h2>
                <Faculty faculty={facultydata}/>
            </Col>
            </Row>
    </Container>
</section>
        </>
    );
}
export default MentorshipProgram;