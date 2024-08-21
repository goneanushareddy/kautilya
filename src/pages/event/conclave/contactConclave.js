import { Col,Row, Container } from "react-bootstrap";
import Faculty from "./../../../components/Faculty";
import { useState } from 'react';
function ContactConclave(){
 
    
    const [facultydata,change] = useState([
        {
          id:1,
          imgURL : "./images/events/paperpresentation/organizing/1.png",
          name : "Antara Maitra",          
        
        },
        {
            id:2,
            imgURL : "./images/events/paperpresentation/organizing/2.png",
            name : "Garima Goel",          
          
        },
        {
            id:3,
            imgURL : "./images/events/paperpresentation/organizing/3.png",
            name : "Rashika Singh",          
          
        },
        {
            id:4,
            imgURL : "./images/events/paperpresentation/organizing/4.png",
            name : "Sunidhi Singh",          
          
        },
        {
            id:5,
            imgURL : "./images/events/paperpresentation/organizing/5.png",
            name : "Akshit Dedha",          
          
        },
        {
            id:6,
            imgURL : "./images/events/paperpresentation/organizing/6.png",
            name : "Lekhani Raja",          
          
        },
        {
            id:7,
            imgURL : "./images/events/paperpresentation/organizing/7.png",
            name : "Shitiz Jha",          
          
        },
        {
            id:8,
            imgURL : "./images/events/paperpresentation/organizing/8.png",
            name : "Vaibhavi Awasthi",          
          
        },

     
    ]);
    return(
        <>
          <section>
            <Container>
                <Row>
                    <Col xl={12}>
                    <h3 className="text-start  mt-4 mb-4">GET IN TOUCH!</h3> 
                    </Col>
                    <Col xl={12} className="mt-3 mb-3">
                    <div class="headingWithBG">
                        <h4>Venue of the Conference:</h4>
                        </div>
                    </Col>

                    <Col xl={12}>
			
                <p><strong>KAUTILYA SCHOOL OF PUBLIC POLICY</strong></p>
                <p class="kc-txt">GITAM (Deemed to be University)<br />
                Rudraram, Patancheru Mandal<br />
                Hyderabad, Telangana 502329</p>
                <p>Thank you for your interest in the Conference. We value your inquiries, feedback, and support. Please feel free to contact us using the following information:</p>
                <p><strong>Email ID:</strong> <a href="mailto:kc@kautilya.org.in">kc@kautilya.org.in</a></p>

		</Col>
        </Row>
            </Container>
        <Container>
                <Row>
                    <Col xl={12}>
                        <div class="headingWithBG">
                            <h4>Organizing Team</h4>
                            <Faculty faculty={facultydata} popup={false}/>
                        </div>
                    </Col>
                 </Row>
        </Container>
                
          </section>
        </>
    );
}
export default ContactConclave;