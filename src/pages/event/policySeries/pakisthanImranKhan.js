import { Col, Container, Row } from "react-bootstrap";
import Events from "../../events";

function PakisthanImranKhan(){
    return(
        <>
        <section className="pakImran">
           <Container>
            <Row>
            <Col xl={12} className="p-3 m-3"></Col>
                <Col xl={12}>

              
                        <h4 class="cus-public"><strong>Let’s Talk Policy</strong></h4>
                        <h4 class="k-h2 eventsubtitle-lineheighttit" style= { {color : "b11016"}}><span class="evt-sub">The</span> Pakistan<br />
                        Conundrum<br />
                        <span class="evt-sub">and</span> Imran Khan<br />
                        Challenge</h4>
                        <h4 class="cus-time">May 26, 2023 (Via Zoom)<br />
                        07:00 pm – 8:00 pm IST</h4>
               
                </Col>
            </Row>
           </Container>
        </section>
        <section>
            <Container className="wpb_single_image ">
                <Row>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/pakimran/1.png" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/pakimran/2.png" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/pakimran/3.png" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/pakimran/4.png" />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="bg_primary p-5">
            <Container>
                <Row>
                    <Col xl={12}>
                        <h4 className="eventsubtitle-lineheight2  txt-white"><strong>NAVIGATING THROUGH THE TURMOIL OF PAKISTAN’S POLITICS</strong></h4>
                        <div class="heading_border_white mb-4"> </div>
                    </Col>
                    <Col xl={12}>
                       <p className="text-white">
                       The Pakistan government’s intended action against former Prime Minister Imran Khan and the alleged backlash from his supporters
                        has ravaged the country over the past few weeks. His detention in Islamabad set off a wave of protests that resulted in several deaths and widespread destruction of property. However, things escalated further when he was ordered to be released the next day.
                        Supporters of the ruling coalition decried the judgment of the Chief Justice and took to the streets demanding his ouster.
                       </p>
                       <p className="text-white">
                       These events are the latest in Pakistan’s turbulent political history. 
                       Join our expert panel, moderated by Smita Sharma, as it decodes the role of each stakeholder in Pakistan’s realpolitik and their ambitions.
                       </p>
                    </Col>
                </Row>
            </Container>
        </section>


        <section>
        <Container>
        <Row>
        <Col xl={12}>
                <h4 className="pseudo_border">WHAT WILL THE SESSION ADDRESS</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">
                                    
                    <li>What could be the Pakistan government’s next course of action?</li>
                    <li>What are the options for the Pakistan Army, which is smarting over the attack on its installations during the protests?</li>
                    <li>What is the impact of this situation on the country’s economy?</li>
                    <li>What role can multilateral institutions play in brokering peace?</li>
                    <li>What is the impact on Pakistan’s global standing and relations?</li>
                    <li>Can Pakistan’s latest imbroglio clean the slate for a stable regime?</li>

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
                                    
                <li>UPSC aspirants</li>
                <li>Think tanks, NGOs focused on foreign policy</li>
                <li>Members of foreign trade organizations</li>
                <li>Students of foreign policy/international relations</li>
                <li>Citizens passionate about global foreign policy</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
        </>
    );
}
export default PakisthanImranKhan;