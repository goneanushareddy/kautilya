import { Col, Container, Row } from "react-bootstrap";

function MasterPlayBook(){
    return(
        <>
<section className="masterPlayBook">
  <Container>
    <Row>
    <Col xl={12} className="m-4 p-4"></Col>
        <Col xl={12}>
      
            <img  src=" ./images/events/policy_series/innerPage/masterPlaybook/ask.jpg" style={{width:"350px"}} />
           
<p className="LTP-tit1 mt-4" ><span style={{background : "#000"}}>A master’s playbook on incubating<br />
public policy excellence</span></p>
<div  className="d-flex">
<div>
<img  src="./images/events/policy_series/innerPage/masterPlaybook/Dean.jpg"  style={{width:"200px"}}/>
    
</div>
<div>
<p><span class="ltp-syed">Syed Akbaruddin</span></p>
<p class="LTP-txt-sm">Dean, Kautilya School of Public Policy:<br />
Former Permanent Representativ<br />
of India to the UN</p>
<p><span class="time_date">
    <img src="./images/events/calender_red.png" /> June 27, Tuesday<br />
<img  src="./images/events/time_red.png" /> 7:30 pm (Via Zoom)</span></p>

</div>
</div>



        </Col>
    </Row>
  </Container>
</section>

<section className="section_bg">
    <Container>
        <Row>
            <Col xl={12}>
            <h4 className="eventsubtitle-lineheight2 text-center text-dark mb-4"  >UPGRADE FROM A GENERALIST TO A SPECIALIST</h4>
            <p className="text-center">
            From decoding regional laws to introducing new technologies to the masses, the discipline of public policy is an overarching, multidisciplinary path to driving change. 
            Pressing challenges such as the climate crisis and global economic Instability also require an arsenal of policy-driven, unique solutions
            </p>
            <p className="text-center">
            Join Dean Akbaruddin for an Ask Me Anything session for expert insights into how you can develop the expertise and technical competencies that corporations and governments are looking for.
             His decades-long career in public service is the backbone of the 2-year Master of Public Policy (MPP).
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
                    <li>what’s driving the demand for public policy specialists?</li>
                    <li>What are the avenues available to aspiring policymakers?</li>
                    <li>What are the career paths you can purse after the MPP?</li>
                    <li>What kind of roles have MPP graduates secured?</li>
                    <li>How the MPP ensure upskilling and holistic development?</li>
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
                                    
                <li>Graduates and those in the final year of their program</li>
                <li>Junior and mid-level corporate executives</li>
                <li>Media professionals</li>
                <li>UPSC aspirants</li>
                <li>Citizens passionate about problem-solving and community development</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
        </>
    );
}
export default MasterPlayBook;