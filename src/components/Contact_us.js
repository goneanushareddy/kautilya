import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import { Col, Row, Container, Form, Button, Spinner } from "react-bootstrap";

const ContactUs = () => {
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
      
      <section className="gei_main_section">
       
     

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

export default ContactUs;
