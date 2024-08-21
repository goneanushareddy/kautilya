import { Container , Row, Col } from "react-bootstrap";


function MasterInPublicPolicy(){
    return(
        <>
          <section className="MasterPP">
         
             <Container>
                <Row>
                <Col xl={12} className="p-3 m-3"></Col>
               
                    <Col xl={12}>
                    <div className="top-div">
                    <h2 className="p-AMA" style ={{fontSize: "40px" , lineHeight: "50px", textAlign: "left"}}>What do you need for a<br/>
                    <b> Master in Public Policy? </b></h2>
                      
                 </div>
                    </Col>
                    <Col xl={12}>
                        <div className="d-flex">
                           <img src="./images/events/policy_series/innerPage/masterPP/Prateek-Kanwal.png" className="AMA-img" />
                           <div>
                           <p class="AMA-txt">join the AMA <br/>
                                on Admissions <br/>
                                and careers with our <br/>
                                Co-Founder <br/>
                                <span class="AMA-Pra">Prateek Kanwal</span>
                            </p>
                           </div>
                        </div>
                    </Col>

                    <Col xl={12}>
                       <div className=" d-flex time_date">
                          <img src="./images/events/calender_red.png" />
                          <h4>
                            February 5, 2023
                          </h4>
                       </div>
                  </Col>
                  <Col xl={12}>
                       <div className=" d-flex time_date">
                          <img src="./images/events/time_red.png" />
                          <h4>
                          5:00 pm to 6:30 pm IST
                          </h4>
                       </div>
                  </Col>
                </Row>
             </Container>
        </section> 

        <section className="bg-primary p-5">'
        <Container>
           <Row >
            <Col xl={12}>
            <p className="text-white text-center">
           From migration to climate change, poverty to cyber security; governments, businesses,
            and civil society members have begun to understand that following traditional mechanisms is neither bringing development nor solving the socio-economic problems of today.From migration to climate change, poverty to cyber security; governments, businesses, and civil society members have begun to understand that following traditional mechanisms is neither bringing development nor solving the socio-economic problems of today.
           </p>
           <p className="text-white text-center">
           If you wish to solve these 21st-century challenges and,
            in the process, build an impactful career, then the field of public policy can be both rewarding and fulfilling.
           </p>
            </Col>
            </Row>
        </Container>
          
        </section>

        <section>
        <Container>
            <Row>
                <Col xl={12}>
                <h4 className="pseudo_border">WHAT WILL THE SESSION ADDRESS ?</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                    <p>The session will address a few key questions of aspiring public policy students, like</p>
                <ul className="entry_content">
                        <li>Is this the right career option for me?</li>
                        <li>What kind of roles are offered by companies to an MPP graduate?</li>
                        <li>What does the growth pathway look like?</li>
                        <li>How is Kautilya transforming the public policy education landscape in India?</li>
                        <li>How do we incubate our students?</li>
                        <li>Why is our curriculum a cut above the rest?</li>
                        <li>Does Kautilya have internship and placement assistance?</li>
                        <li>What should I keep in mind to submit the perfect application form?</li>
                        <li>Does Kautilya provide scholarships?</li>
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
                <li>Academicians, researchers, and other professionals working in the above-mentioned fields</li>
                <li>Young Indians who want to build a better India</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>

<section className="MasterPP2 p-5">
<Container>
    <Row>
        <Col xl={12}>
           
        <h4 className="eventsubtitle-lineheight2  txt-white"><strong>ABOUT THE SPEAKER</strong></h4>
        <div class="heading_border_white mb-4"> </div>
        
        </Col>
        <Col xl={8}>
        <p className="text-white">
        Prateek Kanwal, Co-Founder of Kautilya School of Public Policy, did his Master in Public Policy (MPP) from the Harvard Kennedy School. He was awarded the prestigious World Bank scholarship for his work in the areas of education reform and social innovation.
         He is currently the Director of Policy and Advocacy at NewGlobe Education. He is also the Founder of Citizens for Public Leadership.</p>
        
        </Col>
    </Row>
</Container>
</section>


        </>
    );
}
export default MasterInPublicPolicy;