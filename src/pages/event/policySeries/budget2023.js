import { Col, Container, Row } from "react-bootstrap";

function Budget(){
    return(
        <>
        <section className="budget">
             <Container>
                <Row>
                <Col xl={12} className="p-3 m-3"></Col>
                <Col xl={2}></Col>
                    <Col xl={10}>
                    <div class="top-div">
                        <h4 class="cus-public text-white"><strong>Let’s Talk Policy</strong></h4>
                        <h4 class="  eventsubtitle-lineheighttit pseudo_border2 text-white">Budget 2023 – <br/>
                        Reading the<br />
                        fine print</h4>
                        <h4 class="cus-time text-white">February 28, 2023<br />
                        7:00 pm – 8:00 pm IST</h4>
                 </div>
                    </Col>
                </Row>
             </Container>
        </section>

        <section>
            <Container className="wpb_single_image ">
                <Row>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/budget/1.jpg" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/budget/2.jpg" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/budget/3.jpg" />
                    </Col>
                    <Col xl={3}>
                       <img src="./images/events/policy_series/innerPage/budget/4.jpg" />
                    </Col>
                </Row>
            </Container>
        </section>

             
<section className="budget2">
<Container>
    <Row>
        <Col xl={12}>
            
        <h4 className="eventsubtitle-lineheight2  txt-white"><strong>UNION BUDGET 2023 – SWANSONG OR A CLARION CALL?</strong></h4>
        <div class="heading_border_white mb-4"> </div>
        <p className="text-white">
        Revised income tax slabs, the highest-ever capital expenditure of Rs 10 Lakh Crore, and a strong emphasis on a green economy; the government’s final budget ahead of the 2024 general elections has set off the ticker-tape of analysis, commentary, and debate. 
        Find out from our experts what these allocations mean for employment generation, personal finance, and infrastructure, among other key parameters.
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
                <li>Will the massive capital outlay in infrastructure, green growth, and tech-enabled projects be a stimulant for job creation?</li>
                <li>Does the new tax regime tick the right boxes?</li>
                <li>Does the new regime hurt the tax-paying middle class more?</li>
                <li>Will there be a substantial shift to the new income tax regime?</li>
                <li>Will the allocations provide relief or add to the burden of poor and middle-income citizens?</li>
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
                                    
                <li>Members of industrial organizations</li>
                <li>Students of foreign trade, business, policy, and international relations</li>
                <li>Aspiring journalists, researchers, academicians, professionals</li>
                <li>Political commentators, public service professionals and aspirants</li>
                <li>Entrepreneurs</li>
                <li>Business owners</li>
                <li>Tax professionals</li>
                <li>Legal professionals</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>

        </>
    );
}
export default Budget;