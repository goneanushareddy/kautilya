import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import Tabs_section from "../components/Tabs";
function AdmissionProcessMPP() {
    const [phddata,change] = useState([
        {
          id:'1',
          name : " Programme Exploration",
          description: `
          <div>
            <p>
            Explore the programme, i.e., PhD in Public Policy and check the learning outcomes of the four-year PhD
programme - on the department website:
            </p>
            <ul class="anchor_color_red">
             <li>
             Identify, define and discuss complex policy problems from the perspective of policy science;
             </li>
             <li>
             Acquire the critical thinking and research skills essential for policy research; and Exercise
Independent and critical judgements in the debates about public policy.
             </li>
             <li>
             Using analytical tools and substantive knowledge gained on different policy domains to conduct
rigorous policy research;
             </li>
<li>
Acquire the critical thinking and advanced research skills that are essential for policy research;
</li>
<li>
Apply a range of qualitative and quantitative research methods for policy research;
</li>
<li>
Develop and master a field of speciality in public policy; and
</li>
<li>
Exercise independent and critical judgements in the debates about public policy.
</li>
            </ul>
    
          </div>
        `,
      },

      {
        id:'2',
        name : " Prepare for Your Application" ,
        description: `
        <div>
          <p>
          Explore the programme, i.e., PhD in Public Policy and check the learning outcomes of the four-year PhD
programme - on the department website:
          </p>
          <ul class="anchor_color_red">
           <li>
           Identify, define and discuss complex policy problems from the perspective of policy science;
           </li>
           

          </ul>
  
        </div>
      `,
    },

    ]);
  return (
    <>
    
      <Container className="mt-4 mb-5">
        <Row>
        <Col xl={12}>
        <h2 className="text-center">Admission Process </h2>
        <p className="mt-4">
        The application period for the MPP for 2024-2026 has ended. Applications for the academic session 2025-2027 will open in September 2024.
        </p>
        </Col>
            <Col xl={12}>
              <a class="btn btn-success mt-3 mb-2" href="./pdf/Admissions-Brochure_Web.pdf" target="_blank"><i class="fa fa-arrow-alt-circle-down"></i> Download Brochure</a>
            </Col>
        </Row>
      </Container>
     
     
        <Container className="mt-5 student_table">
       
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
                 
                  </tbody>
                  </table>
                </div>
            
        </Container>
     
   
      
      <section class="student-txt">
        <Container>
            <Row>
                <Col xl={12}>
                <h5>FOSTERING CHANGE MAKERS FOR DOING GOOD. </h5>
                </Col>
                <Col xl={12}>
                   
                   <p>
                   With problems, there are possibilities and numerous ways to bring a better tomorrow with impact-oriented and policy-driven initiatives. You have just landed at the right place to match your aspirations with your passion. 
                   <strong>
                   Get geared up to experience influential academics and delightful student life, and build global industrial connections to pursue a successful career in public policy.
                   </strong>
                    </p>

                    <p>
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
                <Tabs_section phd={phddata}/>
                </Col>
            </Row>
        </Container>

      </section>

     
    </>
  );
}

export default AdmissionProcessMPP;
