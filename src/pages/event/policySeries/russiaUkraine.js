import { Col, Container, Row } from "react-bootstrap";

function RussiaUkrain(){
    return(
        <>
         <section className="russiaUkrain">
            <Container>
               <Row>
                <Col xl={12}>
<div className="p-5 m-5"></div>
                </Col>
                <Col xl={12}>
             <h5 style={{fontSize: "38px", color: "white"}}>   PANEL DISCUSSION:</h5> 
             <h6 style={{fontSize: "38px", color: "white"}}> UNDERSTANDING <br />
                    RUSSIA-UKRAINE CRISIS</h6>
                    <p style={{fontSize: "30px", color: "white", marginTop: "30px"}}> March 9th, 2022 | 7PM – 8PM </p> 
                </Col>
               </Row>
            </Container>
         </section>
         <section className="russiaUkrain2">
<Container>
    <Row>
        <Col xl={6} className="mx-auto">
            <Row>
                <Col xl={6}>
                   <img src="./images/events/policy_series/innerPage/russiaukraine/1.png" />
                   <p class="k-eventcard5-title text-white">Amb. Syed Akbaruddin</p>
                        <p class="k-eventcard5-desig text-white">Fmr. Permanent Rep. of India to
the UN; Dean, Kautilya</p>
                       
                </Col>
                <Col xl={6}>
                   <img src="./images/events/policy_series/innerPage/russiaukraine/2.png" />
                   <p class="k-eventcard5-title text-white">Amb. D. B. Venkatesh Varma</p>
                        <p class="k-eventcard5-desig text-white">(IFS:1988), recently retired Indian
Ambassador to Russia; Lectures
occasionally at Kautilya</p>
                </Col>
            </Row>
        </Col>
        <Col xl={3} className="mx-auto">
        <img src="./images/events/policy_series/innerPage/russiaukraine/2.png" />
                   <p class="k-eventcard5-title text-white">Prateek Kanwal</p>
                        <p class="k-eventcard5-desig text-white">Project Director at
Ekatrit – Educate Girls;
Co-Founder, Kautilya</p>
        </Col>
    </Row>
</Container>
         </section>

         <section>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h5 className="text-primary">Listen to India's former UN representative and India's former Ambassador to the Russian Federation discuss:</h5>
                    </Col>
                    <Col xl={12}>
                    <ul className="entry_content">
<li>Background and history of the current crisis in Ukraine.</li>
<li>What accounts for the Russian Intervention?</li>
<li>Is the Russian action a breach of International Law?</li>
<li>Regional implications in Europe.</li>
<li>Role of NATO in the current situation.</li>
<li>Global Implications – Political and Economic.</li>
<li>What should India’s stand at the UN Security Council be?</li>
<li>Importance of the role of the UN.</li>
<li>Are we witnessing a return to the Cold War?</li>
<li>Concerns of the former Soviet states.</li>
<li>What next?</li>
</ul>
                    </Col>
                </Row>
            </Container>
         </section>
         <section className="russiaUkrain3">
<Container>
    <Row>
        <Col xl={12}>
            <h4 className="text-white mb-5">
            Who should attend?
            </h4>
            <ul className="entry_content text-white">
<li>Those keen in public life, public policy &amp; administration, International relations governance, media, journalism &amp; communications, politics, and other related fields.</li>
<li>Those wanting to pursue careers in International organisations.</li>
<li>Those seeking clarity on what information to absorb &amp; how to process it with respect to the current situation in Ukraine.</li>
<li>Academicians, researchers, journalists and professionals working in, or following the fields mentioned above.</li>
<li>Young Indians who are keen to understand how geo-politics plays out and desire to bring about change.</li>
</ul>
        </Col>
        </Row>
</Container>
</section>         
        </>
    );
}
export default RussiaUkrain;