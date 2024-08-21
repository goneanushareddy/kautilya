import { Container, Row, Col} from "react-bootstrap";

function InteractAlumini(){
    return(
    <div className="aluminiInteract">
<div className="alumini_bg">
    <section>
        <Container>
            <Row>
                <Col xl={12}>
                    <div className="alumini_banner_text">

                   
                <img src="./images/events/ask-me-white.png" alt="ask me" className="ask_me_white mt-5 mb-5" />
                <h5>
                   Interact with our alumni<br /> and co-founder
                </h5>
                <p >
                   The MPP journey and public policy <br /> careers explained
                </p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </div>
    <section className="section_bg mt-0">
      <Container>
        <Row>
            <Col xl={12}>
            <p className="text-center">
                <img src="./images/events/calender.png" style={{width:"50px"}}  />  June 16, Friday | <img src="./images/events/time.png" style={{width:"50px"}}/>  7:30 PM – 8:30 PM (Via Zoom)</p>
            </Col>
        </Row>
      </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col xl={4}>
                     <div className="image_content">                   
                            <img src="./images/events/alumini1.png" />                   
                            <p className="name">Rawson Gonsalves</p>
                            <p className="class">MPP Class of 2023</p>
                      </div>
                </Col>
                <Col xl={4}>
                     <div className="image_content">                   
                            <img src="./images/events/alumini2.png" />                   
                            <p className="name">Snigdha</p>
                            <p className="class">MPP Class of 2023</p>
                      </div>
                </Col>
                <Col xl={4}>
                     <div className="image_content text-center">                   
                            <img src="./images/events/alumini3.png" />                   
                            <p className="name">Prateek Kanwal</p>
                            <p class="text-center">Co-Founder Kautilya<br />
                                School of Public Policy;<br />
                                MPP, Harvard Kennedy School
                            </p>
                      </div>
                </Col>
            </Row>
        </Container>
    </section>
<div className="alumini_bg2">
    <section>

        <Container>
            <Row>
                <Col xl={12}>
                   
                <h4>UNDERSTAND THE CAREER TRAJECTORY AND<br />
        GROWTH POTENTIAL IN PUBLIC POLICY
    </h4>
    <div className="heading_border_white mb-4"> </div>
    
    <p>
    Join our class of 2023 graduates as they recount their 2-year Master of Public Policy (MPP) journey. Get unique insights into the global faculty,
     the curriculum, and the leadership team. Moderated by our co-founder Prateek Kanwal,
     the session promises to be an insightful peek into understanding how the program can shape your learning curve and prepare you for the industry.
    </p>
    <p>
    Get firsthand information about the host of guest speakers who inspired our students and learn about 
    the exciting opportunities our graduates secured in India’s top companies.
    </p>
                </Col>
            </Row>
        </Container>
  
    </section>
   </div>


   <section>
        <Container>
            <Row>
                <Col xl={12}>
                <h4 className="pseudo_border">WHAT THE SESSION WILL ADDRESS</h4>
                        <div className="heading_border mb-4"> </div>

                </Col>
                <Col xl={12}>
                <ul className="entry_content">
                    <li>What are the qualities that define a good policymaker?</li>
                    <li>What are the strengths and skills you can showcase on your 2-year MPP application?</li>
                    <li>What are the traits we look for in each applicant?</li>
                    <li>What are the aspects covered during the personal interview?</li>
                    <li>What are the details we look for in recommendations?</li>
                    <li>How can you strengthen your application?</li>
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
                                    
                        <li>Aspiring policymakers</li>
                        <li>Aspirants of the 2-year MPP who are stuck at any stage of their application</li>
                        <li>Graduates and those in the final year of their program</li>
                        <li>Working Professionals looking for new career avenues</li>

                </ul>
                </Col>
        </Row>
    </Container>
</section>
<section className="speaker_bg">
    <Container>
        <Row>
            <Col xl={6}>

            </Col>
            <Col xl={6}>
            <h4>ABOUT THE SPEAKER    </h4>
    <div className="heading_border_white mb-4"> </div>


   
		
<h6>Prateek Kanwal,</h6>
<p>Co-Founder of Kautilya School of Public Policy;<br/>
MPP, Harvard Kennedy School</p>
<p >Prateek Kanwal completed his Master in Public Policy (MPP) from the Harvard Kennedy School. He won the prestigious World Bank scholarship for his work in education reform and social innovation. Mr. Kanwal is currently working with NewGlobe as the Director, Policy and Advocacy. Over the past 12 years, he has worked with CRISIL, Teach For India, Ark, and Educate Girls. He is also the Founder of Citisens for Public Leadership (www.cplindia.org)</p>
<p><a href="https://www.instagram.com/prateekkanwal/" target="_blank" rel="noopener">
     <img src="./images/events/instagram.png"  style={{width:"50px"}}/></a>
     <a href="https://twitter.com/prateekkanwal/" target="_blank" rel="noopener">
        <img src="./images/events/twitter.png" style={{width:"50px"}} />
        </a>
        </p>

		



            </Col>
        </Row>
    </Container>
</section>
 </div>
    );
}
export default InteractAlumini;