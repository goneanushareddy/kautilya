import { Col, Container, Row } from "react-bootstrap";

function EmergingOppurtunities(){
    return(
        <>
<div className="emeringOpp">
<section>
    <Container>
        <Row>
            <Col xl={12}>
                <h5>
                Emerging opportunities <br/>
in public policy
                </h5>
            </Col>
        </Row>
        <Row className="mt-5">
        <Col xl={3}>
            <img src="./images/events/emerging.png"/>
        </Col>
            <Col xl={9}>
                <div className="text_emerging">
                <p>Join the</p>
                <h6 >ASK ME ANYTHING</h6>
                <p>on public policy careers with<br/>
                <span className="name_text">Prateek Kanwal     </span><br/>
                Co-Founder, Kautilya School<br/>
                of Public Policy</p>
                </div>
            </Col>
            <Col xl={2}> </Col>
            <Col xl={10}>
            <p className="schedule">May 19, Friday<br />
        7:00 PM to 8:30 PM (Via Zoom)</p>
                 </Col>
        </Row>
    </Container>
</section>


<section className="section_bg">
                <Container>
                    <Row>
                        <Col xl={12} className="text-bold">
                          
                            <p>
                            The socioeconomic problems of today require expertise in disciplines such as econometrics, design thinking, public administration, and trade policy – to name a few. Businesses and governments are actively scoping for subject matter experts to build accountability and spearhead growth.
                             Specialists who con struggle the legislation, commerce, people, and development disciplines are crucial to the nation’s growth trajectory.
                            </p>
                            <p>
                            Join our Co-Founder Prateek Kanwal for an Ask Me Anything session on how you can start acquiring the skill sets and industry competencies to steer progress the night way.
                             Mr. Kamal’s decades-long journey can serve as a great diving board for young Indians passionate about diving waves of change globally.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>



 <section className="bg-white">
        <Container>
            <Row>
                <Col xl={12}>
                <h4 className="pseudo_border">WHAT THE SESSION WILL ADDRESS</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">                        
                    <li>How the MPP prepares you for global career avenues?</li>
                    <li>What does the policymaking growth pathway look like?</li>
                    <li>What sets Kautilya’s curriculum apart?</li>
                    <li>What facilities are available on campus?</li>
                    <li>Does Kautliya have internship and placement assistance?</li>
                    <li>What should I keep in mind to submit the perfect application form?</li>
                    <li>Does Kautilya provide scholarships?</li>
                    <li>Why is the MPP a more focused approach to policymaking?</li>
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
                <Col xl={12}>
                <ul className="entry_content">                                   
             
<li>Those aspiring to build a career in public life, public policy, governance and administration, the social sector, and other related fields</li>
<li>Academicians, researchers, and other professionals relevant sectors</li>
<li>Young Indians who want to build a better India</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>


</div>
        </>
    );
}
export  default EmergingOppurtunities;