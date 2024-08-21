import { Col, Container, Row } from "react-bootstrap";

function StrengthenYourMPP(){
    return(
        <>
        <div className="event2_bg">
            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                        <h5>Strengthen your MPP application<br />
           <span className="text-primary">  with expert guidance </span></h5>
                        </Col>
                        </Row>
                        <Row className="mt-5">
                        <Col xl={4}>
                            <img src="./images/events/Deans-Image.png" alt="deans image" className="dean_img"/>
                        </Col>
                        <Col xl={8}>
                            <div className="ms-5 mt-5">
                            <img src="./images/events/ask-me-any.png" alt="ask me" className="ask_img mt-5 mb-5" />
                            <div className="text-white mt-5">
                            <p className="mt-5 font-xl text-white ">Syed Akbaruddin</p>
                            <p className="text-white">Dean, Kautilya School of Public Policy:<br/>
            Former Permanent Representativ<br/>
            of India to the UN</p>
            <p className="text-white"><img  src="./images/events/calender.png" alt="calender" style={{width:"50px"}} />
            July 11, Tuesday<br /> 
            <img  src="./images/events/time.png" alt="time"  style={{width:"50px"}} />
                7:30 pm (Via Zoom)</p>
                </div>
                </div>
                        </Col>
                    </Row>
                </Container>
            </section>
         </div>
            <section className="section_bg">
                <Container>
                    <Row>
                        <Col xl={12}>
                           <h5>
                           FIND OUT HOW YOU CAN START YOUR POLICYMAKING JOURNEY
                            </h5>
                            <p>
                            The study of public policy is a multidisciplinary pursuit that requires, above all, the dedication to drive change.
                             A passion for solving problems and a data-driven approach hold more weight than the traditional markers of educational background and professional experience.
                             As such, the question of what makes the “perfect” candidate has no specific answer.
                            </p>
                            <p>
                            Join our Dean, Syed Akbaruddin, for insights into the qualities, skills, and aptitude that drive policymakers.
                             Get a unique perspective on what we look for in applicants for the 2-year Master of Public Policy (MPP) program.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                        <h4 className="pseudo_border">WHAT THE SESSION WILL ADDRESS</h4>
                        <div className="heading_border mb-4"> </div>
                        </Col>
                        <Col xl={12}>
                        <ul className="entry_content">
                            <li>What are the qualities that define a good policymaker?</li>
                            <li>What are the strengths and skills you can showcase on your 2-year MPP application?</li>
                            <li>What are the traits we look for in each applicant?</li>
                            <li>What are the aspects covered during the personal interview?</li>
                            <li>What are the details we look for in recommendations?</li>
                            <li>How can you strengthen your application?</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section_bg p-5">

                <Container>
                    <Row>
                       <Col xl={12}>
                       <h4 className="pseudo_border">WHO SHOULD ATTEND?</h4>
                        <div className="heading_border mb-4"> </div>
                       </Col>
                       <Col xl={12}>
                       <ul className="entry_content">
                            <li>Aspiring policymakers</li>
                            <li>Aspirants of the 2-year MPP who are stuck at any stage of their application</li>
                            <li>Graduates and those in the final year of their program</li>
                            <li>Working Professionals looking for new career avenues</li>
                       </ul>
                       </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
}
export default StrengthenYourMPP;