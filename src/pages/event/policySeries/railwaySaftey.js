import { Container, Row, Col } from "react-bootstrap";
function RailwaySaftey() {
    return(
        <>
        <section className="railwaySaftey">
        <Container>
                
                <Row>
                <Col xl={12} className="m-4 p-4"></Col>
                    <Col xl={12} className="mb-5">
                    <p class="LTP-txt">Let’s Talk
                      <span className="bold mb-5">Policy</span></p>
                    </Col>
                    <Col xl={12}>
                 
                    

			<p class="LTP-tit">Indian Railways
– Safety and <br />
Modernization <br />
Challenges</p>
           
                    <p class="ltp-event mt-5 text-white">
                        <span class="LTP eventicon">
                            Date :
                                 <span style={{color: '#fff', fontWeight: '600', marginLeft: "10px"}}>June 21, 2023(via Zoom)</span><br />
                   Time :
                     <span style={{color: '#fff', fontWeight: '600',marginLeft: "10px"}}>7:00 pm – 8:00 pm IST </span></span></p>

                      
                        
                    </Col>
                </Row>
            </Container>

        </section>

        <section>
        <Container>
        <Row className="wpb_single_image">
                <Col xl={4}>
      <img src="./images/events/policy_series/innerPage/railwaysaftey/Mahesh-Mangal.jpg" />
      </Col>
      <Col xl={4}>
      <img src="./images/events/policy_series/innerPage/railwaysaftey/Alok-Verma.jpg" />
                </Col>
                <Col xl={4}>
      <img src="./images/events/policy_series/innerPage/railwaysaftey/Smita.jpg" />
                </Col>
               
            </Row>
        </Container>
    </section>

    <section className="railwaySaftey2">
    <Container>
    <Row>
        <Col xl={12}>
            
        <h4 className="eventsubtitle-lineheight2  txt-white"><strong>CLEARING THE ROUTE FOR INDIA’S RAILWAY JOURNEY</strong></h4>
      <div class="heading_border_white mb-4"> </div>
        <p className="text-white">
        India’s rail infrastructure is one of its primary economic and social lifelines. As of August 2022, the Indian Railways
         is operating 11,000 trains every day, of which, 7,000 are passenger trains.
         Each day, the Railways serve 13 million passengers across India on a route length of 68,000 km.
       </p> 
          <p className="text-white">
          While India has introduced many projects since the 1970s to upgrade Infrastructure and expand the network, bottlenecks in procurement, 
          project development challenges, and various other issues have hobbled these initiatives. Join our expert panel for 
          a profound debate on finding the balance between modernizing the railway infrastructure and bolstering safety and operational protocols.
               </p>
        </Col>
    </Row>
</Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col xl={12}>
                <h4 className="pseudo_border">WHAT YOU CAN EXPECT</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">
                <li>What are the kinds of challenges India is facing in upgrading its rail infrastructure?</li>
                <li>What initiatives are currently in place to build capacity?</li>
                <li>What are the policy solutions that can help break the gridlock?</li>
                <li>What impact has the government’s Mission Raftar had so far?</li>
                <li>In India’s push for upgraded freight corridors, how can policy help shape the road ahead?</li>
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
                <Col xl={6}>
                <ul className="entry_content">
                                    
                <li>Transportation and design engineers</li>
                <li>Members of transport organizations</li>
                <li>Urban and rural town planners</li>
                <li>Emergency services personnel</li>

                </ul>
                </Col>
                <Col xl={6}>
                <ul className="entry_content">
                                    
                <li>Disaster management organizations</li>
                <li>Members of think tanks, consultancies pertaining to urban and rural mobility</li>
                <li>Aspirants of public policy studies</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
        </>
    );
}
export default RailwaySaftey;