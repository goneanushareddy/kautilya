import Swal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import logo_img from "./../assets/img/logo-1.png"
import Faqs from "../components/Faqs";
import React, { useState, useEffect } from 'react';


function Careers() {

    const [careerfaq, setfaq] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {

        try {

            fetch("https://guprojects.gitam.edu/kautilya-admin/api/fetch-faqdata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: 'Careers',
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setfaq(data)
                })
                .catch((error) => {
                    console.error("Error:", error);
                });


        } catch (error) {
            console.error('Error fetching data:', error);
        }


    };
    const MySwal = withReactContent(Swal);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        state: '',
        city: '',
        qualification: '',
        experience: '',
        position: '',
        resume: '',

    });
    const handleChanges = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = value.replace(/[^a-zA-Z ]/g, '');
        setFormData({ ...formData, [name]: sanitizedValue });
    };
    const handleMobileChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = value.replace(/[^0-9]/g, '');
        setFormData({ ...formData, [name]: sanitizedValue });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFileChange = (e) => {

        setFormData({ ...formData, resume: e.target.files[0] });
    };
    const mailSend = (e) => {
        fetch('https://guprojects.gitam.edu/kautilya-admin/api/cmailsend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle response data here
                if (data.status === "success") {

                } else {

                }
            })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('mobile', formData.mobile);
        formDataToSend.append('state', formData.state);
        formDataToSend.append('city', formData.city);
        formDataToSend.append('qualification', formData.qualification);
        formDataToSend.append('experience', formData.experience);
        formDataToSend.append('position', formData.position);
        formDataToSend.append('resume', formData.resume);
        try {

            // Send the form data to the server
            /*  await axios.post('https://guprojects.gitam.edu/kautilya-admin/api/savecareers', formDataToSend, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
              });*/
            const response = await axios.post('https://guprojects.gitam.edu/kautilya-admin/api/savecareers', formDataToSend);

            // Handle success response


            /* const response = await fetch('https://guprojects.gitam.edu/kautilya-admin/api/savecareers', {
                  method: 'POST',
                  headers: {
                              'Content-Type': 'application/json',
                           },
                  body: JSON.stringify(formData),
              });*/

            // Handle the server response
            //const data = await response.json();
            setFormData({
                name: '',
                email: '',
                mobile: '',
                state: '',
                city: '',
                qualification: '',
                experience: '',
                position: '',
                resume: null,
            });
            // Show SweetAlert success message
            if (response.data.status == "success") {
                mailSend();
                MySwal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: response.data.message,
                });
            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: response.data.message,
                });

            }

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
    return (
        <>
            <div className="career_bg">

                <Container>
                    <Row>
                        <Col xl={12} className="mt-5">
                            <h2 className="heading">
                                WORK @ KAUTILYA
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{ span: 9, offset: 3 }} className="mx-auto mt-4">
                            <Row>
                                <Col sm={6} lg={4}>
                                    <a href='#who-apply'> <div className="box bg-secondary">
                                        <h4>Who Can<br />Apply?</h4>
                                        <p>Equal Employment Opportunity</p>
                                    </div></a>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <a href='#onboarding'><div className="box bg-info">
                                        <h4>Onboarding<br />Process</h4>
                                        <p>Bringing Together Experts</p>
                                    </div></a>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <a href='#staff_engagement'><div className="box bg-success">
                                        <h4> Staff<br /> Engagement</h4>
                                        <p>Fostering Enthusiasm & Dedication</p>
                                    </div></a>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <a href='#resume'> <div className="box bg-success1">
                                        <h4>Submit <br />Resume</h4>
                                        <p>Your Gateway to Kautilya</p>
                                    </div></a>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <a href='#fqs'><div className="box w-msg4">
                                        <h4>Career<br />
                                            FAQs</h4>
                                        <p>Answers to Improve Your Experience</p>
                                    </div></a>
                                </Col>

                                <Col sm={6} lg={4}>
                                    <a href="mailto:careers@kautilya.org.in"><div className="box w-msg5">
                                        <h4>Contact<br />
                                            HR</h4>
                                        <p>We are Here for You</p>
                                    </div></a>
                                </Col>
                            </Row>
                        </Col>

                    </Row>


                </Container>

            </div>
            <div className="bg-primary" id="who-apply">
                <section>
                    <Container>
                        <Row>
                            <Col xl={12}>
                                <h2 className="text-white heading">Who can apply</h2>

                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12}>
                                <p className="text-white mt-4">
                                    At Kautilya, along with inclusive hiring and equal employment opportunity, we follow the People 1st policy. We are always ready to work with like-minded professionals passionate about guiding students in building the best career in public policy. To meet this objective, we have brought the world’s leading academic experts and policy practitioners to inculcate diverse skills necessary for a successful career in public life. You are welcome to apply to work at Kautilya if you have proven work experience, are passionate about teaching, have appreciable communication skills, and are collaborative.
                                </p>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            <div className="bg-white resume" id="resume">
                <section className='p-3'>
                    <Container>
                        <Row>
                            <Col xl={12}>
                                <h3 className="text-primary text-center heading heading-submit-resume">SUBMIT RESUME</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{ span: 9, offset: 3 }} className="mx-auto mt-3">
                                <Row>
                                    <Col lg={4} className="border_red">
                                        <div className="align-center">
                                            <div className="logo_bg">
                                                <img src={logo_img} alt='logo image' />
                                            </div>
                                        </div>

                                    </Col>
                                    <Col lg={8} className="border_red p-0 m-0">
                                        <div className="logo_bg">
                                            <Form onSubmit={handleSubmit}>
                                                <Row>

                                                    <Col xl={12} className="mb-4" controlId="formName"  >
                                                        <Form.Control type="text" placeholder="Full name" name="name" value={formData.name} onChange={handleChanges} />
                                                    </Col>
                                                    <Col xl={6} className="mb-4" controlId="formMobile">
                                                        <Form.Control type="text" placeholder="Mobile" minlength="10" maxlength="10" name="mobile" value={formData.mobile} onChange={handleMobileChange} />
                                                    </Col>
                                                    <Col xl={6} className="mb-4" controlId="formEmail">
                                                        <Form.Control type="email" placeholder="Email ID" name="email" value={formData.email} onChange={handleChange} />
                                                    </Col>
                                                    <Col xl={6} className="mb-4" controlId="formState">
                                                        <Form.Control type="text" placeholder="State" name="state" value={formData.state} onChange={handleChanges} />
                                                    </Col>
                                                    <Col xl={6} className="mb-4" controlId="formCity">
                                                        <Form.Control type="text" placeholder="City" name="city" value={formData.city} onChange={handleChanges} />
                                                    </Col>
                                                    <Col xl={6} className="mb-4" controlId="formQualification">
                                                        <label className='text-white'>Highest Qualification </label>
                                                        <Form.Select aria-label="Default select example" name="qualification" value={formData.qualification} onChange={handleChange}>
                                                            <option value="">Please select</option>
                                                            <option value="PHD">PHD</option>
                                                            <option value="Master">Master</option>
                                                            <option value="Bachelor">Bachelor</option>
                                                        </Form.Select>
                                                    </Col>
                                                    <Col xl={6} className="mb-4" controlId="formExperience">
                                                        <label className='text-white'>Total Experience </label>
                                                        <Form.Select aria-label="Default select example" name="experience" value={formData.experience} onChange={handleChange}>
                                                            <option value="">Please select</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                        </Form.Select>
                                                    </Col>
                                                    <Col xl={6} className="mb-4" controlId="formePosition">
                                                        <label className='text-white'>Applying for</label>
                                                        <Form.Select aria-label="Default select example" name="position" value={formData.position} onChange={handleChange}>
                                                            <option value="">Applying for</option>
                                                            <option value="Academics">Academics</option>
                                                            <option value="Admissions">Admissions</option>
                                                            <option value="Marketing">Marketing</option>
                                                            <option value="Training">Training</option>
                                                            <option value="Placement">Placement</option>
                                                        </Form.Select>
                                                    </Col>
                                                    <Col xl={12} className="mb-4" controlId="formeResume">
                                                        <Form.Control type="file" placeholder="Resume" name="resume" onChange={handleFileChange} />
                                                    </Col>
                                                    <Col xl={12} className="mb-4 text-center">
                                                        <button className="btn btn-primary formbut" type="submit"> Submit</button>
                                                    </Col>

                                                </Row>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>


            </div>

            <section className="section_bg onboarding_process" id="onboarding">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h3 className="heading text-center">Onboarding Process</h3>
                        </Col>
                        <Col xl={12}>
                            <ul>
                                <li>
                                    <a id="achor" className='text-blue' href="#job_application_id" rel="noopener">Submit your Resume</a> online.</li>
                                <li>If shortlisted, appear for an interview for the position applied.</li>
                                <li>If selected, an offer letter will be released on the registered email Id.</li>
                                <li>Share an acceptance of the letter immediately, along with scanned copies of original documents for verification.</li>
                                <li>Appear in the Background Checks & Verification (BCV), on joining.</li>
                                <li>Once HR does BCV, the onboarding stands completed.  </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="career_bg2 staff" id="staff_engagement">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className="heading">STAFF ENGAGEMENT</h2>
                        </Col>
                        <Col xl={8}>
                            <p className="text-white">
                                At Kautilya, we aim to foster the enthusiasm and dedication of each staff member with a sense of ownership towards their job.
                                We believe that engaged employees are always more resourceful,
                                productive, and caring about their work and feel that their continuous efforts can make a difference.
                            </p>
                        </Col>
                        <Col xl={12}>
                            <h5>Key Initiatives:</h5>
                            <ul>
                                <li>
                                    Leadership Development.
                                </li>
                                <li>
                                    Industry Interaction.
                                </li>
                                <li>
                                    Funded Projects.
                                </li>
                                <li>
                                    Sponsored Participation in High-Value conferences, etc.

                                </li>
                                <li>
                                    Team Building Activities, and many more.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* faq section */}

            {/* <section className="career_faq">
           
        </section> */}
            <section className="careerfaqs">
            </section>
            <section id="fqs">

                <Faqs faq={careerfaq} />

            </section>

        </>
    );
}
export default Careers;