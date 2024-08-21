import { Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PolicyMakingForNewIndia(){
    const [selectedOption, setSelectedOption] = useState('option1');

const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
};
    const MySwal = withReactContent(Swal);
    const [formData, setFormData] = useState({
                                    name: '',
                                    email: '',
                                    mobile:'',
                                    city:'',
                                });
                                const handleChange = (e) => {
                                    const { name, value } = e.target;
                                         setFormData((prevData) => ({
                                                ...prevData,
                                                  [name]: value,
                                         }));
                                 };
                                 const handleSubmit = async (e) => {
                                    e.preventDefault();
                                      try {
                                
                                        // Send the form data to the server
                                           const response = await fetch('https://guprojects.gitam.edu/kautilya-admin/api/saveevents', {
                                              method: 'POST',
                                                   headers: {
                                                    'Content-Type': 'application/json',
                                                   },
                                                   body: JSON.stringify(formData),
                                           });

                                           // Handle the server response
                                               const data = await response.json();
                                                  setFormData({
                                                         name: '',
                                                         email: '',
                                                         mobile:'',
                                                         city:'',
                                                   });
                                              // Show SweetAlert success message
                                               if(data.status=="success"){
                                                   MySwal.fire({
                                                     icon: 'success',
                                                     title: 'Success!',
                                                     text: data.message,
                                                   });
                                               }else{
                                                   MySwal.fire({
                                                       icon: 'error',
                                                       title: 'Error!',
                                                       text: data.message,
                                                   });
      
                                               }
                                               

                                            // Handle the server response if needed
                                                 //const data = await response.json();
                                            
                                                // setSuc(data.message)
                                                  // //console.log('Server response:', data);
                                       } catch (error) {
                                                        console.error('Error submitting form:', error);
                                                        // Handle error and show SweetAlert error message if needed
                                                   MySwal.fire({
                                                      icon: 'error',
                                                      title: 'Error!',
                                                      text: 'Failed to submit the form. Please try again.',
                                                   });
                                       }
                               };

    return(
        <>
 <div className="makingIndia_bg">

       
<section>
<Container>
    <Row>
       <Col xl={12} className="text-end mb-5">
        <img src="./images/events/Colluquy/newIndia/Icon.png"  alt="background image" style={{width: "300px"}}/>
               
       </Col>
    </Row>
    <Row>
        <Col xl={7}>
        <p class="AMA-Title"><span class="tit1">Policymaking for New India:<br />
<span class="AMA-Title-sub">A Journey from Ideation to Impact</span></span></p>   

<Row>
    <Col xl={5}>
    <img src="./images/events/Colluquy/newIndia/Dean-AMA-n.png"  alt="Dean" style={{width: "300px"}}/>
    </Col>
    <Col xl={7} className="mt-5">
    <p><span class="ltp-syed">Syed Akbaruddin</span></p>
    <p class="LTP-txt">Dean, Kautilya School of Public Policy;<br />
Former Permanent Representative<br />
of India to the UN</p>

<p><span class="LTP">
<img src="./images/events/Colluquy/newIndia/date-icon.png"  alt="Date" style={{width: "30px"}}/>
    
     
   
    Friday, March 22<br />
    <img src="./images/events/Colluquy/newIndia/time-icon.png"  alt="Date" style={{width: "30px"}}/>
    6 p.m. – 7 p.m. (Via Zoom)</span></p>

    </Col>
</Row>
        </Col>
        <Col xl={5}>
            <div className="form-landing">

    <Row> 
    <Form onSubmit={handleSubmit}>
     
        <Col xl={12} className="mb-4">    
                
            <div controlId="formname">
                <span  className="icon"><i className="fa fa-user"></i></span>
                <span className="input-field ms-2">
                   <input type="text" name="name" value={formData.name} onChange={handleChange}  placeholder="Name (MANDATORY FIELD)" size="40" className="no-border" aria-required="true" aria-invalid="false"  />
                </span>
            </div>
        
        </Col>
  
        <Col xl={12} className="mb-4">                   
            <div controlId="formemail">
                <span  className="icon"><i className="fa fa-envelope"></i> </span>
                <span className="input-field ms-2" >
                  <input type="email" name="email" value={formData.email} onChange={handleChange}  size="40" className="no-border" aria-required="true" aria-invalid="false"  placeholder="Email ID (MANDATORY FIELD)"/>
                </span>
            </div>
        </Col>
        <Col xl={12} className="mb-4">                   
            <div controlId="formmobile">
                <span  className="icon"><i className="fa fa-mobile"></i></span>
                <span className="input-field ms-2" >
                 <input type="text" name="mobile" value={formData.mobile} onChange={handleChange}  size="40" className="no-border" aria-required="true" aria-invalid="false"  placeholder="Mobile (MANDATORY FIELD)"/>
                </span>
            </div>
        </Col>
        <Col xl={12} className="mb-4">                   
            <div controlId="formcity">
                <span  className="icon"><i className="fa fa-map-marker"></i></span>
                <span className="input-field ms-2" >
                   <input type="text" name="city" value={formData.city} onChange={handleChange}  size="40" className="no-border" aria-required="true" aria-invalid="false"  placeholder="City (MANDATORY FIELD)"/>
                </span>
            </div>
        </Col>
        <Col xl={12} className="mb-4">
            <div controlId="formexperience">
                <span className="icon"><i className="fa fa-briefcase"></i></span>
                <span className="input-field ms-2">
                    <select name="experience" value={formData.experience} onChange={handleChange} className="no-border" aria-required="true" aria-invalid="false">
                        <option value="">Select Total Experience *</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                        {/* Add more options as needed */}
                    </select>
                </span>
            </div>
        </Col>
       
<Col xl={12} className="mb-4">
 <Form>
        <span className="icon ms-2"><i className="fa fa-user-plus me-2"></i> Want to enroll for MPP? *</span>
        <Row className="d-flex justify-content-center"> {/* Center aligning the Row */}
          <Col xl={3}>
            <span className="input-field ms-2">
              <Form.Check
                type="radio"
                id="radio-yes"
                label="Yes"
                name="yesno"
                value="Yes"
                checked={selectedOption === 'Yes'}
                onChange={handleOptionChange}
              />
            </span>
          </Col>
          <Col xl={3}>
            <span className="input-field ms-2">
              <Form.Check
                type="radio"
                id="radio-no"
                label="No"
                name="yesno"
                value="No"
                checked={selectedOption === 'No'}
                onChange={handleOptionChange}
              />
            </span>
          </Col>
        </Row>
      </Form>
    </Col>
        <Col xl={12}>   
        <input type="hidden" name="UTM-Source" id="UTM-Source" />
        <input type="hidden" name="UTM-Medium" id="UTM-Medium" />
        <input type="hidden" name="UTM-Campaign" id="UTM-Campaign" />
        <input type="hidden" name="UTM-Term" id="UTM-Term" />
           </Col>
       <Col xl={12} className="mb-4"> 
       <Button variant="danger" type="submit">Register</Button>
        
       </Col>
       </Form>
    </Row>

</div>
 </Col>
</Row>
</Container>
  </section>
  </div>
  <section className="section_bg">
    <Container>
        <Row>
            <Col xl={12}>
                <h5 className="text-center mb-5">
              <strong>  #IndiaByKautilya </strong> 
                </h5>

                <p>
                At the heart of #progress lies translational policymaking. Envisioning change through inclusivity, innovation, collaboration, and aspirations to lay the groundwork for a brighter tomorrow is vital for #holistic development.
                </p>
                <p>
                Ideation on a journey to evidence-based #research for policymaking is vital to building well-informed, robust policies that address our nation’s needs. We need to translate ideas into measurable outcomes to drive tangible #impact and positive change.
                </p>
                <p>
                Together, let’s embark on this journey of #policymaking, from ideation to impact, to build a resilient and thriving New India. #PolicyForProgress #NewIndiaJourney
                </p>

            </Col>
        </Row>
    </Container>
  </section>


  <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                        <h4 className="pseudo_border">WHO SHOULD ATTEND?</h4>
                        <div className="heading_border mb-4"> </div>
                        </Col>
                        <Col xl={12}>
                        <ul className="entry_content">
                            <li>Any graduate and/or those in the final year of their program.</li>
                            <li>Junior and mid-level corporate executives.</li>
                            <li>Media and Communication professionals.</li>
                            <li>UPSC and legal career aspirants.</li>
                            <li>Business and Economics experts.</li>
                            <li>Engineering and Technology specialists.</li>
                            <li>Citizens passionate about problem-solving and community development.</li>
                         </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section_bg p-5">

                <Container>
                    <Row>
                       <Col xl={12}>
                       <h4 className="pseudo_border">WHAT WILL BE COVERED?</h4>
                        <div className="heading_border mb-4"> </div>
                       </Col>
                       <Col xl={12}>
                       <ul className="entry_content">
                       <li>Key ingredients of translational policy making for New-India.</li>
                        <li>How pursuing Master’s Program in Public Policy can help you open doors to the global stage</li>
                        <li>What’s driving the demand for public policy specialists?</li>
                        <li>What are the New-Age career paths you can pursue?</li>
                       </ul>
                       </Col>


                       <Col xl={12}>
                        <p>
                            <i>
                            Join us, in this high value session to learn from the man himself who shaped global narratives. and served India in a decades-long career at the global stage in public service. 
                            </i>
                        </p>
                       </Col>
                    </Row>
                </Container>

            </section>
 </>
    );

}
export default PolicyMakingForNewIndia;