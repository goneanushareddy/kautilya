import { Col, Container, Row } from "react-bootstrap";

function AcceleratingClimate(){
    return(
        <>
        <div className="accelerating_climate">
           <section>
            <Container>
                <Row>
                <Col xl={12} className="m-5 p-5"></Col>
                    <Col xl={12} className="mb-5">
                    <p class="LTP-txt text-white">Let’s Talk<br />
                      <span className="bold mb-5">Policy</span></p>
                    </Col>
                    <Col xl={12}>
                 
                    

			<p class="LTP-tit">Accelerating Climate<br /> Transition in India </p>
                   <p className="text-white">
                    <small>
                    Opportunitites & Challenges at a Time of Global Boiling
                    </small>
                   </p>
                    <p class="ltp-event">
                        <span class="LTP eventicon">
                            {/* <img width="5%" src="./images/events/date-icon.png" /> */}
                            <img width="6%" src="./images/events/calender_white.png" />
                                <span style={{color: '#fff', fontWeight: '600'}}>September 27, Wednesday</span><br />
                    {/* <img width="5%"   src="./images/events/time-icon.png" /> */}
                    <img width="6%" src="./images/events/time_white.png" />
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
                <Col xl={4}>
                 <img src="images/events/policy_series/innerPage/acceleratingClimate/Manish.png" />
                </Col>
                <Col xl={4}>
                <img src="images/events/policy_series/innerPage/acceleratingClimate/Namita.png" />         
                </Col>
                <Col xl={4}>
                <img src="images/events/policy_series/innerPage/acceleratingClimate/Anita-Bhatia-copy.png" />          
                </Col>
            </Row>
         </Container>
        </section>
     </div> 


<section className="accelarating_climate2">
<Container>
    <Row>
        <Col xl={12}>
            
        <h4 className="eventsubtitle-lineheight2  txt-white"><strong>SOLAR, MISSION LIFE…WHAT ELSE IS IN INDIA’S ARSENAL?</strong></h4>
        <div class="heading_border_white mb-4"> </div>
        <p className="text-white">
        The July of 2023 has been reported as the hottest month on record. Heightened temperatures sparked weather anomalies that quickly exacerbated health issues and spread widespread devastation.
         In India, climate-linked disasters ravaged wide swathes of the Northern and Western regions.</p>
            <p className="text-white">
            In this context, India’s ambitious global goals of becoming the back-office and manufacturer of the world have been the subject of much debate,
             applause, and even criticism. As such, how do these global events shape India’s strategy to eliminate emissions? Is New Delhi’s slew of policy measures enough? 
            Join our experts for hearing both sides of the coin. 
               </p>
        </Col>
    </Row>
</Container>
</section>



<section>
        <Container>
            <Row>
                <Col xl={12}>
                <h4 className="pseudo_border">WHAT THE SESSION WILL COVER</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">
                    <li>Where do India’s efforts to achieve net-zero emissions stand?</li>
                    <li>What is the future of India’s efforts to push for climate accountability from developed nations?</li>
                    <li>Is there a solution to the standoff over the Paris Agreement climate goals?</li>
                    <li>Are India’s efforts to ramp up power generation from renewable sources being adopted in the right manner?</li>
                    <li>What are the policy-level deadlocks to achieving a global consensus on climate funding?</li>
                    <li>What are the emerging opportunities India can tap into for furthering ground-level adoption of climate-conscious strategies?</li>
                 </ul>
                </Col>
            </Row>
        </Container>
     </section>

<section className="section_bg">
    <Container>
        <Row>
        <Col xl={12}>
                <h4 className="pseudo_border">WHO SHOULD ATTEND ?</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">
                                    
                <li>Graduates and those in the final year of their program</li>
                <li>UPSC Aspirants</li>
                <li>Members of think tanks, consultancies involved in sustainable development</li>
                <li>Members of research organizations</li>
                <li>Students of global trade and foreign policy</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
        </>
    );
}
export default AcceleratingClimate;