
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tabs_section from "../components/Tabs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/navbar.css';


function Library (){
    const [phddata,change] = useState([
        {
          name : "Library",
          description: "<p>The expansive library harbors over 90,000 books and print journals. Enjoy interactive learning at Kautilya with a high-end media lab that lets you experience real-time reporting from the comfort of the campus; IT labs with dedicated computers for every student and access to E-Library and Journals.</p>",
         
        },
        {
          name : "Rooms",
          description: " <p>Kautilya offers fully air-conditioned furnished ensuite twin-sharing and individual rooms with high-speed internet, while providing a secure personal space.</p>",
           
        },
        {
          name : "Food",
          description: " <p>Kautilya has a highly experienced hospitality team that dishes out specially-curated meal plans every day, with a particular focus on nutritional intake and diverse cuisines. Our team of expat chefs with experience at premium hotels and cruise liners globally, specializes in over a dozen international cuisines. We cook with fresh produce, and our chefs follow the farm-to-table concept to make every meal a delightful experience.</p>",
        },
        {
          name : "Amenities",
          description: " <p>The facility is equipped with an in-house gymnasium, yoga center, lobbies, and lounges with gaming tables and vending machines. Professional housekeeping and facility managers are available on call, as is dedicated laundry service on each floor. All rooms are equipped with biometric and numeric locks to ensure safety, along with round-the-clock CCTV surveillance. </p>",
           
        },
        {
            name : "Hospitality",
            description: " <p>At Kautilya, we believe learning is an experience. The lavish rooms with outstanding hospitality and housekeeping service ensure your experience will be outstanding. Along with an immersive learning environment, the residential community provides access to indoor sports, games, and a physical fitness arena that ensures holistic growth.<br/>Head to one of our many on-campus cafes to treat yourself to appetizing meals while having a great time with friends, reading a book, or working on an assignment. The in-campus accommodation provides a serene ambiance, and helps you ditch travel, gain productive time to achieve greater academic success, stay closer to peers, and take complete advantage of the campus resources. </p>",
             
          },
          {
            name : "Security",
            description: " <p>Active 24/7 front desk operations, community assistants, caretakers, and resident managers are available to help students with any kind of emergency. </p>",
             
          },
        
        
      ]);
    return(
        <>
         <section className="phd">   
            <Container>
                <h1 className='capstone-project-heading'>Library</h1>
                <img src="./images/library/library.jpg" alt='library' />
                <p className="mt-5">At Kautilya Library, we provide various mechanisms to feed young and curious minds with relevant knowledge and new-age skills. The library is a melting point for students, faculty, and research communities to share knowledge and connect with the vast collections worldwide.</p>
                <p>The expansive library harbours over 90,000 books and print journals. Enjoy interactive learning at Kautilya with a high-end media lab that lets you experience real-time reporting from the comfort of the campus, IT labs with dedicated computers for every student, and access to E-Library and Journals.</p>
                     <Row>
                        <Col sm={6} md={4} lg={4}>
                            <a href="https://library.gitam.edu/resources.php" target="_blank" rel="noopener noreferrer">
                                <img src="./images/library/GITAM-logo_new_0.jpg" alt="Partner Logo" />
                            </a>
                        </Col>
                        <Col sm={6} md={4} lg={4}>
                            <a href="https://digitalrepository.gitam.edu/" target="_blank" rel="noopener noreferrer">
                                {/* <img src="https://kautilya.org.in/wp-content/uploads/2023/10/logo.png" alt="Partner Logo" /> */}
                                <img src="./images/library/logo.png" alt="Partner Logo" />
                            </a>
                        </Col>
                        <Col sm={6} md={4} lg={4}>
                            <a href="https://library.gitam.edu/research-tools.php" target="_blank" rel="noopener noreferrer">
                                <img src="./images/library/MOnika-latest-1.jpg" alt="Partner Logo" />
                            </a>
                        </Col>
                    </Row>
            </Container>

            
            </section>
        </>
    );
}
export default Library;