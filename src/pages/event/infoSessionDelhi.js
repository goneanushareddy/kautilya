import { Col, Container, Row } from "react-bootstrap";

function InfoSessionDelhi(){
    const imageStyle = {
        width: '250px', 
        height: 'auto', 
      };
      const imageStyle1 = {
        width: '80px', 
        height: 'auto', 
      };
    return(
        <>
        <div className="info_session_main">
            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <img src="./images/events/Info_Session_Logo.png"  alt="logo" style={{width: "150px"}}/>
                            <h2>Get started<br />
                                on your public <br />
                                policy career
                            </h2>
                            <p class="sub-title">Meet our leadership team<br />
                                to know more about the<br />
                                2-year Master in Public Policy
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={4}>
                        <p>
                            <img  src="./images/events/calender_red.png" alt="icon calender" style={{width: "50px"}} /><span className="sub-text">Sunday, March 19</span></p>
                        </Col>
                        <Col xl={4}>
                        <p>
                            <img  src="./images/events/time_red.png" alt="icon time" style={{width: "50px"}}/><span className="sub-text">10:30 am – 1 pm</span></p>
                        </Col>
                        <Col xl={4}>
                        <p>
                            <img  src="./images/events/map_red.png" alt="icon map" style={{width: "20px"}}/><span className="sub-text">Inspire, Le Meridien, New Delhi</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

        <section className="info_section_styles">
            <Container>
                <Row>
                    <Col xl={12}>
                       <h4>LEADERSHIP TEAM</h4>
                    </Col>
                </Row>
                <Row>
                <Col xl={12}>
                    <div className="d-flex justify-content-between align-items-center">
                        <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/03/Group-78-min.png"
                        src="./images/events/infosession/person1.png"
                        alt="Image 1"
                        style={imageStyle}
                        />
                        <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/03/Group-77-min.png"
                        src="./images/events/infosession/person2.png"
                        alt="Image 2"
                        style={imageStyle}
                        />
                        <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/03/Group-76-min.png"
                        src="./images/events/infosession/person3.png"
                        alt="Image 3"
                        style={imageStyle}
                        />
                    </div>
                    </Col>
                </Row>
            </Container>
       
            <Container className="mt-5">
                <Row>
                    <Col xl={12}>
                       <h4>ADVISORY BOARD MEMBERS</h4>
                    </Col>
                </Row>
                <Row>
                <Col xl={12}>
                    <div className="d-flex justify-content-between align-items-center">
                        <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/03/Group-79-min.png"
                        src="./images/events/infosession/person4.png"
                        alt="Image 1"
                        style={imageStyle}
                        />
                        <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/03/Group-80-min.png"
                        src="./images/events/infosession/person5.png"
                        alt="Image 2"
                        style={imageStyle}
                        />
                        <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/03/Group-81-min.png"
                        src="./images/events/infosession/person6.png"
                        alt="Image 3"
                        style={imageStyle}
                        />
                    </div>
                    </Col>
                </Row>
            </Container>
       
            <Container className="mt-5">
                <Row>
                    <Col xl={12}>
                       <h4>What You Can Expect</h4>
                    </Col>
                </Row>
                <Row>
                <Col xl={12} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/02/Group-53.png"
                        src="./images/events/infosession/expect1.png"
                        alt="Image 1"
                        
                        />
                        <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/02/Group-52.png"
                        src="./images/events/infosession/expect2.png"
                        alt="Image 2"
                       
                        />
                       
                    </div>
                    </Col>
                    <Col xl={12} className="mt-4">
                    <div className="d-flex justify-content-between align-items-center">
                    <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/02/Group-50.png"
                        src="./images/events/infosession/expect3.png"
                        alt="Image 3"
                        
                        />
                         <img
                        // src="https://kautilya.org.in/wp-content/uploads/2023/02/Group-51.png"
                        src="./images/events/infosession/expect4.png"
                        alt="Image 4"
                      
                        />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="infosection_bg">
            <Container>
                <Row>
                    <Col xl={12}>
                    <h4 className="infs-sec4-tit">About Kautilya’s Master in<br />
                        Public Policy</h4>
                        <div className="vc_empty_space"></div>

                        <p class="sec4-txt">The Kautilya Master in Public Policy is a 2-year,
                         full-time residential program designed to expand your knowledge, enhance skills, and instill values.
                        Our curriculum embraces international pedagogical and research outlook, while combining the ground realities of India and her citizens.</p>


                        <div className="d-flex justify-content-between align-items-center">
  <img src="./images/events/infosession/icontext1.png"  style={imageStyle1} />
  <img src="./images/events/infosession/icontext2.png" style={imageStyle1}/>
  <img src="./images/events/infosession/icontext3.png" style={imageStyle1}/>
  <img src="./images/events/infosession/icontext4.png" style={imageStyle1}/>
  <img src="./images/events/infosession/icontext5.png" style={imageStyle1}/>


</div>

                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default InfoSessionDelhi;