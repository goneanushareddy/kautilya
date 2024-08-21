import { Container, Row, Col } from "react-bootstrap";
import Tabs_section from "../components/Tabs";
import { useState, useEffect } from 'react';
import axios from 'axios';
import TabSection from "../components/TabSection";
function AdmissionProcess() {


  const [admTabsdata, setAdmTabsdata] = useState([]);

  useEffect(() => {
    fetchAdmtabsdata();
  }, []);
  const fetchAdmtabsdata = async () => {
    try {
      const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-mppadmprocess-data'); // Replace with your actual API endpoint
      setAdmTabsdata(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // console.log("phd-admin-tabs-data", admTabsdata)



  return (
    <>
      <section className="p-3">
        <Container>
          <Row>
            <Col className="mt-5">
              <section className="mb-3 d-flex flex-column justify-content-around p-1 ad-pro">
                <h2 className="text-center"> Admission Process </h2>
                <p>The application period for the MPP for 2024-2026 has ended. Applications for the academic session 2025-2027 will open in September 2024.</p>
              </section>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xl={12}>
              <a class="btn btn-success" href="./pdf/Admissions-Brochure_Web.pdf" target="_blank"><i class="fa fa-arrow-alt-circle-down"></i> Download Brochure</a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <Container className="student_table">
      
                <div  className="table-responsive">
                <table className="table table-bordered table-striped">
                  <tbody>
                  <tr>
                  <th className="imp-table" colspan="6">IMPORTANT DATES</th>
                  </tr>
                  <tr>
                  <th className="imp-tab-sub">APPLICATION CYCLE</th>
                  <th className="imp-tab-sub">APPLICATION START DATE</th>
                  <th className="imp-tab-sub">APPLICATION END DATE WITH SCHOLARSHIP</th>
                  <th className="imp-tab-sub">ONLINE INTERVIEW SLOT</th>
                  <th className="imp-tab-sub">PAL RELEASED DATE W/SCHOLARSHIP</th>
                  <th className="imp-tab-sub">LAST DATE TO PAY ADMISSION FEE</th>
                  </tr>
                  <tr>
                  <td className="imp-tab-sub1" >Cycle 01</td>
                  <td className="imp-tab-sub1">
                  <p>Sunday, 1 October, 2023</p>
                  </td>
                  <td className="imp-tab-sub1" >Sunday, 10 December, 2023</td>
                  <td className="imp-tab-sub1" >1 DEC – 15 DEC 2023</td>
                  <td className="imp-tab-sub1" >Friday, 15 December, 2023</td>
                  <td className="imp-tab-sub1" >Wednesday, 3 January, 2024</td>
                  </tr>
                  <tr>
                  <td className="imp-tab-sub1" >Cycle 02</td>
                  <td className="imp-tab-sub1" >Monday, 11 December, 2023 </td>
                  <td className="imp-tab-sub1" >Saturday, 10 February, 2024</td>
                  <td className="imp-tab-sub1" >12 FEB – 19 FEB 2024</td>
                  <td className="imp-tab-sub1" >Friday, 23 February, 2024</td>
                  <td className="imp-tab-sub1" >Wednesday, 6 March, 2024</td>
                  </tr>
                  <tr>
                  <td className="imp-tab-sub1" >Cycle 03</td>
                  <td className="imp-tab-sub1" >Sunday 11 February 2024 </td>
                  <td className="imp-tab-sub1" >Saturday, 13 April, 2024</td>
                  <td className="imp-tab-sub1" >16 APRIL – 23 APRIL 2024</td>
                  <td className="imp-tab-sub1" >Friday, 26 April, 2024</td>
                  <td className="imp-tab-sub1" >Friday, 10 May, 2024</td>
                  </tr>
                  <tr>
                  <td className="imp-tab-sub1" >Cycle 04</td>
                  <td className="imp-tab-sub1" >Sunday, 14 April, 2024</td>
                  <td className="imp-tab-sub1" >Sunday, 09 June, 2024</td>
                  <td className="imp-tab-sub1" >11 JUNE – 18 JUNE 2024</td>
                  <td className="imp-tab-sub1" >Thursday, 20 June, 2024</td>
                  <td className="imp-tab-sub1" >Sunday, 30 June, 2024</td>
                  </tr>
                  </tbody>
                  </table>
                </div>
            
        </Container>
      */}


      {/* <section class="student-txt">
        <Container>
            <Row>
                <Col xl={12}>
                <p ><strong>Selection Process at Kautilya</strong> is designed to give each applicant a fair chance of admission.Could you <a href="https://admissions.kautilya.org.in/lp/home.html">CLICK HERE</a> to start the application.</p>
                </Col>
                <Col xl={12}>
                    <p>
                    Our internal assessment process considers the following aspects of your application:
                    </p>
                    <ul>
                        <li>
                        Your academic record, employment history, and essays hold 60% weightage and your Personal Interview holds the rest 40% weightage for your selection assessment
                        </li>
                    <li>
                    Your passion for pursuing a career in Public Policy and bringing about change in your area of interest.
                    </li>
                    <li>
                    Your attributes include your leadership potential, initiative, and awareness of prevailing issues in the public policy domain.
                     </li>
                    </ul>
                </Col>
                <Col xl={12}>
                    <p className="mt-3">
                    We shortlist candidates based on their overall performance on the parameters above. Your essays and your interview will broadly impact your chances of selection. So, it is essential to focus on well-articulated essay.
                       </p>
                </Col>
            </Row>
        </Container>
      </section>

      <section className="section_bg admission_steps">
        <Container>
            <Row>
                <Col xl={12}>
                    <h6>ADMISSION STEPS:</h6>
                </Col>
                <Col>
                <ul>
                <li><a href="https://admissions.kautilya.org.in/lp/home.html">CLICK HERE</a> to fill inquiry form and submit the Online Application with an application fee of INR 1000/- and the required documents.</li>
<li>Appear in PERSONAL INTERVIEW as per the schedule shared by the admission advisor.</li>
<li>If Shortlisted, the Provisional Admission Letter (PAL), will be released to the applicant.</li>
<li>Accept PAL, and deposit the admission fee to receive a Confirmed Admission Letter.</li>
<li>Deposit the 1st-semester fee as per the payment schedule, and complete the registration process.</li>
                    
                </ul>
                </Col>
            </Row>
        </Container>

      </section> */}
      <section class="student-txt">
        <Container>
          <Row>
            <Col xl={12}>
              <h5 className="adm-pro-heading">FOSTERING CHANGE MAKERS FOR DOING GOOD. </h5>
            </Col>
            <Col xl={12}>

              <p className="adm-pro-para">
                With problems, there are possibilities and numerous ways to bring a better tomorrow with impact-oriented and policy-driven initiatives. You have just landed at the right place to match your aspirations with your passion.
                <strong>
                  Get geared up to experience influential academics and delightful student life, and build global industrial connections to pursue a successful career in public policy.
                </strong>
              </p>

              <p className="adm-pro-para">
                The public policy programs offered at Kautilya School of Public Policy are intended to explicitly reinforce Kautilya’s commitment to imparting the best public policy skills to nurture future leaders for public policy careers in government, private corporations, NGOs, and public service as consultants. At Kautilya, we AIM to explore impact-oriented ways to inculcate learner-centred best education and provide abundant development opportunities to each student enrolled at Kautilya.
              </p>
            </Col>

          </Row>
        </Container>
      </section>



      <section className="section_bg">
        <Container>
          <Row>
            <Col xl={12}>
          
              <TabSection tabsData={admTabsdata} />
            </Col>
          </Row>
        </Container>

      </section>
    </>
  );
}

export default AdmissionProcess;
