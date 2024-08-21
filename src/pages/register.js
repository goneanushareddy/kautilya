import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';


function EnquiryForm() {
  return (
    <>
    <Container>
        <Row>
            <Col lg={12}>
            <Form.Control  type="text" placeholder="Enter name" className='form-control mb-2'/>
            </Col>
            <Col lg={12}>
            <Form.Control  type="text" placeholder="Enter email" className='form-control mb-2' />
                </Col>
                <Col lg={12}>
                <Form.Control  type="text" placeholder="Enter mobile number" className='form-control mb-2' />
                </Col>
                <Col lg={12}>
                <Form.Control  type="text" placeholder="Enter OTP" className='form-control mb-2' />
                </Col>
                <Col lg={6}>
                <Form.Select aria-label="Default select example" className='form-control mb-2'>
                    <option>State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col lg={6}>
                <Form.Select aria-label="Default select example" className='form-control mb-2'>
                    <option>City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Col>

                <Col lg={12}>
                <Form.Select aria-label="Default select example" className='form-control mb-2'>
                    <option>Select program</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col lg={6}>
                <Form.Control  type="text" placeholder="Captcha" className='form-control mb-2'/>
                </Col>
                <Col lg={6}>
                <Form.Control  type="text" placeholder="Enter captcha" className='form-control mb-2'/>
                </Col>

                <Col lg={12} className='mt-2'>
                <Form.Check type="checkbox" id="simple-checkbox" className='text-white' label="I agree to receive information regarding my submitted enquiry on Kautilya School Of Public Policy."/>
                </Col>

               
        </Row>
    </Container>
     
    
     
     
     
    
    </>
  );
}

export default EnquiryForm;