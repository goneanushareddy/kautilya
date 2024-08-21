import { useState } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Tabs_section from "../components/Tabs";
import '../assets/css/navbar.css';



function VishnuPillai() {
  const [masterprogram, change1] = useState([
    {
      id: 1,
      name: " Research Interest",
      description: `
         
         <p> His research interest lies in Science, Technology, and Innovation policy with demonstrable expertise in qualitative and quantitative methodologies in Public Policy and Social Science.</p>
          `
    },


    {
      id: 2,
      name: "   Post Graduate",
      description: `
          <ul class="entry_content" >
          <li>Postgraduate Studentship to pursue Ph.D. at The Hong Kong University of Science and Technology from 2017 to 2021 Dr. Vishnu S Pillai 4.</li>
<li>L&amp;T Build India Scholarship to pursue M.Tech in Construction Technology and Management at the National Institute of Technology from 2014 to 2016.</li>
<li>“Best Paper – Runners Up” for the paper on “Monitoring and Forecasting in Construction Projects using Risk Information Based Time Buffer” at the Project Management Research and Academic Conference 2017, organized by Project Management Institute in association with the Indian Institute of Technology, Delhi, on 3rd and 4th March ’17.</li>
<li>Golden Paper (Best of the Best Paper) Award for the article titled “Development of a Monitoring and Forecasting Method for Construction Projects Using Time Buffers”, at the International Conference on Intelligence, Innovation, and Inclusion – Best Practices for Global Excellence, Department of Management Studies, Pondicherry University on 11th and 12th March 2016.</li>
          </ul>
          `
    },
    {
      id: 3,
      name: "  Publications",
      description: `
          <p><strong>List of Publications:</strong></p>
          <ul class="entry_content" >
          <li>Sivarudran Pillai, V., Matus, K.J.M., 2020. Towards a responsible integration of artificial intelligence technology in the construction sector. Science and Public Policy 47, 689–704.&nbsp;<a href="https://doi.org/10.1093/scipol/scaa073"><strong>Read The Full Article</strong></a></li>
          <li>Vishnu S. Pillai, C. Rajasekaran, P.K. Vatsa, (2016). Monitoring and Forecasting in Construction Projects Using Time Buffer. Journal of Construction Engineering, Technology &amp; Management, 6(2): 9–16p.&nbsp;<a href="https://engineeringjournals.stmjournals.in/index.php/JoCETM/article/view/4838"><strong>Read The Full Article</strong></a></li>
          <li>Vishnu S Pillai, &amp; Rajasekaran, C. (2016). Role of Time Buffer on Project Monitoring and Forecasting of Steel Structures – A New Approach to Structural Planning, International Journal of Earth Sciences and Engineering&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/SPL02090307.pdf">Read The Full Article</a></strong></li>
           </ul>
           <p><strong>Working Paper</strong></p>
           <ul class="entry_content" >
           <li>Pillai, Vishnu Sivarudran and Matus, Kira, Regulation of AI Technologies in the Construction Industry (2019). HKUST IEMS Working Paper No. 2019-65, Available at SSRN:&nbsp;<strong><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3439826">Read The Full Article</a></strong></li>
           </ul>
          `
    },
    {
      id: 4,
      name: " Courses Fostered",
      description: `
         
          <ul class="entry_content" >
          <li>Ageing, Demography and Policy.</li>
          <li>Evidence in Public Policy.</li>
          <li>Quantitative Analysis and Empirical Methods.</li>
          <li>Research Methods in Public Policy.</li>
          <li>Complex Systems for Policy.</li>
          <li>Finance, Financial Crisis and Economic Development.</li>
          <li>Public Policy Analysis.</li>
          <li>Innovation and Sustainability</li>  </ul>
          `
    },



  ]);

  return (
    <>
      <section className="phd">

        <Container>
          <img src="./images/faculty/vishnu.webp" className='mt-3'></img>
          <p className="mt-5">
            Dr. Vishnu is a fellow in the Division of Public Policy at the Hong Kong University of Science and Technology (HKUST), Hong Kong, and has done an M.Tech in Construction Technology and Management, from the National Institute of Technology Karnataka, India. Apart from academics, he has Five years of engineering and project management experience too. Prior to joining Kautilya, Dr. Vishnu was a Principal Research Associate at the Indian Institute of Corporate Affairs. He was involved in researching innovative CSR and developing courses on Public Policy for corporate professionals and government officers.   </p>
          <p>
            Currently, working as an assistant professor at the Kautilya School of Public Policy.   </p>

          <h5 className='mt-5 mb-4'>Contact: <span className='text-primary'> <a href='https://www.linkedin.com/in/vishnu-sivarudran-pillai-phd-bb9838a0' ><i className='fa fa-linkedin'></i></a> </span>
            <span className='text-primary'> <a href='mailto:vishnu2@kautilya.org.in'>
              <i className='fa fa-envelope'></i>    </a>  </span>

          </h5>
        </Container>


      </section>
      <section className="section_bg">
        <Container>
          <Row>

            <Col xl={12} className="mt-4">
              <Tabs_section phd={masterprogram} />
            </Col>

          </Row>
        </Container>
      </section>

    </>
  );
}
export default VishnuPillai;