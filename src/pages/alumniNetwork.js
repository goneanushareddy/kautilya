import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import Faculty from "../components/Faculty";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Tabs_section from "../components/Tabs";
import withReactContent from 'sweetalert2-react-content';
function AluminiNewwork(){
    const MySwal = withReactContent(Swal);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile:'',
        city:'',
        designation:'',
        sector:'',
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
               const response = await fetch('https://guprojects.gitam.edu/kautilya-admin/api/savealumniassociation', {
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
                             designation:'',
                             sector:'',
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
  


    //alumni profile
  const [alumniprofileData, setAlumniprofileData] = useState([]);
  useEffect(() => {
    fetchalumniprofileData();
  }, []);
  const fetchalumniprofileData = async () => {
    try {
      const response = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-alumniprofiles"
      ); // Replace with your actual API endpoint
      setAlumniprofileData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(alumniprofileData);


    const [facultydata,change] = useState([
       
        {
            id:1,
            imgURL : "../images/alumini/1.jpg",
            name : "ADITYA JINGHAN ",  
            city : "KARNATAKA",     
            designation: "Socratus Foundation for Collective Wisdom & How Institute, Fellow",
            description:'About ADITYA'
        }, 
        {
            id:2,
            imgURL : "../images/alumini/2.jpg",
            name : " AISHWARYA SRINIVASAN",  
            city: "TAMIL NADU" ,       
            designation: "GNITS, Lead- Policy and Strategy",
            description:''
        }, 
        {
            id:3,
            imgURL : "../images/alumini/3.jpg",
            name : "AKSHAT JOSHI ",  
            city: "UTTARAKHAND" ,        
            designation: "Dhwani RIS, Project Lead",
            description:''
        }, 
        {
            id:4,
            imgURL : "../images/alumini/4.jpg",
            name : "ANIKET RAJ",
            city: "NEW DELHI" ,          
            designation: "Quality Council of India, Analyst",
            description:''
        }, 
        {
            id:5,
            imgURL : "../images/alumini/5.jpg",
            name : "ANJALI SREERAM  ",
            city: "MAHARASHTRA" ,          
            designation: "AuctusESG, Assistant Manager",
            description:''
        }, 

        {
            id:6,
            imgURL : "../images/alumini/6.jpg",
            name : "ANJANA DEVI BALIJEPALLI", 
            city: "ANDHRA PRADESH" ,         
            designation: "",
            description:''
        }, 

        {
            id:7,
            imgURL : "../images/alumini/7.jpg",
            name : "ANURAG PRABHAKAR ", 
            city: "NEW DELHI" ,         
            designation: "JHARKHAND – IORA Ecological Solutions – Business Development Associate – Carbon Investments",
            description:'“Anurag’s role involves advising project developers on transaction structuring, ensuring that the timing, price, and selection of buyers for their carbon offset credits are strategically chosen. He also assist buyers in maximizing their market share and effectively marketing their carbon offset products in the Indian market”'
        }, 
        {
            id:8,
            imgURL : "../images/alumini/8.jpg",
            name : "AUDUMBAR CHAVAN ", 
            city: "MAHARASHTRA" ,         
            designation: "RBIH, Associate",
            description:''
        }, 
        {
            id:9,
            imgURL : "../images/alumini/9.jpg",
            name : "DHARMESH BANSAL ",  
            city: "ANDHRA PRADESH" ,        
            designation: "GITAM (Deemed to be University) – Senior Policy Analyst",
            description:'In the role of a Senior Policy Analyst at GITAM, responsibilities involve conducting thorough research and analysis of education policies. The primary focus is on developing evidence-based recommendations and leading policy shaping and implementation, all aimed at enhancing educational quality, equity, and effectiveness in alignment with the institution’s mission and objectives.'
        }, 
        {
            id:10,
            imgURL : "../images/alumini/10.jpg",
            name : "HABEEBULLAH MOHAMMED ", 
            city: "ANDHRA PRADESH" ,         
            designation: "Nehru Fellowship, Fellow",
            description:''
        }, 
        {
            id:11,
            imgURL : "../images/alumini/11.jpg",
            name : "HARSHA KAVI ",
            city: "TELANGANA" ,          
            designation: "NIUM – Hyderabad, Knowledge Manager",
            description:''
        }, 
        {
            id:12,
            imgURL : "../images/alumini/12.jpg",
            name : "HIMANSHU TRIVEDI ", 
            city: "NEW DELHI" ,         
            designation: "Quality Council of India, Analyst",
            description:''
        }, 
        {
            id:13,
            imgURL : "../images/alumini/13.jpg",
            name : "JASMEET SINGH MINOCHA ", 
            city: "NEW DELHI" ,         
            designation: "Shardul Amarchand Mangaldas & Co., Associate",
            description:''
        }, 
        {
            id:14,
            imgURL : "../images/alumini/14.jpg",
            name : "MOHAMMAD JUNED SHAHIL ", 
            city: "TELANGANA" ,         
            designation: "Inclusive Minds – Fellow",
            description:'“As a consultant, he evaluate the adversary’s performance and monitor narratives & emerging issues to translate them into actionable insights for the clients. He track political and policy developments, research, design campaigns. He is involved in the extensive research of writing issue briefs, and scheme analysis and also collaborate with the senior management to present and refine strategies for maximizing the client’s prospects for successful election outcomes.”'
        }, 
        {
            id:15,
            imgURL : "../images/alumini/15.jpg",
            name : "KOWSHIK THOTA ",  
            city: "TELANGANA" ,        
            designation: "NIUM – Hyderabad, Knowledge Manager",
            description:''
        }, 
         {
            id:16,
            imgURL : "../images/alumini/16.jpg",
            name : "MANOGNA ATKURU ", 
            city: "KARNATAKA" ,         
            designation: "RBIH, Associate",
            description:''
        }, 
        {
            id:17,
            imgURL : "../images/alumini/17.jpg",
            name : "MAYANK GUPTA ", 
            city: "NEW DELHI" ,         
            designation: "Infrastructure Professionals Enterprise -Global, Consultant",
            description:''
        }, 
        {
            id:18,
            imgURL : "../images/alumini/18.jpg",
            name : "MRUNAL KULKARNI ", 
            city: "MAHARASHTRA" ,         
            designation: "Bharat Biotech International Ltd., Management Corporate Trainee Communication",
            description:''
        }, 
        {
            id:19,
            imgURL : "../images/alumini/19.jpg",
            name : "MEHEK KAUR ", 
            city: "HARYANA" ,         
            designation: "",
            description:''
        }, 
        {
            id:20,
            imgURL : "../images/alumini/20.jpg",
            name : "NIKHITHA JAGADEESH ", 
            city: "NEW DELHI" ,         
            designation: "CEEW – Research Analyst – Sustainable Food Systems",
            description:''
        }, 
        {
            id:21,
            imgURL : "../images/alumini/21.jpg",
            name : "OSHIN SAHARE ",
            city: "ANDHRA PRADESH" ,          
            designation: "GITAM (Deemed to be University) – Policy Analyst",
            description:''
        }, 
        {
            id:22,
            imgURL : "../images/alumini/22.jpg",
            name : "PARESH YADAV ", 
            city: "MAHARASHTRA" ,         
            designation: "Paytm, Junior Manager",
            description:''
        }, 
        {
            id:23,
            imgURL : "../images/alumini/23.jpg",
            name : "PRASHANT RATHOD ", 
            city: "MAHARASHTRA" ,         
            designation: "Aadarsh Foundation, Project Lead",
            description:''
        }, 
        {
            id:24,
            imgURL : "../images/alumini/24.jpg",
            name : "PRITISH ANAND ", 
            city: "TELANGANA" ,         
            designation: "Kautilya School of Public Policy, Academic Associate",
            description:'Pritish’s role involves undertaking research in interdisciplinary fields of education reforms, economics of education, and gender and education, under the guidance of Dr. Amrendra Pandey (Associate Professor, Kautilya School of Public Policy). He also support various faculty members primarily in teaching and several related activities in the short- term, including, but not limited to curriculum development, course design, in addition to performing relevant duties and other responsibilities as assigned.'
        }, 
        {
            id:25,
            imgURL : "../images/alumini/25.jpg",
            name : "PRIYAM AWASTHI ",
            city: "NEW DELHI" ,          
            designation: "Centre for Social and Economic Progress Consultant- Energy, Natural Resources, and Sustainability",
            description:''
        }, 
        {
            id:26,
            imgURL : "../images/alumini/26.jpg",
            name : "RAISA LORRAINE PALATTYA " , 
            city: "KARNATAKA" ,         
            designation: "E&Y, Project Consultant",
            description:''
        }, 
        {
            id:27,
            imgURL : "../images/alumini/27.jpg",
            name : "RAWSON GONSALVES ", 
            city: "MAHARASHTRA" ,         
            designation: "Climate Bonds Initiative – Deputy Head, India Programme",
            description:'Rawson Gonsalves in this capacity is actively involved in shaping initiatives related to Sustainable Finance, transition finance and climate risk in India, while closely collaborating with international and domestic stakeholders like sovereign, sub-sovereigns, market participants, policy makers, regulators and CSOs in close consultation with the Head of South Asia Programme.'
        }, 
        {
            id:28,
            imgURL : "../images/alumini/28.jpg",
            name : "REHET KAUR ",
            city: "NEW DELHI" ,          
            designation: "Ernst & Young – Associate Consultant",
            description:'Rehet is engaged in assignments pertaining to climate change and ESG advisory, preparing EHS and ESG gap and audit reports, extensive research on energy-intensive sectors and carrying out a decarbonization roadmap for clients'
        }, 
        {
            id:29,
            imgURL : "../images/alumini/29.jpg",
            name : "RITUPARN MISHRA ", 
            city: "NEW DELHI" ,         
            designation: "Quality Council of India, Associate Manager",
            description:''
        }, 
        {
            id:30,
            imgURL : "../images/alumini/30.jpg",
            name : "SABIR MONTRY ", 
            city: "ODISHA" ,         
            designation: "Insight Development Consulting Group (P) Ltd (PWC), Investment Promotion Advisor",
            description:''
        }, 
        {
            id:31,
            imgURL : "../images/alumini/31.jpg",
            name : "SANDIP PANDEY ",
            city: "UTTAR PRADESH" ,          
            designation: "",
            description:''
        }, 
        {
            id:32,
            imgURL : "../images/alumini/32.jpg",
            name : "SANJANA KAPOOR ", 
            city: "NEW DELHI" ,         
            designation: "Climate Bonds Initiative – Associate Research Analyst",
            description:''
        }, 
        {
            id:33,
            imgURL : "../images/alumini/33.jpg",
            name : "SANYOGITA DILIP SATUPUTE ",
            city: "NEW DELHI" ,          
            designation: "CEEW, Research Analyst",
            description:''
        }, 
        {
            id:34,
            imgURL : "../images/alumini/34.jpg",
            name : "SHANKAR MM ",
            city: "KARNATAKA" ,          
            designation: "",
            description:''
        }, 
        {
            id:35,
            imgURL : "../images/alumini/35.jpg",
            name : "SHANKAR NARAYAN ", 
            city: "NEW DELHI" ,         
            designation: "Quality Council of India, Associate Manager",
            description:''
        }, 
        {
            id:36,
            imgURL : "../images/alumini/36.jpg",
            name : "SHUBHAM SHINDE ", 
            city: "PUNJAB" ,         
            designation: "Govt. of Punjab – Governance Fellow",
            description:'As a governance fellow, he is a part of a collaborative program between Government of Punjab and ISB that engages young professionals in bringing about innovation in governance. Current role involves assisting the Office of Commissioner, Municipal Corporation Amritsar with data driven problem analysis, developing proposals for process re-engineering and driving priority and e-governance initiatives.'
        }, 
        {
            id:37,
            imgURL : "../images/alumini/37.jpg",
            name : "SNIGDHA TIWARY ",
            city: "KARNATAKA" ,          
            designation: "Ather, Associate Manager",
            description:''
        }, 
        {
            id:38,
            imgURL : "../images/alumini/38.jpg",
            name : "SOWMYA KOLLA ",
            city: "RAJASTHAN" ,          
            designation: "Indicc, Consultant-Green Economy",
            description:''
        }, 
        {
            id:39,
            imgURL : "../images/alumini/39.jpg",
            name : "SWATI BOTHRA ", 
            city: "New Delhi" ,         
            designation: "Just Jobs Network, Consultant",
            description:'About SWATI'
        }, 
        {
            id:40,
            imgURL : "../images/alumini/40.jpg",
            name : "TANUSHKA TIWARI ", 
            city: "UNITED STATES" ,         
            designation: "Yale School of Public Health, Scholar",
            description:'About TANUSHKA'
        }, 
        {
            id:41,
            imgURL : "../images/alumini/41.jpg",
            name : "THERES THOMAS ",
            city: "NEW DELHI" ,          
            designation: "CEEW, Consultant",
            description:'Theres Thomas works in the nature-based solution realm, shaping the larger green economy narrative and roadmap for State(s) and Central govt.'
        }, 
        {
            id:42,
            imgURL : "../images/alumini/42.jpg",
            name : "TRILOK KOTHAPALLI ", 
            city: "NEW DELHI" ,         
            designation: "Paytm, Junior Manager",
            description:'Trilok is working at the intersection of public policy, technology, and business at Paytm. He is dedicated to driving the policy initiatives across Paytm’s diverse business entities ranging – digital payments, lending, online gaming, travel tech, insurance, stock broking and e-commerce. Also, he manages various government and industry stakeholders in the ecosystem.'
        }, 
        {
            id:43,
            imgURL : "../images/alumini/43.jpg",
            name : "VINAYA BHARAM ", 
            city: "MAHARASHTRA" ,         
            designation: "Indian School of Leadership, Program Manager",
            description:'About VINAYA'
        }, 
        {
            id:43,
            imgURL : "../images/alumini/WASEEM.jpg",
            name : "WASEEM AHMAD ",
            city: "ANDHRA PRADESH" ,          
            designation: "Mythos Labs, Associate",
            description:'About WASEEM'
        }, 
       
        
                   
      ]);
    return(
        <>
        <section>
            <Container>
                <Row>
                    <Col xl={12} className="mt-4">
                        <a onClick={handleShow}><img src="../images/alumini/Web-Desktop-Creatives-29-scaled.jpg" alt="banner imaage" /></a>
                        <Modal show={show} onHide={handleClose} className='faculty_modal'>
                            <Modal.Header closeButton>
                            <Modal.Title>Alumni Association</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                
                            <Form onSubmit={handleSubmit}>
                                    <Row>
                                   <Col xl={12}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Control type="text" placeholder="Full Name *" name="name" value={formData.name} onChange={handleChange}/>
                                    </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control placeholder="Email ID *" type="email" name="email" value={formData.email} onChange={handleChange} />
                                    </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Mobile *" minlength="10" maxlength="10" name="mobile" value={formData.mobile} onChange={handleChange}/>
                                    </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Current City" name="city" value={formData.city} onChange={handleChange}/>
                                    </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Current Designation" name="designation" value={formData.designation} onChange={handleChange}/>
                                    </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="sector" name="sector" value={formData.sector} onChange={handleChange} />
                                    </Form.Group>
                                    </Col>
                                    <Col xl={12} className="text-center">
                                    <Button variant="danger" type="submit" >
                                        Submit
                                    </Button>
                                    </Col>
                                    </Row>
                                </Form>
                               
                            </Modal.Body>
                        </Modal>
                    </Col>
                 
                </Row>
            </Container>
        </section>
        <hr />
        <section>
            <Container>
                <Row>
                    <Col xl={6}>
                        <h5 className="alu_head">Alumni Network</h5>
                        <img src="../images/alumini/Punjab.jpg" alt=" map" />
                    </Col>
                    <Col xl={6}>
                        <h5 className="alu_head alu_speak">Alumni Speaks</h5>
                        <Row>
                            <Col xl={12} className="mb-5">
                            <iframe width="100%" height="313" src="https://www.youtube.com/embed/3bZyjdH3Mfc" title="Switching tracks: Introducing Nikhitha Jagadeesh &amp; Rawson Gonzalves, Kautilya MPP students" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Col>
                            <Col xl={12}>
                            <iframe width="100%" height="313" src="https://www.youtube.com/embed/jGmhecg9WG0" title="Entering the industry | MPP graduate Manogna Atkuru" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Col>
                        </Row>
                    </Col>
               </Row>
            </Container>
        </section>
        <hr />
        <section className="alumnifaculty">
            <Container>
                <Row>
                    <Col xl={12}>
                        <h5 className="alu_head">Alumni Profiles</h5>
                    </Col>
                    <Col xl={12}>
                    <Faculty faculty={facultydata} />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default AluminiNewwork;