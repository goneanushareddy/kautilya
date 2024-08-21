import { Col, Container, Row } from "react-bootstrap";

function Challanges5g() {
    return (
        <>
        <div className="challange5g">
             <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                        <div class="wpb_wrapper">
			<h2 class="text-white eventtitle-lineheight" style={{fontSize: "38px", lineHeight: "50px" , fontWeight: "500", textAlign: "left"}}>Let’s Talk Policy</h2>
                <h2 class="text-white eventtitle-lineheight" style={{fontSize: "40px", lineHeight: "40px" , fontWeight: "600", textAlign: "left"}}>5G In India – Aspirations &amp; Challenges</h2>
                <p class=" text-white eventicon mt-3">24th August 2022 | 6:00 P.M – 7:00 P.M</p>
                <p class=" text-white eventicon">Venue : Kautilya School of Public Policy</p>

		</div>
                        </Col>
                    </Row>
                </Container>
             </section>
          
        </div>
        <section>
            <Container className="social_icons ">
                
                <Row>
                    <Col xl={12}>
                    <h2 style={{fontSize: "26px", color: "#b1040e", textAlign: "left" ,fontWeight: "800"}}>Join Us</h2>
                    </Col>
                    <div className="d-flex justify-content-center align-items-center">

                   
                    <Col>
                       <img src="./images/events/policy_series/innerPage/5gChallanges/social.png" />
                    </Col>
                    <Col>
                       <img src="./images/events/policy_series/innerPage/5gChallanges/social2.png" />
                    </Col>
                    <Col>
                       <img src="./images/events/policy_series/innerPage/5gChallanges/social3.jpg" />
                    </Col>
                    </div>
                </Row>
            </Container>
        </section>
        <section className="challange5g2">
            <Container className="wpb_single_image ">
                <Row>
                <Col xl={12}>
                    <h2 style={{fontSize: "26px", color: "#b1040e", textAlign: "left" ,fontWeight: "800"}}>About the panelists</h2>
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/5gChallanges/1.png" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/5gChallanges/2.png" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/5gChallanges/3.png" />
                    </Col>
                    <Col xl={3} >
                       <img src="./images/events/policy_series/innerPage/5gChallanges/4.png" />
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col xl={12}>
                        <p>
                        India is gearing up for the rollout of 5th generation or 5G technology in line after the 4G LTE . As the world’s second largest wireless market 5G is expected to revolutionise several key sectors in India. The recently held auction for 5G spectrum in India ended with the biggest players in the telecom industry bidding a combined 19 billion US dollars. Reliance Jio- was the highest bidder spending 11 billion dollars on the upgraded technology followed by major players Vodafone Idea and Bharti Airtel – and new entrant Adani Data Networks.
                        </p>
                        <p>
                        With 5G, signals run over new radio frequencies with three different methods, depending on the type of assets a wireless carrier has: low-band network, high-band network and mid-band network. The roll-out of 5G likely this October is anticipated to unlock potential economic growth aided by improved mobile broadband and fixed wireless access.
                        </p>
                        <p>
                        In the 5G ecosystem how will AR/VR act as a building block for all emerging technologies? Can 5G propel India into a digital and technological powerhouse?
                        </p>
                        <p>
                        This Let’s Talk Policy will see our experts discuss the potential of 5G technology and multiple challenges involved in the roll out related to privacy, security, legislation, infrastructure, monetisation, traffic management and sensing. Listen in to insights on how can these challenges be tackled?
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default Challanges5g;