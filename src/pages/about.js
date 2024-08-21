/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import aboutLeft from "../assets/img/about-left.jpg";
import React, { useState, useEffect } from "react";
import Faculty from "../components/Faculty";
import axios from "axios";

function AboutUs() {
  //funding data
  const [fundingdata, setfundingData] = useState([]);
  useEffect(() => {
    fetchfundingData();
  }, []);
  const fetchfundingData = async () => {
    try {
      const response = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteamfounding"
      ); // Replace with your actual API endpoint
      setfundingData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //dean data
  const [deandata, setdeanData] = useState([]);
  useEffect(() => {
    fetchdeanData();
  }, []);
  const fetchdeanData = async () => {
    try {
      const response1 = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteamdean"
      ); // Replace with your actual API endpoint
      ////console.log(response1);
      setdeanData(response1.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //advisory board
  const [advisorydata, setadvisoryData] = useState([]);
  useEffect(() => {
    fetchadvisoryData();
  }, []);
  const fetchadvisoryData = async () => {
    try {
      const responseadvisory = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteamadvisory"
      ); // Replace with your actual API endpoint
      ////console.log(response1);
      setadvisoryData(responseadvisory.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //our team
  const [ourteamdata, setourteamData] = useState([]);
  useEffect(() => {
    fetchourteamData();
  }, []);
  const fetchourteamData = async () => {
    try {
      const responseourteam = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteam"
      ); // Replace with your actual API endpoint
      ////console.log(response1);
      setourteamData(responseourteam.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //technical support team
  const [technicalsupportdata, settechnicalsupportData] = useState([]);
  useEffect(() => {
    fetchtechnicalsupportData();
  }, []);
  const fetchtechnicalsupportData = async () => {
    try {
      const responsetechnicalsupport = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-technicalsupport"
      ); // Replace with your actual API endpoint
      ////console.log(response1);
      settechnicalsupportData(responsetechnicalsupport.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //support staff
  const [supportstaffdata, setsupportstaffData] = useState([]);
  useEffect(() => {
    fetchsupportstaffData();
  }, []);
  const fetchsupportstaffData = async () => {
    try {
      const responsesupportstaff = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-supportstaff"
      ); // Replace with your actual API endpoint
      ////console.log(response1);
      setsupportstaffData(responsesupportstaff.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <section className="section_bg about_us">
        <Container>
          <Row>
            <Col xl={12}>
              <h2 className="mb-5"> Founding Team </h2>
              <Faculty faculty={fundingdata} />
            </Col>
            <Col xl={12} className="mt-5">
              <h2 className="mb-5"> Dean </h2>
              <Faculty faculty={deandata} />
            </Col>
            <Col xl={12} className="mt-5">
              <h2 className="mb-5"> Advisory Board </h2>
              <div className="mt-5">
                <Faculty faculty={advisorydata} />
              </div>
            </Col>

            <Col xl={12} className="mt-5">
              <h2 className="mb-5"> Our Team </h2>
              <div className="mt-5">
                <Faculty faculty={ourteamdata} />
              </div>
            </Col>

            <Col xl={12} className="mt-5">
              <h2 className="mb-5"> Technical Support </h2>
              <Faculty faculty={technicalsupportdata} />
            </Col>

            <Col xl={12} className="mt-5">
              <h2 className="mb-5"> Support Staff </h2>
              <Faculty faculty={supportstaffdata} />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xl={12}>
              <h1 className="h1_lg mb-5">
                {" "}
                Build a career
                <br />
                in public policy
              </h1>
            </Col>
            <Col xs={12} md={4} className="career_img">
              <img src={aboutLeft} alt="students image" className="img-fluid" />
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xl={12}>
                  <p className="mb-5">
                    <b>
                      Our program’s combination of academic rigour and on-ground
                      experiences will give you the confidence to assume
                      leadership in any career of your choice. Some of the
                      popular avenues you can choose after your Master’s Program
                      in Public Policy (MPP) include:
                    </b>
                  </p>
                </Col>

                <Col md={6}>
                  <h6 className="about-build-headings"> Private Sector </h6>
                  <p>
                    This includes business consultants, policy consultants of
                    large corporations, policy analysts, think tanks and private
                    policy implementation organisations. Courses on financial
                    reporting, management, cyber security, etc. focus on these
                    streams.
                  </p>
                </Col>
                <Col md={6}>
                  <h6 className="about-build-headings"> Public Service </h6>
                  <p>
                    This includes policy making and implementation, government
                    roles , and political candidates, who can leverage subjects
                    like politics, public policy design and analysis, ethics,
                    constitution and law, political campaign management, etc.
                  </p>
                </Col>

                <Col md={6}>
                  <h6 className="about-build-headings"> Global Affairs </h6>
                  <p>
                    This spans a variety of domains ranging from positions
                    within the Government of India and international
                    organizations like the World Bank and United Nations to
                    positions within international NGOs like ICLEI, ITF, and
                    WWF. Students will need to grasp the value and potential of
                    diplomacy within the framework of foreign policy toward
                    creating collaborative and cooperative ties focused on
                    common goals and objectives.
                  </p>
                </Col>
                <Col md={6}>
                  <h6 className="about-build-headings"> Non-profit or Social Enterprise </h6>
                  <p>
                    The Master’s Program in Public Policy (MPP) helps build
                    capacity in entrepreneurship with a focus on different
                    sectors within social development. Subjects such as gender,
                    strategy, organization behavior, energy and climate change,
                    negotiation, corruption, etc. help build all-round skills to
                    drive greater impact in this sector.
                  </p>
                </Col>
                <Col md={6}>
                  <h6 className="about-build-headings"> Media & Communications </h6>
                  <p>
                    Aspiring media, journalism and communications professionals
                    who focus on public sector topics can leverage subjects like
                    communication for leaders, macroeconomics, global trade and
                    policy, data visualization, business government, and
                    society.
                  </p>
                </Col>
                <Col md={6}>
                  <h6 className="about-build-headings"> Research & Academia </h6>
                  <p>
                    This includes Think Tanks & individuals who want to teach,
                    pursue research, and push policy thinking in India and
                    globally and can leverage courses on research methodologies,
                    quantitative analysis, and macroeconomics.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="career_section">
        <Container>
          <Row>
            <Col xl={12}>
              <h2 className="text-white text-start  mt-4 mb-4 h2_lg k-lineheight1 mb-2">
                Kautilya’s Master’s Program in Public Policy (MPP) is designed
                for those looking to rebalance the role of Society, Government
                and business towards an equitable world.
              </h2>
              <a href="./mpp" className="text-danger">
                {" "}
                <b>LEARN ABOUT THE PROGRAM </b>{" "}
                <img src="./images/redarrow.png" alt="right arrow" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutUs;
