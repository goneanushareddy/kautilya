import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Admission_enquiry = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='admission_enquiry'>
      <button type="button" onClick={handleShow}>Admission Enquiry</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title  className='enquiry_title'>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className='enquiry_modal'>
            <Form>
                <fieldset disabled>
                    <Row>
                        <Col xl={12}>
                            <Form.Group className="mb-3">
                            <Form.Control  placeholder="Enter name *" />
                            </Form.Group>
                        </Col>
                        <Col xl={12}>
                            <Form.Group className="mb-3">
                            <Form.Control  placeholder="Enter email address *" />
                            </Form.Group>
                        </Col>
                        <Col xl={12}>
                            <Form.Group className="mb-3">
                            <Form.Control  placeholder="Enter mobile number *" />
                            </Form.Group>
                        </Col>
                        <Col xl={12}>
                            <Form.Group className="mb-3">
                            <Form.Control  placeholder="Enter OTP" />
                            </Form.Group>
                        </Col>
                        <Col xl={6}>
                            <Form.Group className="mb-3">
                                <Form.Select>
                                    <option>Select State *</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xl={6}>
                            <Form.Group className="mb-3">
                                <Form.Select>
                                    <option>Select City *</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xl={12}>
                            <Form.Group className="mb-3">
                                <Form.Select>
                                     <option>Select program *</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xl={6}>
                            <Form.Group className="mb-3">
                            <Form.Control  placeholder="878457" />
                            </Form.Group>
                        </Col>
                        <Col xl={6}>
                            <Form.Group className="mb-3">
                            <Form.Control  placeholder="Enter text as shown" />
                            </Form.Group>
                        </Col>
                        <Col xl={12}>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="
                                    I agree to receive information regarding my submitted enquiry on Kautilya School Of Public Policy."
                                />
                            </Form.Group>
                        </Col>
                        <Col xl={12} className='text-center'>
                         <Button type="submit">Submit</Button>
                         </Col>
                    </Row>
                </fieldset>
             </Form>
        </Modal.Body>
   </Modal>
    </div>
   
  );
};


export default Admission_enquiry;
