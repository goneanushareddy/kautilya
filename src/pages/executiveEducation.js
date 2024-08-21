import { Col,Row,Container } from "react-bootstrap";
import { useState } from 'react';
import BannerImg from "./../assets/img/executive-education.jpg"
import SimpleSlider from "../components/SlickSlider";
import Tabs_section from "../components/Tabs";
function ExecutiveEducation(){
    const [excutiveData,change] = useState([
        {
          id:1,
          name : "Kautilya Advantage",
          description: "<ul><li>Experienced Team.</li><li>A mix of academic depth and practical application.</li><li>Engaging Conversations</li><li>World-class infrastructure.</li></ul>",
         
        },
        {
          id:2,
          name : "Benefits",
          description: "<p><b>For Organizations:</b></p><ul><li>Foster business resilience philosophies among senior executives.</li><li>Re-orient workflows and business practices to thrive in volatility.</li><li>Formulate strategies for risk mitigation using a data-driven approach.</li></ul><p><b>For Individuals:</b></p><ul><li>Streamline operational deficits in mitigating the impact of global risks.</li><li>Create future-ready networks of excellence for your organization.</li><li>Build unique skill sets to lead your organization through disruptive periods.</li></ul>",
           
        },
        {
          id:3,
          name : "Eligibility",
          description: "<p>The curriculum is designed to serve as an essential mid-career course for those seeking higher responsibilities and promotion to senior management roles. It would give you the necessary edge to take short-term as well as long-term decisions and make you an effective and efficient manager.</p>",
        },
        {
          id:4,
          name : "Steps to Apply",
          description: " <p>The certification cost is INR 20,000/- (excluding lodging, boarding, traveling, and personal expenses.)</p><ul><li>Fill the inquiry form.</li><li>Deposit the full program fee.</li><li>Receive confirmation letter.</li><li>Attend the program at the KSPP campus.</li><li>Receive a certificate, on successful completion of the program.</li></ul>",
           
        },
        
        
      ]);
    return(
        <>
       
            <Container>
                <Row>
                    <Col xl={12}>
                        <img src = {BannerImg} alt="banner image" />
                        <div className="text-with-lines mt-4 mb-4">
                            <div className="line"></div>
                            <p> <i className="fa-solid fa-circle-right text-primary"></i> Last Date to Apply: 30 Nov.'23 | Program Duration: 03 Days (9th Feb'24 to 11 Feb.'24)</p>
                            <div className="line"></div>
                         </div>
                    </Col>
                    <Col xl={12}>
                    <button className="btn btn-primary mb-2" type="button"> <i className="fa-solid fa-circle-down"></i>Download Brochure</button>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <h3 className="text-danger">Faculties</h3>

                       
                        <SimpleSlider />
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <img src="https://kautilya.org.in/wp-content/uploads/2023/10/library-2.jpg" alt="random image"/>
                        <p className="mt-4">
                        <b> Program Context:</b> Leadership in today’s volatile business environment has assumed multiple dimensions.
                         It’s imperative for businesses to remain well-versed in present and emerging global challenges in order to maintain continuity and drive growth. 
                        The Kautilya School of Public Policy aims to familiarize business executives with these emerging ‘Global Risks’ through a 3-day course.
                        </p>
                    </Col>
                </Row>
                <Row>
                   <Col xl={12}>
                   <h3 className="text-danger">Faculties</h3>
                   </Col>
                   <Col xl={4}>
                   <div className="card_info">
                        <div>
                            <i className="fa fa-info-circle"></i>
                        </div>
                        <div>                        
                        Day 01: The Global Risks That Surround Us.
                        </div>
                    </div>
                    </Col>
                    <Col xl={4}>
                    <div className="card_info">
                        <div>
                            <i className="fa fa-info-circle"></i>
                        </div>
                        <div>                        
                       
                           Day 02: Globalisation and its Impact on the Job Market, on Public Health and Growing Energy Demands.
                        </div>
                    </div>
                    </Col>
                    <Col xl={4}>
                    <div className="card_info">
                        <div>
                            <i className="fa fa-info-circle"></i>
                        </div>
                        <div>                        
                       
                        Day 03: Table-Top Exercise and Simulation.
                        </div>
                    </div>
                    </Col>

                  
                 


                </Row>
                <Row>
                    <Col xl={12} className="mb-4">
                        <img src="https://kautilya.org.in/wp-content/uploads/2023/10/slider8-1024x306.jpg" alt="some image" />
                    </Col>

                        <Col xl={12} className="mt-4">
                           <Tabs_section phd={excutiveData}/>
                        </Col>
                </Row>


            </Container>
      
        </>
    );
}
export default ExecutiveEducation;