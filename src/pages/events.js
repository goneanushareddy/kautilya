import {useEffect, useState} from 'react'
import axios from 'axios';
import { Col, Container, Row } from "react-bootstrap";

import EventSlider from "../components/EventSlider";
import NewsSlider from "../components/newsSlider";
function Events(){
    
//     const [eventsSliderData, setEventsSliderData] = useState([]);

//     useEffect(() => {
//         fetcheventsSliderData();
//   }, []);
//     const fetcheventsSliderData = async () => {
//       try {
//         const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-events-slider-data'); // Replace with your actual API endpoint
//         setEventsSliderData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
  



    const slider = [
        {
            id:10,
           imgURL : "./images/events/governance_excellence_initiative_thumb.jpg",
           title: '"Governance Excellence Initiative"',
           time: "",
           url: "governance-excellence-initiative"
        },
        {
            id:9,
           imgURL : "./images/events/colluquy_thumb.jpeg",
           title: '"Inclusive Policies for India"',
           time: " Last date for Research abstract submission",
           url: "kautilya-colloquy-2024"
        },
        
        {
            id:8,
           imgURL : "./images/events/ppforpg_thumb.jpg",
           title: '"Equity in Times of Growth A Pathway for India"',
           time: " Registration Closes on 20th August 2023",
           url: "public-policy-for-public-good"
        },
        {
            id:7,
           imgURL : "./images/events/Colluquy/newIndia/Thumbnail-1.jpg",
           title: '"Policymaking for New India: A Journey from Ideation to Impact"',
           time: " Registration Closes on 22nd March 2023",
           url: "policymaking-for-new-india"
        },
        {
            id:1,
           imgURL : "./images/events/1.jpg",
           title: '"Equity in Times of Growth A Pathway for India"',
           time: " Registration Closes on 20th August 2023",
           url: "kautilya-colloquy"
        },
        {
            id:2,
           imgURL : "./images/events/2.jpg",
           title: '"Strengthen your MPP application with expert guidance"',
           time: " 7:30 PM IST (Via Zoom) | 11th July 2023",
           url:"strengthen-your-mpp-application-with-expert-guidance"
        },
        {
            id:3,
           imgURL : "./images/events/3.jpg",
           title: '""Interact with our alumni and co-founder""',
           time: "7:30 PM to 8:30 PM IST | 16th June 2023 ",
           url:"interact-with-our-alumni-and-co-founder"
        },
        {
            id:4,
           imgURL : "./images/events/4.jpg",
           title: '"The 2-year route to mastering public policy"',
           time: "  7:00 PM to 8:30 PM IST | 1st June 2023",
           url:"the-2-year-route-to-mastering-public-policy"
        },
        
        {
            id:5,
           imgURL : "./images/events/5.jpg",
           title: '"Get started on your public policy career"',
           time: "  7:00 PM to 8:30 PM IST | 19th May 2023",
           url:"emerging-opportunities-in-public-policy"
        },
        {
            id:6,
           imgURL : "./images/events/6.jpg",
           title: '"Get started on your public policy career"',
           time: "  7:00 PM to 8:30 PM IST | 19th May 2023",
           url:"kautilya-school-of-public-policy-info-session-delhi-2023"
        },
        
        
       
      ];
      const slider2 = [
        {
            id:1,
           imgURL : "./images/events/policy_series/1.jpg",
           heading : "Let's Talk Policy",
           title: '"Brave New World:Public Policy and AI"',
           time: " 7:30 PM to 8:30 PM IST | 17th November 2023",
           url:"brave-new-world-public-policy-and-ai"
        },   
        {
            id:2,
           imgURL : "./images/events/policy_series/2.jpg",
           heading : "Let's Talk Policy",
           title: ' "Children are our Future: A post-pandemic view of educational opportunities and challenges in India" ',
           time: " 7:30 PM to 8:30 PM IST | 27th September 2023 ",
           url:"children-are-our-future"
        }, 
        {
            id:3,
           imgURL : "./images/events/policy_series/3.jpg",
           heading : "Let's Talk Policy",
           title: ' "Accelerating Climate Transition in India: Opportunities & Challenges at a time of Global Boiling" ',
           time: " 7:30 PM to 8:30 PM IST | 25th August 2023 ",
           url:"accelerating-climate-transition-in-india"
        },  
        {
            id:4,
           imgURL : "./images/events/policy_series/4.jpg",
           heading : "Let's Talk Policy",
           title: ' "From Nuclear Deal to Critical Tech – The New Chapter in India-US Ties" ',
           time: " 7:00 pm to 8:00 pm IST | 27th July 2023 ",
           url:"from-nuclear-deal-to-critical-tech"
        },  
        {
            id:5,
           imgURL : "./images/events/policy_series/5.jpg",
           heading : "Let's Talk Policy",
           title: '"Economic Outlook for India – Opportunities and Challenges"',
           time: " 7:30 pm IST | 13th July 2023 ",
           url:"economic-outlook-for-india-opportunities-and-challenges"
        },  
        {
            id:6,
           imgURL : "./images/events/policy_series/6.jpg",
           heading : "Let's Talk Policy",
           title: 'A masters playbook on incubating public policy excellence ',
           time: " 7:30 pm IST | 27th June2023 ",
           url:"a-masters-playbook-on-incubating-public-policy-excellence"
        },      
        {
            id:7,
           imgURL : "./images/events/policy_series/7.jpg",
           heading : "Let's Talk Policy",
           title: '"Indian Railways - Safety and Modernization Challenges"',
           time: " 7:00 pm – 8:00 pm IST | 21st June2023 ",
           url:"indian-railways-safety-and-modernization-challenges"
        },  
        {
            id:8,
           imgURL : "./images/events/policy_series/8.jpg",
           heading : "Let's Talk Policy",
           title: '"The Pakistan Conundrum and Imran Khan Challenge"',
           time: " 7:00 pm – 8:00 pm IST | 26th May 2023 ",
           url:"the-pakistan-conundrum-and-imran-khan-challenge"
        },  
        {
            id:9,
           imgURL : "./images/events/policy_series/9.jpg",
           heading : "Let's Talk Policy",
           title: '"Are we really ready for artificial intelligence?"',
           time: " 7:00 pm – 8:00 pm IST | 4th May 2023 ",
           url:"are-we-really-ready-for-artificial-intelligence"
        },  
        {
            id:10,
           imgURL : "./images/events/policy_series/10.jpg",
           heading : "Let's Talk Policy",
           title: ' "How can we increase the number of women in the workforce?"',
           time: " 7:00 pm – 8:00 pm IST | 30th March 2023 ",
           url:"how-can-we-increase-the-number-of-women-in-the-workforce"
        },  
        {
            id:11,
           imgURL : "./images/events/policy_series/11.jpg",
           heading : "Let's Talk Policy",
           title: ' "Budget 2023 – Reading the fine print" ',
           time: " 7:00 pm – 8:00 pm IST | 28th February 2023 ",
           url:"budget-2023-reading-the-fine-print"
        },  
        {
            id:12,
           imgURL : "./images/events/policy_series/12.jpg",
           heading : "Let's Talk Policy",
           title: '"What do you need for a Master in Public Policy?"',
           time: " 05:00 pm – 6:30 pm IST | 5th February 2023 ",
           url:"what-do-you-need-for-a-master-in-public-policy"
        },  
        {
            id:13,
           imgURL : "./images/events/policy_series/13.jpg",
           heading : "Let's Talk Policy",
           title: '"Can India Unite a Divided G20?"',
           time: " 07:00 pm – 8:00 pm IST | 24th January 2023 ",
           url:"can-india-unite-a-divided-g20"
        },  
        {
            id:14,
           imgURL : "./images/events/policy_series/14.jpg",
           heading : "Let's Talk Policy",
           title: '"Data Protection Bill 2022 Unpacking the Revised Law" ',
           time: " 07:00 pm – 8:00 pm IST | December 21, 2022 ",
           url:"data-protection-bill-2022-unpacking-the-revised-law"
        },  
        {
            id:15,
           imgURL : "./images/events/policy_series/15.jpg",
           heading : "Let's Talk Policy",
           title: '"Decrypting Crypto- How Should India Regulate Cryptocurrency?"',
           time: " 7:00 P.M - 8:00 P.M | November 21st ",
           url:"decrypting-crypto-how-should-india-regulate-cryptocurrency"
        },  
        {
            id:31,
           imgURL : "./images/events/policy_series/15.jpg",
           heading : "Let's Talk Policy",
           title: '"Political campaigns in India-Can they shape up narratives for 2024 ?"',
           time: " 13th Sep 2022 | 7:00 P.M - 8:00 P.M ",
           url:"political-campaigns-in-india-can-they-shape-up-narratives-for-2024"
        },  
        {
            id:16,
           imgURL : "./images/events/policy_series/16.jpg",
           heading : "Let's Talk Policy",
           title: '"5G In India - Aspirations, & Challenges"',
           time: " 24th August 2022 | 6:00 P.M - 7:00 P.M",
           url:"5g-in-india-aspirations-challenges"
        },  
        {
            id:17,
           imgURL : "./images/events/policy_series/17.jpg",
           heading : "Let's Talk Policy",
           title: '"The State of the Indian Economy and Inflation"',
           time: " 1st July, 2022 | 07:00 pm – 8:00 pm",
           url:"the-state-of-the-indian-economy-and-inflation"
        },  

        {
            id:18,
           imgURL : "./images/events/policy_series/18.jpg",
           heading : "Panel Discussion",
           title: '"Growing demand for policy & political communication experts"',
           time: " 25th June, 2022 | 11:00am – 12:00pm ",
           url:"growing-demand-for-policy-political-communication-experts"
        },  
        {
            id:19,
           imgURL : "./images/events/policy_series/19.jpg",
           heading : "Panel Discussion",
           title: '"Building a Career in a Multilateral Organization"',
           time: " 3rd June, 2022 | 07:00pm – 08:00pm ",
           url:"building-a-career-in-a-multilateral-organization"
        },  

        {
            id:20,
           imgURL : "./images/events/policy_series/20.jpg",
           heading : "Panel Discussion",
           title: '"Mental Health Crisis in India & Suicide Prevention"',
           time: " 10th of May, 2022, 07:00 to 08:00 pm ",
           url:"mental-health-crisis-in-india-suicide-prevention"
        },  
        {
            id:21,
           imgURL : "./images/events/policy_series/21.jpg",
           heading : "Panel Discussion",
           title: '"Fitness and Health Policy Challenges Post Pandemic"',
           time: " 20th of April, 2022, 07:30 pm to 08:30 pm ",
           url:"fitness-and-health-policy-challenges-post-pandemic"
        },  

        {
            id:22,
           imgURL : "./images/events/policy_series/22.jpg",
           heading : "Panel Discussion",
           title: '"Understanding Russia - Ukraine Crisis"',
           time: "March 9th, 2022, 07:00 pm to 08:00 pm IST ",
           url:"understanding-russia-ukraine-crisis"
        },  
        {
            id:23,
           imgURL : "./images/events/policy_series/23.jpg",
           heading : "Panel Discussion",
           title: '"How to Build an Impactful Career in Public Policy"',
           time: " February 10th, 2022 07:00 pm to 08:00 pm IST ",
           url:"how-to-build-an-impactful-career-in-public-policy"
        },  
        {
            id:24,
           imgURL : "./images/events/policy_series/24.jpg",
           heading : "Panel Discussion",
           title: '"Careers in Public Policy"',
           time: " December 17th, 07:00 pm to 08:00 pm IST ",
           url:"career-in-public-policy"
        },  
        {
            id:25,
           imgURL : "./images/events/policy_series/25.jpg",
           heading : "Panel Discussion",
           title: '"Are Cryptocurrencies Viable?"',
           time: " December 14th, 06:00 pm to 07:00 pm IST ",
           url:"are-cryptocurrencies-viable"
        },  
        {
            id:26,
           imgURL : "./images/events/policy_series/26.jpg",
           heading : "Panel Discussion",
           title: '"India s Cyber Security Challenge - How can we fight back?"',
           time: " November 25, 07:00 pm to 08:00 pm IST ",
           url:"25-november-lets-talk-policy"
        },  
        {
            id:27,
           imgURL : "./images/events/policy_series/11octletstalk.jpg",
           heading : "Panel Discussion",
           title: '"The Indian Story New W.H.O norms on Air Quality"',
           time: "October 11, 07:00 PM IST",
           url:"11-october-lets-talk-policy"
        }, 
        {
            id:28,
           imgURL : "./images/events/policy_series/27.jpg",
           heading : "Panel Discussion",
           title: '“India’s Economic Recovery Roadmap”',
           time: " September 18, 06:00 PM IST",
           url:"18-september-lets-talk-policy"
        }, 
        {
            id:29,
           imgURL : "./images/events/policy_series/28.jpg",
           heading : "Panel Discussion",
           title: 'Should India do business with the Taliban?"',
           time: " ",
           url:"4-sep-lets-talk-policy"
        }, 
        {
            id:30,
           imgURL : "./images/events/policy_series/29.jpg",
           heading : "Panel Discussion",
           title: ' "How can research and innovation.." ',
           time: " August 3, 06:00 PM IST ",
           url:"august-3-lets-talk-policy"
        },  
        
        
       
      ];

      const slider3 = [
        {
            id:1,
           imgURL : "./images/events/news/1.jpg",
           title: '"Why most of the people pictured trying to flee Kabul airport ....."',
           time: " ",
           url: "https://timesofindia.indiatimes.com/spotlight/kautilya-school-of-public-policy-sets-an-example-of-how-quality-infrastructure-can-elevate-the-learning-process/articleshow/83305889.cms?utm_source=facebook.com&utm_medium=social&utm_campaign=TOI&fbclid=IwAR2uMTa7R13aa116k60Z2BxUSzTrwoUvYZS2ir7F_LT8eohr5O1qY008yog&from=mdr"
        }, 
        {
            id:2,
           imgURL : "./images/events/news/2.jpg",
           title: 'Afghanistan: What Taliban takeover means for the region.',
           time: " ",
           url: "https://www.dw.com/en/afghanistan-what-taliban-takeover-means-for-the-region/a-58909723" 
        }, 
        {
            id:3,
           imgURL : "./images/events/news/3.jpg",
           title: 'In Afghanistan, how India missed the bus .....',
           time: " ",
           url: "https://www.hindustantimes.com/opinion/in-afghanistan-how-india-missed-the-bus-101626793295492.html" 
        }, 
        {
            id:4,
           imgURL : "./images/events/news/4.png",
           title: 'They made it to college. Despite all odds. But pandemic apathy is .....',
           time: " ",
           url: "https://scroll.in/article/990704/they-made-it-to-college-despite-all-odds-but-pandemic-apathy-is-making-adivasi-students-drop-out" 
        }, 
        {
            id:5,
           imgURL : "./images/events/news/5.jpg",
           title: 'KSPP: An example of how quality infrastructure can elevate',
           time: " ",
           url: "https://timesofindia.indiatimes.com/spotlight/kautilya-school-of-public-policy-sets-an-example-of-how-quality-infrastructure-can-elevate-the-learning-process/articleshow/83305889.cms?utm_source=facebook.com&utm_medium=social&utm_campaign=TOI&fbclid=IwAR2uMTa7R13aa116k60Z2BxUSzTrwoUvYZS2ir7F_LT8eohr5O1qY008yog&from=mdr"
               }, 
               {
                id:6,
               imgURL : "./images/events/news/6.jpg",
               title: 'Should retired officials be barred from disclosing information?',
               time: " ",
               url: "https://timesofindia.indiatimes.com/spotlight/kautilya-school-of-public-policy-sets-an-example-of-how-quality-infrastructure-can-elevate-the-learning-process/articleshow/83305889.cms?utm_source=facebook.com&utm_medium=social&utm_campaign=TOI&fbclid=IwAR2uMTa7R13aa116k60Z2BxUSzTrwoUvYZS2ir7F_LT8eohr5O1qY008yog&from=mdr"
            }, 

      ];
    return(
        <div className="event_slider_width">
        <section>
            <Container>
                <Row>
                    <Col xl={12} className="mt-5">
                        <h1 className="events-headings">
                        Events
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                    <EventSlider sliderdata={slider}/>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h1 className="events-headings">
                        Let's Talk Policy Series
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                   
                    <EventSlider sliderdata={slider2} />
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h1 className="events-headings">
                        News & Updates
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                    <NewsSlider sliderdata={slider3}/>
                    </Col>
                </Row>
            </Container>
        </section>
       
        </div>
    );
}
export default Events;