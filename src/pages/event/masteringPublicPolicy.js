import { Col, Container, Row } from "react-bootstrap";

function MasteringPublicPolicy(){
    return(
        <>
        <div className="event4_bg">
            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                       

                        <h5 className="mt-5 mb-5"> The 2-year route to <br />
                        mastering public policy</h5>
                        </Col>
                        <Col xl={2}></Col>
                        <Col xl={10}>
                            <div className="ask_me_text mt-100">  
                              
			
                                <h5>ASK ME ANYTHING</h5>
                                <p >session with</p>
                                <p className="text-white"> <span className="name_bg_white">Syed Akbaruddin </span> <br />
                                Dean, Kautilya School of Public Policy;<br />
                                Former Permanent Representative<br />
                                of India to the UN</p>
                                <p className=" text-white"><img src="./images/events/calender_white.png" style={{width: "30px"}} className="me-3 mb-2"/>June 1, Thursday<br />
                                <img src="./images/events/time_white.png"  className="me-3" style={{width: "30px"}}/>7:00 PM to 8:30 PM (Via Zoom)</p>

		                       
                           
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
         </div>
            <section className="section_bg">
                <Container>
                    <Row>
                        <Col xl={12} className="text-center">
                           <h5>
                           TAP INTO THE GLOBAL DEMAND FOR SUBJECT MATTER SPECIALISTS
                            </h5>
                            <p  className="text-center">
                            The dimensions of governance, administration, public welfare, communication,
                             and business are all morphing rapidly with the evolution of technology. 
                             Today, governments and businesses seek professionals who can deliver data-driven, practical solutions to unique challenges in management,
                             administration, compliance, and much more.
                            </p>
                            <p  className="text-center">
                            Join Dean Syed Akbaruddin for an in-depth session on how you can transform these areas of challenge into opportunities.
                             Learn about the international pedagogy and immersive, collaboration-rich curriculum that powers the 2-year Master of Public Policy (MPP) program.
                              Also, learn about the exciting new roles our Class of 2023 graduates have secured at leading organizations like Paytm, 
                            RBI-H, I-PAC, and Global Trade Observer.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                        <h4 className="pseudo_border">WHAT WILL BE COVERED ?</h4>
                        <div className="heading_border mb-4"> </div>
                        </Col>
                        <Col xl={12}>
                        <ul className="entry_content">                        
                            <li>What sets the 2-year MPP apart?</li>
                            <li>What are the unique aspects of the curriculum?</li>
                            <li>Where are our graduates placed?</li>
                            <li>Where are the emerging opportunities in policymaking?</li>
                            <li>What makes the 2-year MPP unique in terms of a value proposition</li>

                          
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
                                                
                            <li>Undergraduates in the final year of their course</li>
                            <li>Junior to middle-levl professionals looking to transform their careers</li>
                            <li>UPSC aspirants</li>
                            <li>MBA aspirants</li>

                          
                       </ul>
                       </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
}
export default MasteringPublicPolicy;