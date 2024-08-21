import { Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PPForPg(){
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
        <div className="ppforpg ">
            <section className="ml-50">
                <Container fluid>
                    <Row>
                      <Col xl={3}>
                      <div className="form-landing">


<Form onSubmit={handleSubmit}>
<Row> 
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
   </Row>
   </Form>
</div>
                      </Col>                   
                     
                      
                    </Row>
                </Container>
            </section>
         </div>
            <section className="section_bg">
                <Container>
                    <Row>
                        <Col xl={12} className="text-center">
                           <h5>
                           #IndiaByKautilya
                            </h5>
                            <p  className="text-center">
                            At the heart of #progress lies translational policymaking. Envisioning change through inclusivity, innovation, collaboration, and aspirations to lay the groundwork for a brighter tomorrow is vital for #holistic development.</p>

                            <p  className="text-center">
                            With a shift in government and corporate strategy to boost the economic development along with higher index of the quality life, professionals with expertise in policy making will be most sought after. <strong>The Future is promising for today’s early movers.</strong>
                            </p>
                            <p className="text-center">

                            Join me in this exclusive session for you to help you understand why the professional program in policy making may suits best to your career aspirations.&nbsp;#PolicyForProgress #NewIndiaJourney
                                </p>
                           
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                        <h4 className="pseudo_border">WHAT WILL BE COVERED ?</h4>
                        <div className="heading_border mb-4"> </div>
                        </Col>
                        <Col xl={12}>
                        <ul className="entry_content">                        
                          <li>Any graduate and/or those in the final year of their program and willing to enroll for Master’s Program in Public Policy (MPP).</li>
                          <li>Junior and mid-level professionals looking to join MPP for a career switch or a lateral growth in current role.</li>
                         </ul>                      




                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section_bg p-5">

                <Container>
                    <Row>
                       <Col xl={12}>
                       <h4 className="pseudo_border">WHO SHOULD ATTEND?</h4>
                        <div className="heading_border mb-4"> </div>
                       </Col>
                       <Col xl={12}>
                       <ul className="entry_content">
                                                
                       <li>How pursuing Master’s Program in Public Policy can help you open doors to the global stage?</li>
                       <li>What make KSPP’s curriculum most unique and effective in career progression?</li>
                        <li>What’s driving the demand for public policy specialists?</li>
                        <li>What are the New-Age career paths for MPP graduates?</li>

                          
                       </ul>
                       </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
}
export default PPForPg;