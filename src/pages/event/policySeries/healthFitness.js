import { Container, Row,Col } from "react-bootstrap";

function HealthFitness(){
    return(
        <>
     
        <section className="healthFitness">
            <Container>
                <Row>    
                    <Col xl={12}>
                    <p style={{ textAlign: "right", }}>
                    <a style={{ backgroundColor: "black", color: "white" }}>INVITE US TO A COLLEGE WEBINAR</a>
         
            </p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xl={12}>
                        <img src="./images/events/policy_series/innerPage/buildingcareer/quote.png" />
                    </Col>
                    <Col xl={12}>
                        <h5 className="text-white" style={{fontSize:"55px", fontWeight: "700"}}>
                        Let’s Talk <br/>
Policy
                        </h5>
                        <h6 className="text-white" style={{fontSize:"42px", fontWeight: "600"}}>
                        Fitness and Health Policy <br />
                        Challenges Post Pandemic
                        </h6>
                        <p className="text-white">
                        20th of April, 2022 | 07:30 pm – 8:30pm
                        </p>
                    </Col>
                </Row>
            </Container>


        </section>
        <section className="healthFitness2">
        <Container>
                <Row>    
                    <Col xl={12}>
                      <h4>
                      About the Panelists
                      </h4>
                    </Col>
                    <Col xl={8} className="mx-auto">
                       <Row>
                        <Col xl={6}>
                        <img src="./images/events/policy_series/innerPage/healthfitness/pannel1.png" />
                        <p class="k-eventcard5-title">Dr. Ambrish Mithal</p>
                        <p class="k-eventcard5-desig">Chairman, Endocrinology &amp; <br /> diabetes, Max Health Care</p>
                        </Col>
                        <Col xl={6}>
                        <img src="./images/events/policy_series/innerPage/healthfitness/pannel2.png" />
                        <p class="k-eventcard5-title">Prof. (Dr.) Arvind Kumar</p>
                        <p class="k-eventcard5-desig">Chairman, Endocrinology &amp; <br /> diabetes, Max Health Care</p>
                        </Col>
                        <Col xl={6}>
                        <img src="./images/events/policy_series/innerPage/healthfitness/pannel3.png" />
                        <p class="k-eventcard5-title">Dr. Ambrish Mithal</p>
                        <p class="k-eventcard5-desig">Chairman, Endocrinology &amp; <br /> diabetes, Max Health Care</p>
                        </Col>
                        <Col xl={6}>
                        <img src="./images/events/policy_series/innerPage/healthfitness/pannel1.png" />
                        <p class="k-eventcard5-title">Dr. Ambrish Mithal</p>
                        <p class="k-eventcard5-desig">Chairman, Endocrinology &amp; <br /> diabetes, Max Health Care</p>
                        </Col>
                       </Row>
                    </Col>
                </Row>
        </Container>
        </section>

        <section className="bg-primary p-5">
           <Container>
            <Row>
                <Col xl={12}>               
                    <p className="text-white">The pandemic exposed catastrophic deficiencies and halted fast-forwarding activities of the world. The exorbitant treatment costs took a toll on the finances and mental well-being of different sections of society. Simultaneously, with everyone confined to their homes with limited physical activity, physical fitness consequently compromised public health. Lack of knowledge in modern training programs and technological illiteracy adversely affected fitness coaches and well as novices.</p>
                    <p className="text-white">The need for a regulatory body to monitor trends in fitness and healthcare is evident after many fatalities over the recent past, caused by people overexerting themselves as they hop on to these trends with little to no information and awareness.</p>
               </Col>
            </Row>
           </Container>
        </section>
        <section className="healthFitness3 p-5">
        <Container>
            <Row>
                <Col xl={12}> 
                    <p>Let’s talk Policy is a panel discussion series initiated by the Kautilya School of Public Policy, that brings forth a select group of panelists, sharing differing views on key national and global relevance, and building the dialogue into a conversation for the student community.</p>    
               <p>
               The series aims to unravel major themes around democracy, politics and human rights, and explore the challenges and rewards of implementing practices. We aim to create a cohesive platform and call on thematic experts to foster a healthy dialogue around the most pressing themes.
               </p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col xl={12}>
                    <p>
                        <b>
                        What will be discussed –
                        </b>
                    </p> 

                    <ul className="entry_content">
<li>How can we ensure access to good health coverage?</li>
<li>Highlight and act upon evidence-based care</li>
<li>How can you bring reforms in delivering health care?</li>
<li>Shift the focus towards the quality of implementation of the new programs and schemes as well as on fostering convergence across health programs.</li>
<li>How can we improve the coordination between public health and state govt. health agencies?</li>
<li>Create and modify telehealth policies and leverage flexibilities to increase access to tele-behavioral services (distance counseling etc)</li>
<li>How will these new initiatives be implemented and tested?</li>
<li>How can we create a robust, collaborative ecosystem for the public and private healthcare providers to work together in quest of desirable outcomes?</li>
</ul>
                </Col>
            </Row>
        </Container>
        </section>

        <section className="bg-primary">
<Container>
    <Row>
    <Col xl={12}>
      <h4 className="text-white">
      Who should attend?
        </h4>  
    </Col>
        <Col xl={4}>
        <img src="./images/events/policy_series/innerPage/healthfitness/1.png" />
                      
        </Col>
        <Col xl={4}>
        <img src="./images/events/policy_series/innerPage/healthfitness/1.png" />
                      
        </Col>
        <Col xl={4}>
        <img src="./images/events/policy_series/innerPage/healthfitness/1.png" />
                      
        </Col>
    </Row>
</Container>
        </section>
        </>
    );
}
export default HealthFitness;