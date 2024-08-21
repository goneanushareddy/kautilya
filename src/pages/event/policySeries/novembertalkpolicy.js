import { Col, Container, Row } from "react-bootstrap";
function Novembertalkpolicy(){
    return(<>
    <div className="policy_talk">
    <section className="lets_talk oct_talk">
            <Container>
                
                <Row className="mt-5">
               
                    <Col xl={6} className="mt-5">

                    <p class="eventoutline">PANEL DISCUSSION</p>
                    <div className="d-flex panel">
                    <span><img src="./images/events/policy_series/innerPage/quote.png"></img></span>
                    <p class="LTP-txt">Let’s Talk <br/>
                      <span className="bold mb-5">Policy</span></p>
                    </div>
                        <p class="LTP-tit">INDIA’S CYBER SECURITY CHALLENGE: HOW CAN WE FIGHT BACK?</p>
                       
                        <div className="d-flex panel_cal mb-5">
                           <span><img src="./images/events/policy_series/innerPage/evenicon1.png"></img><span class="LTP-tit">November 25th, 2021</span></span> 
                            <span><img src="./images/events/policy_series/innerPage/evenicon2.png"></img><span class="LTP-tit">7 – 8PM IST</span></span>
                        </div>
                    </Col>
                   
                </Row>

            </Container>
           </section>
           <section className="lets_talk modarate penalist">
                <Container>
                <h2>About the penalist</h2>
                    <Row>
                   
                        <Col xl={6} >
                       
                      
                            <div className="d-flex align-items-start">
                            <img src="./images/events/policy_series/innerPage/Nidhi-Razdan.png"></img>
                        
                                <div className="mt-5">
                                    <h4>EVENT MODERATED BY</h4>
                                    <h5>Nidhi Razdan</h5>
                                    <p>Visiting Faculty, Kautilya<br/>
                                        Former Executive Editor, NDTV</p>
                                </div>
                                </div>
                        </Col>
                        <Col xl={6}>
                        <div className="d-flex align-items-start">
                            <img src="./images/events/policy_series/innerPage/Pranesh-Prakash.png"></img>
                                <div className="mt-5">
                                   <h5>Pranesh Prakash</h5>
                                    <p>Co-Founder, Centre for Internet &<br/>
                                        Society Affiliated Fellow – Yale Law<br/>
                                        school’s Information Society Project</p>
                                      
                                </div>
                        </div>
                        </Col>
                        <Col xl={6}>
                        <div className="d-flex align-items-start mb-3">
                            <img src="./images/events/policy_series/innerPage/Jiten-Jain.png"></img>
                                <div className="mt-5">
                                    <h5>Jiten Jain</h5>
                                    <p>Director, Voyager Infosec <br/> Consortium</p>
                                </div>
                        </div>
                        </Col>
                        <Col xl={6}>
                        <div className="d-flex align-items-start mb-3">
                            <img src="./images/events/policy_series/innerPage/Trisha-Ray.png"></img>
                                <div className="mt-5">
                                    <h5>Trisha Ray</h5>
                                    <p>Associate Fellow, Centre for Security<br/>Strategy and Technology, ORF</p>
                                </div>
                        </div>
                        </Col>
                    </Row>
                    
                </Container>
            </section>
           <section className="about_evnt">
            <Container>
               <h2>About the event</h2>
               <p>In recent years, the government, corporations, and individuals have faced a huge challenge with cybersecurity, as hostile state and non-state actors use technology to launch a new kind of warfare. The pandemic has only made those challenges greater. Just days ago, India’s Chief of Defence Staff, General Bipin Rawat, said cyber-crimes went up by almost 500% in India during the global pandemic. He said emerging threats from new technologies such as drones, ransomware, and the role of nation-states in such cyber-attacks, needs to be addressed. Our dependence on technology has increased more than ever before.</p>
               <p>India is now in the final stages of clearing its first-ever National Cybersecurity Strategy in the wake of this threat. Indian officials say the time has come for a stand-alone cybersecurity law. Around 80% of Indian organizations are likely to increase their cybersecurity budget in 2022, according to a survey by global consultancy firm PwC.</p>
               <p>So how can the country deal with this challenge, and what shape should the new policy take? Join us for the Let’s Talk Policy session on November 25th at 7 pm and hear from our panelists including Jiten Jain, Director, Voyager Infosec Consortium; Pranesh Prakash, co-founder, Centre for Internet & Society and Trisha Ray of ORF on the rising dependency of organizations on information technology and how the sensitive nature of digitally-stored data has raised the stake for cyber attackers.</p>
               </Container>
           </section>
           <section className="bg_black_policy">
            <Container>
               <p><span>‘Let’s Talk Policy’</span> <b>is a panel discussion series initiated by Kautilya School of Public Policy</b>, that brings forth a select group of panellists, sharing differing views on key issues of national and global relevance, and building the dialogue into a conversation for the student community.</p>
               <p>The series aims to unravel major themes around democracy, politics, and human rights, and explore the challenges and rewards of implementing practices. We aim to create a cohesive platform and call on thematic experts to foster a healthy dialogue around the most-pressing issues.</p>
               </Container>
           </section>
          
           <section className="attendees">
            <Container>
                <h2>Attendees</h2>
                <p>Young Indians, passionate about bringing about positive change and building India</p>
                <p>Those aspiring to build a career in public life, public policy and administration, social sector, media, journalism and communications, politics, and other related fields</p>
                <p>Academicians, researchers and journalists working in or following the fields mentioned above</p>
                <p>Those watching the unfolding Afghanistan crisis closely – and are keen to hear from experts with relevant experience at the highest level</p>
            </Container>
           </section>
         
    </div>

    
    </>
    );
}
export default Novembertalkpolicy;