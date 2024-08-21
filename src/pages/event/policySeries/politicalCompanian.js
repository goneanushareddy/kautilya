import { Col, Row, Container } from "react-bootstrap";

function PoliticalCompanion(){
    return(
        <>
        <div className="mt-5">
            <Container>
                <Row>
                    <Col xl={12} className="ms-auto">

                        <p style={{backgroundColor: "#000", color: "#fff", float: "right", padding: "7px",marginTop: "30px", fontWeight: "bold" }} >INVITE US TO A COLLEGE WEBINAR</p>
                       
                    </Col>
                </Row>
            </Container>
        </div>
        <div className=" mt-0 politicalCompanion">
        <Container>
                <Row>
                    <Col xl={12} className="m-3 p-3"></Col>
                    <Col xl={12}>
                    <div class="top-div">
                        <img src="./images/events/policy_series/innerPage/crypto/quote.png" />
                      
                    <h4 class="cus-public text-white"><strong>Let’s Talk Policy</strong></h4>
                    <h4 class="k-h2 eventsubtitle-lineheighttit text-white">Political campaigns in<br/>
                    India-Can they shape<br/>
                    up narratives for 2024 ?
                    </h4>
                    <h4 class="cus-time text-white">13th Sep, 2022 | 07:00 pm – 8:00 pm</h4>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <section className="p-5">
            <p className="text-center">
            Since the 70s election campaigns have undergone major shifts in the world’s oldest democracy the United States of America. 
            By the mid-90s, modern political campaigns in the US involved expensive and exhausting strategy, planning and execution. 
            In India meanwhile, a whopping Rs 55,000-60,000 crore was spent in the general elections of 2019, 
            according to a study by the Centre for Media Studies (CMS), a not-for-profit multi-disciplinary development research think-tank.
             The study report titled ‘Poll Expenditure: The 2019 Elections’, termed the last polls in India as the ‘most expensive election ever, anywhere.
              The report estimated a near six-fold jump in overall expenditures from Rs 9,000 crore in the Loksabha elections 2019. 
              With high money and power at stake, election campaign management and political consultancies have emerged as key tools for electoral battles. 
              In this episode of Let’sTalk Policy we look at the history of election campaigns in India and the US, 
            the impact of political consultancies on public policy formulation and how the narratives will shape up for the big 2024 elections in India.
            </p>
            <p className="text-center">
            Let’s talk policy is a series of discussions by Kautilya School of Public Policy, that brings together speakers and experts from various fields.
             Here they share insights on national and global issues and build a conversation for the student community.
            </p>
            <p className="text-center">
            Up for discussion are major themes around the economy, democracy, politics, and human rights
            </p>

        </section>

        <section className="politicalCompanion2">
   <Container>
    <Row>
        <Col xl={12}>
        <h2  style={{fontSize: "32px"}} class="vc_custom_heading text-white text-center">Panelist</h2>
        </Col>
    </Row>
    <Row>
    <Col xl={12} className="d-flex justify-content-center align-items-center">
  <div>
    <img src="./images/events/policy_series/innerPage/politicalCamp/1.png" />
  </div>
</Col>
      
    </Row>
    <Row>
        <Col xl={4}>
            <img src="./images/events/policy_series/innerPage/politicalCamp/2.png" />
        </Col>  
        <Col xl={4}></Col>
        <Col xl={4}>
            <img src="./images/events/policy_series/innerPage/politicalCamp/3.png" />
        </Col>       
    </Row>
    <Row>
    <Col xl={12} className="d-flex justify-content-center align-items-center">
  <div>
    <img src="./images/events/policy_series/innerPage/politicalCamp/4.png" />
  </div>
</Col>
     
    </Row>
   </Container>
        </section>

        <section className="politicalCompanion3">
        <Container>
            <Row>
            <Col xl={3}></Col>
            <Col xl={9}>
                <Row>
                <Col xl={12}>
                <h4 className="pseudo_border">What will be discussed ?</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                   
                <ul className="entry_content">
                    <li>The history of political campaigns in the world’s oldest and largest democracies</li>
                    <li>The emergence of third-party political consultancies</li>
                    <li>How political campaigns are being designed to bring in electoral change?</li>
                    <li>Do political campaigns merge with public policy in defining the parameters of elections?</li>
                    <li>How does a professionally managed election campaign drive content and manage to package?</li>
                    <li>What does the run-up to the general elections of 2024 look like?</li>       
                </ul>
                </Col>
                </Row>
            </Col>
               
            </Row>
        </Container>
        </section>

        
<section>
        <Container>
            <Row>
                <Col xl={12}>
                <h4 className="pseudo_border text-center">Who should attend?</h4>
                        <div className="heading_border mx-auto mb-4"> </div>

                </Col>
                <Col xl={12}>
                   
                <ul className="entry_content">
                <li>Young Indians who are committed to bringing about change and building India.</li>
<li>Those aspiring to build a career in politics, public policy, public administration, journalism, political consulting, psephology, public relations, image consulting and related fields</li>
<li>Those working as researchers, academicians, journalists, and in the fields mentioned above</li>
<li>Others who take a deep interest in the subject</li>        
     </ul>
                </Col>
            </Row>
        </Container>
     </section>
        </>
    );
}
export default PoliticalCompanion;