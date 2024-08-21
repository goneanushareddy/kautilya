import { Col, Row, Container, Form } from "react-bootstrap";
import { useState } from "react";
function ConclaveRegistration(){
    const [showDiv, setShowDiv] = useState(false);

    const handleRadioClick = () => {
      setShowDiv(!showDiv);
    };
    return(
    <>
    <div className="registration_bg">
        <section>

       
        <Container>
            <Row>
               <Col xl={12}>
                  <div className="bg_opacity">
                     <h3 className="text-center text-white mb-5">Registration Here</h3>
                <Row>
                <Col lg={6}>
                    <Form.Control  type="text" placeholder="Name *" className='form-control mb-4' />
                  </Col>
                  <Col lg={6}>
                    <Form.Control  type="text" placeholder="Enter email *" className='form-control mb-4' />
                  </Col>
                  <Col lg={6}>
                    <Form.Control  type="number" placeholder="Age *" className='form-control mb-4' />
                  </Col>
                 
                  <Col lg={6}>
                  <Form.Select aria-label="Default select example" className='form-control mb-4'>
                   
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                    </Form.Select>
                  </Col>
                  <Col lg={6}>
                    <Form.Control  type="text" placeholder="Linkedin ID" className='form-control mb-4' />
                  </Col>
                  <Col lg={6}>
                    <Form.Control  type="text" placeholder="Whatsapp number" className='form-control mb-4' />
                  </Col>
                  <Col lg={12}>
                  <Form.Label className="text-white mt-2">Are you a</Form.Label>
                  <Form.Group className="mb-2  text-white">
             
                <div>
               
                  <Form.Check
                    inline
                    label="Working Professional"
                    name="profession"
                    type="radio"
                    id="workRadio"
                    value="Working Professional"
                  />
                  <Form.Check
                    inline
                    label="Student"
                    name="profession"
                    type="radio"
                    id="studentRadio"
                    value="Student"
                  />
                  <Form.Check
                    inline
                    label="Others"
                    name="profession"
                    type="radio"
                    id="othersRadio"
                    value="Others"
                  />
                </div>
              </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Control  type="text" placeholder="State" className='form-control mb-4' />
                  </Col>
                  <Col lg={6}>
                    <Form.Control  type="text" placeholder="City" className='form-control mb-4' />
                  </Col>
                  <Col lg={12}>
                 <p className="text-white">
                 Please indicate your registration preference*
                 </p>
                  </Col>
                  <Col lg={6} className="text-white">
                  <Form.Check
                    inline
                    label="simulation"
                    name="simulation"
                    type="radio"
                    id="simulation"
                    value="simulation"
                    onClick={handleRadioClick}
                  />
                  </Col>
                </Row>
                {showDiv && (
                <Row className="border-red">
                    <Col xl={12}>
                       <h4 className="text-center text-white">Simulation</h4>
                    </Col>
                    <Col xl={12}>
                    <Form.Label className="text-white mt-2">1. Submit your resume (PDF format)*</Form.Label>
                    <Form.Control  type="file"  className='form-control mb-4' />

                    </Col>
                    <Col xl={6}>
                    <Form.Label className="text-white mt-2">2.Current Institution/organisation *</Form.Label>
                    <Form.Control  type="text " placeholder="Current Institution/organisation *"  className='form-control mb-4' />

                    </Col>
                    <Col xl={6}>
                    <Form.Label className="text-white mt-2">3.Course/Current position *</Form.Label>
                    <Form.Control  type="text" placeholder="Course/Current position *"  className='form-control mb-4' />

                    </Col>
                    <Col xl={12}>
                    <Form.Label className="text-white mt-2">4. why do you want to participate. it does not exceed 200 words in length.*</Form.Label>
                    <Form.Control as="textarea" rows={3} />

                    </Col>
                </Row>
               )}
               <Row>
                <Col lg={12} className="capstone text-center">
                <button type="button" class="btn btn-danger">Submit</button>
                </Col>
               </Row>
                </div>
               </Col>
            </Row>
        </Container>
        </section>
    </div>
    </>
    );
}
export default ConclaveRegistration;