import { Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Tabs_section from "../components/Tabs";
import SimpleSlider from "../components/SlickSlider";
import axios from 'axios'
import TabSection from "../components/TabSection";

function MasterProgram(){

    const page = "master-program";
  
    const [masterProgramdata, setMasterProgramdata] = useState([]);
    const [masterProgramTabsdata, setMasterProgramTabsdata] = useState([]);

    useEffect(() => {
        fetchMasterProgramdata();
        fetchMasterProgramTabsdata();
    }, []);

    const fetchMasterProgramdata = async () => {
        try {
            const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-master-program-data'); // Replace with your actual API endpoint
            setMasterProgramdata(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchMasterProgramTabsdata = async () => {
        try {
            const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-mpp-tabs-data'); // Replace with your actual API endpoint
            setMasterProgramTabsdata(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    // console.log("master Program Data Tabs Live", masterProgramTabsdata);


    // filter for masterProgramdata
    const skillsShop = masterProgramdata?.filter(each => each.category === "10 Skill Shops");
    const coreCourses = masterProgramdata?.filter(each => each.category === "Core Courses");
    const electives = masterProgramdata?.filter(each => each.category === "Electives");

  

 
    // const [masterprogram,change] = useState([
    //     {
    //       id:1,
    //       name : "Curriculum",
    //       description: "<p>Each year consists of three terms.</p><p><b>In the first year</b>, the foundation, core, and elective courses curriculum will expand students’ knowledge of Indian governance and policymaking structures and approaches. Through dedicated skill shops, each public policy student will also learn how to negotiate and persuade, write public speeches and Op-Ed Columns, and communicate verbally and non-verbally in various professional settings.</p><p><b>At the end of the first year</b>,  students can undertake <b> a 3-month internship </b> with an organization of their choice during the summer break.</p><p><b>In the second year</b> of the public policy program, students will deep dive into one of five areas of specialization covering: Business and Government, Environmental, Social and Governance Issues, Technology and Society, Economics for Policy, and Global Affairs.</p><p>Being one of the best Master’s Program in Public Policy (MPP), it culminates in a Master’s Thesis in term 6, based on a <b>Capstone Project (CAP)</b>, undertaken either independently with an organization of your choice or as part of a faculty-led group research project on a current policy issue.</p>",
         
    //     },
    //     {
    //         id:2,
    //       name : "Credit Matrix",
    //       description: "<table class='table table-bordered'><tbody><tr><td width='64'></td><td colspan='4' width='256'><strong>Compulsory Credits</strong></td><td colspan='2' width='128'><strong>Choice Based Credits</strong></td><td width='570'></td></tr><tr><td width='64'></td><td width='64'><strong>Core Courses</strong></td><td width='64'><strong>Internships</strong></td><td width='64'><strong>Capstone</strong></td><td width='64'><strong>Skill Shops</strong></td> <td width='64'><strong>Additional; Credits From Electives</strong></td><td width='64'><strong>Total</strong></td><td width='570'><strong>Remarks</strong></td></tr><tr><td width='64'><strong>Master’s Program in Public Policy (MPP) with specialization</strong></td><td width='64'>45</td><td width='64'>3</td><td width='64'>6</td><td width='64'>10</td><td width='64'>39</td><td width='64'>103*</td><td width='570'>Fulfillment of minimum mandatory 72 credits, 10 skill shops, and 21 additional credits from any of the electives taken from at least one focus area leading to a (separately issued) specialization award.</td></tr> </tbody></table>",
           
    //     },
    //     {
    //         id:3,
    //       name : "Electives",
    //       description: "<table class='table table-bordered elective table-responsive'><tbody><tr><th colspan='9' class='man_tit'>Choice of 13 Electives (39 Credits)</th></tr><tr><td><strong>Business &amp; Government</strong></td><td></td><td><strong>Economics for Policy</strong></td><td></td><td><strong>Environmental, Social and Governance Issues</strong></td><td></td><td><strong>Global Affairs</strong></td><td></td><td><strong>Technology &amp; Society</strong></td> </tr><tr><td>Competition Policy &amp; Economic Regulation*</td><td></td><td>Elements of Econometrics</td><td></td><td>Gender, State &amp; Society*</td><td></td><td>Emerging Security Challenges</td><td></td><td>The City:Urbanization &amp; Planning*</td></tr><tr><td>Interpersonal Dynamics</td><td></td><td>Reforming the Indian Economy*</td><td></td><td>Climate Change &amp; Finance*</td><td></td><td>Emotions in State Behaviour</td><td></td><td>Education &amp; Development</td></tr><tr><td>New Media &amp; Policy Governance*</td><td></td><td>Informal Economy &amp; Social Policy*</td><td></td><td>ESG*</td><td></td><td>Global Public Health*</td><td></td><td>Introduction to Public Problem Solving</td></tr><tr><td>Economic Freedom, Financial Inclusion, &amp; Digital Banking*</td><td></td><td>Big Debates in Development*</td><td></td><td>Climate Litigation*</td><td></td><td>Big Debates in Development*</td><td></td><td>Regulation of AI Technologies*</td></tr><tr><td>Law &amp; Policy of Global Trade*</td><td></td><td>Behavioural Insights for Innovative Policy*</td><td></td><td>Religion, Public Policy &amp; Law*</td><td></td><td>Migration and Refugee Movements</td><td></td><td>Informal Economy &amp; Social Policy*</td></tr></tbody></table> ",
    //     },
    //     {
    //         id:14,
    //       name : "Batch Profile",
    //       description: '',
           
    //     },
        
        
    //   ]);
    //   const data = [
    //     {
    //         id:8,
    //        imgURL : "./images/mpp/sustain.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/Introduction_to_Sustainable_Finance_Ms._Neha_Kumar.pdf',
    //     },
    //     {
    //         id:9,
    //        imgURL : "./images/mpp/7-1.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/Strategic_Thinking_and_Strategic_Planing_Lt.-Langer.pdf',
    //     },
    //     {
    //         id:10,
    //        imgURL : "./images/mpp/6-1.jpg",
    //     },
    //     {
    //         id:1,
    //        imgURL : "./images/mpp/8-2.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/Negotiation_Multiple-Faculty.pdf',
    //     },
    //     {
    //         id:2,
    //        imgURL : "./images/mpp/4-1.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/Public-Policy-for-Climate-Change_Dr.-Aman-Srivastava.docx.pdf',
    //     },
    //     {
    //         id:3,
    //        imgURL : "./images/mpp/9-2.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/Making-Data-Actionable_-Visualizing-Information_Mr.-Rakesh-Dubbudu.pdf',
    //     },
    //     {
    //         id:7,
    //        imgURL : "./images/mpp/5-1.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/International-Trade-Business-Policy_Dr.-Harsha-Vardhana-Singh.pdf',

    //     },
    //     {
    //         id:4,
    //        imgURL : "./images/mpp/10-1.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/Understanding-Financial-Statements_Ankur-Kulshrestha.docx.pdf',

    //     },
    //     {
    //         id:5,
    //        imgURL : "./images/mpp/3-1.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/Media-Communication-and-Policy_Ms.-Smita-Sharma.pdf',
    //     },
    //     {
    //         id:6,
    //        imgURL : "./images/mpp/2-1.jpg",
    //        document: './pdf/MasterProgram/10SkillsShop/Understanding-Gender_Dr.-Vasudha-Katju.docx.pdf',
    //     },
       
    //   ];
    //   const data2 = [
    //     {
    //         id:1,
    //        imgURL : "./images/mpp/courses/1.jpg",
    //        document:"./pdf/MasterProgram/Courses/Foundations-of-Academic-Writing_Dr.-Vasudha-Katju.docx-1.pdf"
    //     },
    //     {
    //         id:9,
    //         imgURL : "./images/mpp/courses/2.jpg",
    //         document:"./pdf/MasterProgram/Courses/Public-Policy-Dissemination-Techniques_Mr.-Pankaj-Pachauri-1.docx.pdf"

    //     },
    //     {
    //         id:10,
    //         imgURL : "./images/mpp/courses/3.jpg",
    //         document:"./pdf/MasterProgram/Courses/Design-Thinking-for-Citizen-Centric-Public-Policy_Dr.-Sharique-Manazir-.docx-1.pdf",
    //     },
    //     {
    //         id:1,
    //         imgURL : "./images/mpp/courses/4.jpg",
    //         document:"./pdf/MasterProgram/Courses/Navigating-The-Field_-Research-Ethics-and-Methods_Multiple-Faculty-2.docx.pdf",

    //     },
    //     // {
    //     //     id:2,
    //     //     imgURL : "./images/mpp/courses/1.jpg",
    //     // },
    //     {
    //         id:3,
    //         imgURL : "./images/mpp/courses/5.jpg",
    //         document:"./pdf/MasterProgram/Courses/Public-Policy_Thought-and-Practice_Multiple-Faculty-1.pdf",

    //     },
    //     {
    //         id:7,
    //         imgURL : "./images/mpp/courses/6.jpg",
    //         document:"./pdf/MasterProgram/Courses/Indian-Constitution_-Supreme-Document-of-Public-Policy_Dr.-Faizan-Mustafa.docx-1.pdf",

    //     },
    //     {
    //         id:4,
    //         imgURL : "./images/mpp/courses/7.jpg",
    //         document:"./pdf/MasterProgram/Courses/India-and-the-World_Dr.-Kanica-Rakhra-.docx-1.pdf",

    //     },
    //     {
    //         id:5,
    //         imgURL : "./images/mpp/courses/8.jpg",
    //         document:"./pdf/MasterProgram/Courses/Public-Policy-Practice-in-India_CRISP.docx.pdf",

    //     },
    //     {
    //         id:6,
    //         imgURL : "./images/mpp/courses/9.jpg",
    //         document:"./pdf/MasterProgram/Courses/Strategizing-Inclusive-Public-Policy-Interventions_Dr.-Faizan-Mustafa.docx-1.pdf"
    //     },
    //     {
    //         id:11,
    //         imgURL : "./images/mpp/courses/10.jpg",
    //         document:"./pdf/MasterProgram/Courses/Microeconomcis-For-Policy_Dr.-Parikshit-Ghosh-1.pdf",
    //     }, {
    //         id:12,
    //         imgURL : "./images/mpp/courses/11.jpg",
    //         document:"./pdf/MasterProgram/Courses/Macroeconomics-for-Policy_Dr.-Amrendra-Pandey-1.pdf",
    //     }, {
          
    //         id:13,
    //         imgURL : "./images/mpp/courses/12.jpg",
    //         document:"./pdf/MasterProgram/Courses/Fundamentals-of-Finance_Multiple-Faculty-2.docx.pdf",
    //     }, {
    //         id:14,
    //         imgURL : "./images/mpp/courses/13.jpg",
    //      document:"./pdf/MasterProgram/Courses/Business-Government-and-Society_Dr.-Rajeev-Gowda-1.pdf"
    //     }, {
    //         id:15,
    //         imgURL : "./images/mpp/courses/14.jpg",
    //         document:"./pdf/MasterProgram/Courses/Statistics-for-Public-Policy_Dr.-Vishnu-S-Pillai.docx-1.pdf"
    //     }, {
    //         id:16,
    //         imgURL : "./images/mpp/courses/15.jpg",
    //         document:"./pdf/MasterProgram/Courses/Leaders-and-Leadership-in-History_Prof.-Moshik-Temkin.docx-1.pdf"
    //     },
       
    //   ];
    //   const data3 = [
    //     {
    //         id:1,
    //        imgURL : "./images/mpp/elective/1.jpg",
    //        document:"./pdf/MasterProgram/Electives/Behavioural-Insights-for-Innovative-Policy_Multiple-Faculty.pdf"
    //     },
    //     {
    //         id:2,
    //         imgURL : "./images/mpp/elective/2.jpg",
    //         document:"./pdf/MasterProgram/Electives/Big-Debates-in-Development_Dr.-Indermit-Gill-.docx.pdf"
    //     },
    //     {
    //         id:3,
    //         imgURL : "./images/mpp/elective/3.jpg",
    //         document:"./pdf/MasterProgram/Electives/Climate-Change-Finance_Multiple-Faculty.docx.pdf"

    //     },
    //     {
    //         id:4,
    //         imgURL : "./images/mpp/elective/4.jpg",
    //         document:"./pdf/MasterProgram/Electives/Climate-change-Litigation_Dr.-Judith-Spiegel.pdf"

    //     },
       
    //     {
    //         id:5,
    //         imgURL : "./images/mpp/elective/5.jpg",
    //         document:"./pdf/MasterProgram/Electives/Competition-Policy-and-Economic-Regulation_-Dr.Usha-Ramachandra.docx.pdf"

    //     },
    //     {
    //         id:6,
    //         imgURL : "./images/mpp/elective/6.jpg",
    //         document:"./pdf/MasterProgram/Electives/Education-and-Development_Prof.-Jandhyala-Tilak.pdf"

    //     },
    //     {
    //         id:7,
    //         imgURL : "./images/mpp/elective/7.jpg",
    //         document:"./pdf/MasterProgram/Electives/Economic-Freedom-Financial-Inclusion-Digital-Banking_Dr.-Srinivas-Yanamandra.docx.pdf"

    //     },
    //     {
    //         id:8,
    //         imgURL : "./images/mpp/elective/8.jpg",
    //         document:"./pdf/MasterProgram/Electives/Elements-of-Econometrics_Dr.-Amrendra-Pandey.pdf"

    //     },
    //     {
    //         id:9,
    //         imgURL : "./images/mpp/elective/9.jpg",
    //         document:"./pdf/MasterProgram/Electives/Emerging-Security-Challenges_Amb.-D.B.-Venkatesh-Varma.docx.pdf"

    //     },
    //     {
    //         id:10,
    //         imgURL : "./images/mpp/elective/10.jpg",
    //         document:"./pdf/MasterProgram/Electives/Global-Public-Health_Multiple-Faculty-2.docx.pdf"

    //     }, {
    //         id:11,
    //         imgURL : "./images/mpp/elective/11.jpg",
    //         document:"./pdf/MasterProgram/Electives/Informal-Economy-Social-Policy_Dr.-Amir-Ullah-Khan-.pdf"

    //     }, {
    //         id:12,
    //         imgURL : "./images/mpp/elective/12.jpg",
    //         document:"./pdf/MasterProgram/Electives/Interpersonal-Dynamics_Dr.-Garry-A.-Dexter.docx.pdf"

    //     }, {
    //         id:13,
    //         imgURL : "./images/mpp/elective/13.jpg",
    //         document:"./pdf/MasterProgram/Electives/Introduction-to-Public-Problem-Solving_Multiple-Faculty-.docx.pdf"

    //     }, {
    //         id:14,
    //         imgURL : "./images/mpp/elective/14.jpg",
    //         document:"./pdf/MasterProgram/Electives/Law-Policy-of-Global-Trade_Dr.-Judith-Spiegel.docx.pdf"

    //     }, {
    //         id:15,
    //         imgURL : "./images/mpp/elective/15.jpg",
    //         document:"./pdf/MasterProgram/Electives/New-Media-and-Policy-Governance_Ms.-Smita-Sharma.docx.pdf"

    //     },
    //     {
    //         id:16,
    //         imgURL : "./images/mpp/elective/16.jpg",
    //         document:"./pdf/MasterProgram/Electives/Reforming-The-Indian-Economy_Multiple-Faculty.docx.pdf"

    //     }, {
    //         id:17,
    //         imgURL : "./images/mpp/elective/17.jpg",
    //         document:"./pdf/MasterProgram/Electives/Religion-Public-Policy-and-Law_Dr.-Faizan-Mustafa.docx.pdf"

    //     }, {
    //         id:18,
    //         imgURL : "./images/mpp/elective/18.jpg",
    //         document:"./pdf/MasterProgram/Electives/The-City_-Dr.-Anjali-Mohan.docx.pdf"

    //     }, {
    //         id:19,
    //         imgURL : "./images/mpp/elective/19.jpg",
    //         document:"./pdf/MasterProgram/Electives/Emotions-in-State-Behaviour_Dr.-Kanica-Rakhra.docx.pdf"

    //     }, {
    //         id:20,
    //         imgURL : "./images/mpp/elective/20.jpg",
    //         document:"./pdf/MasterProgram/Electives/Environmental-Social-and-Governance-ESG_Multiple-Faculty.docx.pdf"

    //     }, {
    //         id:21,
    //         imgURL : "./images/mpp/elective/21.jpg",
    //         document:"./pdf/MasterProgram/Electives/Gender-State-and-Society_Dr.-Vasudha-Katju-.docx.pdf"

    //     }
    //   ];
    return(
        <>
       
            <section className="banner_bg mpp">
            <Container>
                <Row>
                    <Col md={7}>
                    <div className="banner_text p-3">
                            <h1>
                            Master's Program in Public Policy (MPP)
                            </h1>
                            <p className="text-white mt-4">Kautilya offers a 2-year, full-time residential Master’s Program in Public Policy (MPP)*,
                                a 103-credit program with a curriculum designed to expand knowledge, enhance skills, instill values,
                                and embrace an international pedagogical and public policy research outlook while engaging with the ground realities of India and its citizens.
                                Being one of the 
                                best public policy programs it aims to bring together students from diverse disciplines and allow time to internalize and apply key public policy concepts.
                                </p>
                    </div>
                    </Col>
                </Row>
            </Container>
            </section>

           
        
        <section>
                <Container>
                    <Row>
                        <Col xl="12">
                          <a className="btn btn-success" href="./pdf/Admissions-Brochure_Web.pdf" target="_blank">
                            <i className="fas fa-arrow-alt-circle-down"></i> DOWNLOAD BROCHURE
                            </a>
                        </Col>
                        <Col xl={12}>
                            <img src="./images/mpp/path.jpg" className="img-fluid" alt="image mpp" />
                        </Col>
                    </Row>
                </Container>
        </section>
        
        <section className="section_bg">
  <Container>
    <Row>
        <Col xl={12}>
            <p>
            Bridging the gap between the industry requirements and academic curriculum at the master’s level through targeted 
            skill development programs taught by practitioners.
            </p>
        </Col>
        <Col xl={12} className="mt-4">
            {/* <Tabs_section phd={masterprogram} /> */}
            <TabSection phd={masterProgramTabsdata} page={page} />
        </Col>
      
    </Row>
  </Container>
        </section>
        <section className="credits">
            <Container>
                <Row>
                <Col xl={12} className="mt-5">
                    <h3> 10 Skill Shops (10 Credits)</h3>
                    <p>
                    Kautilya offers a range of core and elective courses and provides practical skills training through dedicated skills shops.
                    The table underneath contains an indicative term-wise outlay of the courses for the 1st two years:
                    </p>
                </Col>

                <Col xl={12} className="mt-5 mb-5">
                <SimpleSlider sliderdata={skillsShop} page={page} />
                </Col>
              
                </Row>
            </Container>
        </section>

        <section className="credits section_bg">
            <Container>
                <Row>
                <Col xl={12} className="">
                    <h3> Core Courses  </h3>
                   
                </Col>

                <Col xl={12} className="mt-5 mb-5">
                <SimpleSlider sliderdata={coreCourses} page={page} />
                </Col>
              
                </Row>
            </Container>
        </section>
        <section className="credits">
            <Container>
                <Row>
                <Col xl={12} className="">
                    <h3> Electives </h3>
                   
                </Col>

                <Col xl={12} className="mt-5 mb-5">
                <SimpleSlider sliderdata={electives} page={page} />
                </Col>
                <Col xl="12">
                <p>*Pending approval from the <a href="https://www.ugc.gov.in/" target="_blank" className="mpp_anchor">UGC</a>, for conferring the degree of our preferred nomenclature of MPP, we may, in lieu, use M.A (Public Policy).</p>
                </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default MasterProgram;