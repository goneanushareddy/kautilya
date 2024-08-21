import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import { Col, Row, Container, Form, Button, Spinner } from "react-bootstrap";

const GovernExcellenceInitiative = () => {
  const MySwal = withReactContent(Swal);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dept: "",
    subject: "",
    query: "",
  });
  // console.log("form",formData)
  const [dummy,setDummy]=useState({email:""})
  const [errors, setErrors] = useState({});
  // console.log(errors)
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const validateField = (name, value) => {
    let isValid = true;
    let errorMsg = '';

    switch (name) {
      case 'email':
        isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value);
        errorMsg = isValid ? '' : 'Please enter a valid email address.';
        break;

      case 'name':
      case 'dept':
      case 'subject':
        isValid = /^[a-zA-Z ]*$/.test(value);
        errorMsg = isValid
          ? ''
          : `${name.charAt(0).toUpperCase() + name.slice(1)} can only contain letters and spaces.`;
        break;

      default:
        isValid = true;
        errorMsg = '';
        break;
    }

    return { isValid, errorMsg };
  };
 
  const checkFormValidity = (updatedFormData) => {
    const fields = ['name',  'dept', 'subject', 'query'];
    for (let field of fields) {
      const { isValid } = validateField(field, updatedFormData[field]);
      if (!isValid || updatedFormData[field] === '') return false;
    }
    return true;
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimStart();
    const { isValid, errorMsg } = validateField(name, trimmedValue);

    if (isValid) {
      const updatedFormData = {
        ...formData,
        [name]: trimmedValue,
      };

      setFormData(updatedFormData);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
      setIsFormValid(checkFormValidity(updatedFormData));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMsg,
      }));
      setIsFormValid(false);
    }
  };

  const handleEMail = (e) => {
    setDummy({
      ...dummy,
      email: e.target.value,
    });

    // Validate the email field separately
    const { isValid, errorMsg } = validateField('email', e.target.value);
    if (!isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: errorMsg,
      }));
      setIsFormValid(false);

    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
      setIsFormValid(true);

    }
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", dummy.email);
    formDataToSend.append("dept", formData.dept);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("query", formData.query);

    try {
      const response = await axios.post(
        "https://guprojects.gitam.edu/kautilya-admin/api/savegeicontact",
        formDataToSend
      );
      
      setIsFormValid(false);
      // Show SweetAlert success message
      if (response.data.status == "success") {
        
        MySwal.fire({
          icon: "success",
          title: "Success!",
          text: response.data.message,
        });
        setFormData({
        name: "",
        email: "",
        dept: "",
        subject: "",
        query: "",
      });
      setDummy({
        email:''
      })
      
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error!",
          text: response.data.message,
        });
      }
    } catch (error) {
      // console.error("Error submitting form:", error);
      // Handle error and show SweetAlert error message if needed
      MySwal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to submit the form. Please try again.",
      });
    } finally {
      setIsLoading(false); // Reset loading state after form submission completes
    }
  };
  
  return (
    <>
      <div className="home_bg_gray"></div>
      <div className="red_bg IndiaByKautilya">
        <h5 className="main-sec-tit pt-3 pb-3">
          <strong>Governance Excellence Initiative</strong>
        </h5>
      </div>
      <section className="gei_main_section">
        <Container>
          <Row>
            <Col>
              {/* <h2 className="gei_main_heading">Governance Excellence Initiative</h2> */}
              <p className="gei_main_desc">
                At the Kautilya School of Public Policy, GITAM (Deemed to be
                University), Hyderabad, under the leadership of our Dean
                Ambassador Syed Akbaruddin, (Former Permanent Representative of
                India to the UN) we are committed to fostering excellence in
                public policy formulation, implementation, analysis and
                evaluation through comprehensive capacity-building programs. Our
                initiatives are designed to enhance the skills and capabilities
                of government officials and elected representatives, focusing on
                areas such as governance leadership &amp; motivation, media
                management and effective communication strategy, effective
                public service delivery, improved and sustainable digital
                governance, NESDA Indicators, budgeting and improved fund
                allocations, design thinking, artificial intelligence, climate
                change &amp; ESG, ethical decision making, team building and
                negotiations, gender sensitization &amp; POSH (Prevention of
                Sexual Harassment). With a faculty comprising immensely
                experienced and globally renowned experts, we offer research
                driven, specialized training programs tailored to meet the
                evolving needs of improved governance. We strongly believe in
                promoting a culture of life-long learning among government
                officials, which is why our program provides an opportunity for
                officers to enhance their skills and knowledge through curated
                programmes based on competitive mapping. We are confident that
                these curated trainings will contribute towards the overall
                capacity building of the government officials and bring
                significant value to their professional life.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="gei_workshop_section">
          <Row>
            <Col>
              <h3 className="gei_sub_headings mb-4">
                Recent Workshops and Training Programs:
              </h3>

              <p>
                <b>
                  December 2022: Media Engagement Workshop for 74 RR IPS
                  Officers
                </b>{" "}
                In December 2022, we hosted a highly successful workshop on
                media engagement for the 74 RR IPS officers. This workshop saw
                the participation of 200 officers, equipping them with essential
                skills to effectively manage media relations and communication.
              </p>
            </Col>
          </Row>
          <Col
            xs={12}
            className="d-flex justify-content-between gei_resp_images"
          >
            <Col xs={12} md={6}>
              <div className="gei_img_cont_rg  h-100">
                <img
                  src="./images/govtExcellenceInitivies/gei_dec_2022_1.jpg"
                  alt="govt_excel"
                  className="gei_main_section_img"
                />
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div className="gei_img_cont_lf  h-100">
                <img
                  src="./images/govtExcellenceInitivies/gei_dec_2022_2.jpg"
                  alt="govt_excel"
                  className="gei_main_section_img"
                />
              </div>
            </Col>
          </Col>
        </Container>

        <Container className="gei_workshop_section">
          <Row>
            <Col>
              <p>
                <b>July 2023: IPS Faculty Development Program </b> In July 2023,
                we conducted a focused faculty development program for IPS
                officers, concentrating on public speaking and media engagement.
                This program was attended by ten Sardar Vallabhbhai Patel
                National Police Academy faculty members, who gained valuable
                insights into enhancing their teaching methodologies and
                communication strategies.
              </p>
            </Col>
          </Row>

          <div className="d-flex justify-content-center">
            <Col xs={12} md={10}>
              <img
                src="./images/govtExcellenceInitivies/gei_july_2023.jpg"
                alt="govt_excel"
              />
            </Col>
          </div>
        </Container>

        <Container className="gei_workshop_section">
          <Row>
            <Col>
              <p>
                <b>
                  August 2023: Media Engagement Workshop for 75 RR IPS Officers{" "}
                </b>
                Following the success of our previous programs, we organized
                another media engagement workshop in August 2023 for the 75 RR
                IPS officers. This event attracted 175 officers, providing them
                with advanced techniques and strategies for effective media
                interaction.
              </p>
            </Col>
          </Row>

          <Col
            xs={12}
            className="d-flex justify-content-evenly gei_resp_images"
          >
            <Col xs={12} md={6}>
              <div className="gei_img_cont_rg  h-100">
                <img
                  src="./images/govtExcellenceInitivies/gei_july_2023_2.jpg"
                  alt="govt_excel"
                  className="gei_main_section_img"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="gei_img_cont_lg  h-100">
                <img
                  src="./images/govtExcellenceInitivies/gei_aug_2023_2.jpg"
                  alt="govt_excel"
                  className="gei_main_section_img"
                />
              </div>
            </Col>
          </Col>
        </Container>

        <Container className="gei_workshop_section">
          <Row>
            <Col>
              <p>
                <b>
                  May 2024: Media Engagement Workshop for 76 RR IPS Officers{" "}
                </b>
                Our most recent workshop, held in May 2024, focused on media
                engagement for the 76 RR IPS officers. This session had 220
                officers in attendance, highlighting our continuous commitment
                to empowering public servants with the skills necessary for
                impactful communication.
              </p>
            </Col>
          </Row>

          <Col
            xs={12}
            className="d-flex justify-content-evenly gei_resp_images"
          >
            <Col xs={12} md={6}>
              <div className="gei_img_cont_rg  h-100">
                <img
                  src="./images/govtExcellenceInitivies/gei_may_2024_1.jpg"
                  alt="govt_excel"
                  className="gei_main_section_img"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="gei_img_cont_lf  h-100">
                <img
                  src="./images/govtExcellenceInitivies/gei_may_2024_2.jpg"
                  alt="govt_excel"
                  className="gei_main_section_img"
                />
              </div>
            </Col>
          </Col>
        </Container>

        <Container className="gei_section">
          <Row>
            <Col>
              <h3 className="gei_sub_headings">Why Choose Us?</h3>
              <p>
                <b>Expert Faculty:</b> Our programs are led by{" "}
                <a
                  href="https://kautilya.org.in/our-faculty"
                  target="_blank"
                  className="anchor"
                >
                  faculty members
                </a>{" "}
                who are not only globally renowned and academically
                distinguished but also possess substantial practical experience
                in their respective fields.
              </p>

              <p>
                <b>Competency-based Curriculum: </b>We offer a robust
                competency-based curriculum that covers a wide range of topics
                essential for improved governance.
              </p>

              <p>
                <b>Tailored Programs: </b>Our training sessions are customized
                to address the specific real-life scenarios, needs and
                challenges faced by government officers, ensuring practical
                relevance and immediate applicability.
              </p>
              <p>
                <b>Competitive Pricing: </b>Curated capacity building by subject
                experts at an affordable cost is crucial for India, as it
                ensures that our public servants are equipped with the latest
                knowledge and skills to tackle contemporary challenges
                efficiently and effectively.
              </p>

              <p>
                <b>Impactful Learning: </b>Participants in our programs benefit
                from hands-on learning experiences, interactive workshops, and
                real-world case studies, enabling them to translate knowledge
                into action effectively.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="gei_section">
          <Row>
            <Col>
              <h3 className="gei_sub_headings">Partner with Us</h3>
              <p>
                We invite government agencies and organizations to partner with
                us in our mission to build a more capable, effective and
                improved governance ecosystem. By working together, we can drive
                significant improvements in governance and administration across
                India.{" "}
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="gei_section">
          <Row>
            <Col>
          
              <div className="bg-white resume" id="resume">
                <section className="p-0">
                  <Container className="p-0">
                    <Row>
                      <Col xl={12}>
                        <h3 className="text-primary text-center heading heading-submit-resume">
                          CONTACT US
                        </h3>
                      </Col>
                    </Row>
                    <Col>
                      <Row className="d-flex justify-content-center">
                        <Col lg={8}>
                          <div className="logo_bg">
                            <Form onSubmit={handleSubmit} noValidate >
                              <Row>
                                <Col
                                  xs={12}
                                  md={6}
                                  className="mb-4"
                                  controlId="formName"
                                >
                               
                                  <Form.Control
                                    type="text"
                                    placeholder="Full name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChanges}
                               
                                  />
                                  {errors.name && (
                                    <div className="text-light vaildate-text">
                                      {errors.name}
                                    </div>
                                  )}
                                </Col>
                                <Col
                                  xs={12}
                                  md={6}
                                  className="mb-4"
                                  controlId="formEmail"
                                >
                                  <Form.Control
                                    type="email"
                                    placeholder="Email ID"
                                    name="email"
                                    value={dummy.email}
                                    onChange={handleEMail}
                                  
                                
                                  />
                                  {errors.email && (
                                    <div className="text-light vaildate-text">
                                      {errors.email}
                                    </div>
                                  )}
                                </Col>
                                <Col
                                  xs={12}
                                  md={6}
                                  className="mb-4"
                                  controlId="formDept"
                                >
                                  <Form.Control
                                    type="text"
                                    placeholder="Department/organisation"
                                    name="dept"
                                    value={formData.dept}
                                    onChange={handleChanges}
                                  
                                  />
                                  {errors.dept && (
                                    <div className="text-light vaildate-text">
                                      {errors.dept}
                                    </div>
                                  )}
                                </Col>
                                <Col
                                  xs={12}
                                  md={6}
                                  className="mb-4"
                                  controlId="formSubject"
                                >
                                  <Form.Control
                                    type="text"
                                    placeholder="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChanges}
                                 
                                  />
                                  {errors.subject && (
                                    <div className="text-light vaildate-text">
                                      {errors.subject}
                                    </div>
                                  )}
                                </Col>
                                <Col
                                  xs={12}
                                  className="mb-4"
                                  controlId="formQuery"
                                >
                                  <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Leave your query"
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChanges}
                                   
                                  />
                                  {errors.query && (
                                    <div className="text-light vaildate-text">
                                      {errors.query}
                                    </div>
                                  )}
                                </Col>
                                <Col xl={12} className="mb-4 text-center">
                                  <button
                                    variant="dark"
                                    type="submit"
                                    disabled={!isFormValid || isLoading}
                                    className={`btn btn-primary formbut ${!isFormValid ? "not-allowed" : ""}`}
                                  
                                 
                                  >
                                    {isLoading ? (
                                      <>
                                        <Spinner
                                          as="span"
                                          animation="border"
                                          size="sm"
                                          role="status"
                                          aria-hidden="true"
                                        />{" "}
                                        Please wait...
                                      </>
                                    ) : (
                                      "Submit"
                                    )}
                                  </button>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Container>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GovernExcellenceInitiative;
