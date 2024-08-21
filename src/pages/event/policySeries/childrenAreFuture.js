import { Col, Container, Row } from "react-bootstrap";

function ChildrenAreOurFuture(){
    return(
        <>
        <div className="children_future_bg">
           <section>
            <Container>
                <Row>
                <Col xl={12} className="m-5 p-5"></Col>
                    <Col xl={12} className="mb-5">
                    <p class="LTP-txt text-white">Let’s Talk<br />
                      <span className="bold mb-5">Policy</span></p>
                    </Col>
                    <Col xl={12}>
                 
		
			<p class="LTP-tit">Children are our Future:<br />
                    <span class="sub-tit">A post-pandemic view of educational<br />
                    opportunities and challenges in India</span></p>
                    <p class="ltp-event">
                        <span class="LTP eventicon">
                        <img width="6%" src="./images/events/calender_white.png" />
                            {/* <img width="5%" src="https://kautilya.org.in/wp-content/uploads/2023/01/date-icon.png" /> */}
                                <span style={{color: '#fff', fontWeight: '600'}}>September 27, Wednesday</span><br />
                                <img width="6%" src="./images/events/time_white.png" />
                    {/* <img width="5%"   src="https://kautilya.org.in/wp-content/uploads/2023/01/time-icon.png" /> */}
                    <span style={{color: '#fff', fontWeight: '600'}}>7:30 PM – 8:30 PM(Via Zoom)</span></span></p>

                        <p>
                        <a class="formbut" href="https://gitam.zoom.us/webinar/register/WN_J5QAY-dQT8yKhvSQe9qErw">Register Now</a>
                        </p>
                        
                    </Col>
                </Row>
            </Container>
           </section>
       
       
       <section className="bg-black">
         <Container className="wpb_single_image ">
            <Row>
                <Col xl={6}>
                 <img src="./images/events/policy_series/innerPage/childrenAreFuture/1.png" />             
                </Col>
                <Col xl={6}>
                 <img src="./images/events/policy_series/innerPage/childrenAreFuture/2.png" />             
                </Col>
            </Row>
         </Container>
        </section>
     </div> 


     <section>
        <Container>
            <Row>
                <Col xl={12}>
                <h4 className="pseudo_border">WHAT THE SESSION WILL ADDRESS</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">
               
<li>What’s the status of NEP implementation on the ground?</li>
<li>What are the macroeconomic and social impacts of children leaving the education system?</li>
<li>Are OTT platforms, digital channels, and mobile-based classrooms keeping up with physical classrooms?</li>
<li>What are the factors that impede drop-outs from restarting their education?</li>
<li>Which policy interventions can strengthen the education system from systemic shocks like the COVID-19 pandemic?</li>
<li>How effective are Edu-tech platforms in bridging the gap with a public-private solution?</li>

                    </ul>
                </Col>
            </Row>
        </Container>
     </section>

<section className="section_bg">
    <Container>
        <Row>
        <Col xl={12}>
                <h4 className="pseudo_border">WHO SHOULD ATTEND?</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={6}>
                <ul className="entry_content">
                                    
                        <li>School teachers, principals, and administrators</li>
                        <li>Graduate students or those in the final year of their program</li>
                        <li>UPSC aspirants</li>
                        <li>Aspirants of state-level teachers’ posts</li>

                </ul>
                </Col>
                <Col xl={6}>
                <ul className="entry_content">
                                    
                <li>Administrators of coaching institutes/centers</li>
                <li>University faculty members</li>
                <li>HR professionals</li>
                <li>Edu-tech executives</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
        </>
    );
}
export default ChildrenAreOurFuture;