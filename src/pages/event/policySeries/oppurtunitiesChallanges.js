import { Container, Row, Col } from "react-bootstrap";


function OppurtunitiesChallanges(){
    return(
    <>
    <div className="oppChallanges">
    <section>
      
            <Container>
                
                <Row>
                <Col xl={12} className="m-4 p-4"></Col>
                    <Col xl={12} className="mb-5">
                    <p class="LTP-txt">Let’s Talk
                      <span className="bold mb-5">Policy</span></p>
                    </Col>
                    <Col xl={12}>
                 
                    

			<p class="LTP-tit">Economic Outlook<br /> for India –</p>
            <p style={{fontWeight: "400", fontSize: "24px", color: "white"}}>Opportunities and Challenges</p>
                    <p class="ltp-event margin-top text-white">
                        <span class="LTP eventicon">
                            Date :
                                 <span style={{color: '#fff', fontWeight: '600', marginLeft: "10px"}}>July 13, Thursday</span><br />
                   Time :
                     <span style={{color: '#fff', fontWeight: '600',marginLeft: "10px"}}>7:30 pm (via Zoom) </span></span></p>

                      
                        
                    </Col>
                </Row>
            </Container>
           </section>
    </div>
    <section>
        <Container>
        <Row className="wpb_single_image">
                <Col xl={6}>
      <img src="./images/events/policy_series/innerPage/oppChallanges/Manisha.jpg" />
      </Col>
      <Col xl={6}>
      <img src="./images/events/policy_series/innerPage/oppChallanges/Anita.jpg" />
                </Col>
               
            </Row>
        </Container>
    </section>

    <section className="oppChallanges2">
    <Container>
    <Row>
        <Col xl={12}>
            
        <h4 className="eventsubtitle-lineheight2  txt-white"><strong>India’s decade on the global stage – Myth or Reality?</strong></h4>
      <div class="heading_border_white mb-4"> </div>
        <p className="text-white">
        IGlobal economic turbulence is showing signs of abating but long-term stability remains out of sight. Multilateral organizations,
         however, are bullish about India’s growth prospects in this decade. Domestically, demand is rising,
         while inflation has become a hotly contested issue.
       </p> 
          <p className="text-white">
          Tune in to a comprehensive analysis of India’s performance on the global charts and the way ahead. Our expert panel member and moderator
           Anita Bhatia will deconstruct the white noise around India’s growth story and lay out a data-driven roadmap
           of the opportunities New Delhi has and the bottlenecks it faces in driving the development curve with an eye on the 2024 general elections.
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
                <li>What steps is India taking to push its share of global GDP?</li>
                <li>What are the foreign policy initiatives that New Delhi has adopted to drive its global standing?</li>
                <li>How are the economic measures for welfare and ease of doing business faring?</li>
                <li>What impact will further pressure on global supply chains have on India’s input/output dynamics?</li>
                <li>Pitched as the voice of the global south, what are the options available to India for furthering economic relief across the grouping?</li>
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
                <Col xl={6}>
                <ul className="entry_content">
                                    
                <li>Aspiring policymakers</li>
                <li>Foreign policy, international trade students</li>
                <li>UPSC aspirants</li>

                </ul>
                </Col>
                <Col xl={6}>
                <ul className="entry_content">
                                    
                <li>Journalists</li>
                <li>Researchers</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
    </>
    );
}
export default OppurtunitiesChallanges;