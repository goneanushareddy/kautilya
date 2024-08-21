import { Col, Container, Row } from "react-bootstrap";

function BraveNewWorld(){
    return(
        <>
        <div className="bravenewworld_bg">

        <section>
            <Container>
                <Row>
                    <Col xl={12}>
                       <p className="LTP-txt">Let’s Talk<br /> Policy</p>
                       <p className="LTP-tit "><span className="brave">
                         Brave New World: </span></p>
                       <p className="LTP-tit"> <span className="policyAI">
                       Public Policy and AI
                        </span>
                        <br />
<span class="sub-tit">Dissecting the importance of AI in driving social progress, economic growth and environmental<br/> sustainability</span></p>
                  
<p class="ltp-event">
    <span class="LTP eventicon">
        {/* <img width="6%" src="https://kautilya.org.in/wp-content/uploads/2023/01/date-icon.png" />
         */}
         <img width="6%" src="./images/events/calender_white.png" />
        <span>
        November 17, Friday
        </span>
          
               <br />
{/* <img width="6%"  src="https://kautilya.org.in/wp-content/uploads/2023/01/time-icon.png"  /> */}
<img width="6%" src="./images/events/time_white.png" />

 <span>
 7:30 PM – 8:30 PM(Via Zoom ) </span> </span></p>
                  <p>
                  <a class="formbut" href="https://gitam.zoom.us/webinar/register/WN_uyDsZsz4TuiWsTssZTu-9A">Register Now</a>
                  </p>
                    </Col>
                </Row>
            </Container>
       </section>

        </div>
        

        <section>
           <Container>
            <Row className="wpb_single_image">
                <Col xl={6}>
      <img src="./images/events/policy_series/innerPage/sowmya.png" />
      </Col>
      <Col xl={6}>
      <img src="./images/events/policy_series/innerPage/anitha.png" />
                </Col>
            </Row>
            </Container>
        </section>

        <section className="bg-primary text-white">
<Container>
   <Row>
    <Col xl={12}>
        <p className="text-white">
            The rapidly evolving realm of Artificial Intelligence (AI) has made it imperative to conduct a deliberate assessment of its implications
            for public policy. Al, characterized by its data-driven algorithms and machine learning capabilities, 
            has demonstrated remarkable potential across a spectrum of domains. 
            This transformative technological advancement has far-reaching effects on various aspects of our lives,
            whether it be daily routines or professional pursuits.
        </p>
        <p className="text-white">
        Join us in an insightful discussion featuring Sowmya lyer, Founder and CEO of DVIO Digital, and Anita Bhatia, Founder of Impact Commons, 
        as they delve into the pivotal role of government in both facilitating and regulating Al. 
        Additionally, the discussion will address the intricacies and opportunities that have surfaced with the ascent of Al in the Indian context.
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
                <li>What should be the role of the government in enabling AI?</li>
<li>What are the implications of AI for different sectors including healthcare and manufacturing?</li>
<li>What are the opportunities and challenges arising from the use of AI in India?</li>
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
                <li>Government Officials and Policymakers</li>
                <li>Academics and Researchers</li>                
                       
                </ul>
                </Col>
                <Col xl={6}>
                <ul className="entry_content">
                <li>Technology Innovators</li>
                 <li>Entrepreneurs and Startups</li>           
                       </ul>
                </Col>
        </Row>
    </Container>
</section>
        </>
    );
}
export default BraveNewWorld;