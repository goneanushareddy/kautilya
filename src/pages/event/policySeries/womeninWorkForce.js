import { Col, Container, Row } from "react-bootstrap";

function WomenInWorkForce(){
    return(
        <>
        <section className="womenWork">
     <Container>
        <Row>
        <Col xl={12} className="m-3 p-3"></Col>
            <Col xl={12}>

            <div class="top-div">
                <h4 class="cus-public" style={{color: "#000"}}><strong>Let’s Talk Policy</strong></h4>
                <h4 class="k-h2 gitam-color eventsubtitle-lineheighttit">How can we increase<br />
                the number of women<br />
                in the workforce?</h4>
                <h4 class="cus-time k-h2-white"><span style={{background : "#000", color:"white"}}>March 30, 2023</span><br />
                <span style={{background : "#000", color:"white"}}>7:00 pm – 8:00 pm IST</span></h4>
            </div>
            </Col>
        </Row>
     </Container>
        </section> 


        <section>
            <Container className="wpb_single_image ">
                <Row>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/womenWorkForce/1.png" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/womenWorkForce/2.png" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/womenWorkForce/3.png" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/womenWorkForce/4.png" />
                    </Col>
                </Row>
            </Container>
        </section>


        
<section className="womenWork2">
<Container>
    <Row>
        <Col xl={12}>
            
        <h4 className="eventsubtitle-lineheight2  txt-white"><strong>WOMEN WORKFORCE PARTICIPATION IN INDIA – A STORY OF INVERSE GROWTH?</strong></h4>
        <div class="heading_border_white mb-4"> </div>
        <p className="text-white">
        India’s meteoric rise on the global stage leads to the presumption that the workforce participation of half its population is increasing. A close look at the numbers paints a much grimmer picture, India ranks 135th out of 146 countries in the World Economic Forum’s Global Gender Gap Index for 2022. What led to the present-day scenario where only one out of five women has formal employment? Watch our panel of Industry experts and academia,
         moderated by renowned journalist Nidhi Razdan, translate what the numbers mean and deliberate on policy gaps.
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
                <li>Despite India’s rise on the global stage, what is the actual female workforce participation?</li>
                <li>Why has women’s workforce participation slipped to 19 percent in 2021 from 30 percent in 1990?</li>
                <li>What caused female workforce participation to dip over the last two decades?</li>
                <li>What are the roadblocks in a woman’s career? Are there any solutions?</li>
                <li>Are there any policies framed to arrest the plunging numbers?</li>
                <li>Are these policies effective?</li>
                <li>What are the demand, supply, and structural reforms we need to increase participation?</li>
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
                                    
                <li>Business owners</li>
                <li>Human resources and staffing professionals</li>
                <li>Gender studies students</li>
                <li>Research and activist groups focusing on gender studies</li>
                <li>Management professionals</li>
                <li>Aspiring journalists</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
        </>
    );
}
export default WomenInWorkForce;