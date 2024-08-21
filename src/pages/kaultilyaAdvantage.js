import { useState,useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Carousel } from 'react-bootstrap';
import Carousel_slide from '../components/Carousel';
import CarouselSlider from '../components/CarouselSlider';
function Kautilyaadvantage() {

  let page = "placements" /* due to sending the data to slider with a same path of placements & kautilya Adv */
  const [studentAtKautilyaData, setStudentAtKautilyaData] = useState([]);

  useEffect(() => {
    fetchStudentAtKautilyaData();
}, []);
  const fetchStudentAtKautilyaData = async () => {
    try {
      const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-placementsData'); // Replace with your actual API endpoint
      setStudentAtKautilyaData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const kautilyaAdvantageBanner = studentAtKautilyaData?.filter((each) => each.category === "study-at-kautilya");
  
  
  console.log("kau ADV", kautilyaAdvantageBanner);


  const data = [

    {
      id: 36,
      imgURL: "./images/k-study/Suhasini-Haider-1.jpg",
    },
    {
      id: 37,
      imgURL: "./images/k-study/vikay-singh.jpg",
    },
    {
      id: 38,
      imgURL: "./images/k-study/Web-1-1.jpg",
    },
    {
      id: 1,
      imgURL: './images/k-study/Akash-banarjee-min.jpg',

    },
    {
      id: 2,
      imgURL: "./images/k-study/amb-j.s.-deepak-website-banner-min.jpg",

    },
    {
      id: 3,
      imgURL: "./images/k-study/Amb-Venkatesh-Varma-min.jpg",

    },
    {
      id: 4,
      imgURL: "./images/k-study/Archana-Chaudharys-session-website-banner-2.jpg",

    },
    {
      id: 5,
      imgURL: "./images/k-study/DR-Aman-min.jpg",

    },
    {
      id: 6,
      imgURL: "./images/k-study/Dr.-Rathin-Roys-session-website-banner-min-2.jpg",

    },
    {
      id: 7,
      imgURL: "./images/k-study/Dr.-siddhartha-rajagopal-website-banner-min.jpg",

    },
    {
      id: 8,
      imgURL: "./images/k-study/Harish-P-Jagannath-Web-Banner-min.webp",

    },
    {
      id: 9,
      imgURL: "./images/k-study/Kautilya-Dr.-Nirupama-A.-Y-Op-2-min.webp",

    },
    {
      id: 10,
      imgURL: "./images/k-study/kautilya-Welcome-Digital-Screen-04-09-2023-1.jpg",

    },
    {
      id: 11,
      imgURL: "./images/k-study/kautilya-Welcome-Digital-Screen-04-09-2023-1045x545-1.jpg",

    },
    {
      id: 12,
      imgURL: "./images/k-study/kautilya-Welcome-Digital-Screen-04-09-2023-1045x545-1.jpg",

    },
    {
      id: 13,
      imgURL: "./images/k-study/Mr-Alok-Vermas-session-website-banner-min-2.jpg",

    },
    {
      id: 14,
      imgURL: "./images/k-study/Mr-S-Y-Quraishis-session-website-banner-min-1.jpg",

    },
    {
      id: 15,
      imgURL: "./images/k-study/murthy-min.jpg",

    },
    {
      id: 16,
      imgURL: "./images/k-study/Option-2-min.jpg",

    },
    {
      id: 17,
      imgURL: "./images/k-study/orientation-banners-D.S.rao-1042x545-min.jpg",

    },
    {
      id: 18,
      imgURL: "./images/k-study/Prof.-Arvind-Lodaya.jpg",

    },
    {
      id: 19,
      imgURL: "./images/k-study/rajiv-kumars-session-website-banner-2.jpg",

    },
    {
      id: 20,
      imgURL: "./images/k-study/rakesh_Dubbudu_web.jpg",

    },
    {
      id: 21,
      imgURL: "./images/k-study/ranjan-shukla-desktop-website-min.jpg",

    },
    {
      id: 22,
      imgURL: "./images/k-study/RH-Khwaja-min.jpg",

    },
    {
      id: 23,
      imgURL: "./images/k-study/Saikat-Duttas-workshop-website-banner-min-1.jpg",

    },
    {
      id: 24,
      imgURL: "./images/k-study/Shreeram-Iyer-session-website-banner-min.jpg",

    },
    {
      id: 25,
      imgURL: "./images/k-study/vijay-gokhales-session-website-banner-2.jpg",

    },
    {
      id: 26,
      imgURL: "./images/k-study/viveck1-final-min.jpg",

    },
    {
      id: 27,
      imgURL: "./images/k-study/Web-Banner-min-2.jpg",

    },
    {
      id: 28,
      imgURL: "./images/k-study/Web-Banner-min-3.jpg",

    },
    {
      id: 29,
      imgURL: "./images/k-study/Web-min-2.jpg",

    },
    {
      id: 30,
      imgURL: "./images/k-study/website-min.jpg",

    },
    {
      id: 31,
      imgURL: "./images/k-study/W.jpg",

    },
    {
      id: 32,
      imgURL: "./images/k-study/web-5.jpg",

    },
    {
      id: 33,
      imgURL: "./images/k-study/x.jpg",

    },
    {
      id: 34,
      imgURL: "./images/k-study/p-001-1.jpg",
    },
    // {
    //   id: 35,
    //   imgURL: "./images/k-study/p-002.jpg",
    // },


  ];
  return (
    <>
      <section className='k_study'>

        <Container>
          <Row>
            <Col xl={12}>
              <h2 className='study-kc-heading'> LEARN FROM THE BEST </h2>
            </Col>

          </Row>
        </Container>
      </section>
      <section>

        <Container>
          <Row className='p-3'>
            <Col xl={12}>
              <p className='k_text'>
                We’ve brought in the finest educators and influencers to set you up for success with one of the <b>best public policy curriculum </b>at one of
                the top public policy schools in India. The academics at Kautilya is strengthened by faculties comprising a mix of <b>experienced research scholars and
                  practitioners from eminent institutions like UN, IIM, Harvard, etc.,</b> and from the areas of Economics,
                Public Policy, Political Science, Statistics, Ethics, Leadership, and Communication, Philosophy, Psychology, Law, and many more.
              </p>
            </Col>
            <Col xl={12}>
              {/* <Carousel_slide slider={data} /> */}
              <CarouselSlider slider={kautilyaAdvantageBanner} pagesMpp={page} />
            </Col>
            <Col xl="12">
              <p className='mt-5'>
                Experienced Faculties, Acclaimed Mentors, Experiential Learning, industry-mapped curriculum, Learner-Centric Pedagogy, Simulation-based Knowledge Sharing,
                Delightful Campus Life, and Career Development Support are the key reasons students choose to pursue higher education at Kautilya.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Kautilyaadvantage;