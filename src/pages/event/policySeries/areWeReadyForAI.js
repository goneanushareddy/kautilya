import { Col, Container, Row } from "react-bootstrap";

function AreWeReadyForAI (){
    return(
        <>
        <section className="readyforAI">
            <Container>
                <Row>
                <Col xl={12} className="m-3 p-3"></Col>
                    <Col xl={12}>
                    <div class="top-div ">
                            <h4 class="cus-public text-white">Let’s Talk Policy</h4>
                            <h4 class="k-h2 eventsubtitle-lineheighttit text-white" style={{fontWeight:"300"}}>Are we<br />
                            <span style={{fontWeight:"300"}}>really ready for
                                </span><br />
                            <span class="inner-tit-main text-white">artificial<br />
                            intelligence? </span></h4>
                            <h4 class="cus-time text-white">May 04, 2023(via Zoom)<br />
                            7:00 pm – 8:00 pm IST</h4>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>


        <section>
            <Container className="wpb_single_image ">
                <Row>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/areWEReady/Amar.jpg" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/areWEReady/Nikhil.jpg" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/areWEReady/Mishi.jpg" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/areWEReady/Nidhi.jpg" />
                    </Col>
                </Row>
            </Container>
        </section>


        <section className="bg_primary p-5">
            <Container>
                <Row>
                    <Col xl={12}>
                        <h4 className="eventsubtitle-lineheight2  txt-white"><strong>WHAT THE AI-ENABLED FUTURE HOLDS FOR HUMANITY</strong></h4>
                        <div class="heading_border_white mb-4"> </div>
                    </Col>
                    <Col xl={12}>
                       <p className="text-white">
                       Artificial intelligence (Al) has become the buzzword for disruption in recent months. Businesses of all scales, entrepreneurs, 
                       and students are all trying to leverage Al-based solutions in their pursuit of growth. It’s important, therefore,
                        to understand the growth trajectories of this technology and its implications on employment, safety, security, and accuracy of output.
                       </p>
                       <p className="text-white">
                       Join our expert panel, moderated by renowned journalist Nidhi Razdan,
                        for an exploration of how Al-based solutions are being developed, the problems they are trying to solve, and who stands to benefit.
                       </p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
        <Container>
            <Row>
                <Col xl={12}>
                <h4 className="pseudo_border">WHAT WILL BE COVERED</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">
                <li>What do the advances in algorithms, computing power, and data explosion mean for the advancement in Al?</li>
                <li>What does the age of Artificial General Intelligence (AGI) and Artificial Superintelligence (ASI) portend?</li>
                <li>Are we equipped to deal with superintelligent agents that can compete against humans?</li>
                <li>Will employers still hire humans over Al agents in the future?</li>
                <li>Do we have policies in place to tackle this revolutionary existential change?</li>
                    </ul>
                </Col>
            </Row>
        </Container>
     </section>

<section className="section_bg">
    <Container>
        <Row>
        <Col xl={12}>
                <h4 className="pseudo_border">WHO SHOULD ATTEND</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">
                                    
                <li>Business owners</li>
                <li>Corporate sector employees</li>
                <li>Research and activist groups focusing on tech-led innovation</li>
                <li>Management professionals</li>
                <li>Aspiring journalists</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
        </>
    );
}
export default AreWeReadyForAI;