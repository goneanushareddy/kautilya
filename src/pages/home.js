import Carousel_slide from "../components/Carousel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import EnquiryModal from "../components/Enquiry_modal";
// import VideoBackground from "../components/VideoBackground";
import NumberCounter from "../components/Counter";

import kautilya from "../kautilya";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

function Home() {
  const [kautilyanow_slider, setslider] = useState([]);

  useEffect(() => {
    fetchIssue();
  }, []);

  const fetchIssue = () => {
    kautilya.get("/kautilyanow_slider").then((res) => {
      setslider(res.data.data);
      // console.log("homepage Slider", res.data.data)
      //console.log(res.data);
      ////console.log(blogs);
    });
  };

 

  return (
    <>
      {/* <Carousel /> */}

      {/* Redbg */}
      {/* <div className="home_bg_gray"></div> */}
      

      {/* <div className="home_bg_white"></div> */}
      <section className=" opacity_9 home_section">
      
              {/* <h2 className="main-sec3-tit mt-5">KAUTILYA NOW</h2>
              <div className="separator_lg"></div> */}
            <Carousel variant="dark" className="mt-0">
                {kautilyanow_slider
                  .sort((a, b) => a.weborder - b.weborder) // Sort based on weborder
                  .map((eachObj, index) => (
                    <CarouselItem key={eachObj.id}>
                      <a href={eachObj.url} target="_blank">
                        <picture>
                          <source media="(max-width:620px)" srcSet ={`https://guprojects.gitam.edu/kautilya-admin/public/kautilyanow_slider/mobile/${eachObj.bannermobile}`} />
                          <source media="(min-width:621px)" srcSet ={`https://guprojects.gitam.edu/kautilya-admin/public/kautilyanow_slider/${eachObj.banner}`} />
                          <img
                            className="d-block_carousel"
                            src={`https://guprojects.gitam.edu/kautilya-admin/public/kautilyanow_slider/${eachObj.banner}`}
                            alt={`Slide ${eachObj.weborder}`}
                          />
                        </picture>
                      </a>
                    </CarouselItem>
                  ))}
              </Carousel> 


           
      </section>

<div className="red_bg IndiaByKautilya">
        <h5 className="main-sec-tit">
          <strong>#IndiaByKautilya</strong>
        </h5>
        <p className="main-sub-tit">
          If there’s one word that well and truly defines India today, it is
          ‘potential’.
        </p>
      </div> 
      <section>
        <Container>
          <Row>
            <Col xl={12}>
              <p className="d-text">
                Building a new India will require passion, long-term commitment,
                and most importantly, <b>a pool of public policy experts </b>
                formally trained in evidence-based policy-making,
                implementation, and leadership. Kautilya’s <b>vision</b>{" "}
                (“Working to rebalance the role of Society, Government &
                Business for a more equitable and sustainable future.”) &{" "}
                <b>mission</b> (“Empowering leaders to address 21st-century
                issues through rigorous public policy education.”)
              </p>
              <p className="d-text">
                Kautilya brings on board the{" "}
                <b>world’s leading policy practitioners </b>drawn from{" "}
                <b>eminent institutions and international organizations</b> to
                inculcate diverse skills through one of the{" "}
                <b>finest curriculum </b> for Doctoral, and Master’s degree
                programs in Public Policy necessary for a successful career as a{" "}
                <b>public policy professional</b> in policy-making & governance.
              </p>
            </Col>
          </Row>

          {/* <Col xl={4}>
          <p className="count-ratio"><NumberCounter end={14} duration={1000}/>:<span className="counter ">1</span></p>
          <p className="counter-txt">Student-faculty ratio</p>
          </Col> */}
          {/* <Row className="mt-5">
            <Col xl={4}>
          <p className="count-ratio"><span className="counter "><NumberCounter end={44} duration={1000}/></span></p>
          <p className="counter-txt"><span className="counter ">Publications By Academic Team</span></p>
          </Col>
          <Col xl={4}>
          <p className="count-ratio"><span className="counter "><NumberCounter end={41} duration={1000}/></span></p>
          <p className="counter-txt"><span className="counter ">₹ 41 LPA highest package</span></p>
          </Col>
          <Col xl={4}>
          <p className="count-ratio"><NumberCounter end={35} duration={1000}/>%</p>
          <p className="counter-txt">Students having prior work experience</p>
          </Col>
        </Row> */}
        </Container>
      </section>


      <section className="glance p-0">
        <Container>
          <Row>
            <Col xl={12}>
              <h3 className="main-sec4-1-2-tit">GITAM @ A GLANCE</h3>
            </Col>
            <Col xl={12}>
              <p className="d-text mt-1">
                {" "}
                Kautilya School of Public Policy is a premier school under the
                tutelage of GITAM (Deemed to be University). GITAM offers one of
                the best UG, and PG programs at 04 campuses in Bangalore,
                Hyderabad, and Vishakhapatnam.
              </p>
            </Col>
            <Col xl={12}>
              <img src="./images/administration.jpg" alt="admin image" />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xl={12}>
              <h3 className="main-sec4-tit">ACCREDITATIONS AND RECOGNITIONS</h3>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col sm={6} md={4} lg>
              <a href="./pdf/NAAC3certificate.pdf" target="_blank">
                <img
                  src="./images/gitam-naac-A-grade-in-2017.jpg"
                  alt="image"
                />
              </a>
              <p className="vlt-post-title">NAAC ‘A ++ ’ Grade in 2023</p>
            </Col>
            <Col sm={6} md={4} lg>
              <a href="./pdf/MHRD-HYD-1.pdf" target="_blank">
                <img
                  src="./images/gitam-recognized-by-ugc-mhrd.jpg"
                  alt="image"
                />
              </a>
              <p className="vlt-post-title">
                UGC Recognized as Category-‘I’ Deemed to be University
              </p>
            </Col>
            <Col sm={6} md={4} lg>
              <a href="./nirf-ranking">
                <img
                  src="./images/101-150-Rank-in-NIRF-2023-University-Category.jpg"
                  alt="image"
                />
              </a>
              <p className="vlt-post-title">
                101-150 Rank University in NIRF 2023
              </p>
            </Col>
            <Col sm={6} md={4} lg>
              <a href="./pdf/The-World-University-Rankings.pdf" target="_blank">
                <img
                  src="./images/601-800-Rank-in-THE-mpact-Rankings-2023-in-Overall-SDGs.jpg"
                  alt="image"
                />
              </a>
              <p className="vlt-post-title">
                601+ Rank in THE ASIA Ranking 2023
              </p>
            </Col>
            <Col sm={6} md={4} lg>
              <a href="./pdf/qs-gitamuniversity.pdf" target="_blank">
                <img
                  src="./images/80-in-QS-INDIA-Rankings-2022.jpg"
                  alt="image"
                />
              </a>
              <p className="vlt-post-title">93 in QS – INDIA Rankings 2023</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* register modal */}
      <EnquiryModal />
    </>
  );
}

export default Home;
