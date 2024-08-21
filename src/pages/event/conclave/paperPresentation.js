import { Col, Container, Row } from "react-bootstrap";

import Jury from "../../../components/Jury";
import { useState } from 'react';

function PaperPresentation() {

    const [facultydata, change] = useState([
        {
            id: 1,
            imgURL: "./images/events/paperpresentation/jury/1.png",
            name: "Dr. Anant Maringanti",
            description: "<p>Dr. Anant Maringanti is an urban expert, writer and teacher based in Hyderabad. He heads the Hyderabad Urban Lab Foundation (HUL), a think tank committed to developing urban solutions sensitive to local contexts. Since 2012, HUL has produced research on a number of policy relevant areas and gained international reputation as a thought leader in urban development in the global south. Their work spans across urban infrastructure, housing and community development. HUL is an advocate of small public infrastructures in rapidly growing cities like Hyderabad. In this regard, HUL entered into a MOU with the Government of Telangana to run Low Cost Action Lab. The aim is to position Hyderabad and Telangana in international urban research and action.</p>"


        },

        {
            id: 2,
            imgURL: "./images/events/paperpresentation/jury/2.png",
            name: "Dr. Amir Ullah Khan",
            description: `
            <p class="k-p kp-desc" style="text-align: justify;">Amir Ullah Khan is a former civil servant and now works as an advisor to the Sahayata Trust, Research Director at the Centre for Development Policy and Practice, and Adjunct Professor of Economics at the Tata Institute of Social Science, MCR Human Resource Development Institute of the Government of Telangana and the Manipal Institute of Technology. He is visiting faculty at ISB and at NALSAR.</p>
            <p class="k-p kp-desc" style="text-align: justify;">Amir has been Director at the Bill and Melinda Gates Foundation, the India Development Foundation, and Encyclopedia Britannica. Amir studied at the Engineering College at Osmania University, the Institute of Rural Management at Anand, and Jamia Millia Central University where he got his PhD for his work on India’s IPR policy. Amir is a columnist with the LiveMint and Deccan Herald.</p>
            `
        },

        {
            id: 3,
            imgURL: "./images/events/paperpresentation/jury/3.png",
            name: "Ms. Sharmila Chavaly",
            description: `
            <p class="k-p kp-desc">Having just completed her tenure as Advisor, National Institute of Smart Governmen (NISG), Sharmila Chavaly is currently Advisor, Climate Policy Initiative (India chapter). In over three and a half decades as a civil servant, she has worked in various capacities in the Ministries of Railways and Finance in the Government of India, including as Joint Secretary (Infrastructure) at the Department of Economic Affairs, where she was in charge of setting up InvITs, revamped REITs &amp; Municipal Bonds, Infrastructure Credit Rating Scale, the Credit Enhancement Fund, etc. She was Member Secretary of the Committee for Revitalising PPPs.</p>
            <p class="k-p kp-desc">She has served as Director on the Boards of the OVL, IIFCL and IRFC and as India’s representative on the G-20’s Infrastructure Working Group.</p>
            <p class="k-p kp-desc">Her areas of expertise include Infrastructure Finance, PPPs, Sustainable Finance, Foreign Exchange management and multilateral negotiations.</p>
            
            `
        },

        {
            id: 4,
            imgURL: "./images/events/paperpresentation/jury/4.png",
            name: "Ms. Srividya Reddy",
            description: `
            <p class="k-p kp-desc">Ms. Srividya Reddy Gunampalli, Vice-Chairperson of G Pulla Reddy Charities Trust holds a Graduate degree in Engineering from JNTU, an MBA from ICFAI, one of the pioneers in management education, and holds a leadership certification from University of Pennsylvania. She leads a multi-faceted life as an educationist, entrepreneur and community volunteer while being actively associated with the G. Pulla Reddy Charities Trust for over two decades now.</p>
            <p class="k-p kp-desc">Ms. Srividya Reddy proactively involves herself with the constituent educational institutions under the GPR Charities Trust in formulating and managing the overall strategies and operations. The Trust currently has 5 technical institutions offering higher educational studies and 5 high schools under its wing. Her contribution to the education sector extends in her participating in several technical education policy-making committees organized by the Ministry of Human Resource Development, Government of India.</p>
            
            `
        },


    ]);
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h3 className="text-start  mt-4 mb-4">EVENT 1: Paper Presentation</h3>
                        </Col>

                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>TOPIC: Equity in Times of Growth- A Pathway for India</h4>
                            </div>





                            <p>The Kautilya School of Public Policy (KSPP) proudly announces the inaugural edition of the national-level research paper presentation competition, exclusively tailored for post-graduate students. The purpose of this event is to explore the critical intersection between economic development and the imperative of ensuring equitable outcomes for all. It provides an opportunity for curious individuals from institutions across the nation to employ a research-centered approach in exploring and assessing policy issues situated at the convergence of business, government, and society. With a special focus on the significance of equity in the times of growth, participants will examine how policy advancement can be leveraged to ensure fair and inclusive outcomes for all segments of society.</p>
                            <p >KSPP is excited to offer a platform for budding researchers to showcase their research ideas and findings to a diverse team of internal experts as well as visiting scholars committed to interdisciplinary public policy research, teaching, and engagement addressing topics such as public administration, law, gender, environment, education, social engineering, migration, human rights, media, information society, conflict resolution, transitional justice, business, and good governance.</p>
                            <p >The entries are invited under the broad topic of ‘Equity in Times of Growth- A Pathway for India,’ further aligned along the following sub-themes:</p>
                            <ol className="mt-2 ms-4">
                                <li>Government and Business</li>
                                <li>Human Rights, Law, and Democracy</li>
                                <li>Economics for Development</li>
                                <li>Governance and Society</li>
                                <li>International Relations</li>
                            </ol>


                        </Col>

                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>Jury</h4>
                            </div>


                            <Jury faculty={facultydata} popup={true} />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>Prizes and Awards:</h4>
                            </div>
                            <table className="table_style  w-50 mx-auto">
                                <thead>
                                    <tr>
                                        <th>Award Name</th>
                                        <th>Award Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1st Prize</td>
                                        <td>Rs 30,000</td>
                                    </tr>
                                    <tr>
                                        <td>2nd Prize</td>
                                        <td>Rs 20,000</td>
                                    </tr>
                                </tbody>
                            </table>

                        </Col>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>General Guidelines:</h4>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <ol>
                                <li>The event welcomes all undergrad and postgrad students and extends a special invitation to working professionals as well.</li>
                                <li>Each paper can be co-authored by a maximum of 3 authors.</li>
                                <li>Each team must pay a non-refundable registration fee at the time of registration and share the payment receipt at <a href="mailto:kc@kautilya.org.in">kc@kautilya.org.in</a>. The registration will be confirmed upon receiving the evidence of payment.</li>
                                <li>Entrants must be available for the final in-person presentation scheduled on 23rd September 2023 at Kautilya School of Public Policy, Hyderabad.</li>
                                <li>All papers must be relevant to at least one of the five themes indicated above.</li>
                                <li>Every paper submitted will undergo a blind review process, ensuring that they are evaluated based on criteria such as quality, originality, and relevance.</li>
                                <li>Any participants found engaging in unethical behavior, including but not limited to plagiarism or academic dishonesty, will face disqualification from the competition.</li>
                                <li>All electronic submissions must be submitted online by the applicable deadline. Late entries will not be accepted.</li>
                                <li>Any submission that does not follow the formatting or submission requirements will not be considered for acceptance in the competition.</li>
                                <li>All pre-conference submissions must be submitted online at <a href="mailto:kc@kautilya.org.in">kc@kautilya.org.in</a>. Late entries will not be accepted.</li>
                                <li>All participants will be provided with e–certificates.</li>
                                <li>The top two entries in the competition shall be awarded cash prizes.</li>
                            </ol>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>Important Dates:</h4>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <table class="table-bordered table_left mx-auto">
                                <tbody>
                                    <tr>
                                        <th>Registration Deadline</th>
                                        <td>31st August 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Abstract Submission Deadline</th>
                                        <td>5th September 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Shortlisted Candidates Shall be notified by</th>
                                        <td>10th September 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Final Paper Submission</th>
                                        <td>17th September 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Final PPT Submission</th>
                                        <td>20th September 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Final Paper Presentation</th>
                                        <td>23rd September 2023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>Submission Guidelines:</h4>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <h5 className="bold mt-3 mb-3">For Abstract:</h5>
                            <ul className="paper_presentation_ul">
                                <li>The word limit for the abstract is 450-500 words.</li>
                                <li>The abstract should report the objective of the study, the research problem, the method &amp; methodology, along with the outcomes obtained or expected from the study.</li>
                                <li>The abstract is to be submitted by 5th September 2023, 11:59 PM. The organizing committee will respond to the abstract selected by 10th September 2023.</li>
                                <li>If your abstract is approved, you must submit your final paper by 17th September 2023, 11:59 PM, using the same id provided during registration.</li>
                            </ul>
                        </Col>
                        <Col xl={12}>
                            <h5 className="bold mt-3 mb-3">For Paper:</h5>
                            <ul className="paper_presentation_ul">
                                <li>Co-authorship of the papers is allowed, and the maximum number of co-authors permitted is 3.</li>
                                <li>Only theme-based papers are accepted.</li>
                                <li>The paper should adhere to a word limit of 4500-5000 words (excluding charts, tables, pictures, and bibliography).</li>
                                <li>Ensure plagiarism, if any, is not more than 10% (excluding bibliography). It is the duty of the author/s to ensure originality before the submission. Papers that exceed the 10% mandate shall be subject to disqualification.</li>
                                <li>The final paper is to be submitted by 17th September 2023, 11:59 PM.</li>
                            </ul>
                        </Col>
                        <Col xl={12}>
                            <h5 className="bold mt-3 mb-3">The text must meet the following guidelines:</h5>
                            <ul className="paper_presentation_ul">
                                <li>Font style: Times New Roman</li>
                                <li>Font size: 12 pt, double spaced</li>
                                <li>Citation style: APA 7th edition (any images, charts, tables, or figures from external sources must be cited)</li>
                            </ul>
                        </Col>
                        <Col xl={12}>
                            <h5 className="bold mt-3 mb-3">The paper should follow the subsequent structure:</h5>
                            <ol className="paper_presentation_ol">
                                <li>Abstract</li>
                                <li>Introduction</li>
                                <li>Literature review</li>
                                <li>Problem statement</li>
                                <li>Objective &amp; scope</li>
                                <li>Methodology</li>
                                <li>Results &amp; analysis</li>
                                <li>Conclusion</li>
                                <li>References</li>
                            </ol>

                            <p class="mt-5"><strong>Note:</strong> The provided outline serves as a flexible framework rather than a rigid structure. It offers general guidelines
                                to help direct your research towards the main topics and questions to be addressed while allowing for adaptability and exploration.</p>
                        </Col>

                        <Col xl={12}>
                            <h5 className="bold mt-3 mb-3">Presentation Guidelines:</h5>

                            <ul className="paper_presentation_ul">
                                <li>Please ensure that the total number of slides does not surpass 10.</li>
                                <li>The allocated time for the presentation is 20 minutes, followed by a 10-minute question and answer session with the jury/audience.</li>
                                <li>The evaluation criteria encompass the quality of content, oral presentation, and active engagement in open discussions with the jury.</li>
                                <li>The presentation will be made and presented using PowerPoint.</li>
                                <li>In the case of co-authorship, all of the participants must present.</li>
                                <li>Kindly submit your presentation by 11:59 PM on September 20, 2023. Failure to do so will result in the cancellation of your participation.</li>
                            </ul>
                        </Col>
                        <Col xl={12}>
                            <h5 className="bold mt-3 mb-3">Emailing Guidelines:</h5>
                            <p>
                                Email your paper submissions/ PPT submission to kc@kautilya.org.in in adherence to the deadline indicated above.
                                When emailing, please make sure to include the following details:
                            </p>
                            <ol className="paper_presentation_ol">
                                <li>Name of the Author/s:</li>
                                <li>Email Id:</li>
                                <li>Contact number (the one you use for WhatsApp, preferably):</li>
                                <li>University/College:</li>
                                <li>Year of Education:</li>
                                <li>Topic:</li>
                            </ol>
                        </Col>
                        <Col xl={12}>
                            <p>
                                We are excitedly anticipating your insightful abstracts and enthusiastic participation.
                                If you have any questions or require further information about the competition,
                                please do not hesitate to reach out to us at <a className='anchor' href="mailto:kc@kautilya.org.in">kc@kautilya.org.in</a>
                            </p>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default PaperPresentation;