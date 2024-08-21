import { useState, useEffect } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import Carousel_slide from "../components/Carousel";
import SimpleSlider from "../components/SlickSlider";
import Faculty from "../components/Faculty";
import TextSlider from "../components/TextSlider";

import Form from 'react-bootstrap/Form';
import LogoSlider, { FirstSlider, SecondSlider } from '../components/LogoSlider';
// import TextSlider from '../components/TextSlider';
import Modal from 'react-bootstrap/Modal';
import CarouselSlider from '../components/CarouselSlider';

function Placements() {

    const page = "placements";
    
    const [placementsData, setPlacementsData] = useState([]);

    useEffect(() => {
        fetchplacementsData();
    }, []);
    const fetchplacementsData = async () => {
        try {
            const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-placementsData'); // Replace with your actual API endpoint
            setPlacementsData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    console.log("placements Page", placementsData)
    const topRecruiters = placementsData?.filter(each => each.category === "Top recruiters");
    const demoGraphs = placementsData?.filter(each => each.category === "Demographics 2022-24");
    const placementsCongrats = placementsData?.filter(each => each.category === "placement-congratulations");

    const privateOrganizations = placementsData?.filter(each => each.category === "Private Organizations");
    const governmentOrganizations = placementsData?.filter(each => each.category === "Government Organizations");


    const MySwal = withReactContent(Swal);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organisation: '',
        mobile: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const mailSend = (e) => {
        fetch('https://guprojects.gitam.edu/kautilya-admin/api/mailsend', {
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

    const handleChanges = (e) => {
        const { name, value } = e.target;
        // Replace any characters that are not alphabets or spaces
        const sanitizedValue = value.replace(/[^a-zA-Z ]/g, '');
        // Update formData with sanitized value
        setFormData({ ...formData, [name]: sanitizedValue });
    };


    const handleChangeData = (e) => {
        const { name, value } = e.target;
        // Replace any characters that are not alphabets or spaces
        const sanitizedValue = value.replace(/[^0-9]/g, '');
        // Update formData with sanitized value
        setFormData({ ...formData, [name]: sanitizedValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // Send the form data to the server
            const response = await fetch('https://guprojects.gitam.edu/kautilya-admin/api/saverecruiter', {
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
                organisation: '',
                mobile: '',
            });
            // Show SweetAlert success message
            if (data.status == "success") {
                mailSend();
                MySwal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: data.message,

                });

            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: data.message,
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


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const data = [

    //     {
    //         id: 1,
    //         imgURL: "./images/placements/sankat_Page_placement.jpg",

    //     },

    //      {
    //         id: 2,
    //         imgURL: "./images/placements/Priya_Page_placement.jpg",

    //     }, {
    //         id: 3,
    //         imgURL: "./images/placements/Ankur_Page_placement.jpg",

    //     }, {
    //         id: 4,
    //         imgURL: "./images/placements/garmi_Page_placement.jpg",

    //     },
    //     {
    //         id: 5,
    //         imgURL: "./images/placements/sruthi_placement.jpg",

    //     },

    //     {
    //         id: 6,
    //         imgURL: "./images/placements/vishakha_placements.jpg",

    //     },
    //     {
    //         id: 7,
    //         imgURL: './images/placements/slider.jpg',

    //     },
    //     {
    //         id: 8,
    //         imgURL: './images/placements/raisa-lorraine-congratulation.jpg',

    //     },
    //     {
    //         id: 9,
    //         imgURL: "./images/placements/Rawson-placements.jpg",

    //     },
    //     {
    //         id: 10,
    //         imgURL: "./images/placements/kautilya-congratulatory-banner.jpg",

    //     },

    //     {
    //         id: 11,
    //         imgURL: "./images/placements/kautilya-congratulatory-banner-23-06-2023-min.jpg",

    //     },
    //     {
    //         id: 12,
    //         imgURL: "./images/placements/kautilya-congratulatory-post.jpg",

    //     },
    //     {
    //         id: 13,
    //         imgURL: "./images/placements/Kautilya-Congratulatory-Post-2-LP-banner-1.2-min.jpg",

    //     },
    //     {
    //         id: 14,
    //         imgURL: "./images/placements/Kautilya-Placement-Post-Sabri-Web-min.jpg",

    //     },
    //     {
    //         id: 15,
    //         imgURL: "./images/placements/Kautilya-Theres-Thomas-Placement.jpg",

    //     },
    //     {
    //         id: 16,
    //         imgURL: "./images/placements/Trilok-Kothapalli-Congratulatory-website.jpg",

    //     },



    // ];
    // const [facultydata, change] = useState([
    //     {
    //         imgURL: "./images/placements/Shuvabrata-Garai.webp",
    //         name: "Shuvabrata Garai",

    //     },
    //     {
    //         imgURL: "./images/placements/Kaushal-Kasliwal.webp",
    //         name: "Kaushal Kasliwal",
    //     },
    //     {
    //         imgURL: "./images/placements/Vinay-Chaudhary.webp",
    //         name: "Vinay Chaudhary",

    //     },
    //     {
    //         imgURL: "./images/placements/Aarini-Mishra.webp",
    //         name: "Aarini Mishra",

    //     },
    //     {
    //         imgURL: "./images/placements/Saumya-Anand.webp",
    //         name: "Saumya Anand",

    //     },
    //     {
    //         imgURL: "./images/placements/Oaishik-Bhattacharya.webp",
    //         name: "Oaishik Bhattacharya",

    //     },
    // ]);
    // const slider = [
    //     {
    //         id: 13,
    //         imgURL: "./images/placements/EY-logo-x-2.jpg",
    //     },
    //     {
    //         id: 1,
    //         imgURL: "./images/placements/climate-bonds-x2-1.jpg",
    //     },
    //     {
    //         id: 2,
    //         imgURL: "./images/placements/Mythos.jpg",
    //     },
    //     {
    //         id: 3,
    //         imgURL: "./images/placements/QCI.jpg",
    //     },
    //     {
    //         id: 4,
    //         imgURL: "./images/placements/Paytm.jpg",
    //     },
    //     {
    //         id: 5,
    //         imgURL: "./images/placements/GITAM-1.jpg",
    //     },
    //     {
    //         id: 6,
    //         imgURL: "./images/placements/Bharath_Biotech.jpg",
    //     },
    //     {
    //         id: 7,
    //         imgURL: "./images/placements/Ather-1.jpg",
    //     },
    //     {
    //         id: 8,
    //         imgURL: "./images/placements/rgih_new.jpg",
    //     },
    //     {
    //         id: 9,
    //         imgURL: "./images/placements/3.jpg",
    //     },
    //     {
    //         id: 10,
    //         imgURL: "./images/placements/5.jpg",
    //     },
    //     {
    //         id: 11,
    //         imgURL: "./images/placements/TTC-1.jpg",
    //     },
    //     {
    //         id: 12,
    //         imgURL: "./images/placements/ISL-1.jpg",
    //     },
    //     {
    //         id: 13,
    //         imgURL: "./images/placements/GTO.jpg",
    //     },
    //     {
    //         id: 14,
    //         imgURL: "./images/placements/indicc.jpg",
    //     },
    //     {
    //         id: 15,
    //         imgURL: "./images/placements/GNITS.jpg",
    //     },

    // ];
    // const graphs = [
    //     {
    //         id: 1,
    //         imgURL: "./images/placements/PB-000.jpg",
    //     },
    //     {
    //         id: 2,
    //         imgURL: "./images/placements/PB-001.jpg",
    //     },
    //     {
    //         id: 3,
    //         imgURL: "./images/placements/PB-002.jpg",
    //     },
    //     {
    //         id: 4,
    //         imgURL: "./images/placements/PB-003.jpg",
    //     },
    //     {
    //         id: 5,
    //         imgURL: "./images/placements/PB-004.jpg",
    //     },


    // ];
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={12} className='mb-4 mt-4 text-center'>
                            <h4 className='text-dark placement-heading'>Placements</h4>
                        </Col>
                        <Col xl={12}>
                            <img src="../images/placements/KSPP-Placement-Report-2023-Final.jpg" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section_bg recuiter">
                <Container>
                    <Row>
                        <Col lg={3} className='placemnt_img'>
                            <img src="./images/placements/Recruit.jpg" alt="image" />                    </Col>
                        <Col lg={8}>
                            <h4 className='p-sec5 placement-headings'>
                                Recruit from Kautilya
                            </h4>
                            <p className='mt-4'>
                                Recruiters will find diverse skill sets among students of this cohort.
                                MPP students are equipped with industry insights that help them hit the ground running.
                            </p>
                            <button className="btn btn-primary me-4" onClick={handleShow}><img src="./images/placements/re-1.jpg"></img> Recruiter Registration</button>
                            <button className="btn btn-primary"><img src="./images/placements/re-2.jpg"></img><a href="pdf/Kautilya-Recruiters-Guide.pdf" download>Recruiters Guide</a> </button>
                            <Modal show={show} onHide={handleClose} className='faculty_modal'>
                                <Modal.Header closeButton>
                                    <Modal.Title>Recruiter Registration</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChanges} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formOrganisation">
                                            <Form.Control type="text" placeholder="organisation" name="organisation" value={formData.organisation} onChange={handleChanges} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Control placeholder="Email ID" type="email" name="email" value={formData.email} onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formMobile">
                                            <Form.Control type="text" placeholder="Enter 10 Digit Phone No" minlength="10" maxlength="10" name="mobile" value={formData.mobile} onChange={handleChangeData} />
                                        </Form.Group>
                                        <Button variant="danger" type="submit">
                                            Submit
                                        </Button>
                                    </Form>



                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Container>

            </section>
            <section className='top-recuiters'>
                <Container>
                    <Row>
                        <Col xl={12} className='mb-4'>
                            <h4 className='placement-headings'>Top recruiters</h4>
                        </Col>
                        <Col xl={12}>
                            <SimpleSlider sliderdata={topRecruiters} page={page} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className='placements_carosel mt-5'>
                {/* <Carousel_slide slider={data} /> */}
                <CarouselSlider slider={placementsCongrats} pagesMpp={page} />
            </div>

            <section className='recuiter'>
                <Container>
                    <Row>

                        <Col lg={5} className='placemnt_img'>
                            <img src="./images/placements/Placement-sec2.jpg" alt="image" />
                        </Col>
                        <Col lg={7}>
                            <h3 className='p-sec2 placement-headings placement-rec'>Creating the <br />recruiter-student synergy</h3>
                            <Row className='mt-3'>
                                <Col xl={6}>
                                    <p>
                                        At Kautilya, we aim to equip each student with the resources they need to maximize their professional growth after graduating from the MPP program.
                                        Our team hits the ground running at the start of each intake. They hold interaction sessions with each student to map out career goals, prospective recruiters, and areas of interest.
                                        Throughout the course, career guidance interactions are held with
                                    </p>
                                </Col>
                                <Col xl={6}>
                                    <p>
                                        students to give them insights into industry expectations and trends.
                                        Students also undergo one-on-one sessions where they are provided guidance in fine-tuning their CVs and appearing for personal interviews.
                                    </p>
                                    <p>
                                        The focus of the Career Fulfillment team is to upskill and nurture every student’s capabilities to ensure their CVs are amplified among the right recruiters.
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className='demographics'>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2>Students from across skills,<br /> demographics</h2>
                            <p className="text-center"><b>MPP Batch of 2022-24</b></p>
                        </Col>
                        <Col xl={12}>
                            <SimpleSlider sliderdata={demoGraphs} page={page} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='internships'>
                <Container>
                    <h2 className='p-sec'>Internships</h2>
                    <Row>
                        <Col xl={12}>
                            <h4>Government Organizations</h4>
                            <FirstSlider slides={governmentOrganizations} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h4>Private Organizations</h4>
                            <SecondSlider slides={privateOrganizations} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section_bg placements-facult">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className='mb-5  text-center'>
                                Student-led Placement Committee
                            </h2>
                        </Col>
                        <Col xl={9} className='mx-auto wpb_single_image'>
                            <Row>
                                <Col sm={4} md={3} className='d-flex flex-column align-items-center'>
                                    <img src="images/placements/Shuvabrata-Garai.jpg" />
                                    <p class="p-student-main">Shuvabrata<br />Garai</p>
                                </Col>
                                <Col sm={4} md={3} className='d-flex flex-column align-items-center'>
                                    <img src="images/placements/Aarini-Mishra.jpg" />
                                    <p class="p-student-main">Aarini<br />Mishra</p>

                                </Col>
                                <Col sm={4} md={3} className='d-flex flex-column align-items-center'>
                                    <img src="images/placements/Kaushal-Kasliwal.jpg" />
                                    <p class="p-student-main">Kaushal<br />Kasliwal</p>

                                </Col>
                                <Col sm={4} md={3} className='d-flex flex-column align-items-center'>
                                    <img src="images/placements/Oaishik-Bhattacharya.jpg" />
                                    <p class="p-student-main">Oaishik<br />Bhattacharya</p>

                                </Col>
                                <Col sm={4} md={3} className='d-flex flex-column align-items-center'>
                                    <img src="images/placements/Saumya-Anand.jpg" />
                                    <p class="p-student-main">Saumya<br />Anand</p>
                                </Col>
                                <Col sm={4} md={3} className='d-flex flex-column align-items-center'>
                                    <img src="images/placements/Vinay-Chaudhary.jpg" />
                                    <p class="p-student-main">Vinay<br />Chaudhary</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className='bg-dark holistic'>
                <Container>
                    <h2>
                        An eye on holistic development
                    </h2>
                    <Row>
                        <Col lg={5} className='placemnt_img'>
                            <img src='images/placements/Internship.jpg' alt='image' />
                        </Col>
                        <Col lg={6} className='text-slider'>
                            <TextSlider />
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}
export default Placements;