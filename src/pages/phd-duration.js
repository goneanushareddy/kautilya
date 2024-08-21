
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Tabs_section from "../components/Tabs";
import '../assets/css/navbar.css';
import TabSection from '../components/TabSection';

function Phd() {

  const [phdtabsdata, setPhdtabsdata] = useState([]);

  useEffect(() => {
    fetchPhdtabsdata();
}, []);
  const fetchPhdtabsdata = async () => {
    try {
      const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-phd-tabsdata'); // Replace with your actual API endpoint
      setPhdtabsdata(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <div className='d-block d-xl-none' xl={12}>
         <h4 className='npf_head_main'>
          #IndiaByKautilya
         </h4>
              </div> */}
      <section className='mt-xs-0 pt-xs-0'>


        <Container>
          <Row>

            <Col xl={12} className='d-none d-xl-block'>
              {/* <h4 className='text-center mt-5 mb-5'> #IndiaByKautilya</h4> */}
              <img src='./images/admission-process/Web.jpg' alt='Admission Process' />
            </Col>
            <Col className='d-block d-xl-none'>
              <img src='./images/admission-process/mobile.jpg' alt='Admission Process Mobile' className='w-100' />
            </Col>
            {/* <Col xl={4}>
        <div className='npf_bg'>
          <h4 className='npf_head'>
            Admission Enquiry for 2024 intake
          </h4>
        <div className="npf_wgts" data-height="600px" data-w="0da0d2dd344f21c6dfe473c84bd609a0"></div>
    

        </div>
             </Col> */}

          </Row>
        </Container>

      </section>
      <Container>
        <Row>

          <Col xl={12}>
            <button className="btn btn-success mt-3" type="button"> <i className="fa-solid fa-circle-down "></i> <a href="./pdf/events/qs-gitamuniversity.pdf" target='_blank'>Download Brochure</a></button>

          </Col>


        </Row>
      </Container>
      <Container>
        <Row>
          <Col xl={12}>
            <p>
              The Ph.D. program at the Kautilya School of Public Policy will equip scholars with the training that will allow them to contribute through their research in academia, government, business, and society.
            </p>
            <p>
              <b>The school accepts Ph.D. applications in the following area:</b>
            </p>
            <ul className="custom-list">
              <li>
                Economics for policy.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 student_table">
        <Row>
          <Col xl={12}>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th className="imp-table" colspan="6">IMPORTANT DATES</th>
                  </tr>
                  <tr>

                    <th className="imp-tab-sub">APPLICATION START DATE</th>
                    <th className="imp-tab-sub">APPLICATION END DATE WITH SCHOLARSHIP</th>
                    <th className="imp-tab-sub">ONLINE INTERVIEW SLOT</th>
                    <th className="imp-tab-sub">PAL RELEASED DATE W/SCHOLARSHIP</th>

                  </tr>
                  <tr>

                    <td className="imp-tab-sub1">
                      <p>Thursday, 20 June, 2024 </p>
                    </td>
                    <td className="imp-tab-sub1" >Monday, 15 July, 2024</td>
                    <td className="imp-tab-sub1" >20-07-2024 to 25-07-2024 </td>
                    <td className="imp-tab-sub1" >Tuesday, 30-07-2023</td>

                  </tr>

                </tbody>
              </table>
            </div>
          </Col>
        </Row>


      </Container>
      <section>
        <Container>
          <Row>
            <Col xl={12}>
              <h5>
                Lead the way in public policy innovation with impactful research.
              </h5>
              <p>
                At the Kautilya School of Public Policy, we offer a comprehensive PhD program designed to equip you with the skills and knowledge needed to make a significant impact in academia, government, business, and beyond.
              </p>
              <h5>
                Purpose-Driven Education
              </h5>
              <p>
                Our PhD program is tailored to provide you with advanced training and research opportunities that align with your passions and career goals. You'll be prepared to contribute to various sectors, including academia, government, business, and society.
              </p>



            </Col>
          </Row>
        </Container>
      </section>


      <section className="section_bg">
        <Container>
          <Row>
            <Col xl={12}>
             
              <TabSection tabsData={phdtabsdata} />
            </Col>
          </Row>
        </Container>

      </section>

    </>
  );
}
export default Phd;
