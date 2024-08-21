import { Container, Row,Col } from "react-bootstrap";

function MentalHealthSuside(){
    return(
        <>
          <section className="mentalHealth">
            <Container>
                <Row>
                    <Col>
                    <p style={{ textAlign: "right", }}>
                 <a style={{ backgroundColor: "black", color: "white" }}>INVITE US TO A COLLEGE WEBINAR</a>
         
            </p>


                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xl={12}>
                        <img src="./images/events/policy_series/innerPage/buildingcareer/quote_red.png" />
                    </Col>
                    <Col xl={12}>
                        <h5 className="text-primary" style={{fontSize:"55px", fontWeight: "700"}}>
                        Let’s Talk <br/>
Policy
                        </h5>
                        <h6 className="text-white" style={{fontSize:"42px", fontWeight: "600"}}>
                        Mental Health Crisis in <br />
                        India & Suicide Prevention
                        </h6>
                        <p className="text-white">
                        20th of May, 2022 | 07:00 – 08:00pm
                        </p>
                    </Col>
                </Row>
            </Container>
         
          </section>
         
<section className="bg-primary">
    <Container>
        <Row>
            <Col xl={12}>
                <p className="text-white">
                India is facing a mental health crisis.
                 The WHO reported that more than 15%of the adult population suffers from one or 
                 more mental illnesses, needing active medical intervention, and every one in 20 Indians suffers from severe depression. Over a billion people are living within a fragile and critical healthcare ecosystem. India has the global highest rate of suicides, with a loss of 700 lives each day due to complex socioeconomic factors as well as mental illnesses. There are only 43 government-run mental hospitals for a population of more than 1.3 billion people. Suicide helplines and call centres are not regulated and are mostly run by NGOs with minimal supervision in most cases. The stigma around the mental health crisis in our country continues to be a major problem, and this 
                 leads to a vicious cycle of shame, suffering, and ostracization of patients.
                </p>
                <p className="text-white">
                The seriousness of this issue is yet to be understood by each individual for there to be a systemic change. The toll of people passing is only going to increase with time
                 if the soundness of the mind is not considered an honest problem.
                </p>
                
            </Col>
        </Row>
    </Container>

</section>

<section className="mentalHealth2">
<Container>
<Row>
    <Col xl={4}>
        <img src="./images/events/policy_series/innerPage/mentalHealth/pannel1.png" />
    </Col>
    <Col xl={4}>
        <img src="./images/events/policy_series/innerPage/mentalHealth/pannel1.png" />
    </Col>
    <Col xl={4}>
        <img src="./images/events/policy_series/innerPage/mentalHealth/pannel1.png" />
    </Col>
    <Col xl={4}>
        <img src="./images/events/policy_series/innerPage/mentalHealth/pannel1.png" />
    </Col>
    <Col xl={4}>
        <img src="./images/events/policy_series/innerPage/mentalHealth/pannel1.png" />
    </Col>
    </Row>
</Container>
</section>
        
<section className="bg-primary">
 <Container>
    <Row>
        <Col xl={12}>
             <p className="text-white">
             Let’s talk Policy is a panel discussion series initiated by the Kautilya 
             School of Public Policy that brings forth a select group of panelists,
              sharing differing views on key national and global relevance and building the
               dialogue into a conversation for the student community. The series aims to unravel major themes around democracy, politics, and human rights and explore implementing practices’ challenges and rewards. We aim to create a cohesive platform and call
              on thematic experts to foster a healthy dialogue around the most pressing themes.
             </p>
             <p className="text-white">
               <strong>What will be discussed –</strong>
            </p>

<ul className="entry_content text-white">
<li>Legislation regarding suicide prevention and criminalisation</li>
<li>Frameworks for accessible and affordable mental health care</li>
<li>How can you bring reforms in delivering health care?</li>
<li>Getting past the stigma surrounding mental health and starting honest conversations on the overall well-being of individuals</li>
<li>How educational and professional institutions can bring about change in the general public by acknowledging mental health issues</li>
<li>Monitoring bodies for helplines and suicide prevention call centres</li>
<li>Public initiatives to increase awareness and seek help.</li>
</ul>

        </Col>
    </Row>
 </Container>
</section>
<section>
   <Container>
    <Row>
        <Col xl={12}>
            <h3 className="text-primary">
            Who should attend ? 
            </h3>
        <ul className="entry_content">
<li>Young Indians who are committed to bringing about change and building India</li>
<li>Those aspiring to build a career in public policy, public administration. social sector, media, journalism &amp; communications, and other related fields.</li>
<li>Academicians, researchers, journalists, &amp; professionals working in or following the fields mentioned above.</li>
<li>Counsellors, psychologists, healthcare workers and policy professionals who wish to change the mental health landscape.</li>
</ul>
        </Col>
    </Row>
   </Container>
</section>
  

        </>
    );
}
export default MentalHealthSuside;