import { Col, Container, Row } from "react-bootstrap";
import Jury from "../../../components/Jury";
import { useState } from 'react';
function Simulation() {
    const [facultydata, change] = useState([
        {
            id: 1,
            imgURL: "./images/events/paperpresentation/simulation/1.png",
            name: "Amb. Sanjay Bhattacharya",
            description: `
          <p>
          Amb Sanjay Bhattacharya has specialized in diplomacy for an era of globalization and transformative change, boundary and security issues, economic engagement, and negotiations. He led the government’s policy-making on Act East and Arab affairs at different stages in his career. He was BRICS Sherpa during India’s Presidency. He was Ambassador to Switzerland and Liechtenstein till December 2022. He has also served in China, Japan, and Belgium, where he focussed on EU relations. He was Ambassador to Turkey between 2018-20 and Ambassador to Egypt and the Arab League during 2015-18. He studied Economics at St Stephen’s College (1980-83) and Delhi School of Economics (1983-85). He has also learned Chinese at the Chinese University of Hong Kong and participated in Strategy and Leadership program at Cambridge Judge Business School. He lectured extensively at universities, business schools, and think tanks in India and abroad on the India story, public policy and governance, and foreign policy issues.
          </p>
          `

        },
        {
            id: 2,
            imgURL: "./images/events/paperpresentation/simulation/2.png",
            name: "Lt. General Sanjiv Langer(Retd)",
            description: `
           <p><strong>Lt. General Sanjiv Langer(Retd)</strong>, PVSM, AVSM, is a distinguished military veteran with a service span of 39 years, where he held several operational and logistic appointments. During his work, he dealt with strategic and operational issues with the Ministry of Defence, Ministry of Home Affairs, and Ministry of External Affairs. Sanjiv Langer was the first Indian to be selected to serve at the UN Headquarters as an International Civil Servant under the Department of Peacekeeping for Africa region. He also commanded an Operational Infantry Division and Strike Corps during his tenure. Later, he was appointed as Director General, Defence Intelligence and Deputy Chief Integrated Defence Staff and also as a Member of the Armed Forces Tribunal.</p>
            `

        },
        {
            id: 3,
            imgURL: "./images/events/paperpresentation/simulation/3.png",
            name: "Amb. DB Venkatesh Varma",
            description: `
            <p><strong>Amb. DB Venkatesh Varma</strong> holds a profound understanding of India’s Security and Defence policies, including its nuclear, missile, and space programs. He has been India’s Ambassador to the Conference on Disarmament in Geneva, to the Kingdom of Spain, and to the Russian Federation. He has served as Joint Secretary in charge of Disarmament and International Security in the Ministry of External Affairs. His diplomatic tenure also includes him working with the UN First Committee and United Nations Disarmament Commission. He was also a key member of the Indian negotiating team involved in the Civil Nuclear Initiative with the US. Amb Varma was the first recipient of the S.K. Singh Award for Excellence in the Indian Foreign Service in 2011 for his contribution to the negotiations of the Civil Nuclear Initiative. He also served as Joint Secretary in charge of Disarmament and International Security in the Ministry of External Affairs. He was also a member of the UN Group of Government Experts on Missiles and on Disarmament and Nuclear Nonproliferation Education. He holds an M.Phil in International Relations from the Jawaharlal Nehru University, Delhi.</p>
            `

        },




    ]);
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h3 className="text-start  mt-4 mb-4">EVENT 2: Simulation by Syed Akbaruddin</h3>
                        </Col>

                    </Row>
                    <Row>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>TOPIC: Ecological Degradation: A Threat to International Peace and Security</h4>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <p>
                                Dying ecosystems, increasing threats to global biodiversity, pollution-choked cities,
                                the growing discovery of significant microscopic plastic particles in many humans,
                                and exploitation of resources outstripping capacities for regeneration indicate that the earth is an increasingly ailing planet.
                                It is time to collaborate and act collectively.
                            </p>
                            <p>Since the UN Security Council is the body charged with addressing issues of international peace and security,
                                Switzerland, a first-time non-permanent member,
                                proposes to raise the issue at the informal consultations of the whole of the Security Council in September.</p>
                            <p>
                                Usually, such consultations lead to the following outcomes:
                            </p>
                        </Col>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>COUNCIL OUTCOMES</h4>
                            </div>
                            <div>
                                <table class="table_style table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Output</th>
                                            <th>Document</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Resolution</strong></td>
                                            <td>S/RES/(number)</td>
                                            <td>Decision- An affirmative vote of nine members including the concurrent votes of the P5 in a publc meeting.<br />
                                                Adoption in a public meeting. (FORMAL)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Statement by the President</strong></td>
                                            <td>S/PRST/(year)/(number)</td>
                                            <td>Decision- Consensus in informal consultations or by “no objection” procedure. The president of the Security Council reads out the statement in a public meeting(FORMAL)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Public Meeting</strong></td>
                                            <td>No document</td>
                                            <td>No outcome in public meeting. However, minutes are part of official record and publically available.(FORMAL)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Press Statement</strong></td>
                                            <td>SC/(number)</td>
                                            <td>Consensus in informal consultations or by “no objection” procedure.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Elements to the Press</strong></td>
                                            <td>No document</td>
                                            <td>Agreement by Council members obtained ahead of the president speaking to the press.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>No Outcome</strong></td>
                                            <td>No document</td>
                                            <td>No Outcome of any sort</td>
                                        </tr>
                                    </tbody>
                                </table>


                                <p>The goal of those supporting the proposal is to seek a Resolution.
                                    The objective of those opposed to the move will be to not have any outcome.
                                    Mentors will be provided to advise participants about the documentation to read and prepare in advance.
                                    On the day of the MUN, the process as pursued by the Security Council will be followed as closely as possible.
                                    The discussions will be both procedural and substantive.
                                    There will be intervals for small group discussions and for seeking instructions taking into account the evolving situation.
                                    The entire exercise is scheduled over a 3-hour time frame.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>Mentors</h4>


                                <Jury faculty={facultydata} popup={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>
                                    The Countries assigned to the mentors are listed below:
                                </h4>
                            </div>

                        </Col>

                        <Col xl={12}>
                            <table class="table_style w-50 mx-auto">
                                <thead>
                                    <tr>
                                        <th>Mentors</th>
                                        <th>Countries</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Amb. Sanjay Bhattacharya</td>
                                        <td>China, France, Japan, Switzerland, United Arab Emirates</td>
                                    </tr>
                                    <tr>
                                        <td>Lt. Gen. Sanjiv Langer</td>
                                        <td>Ecuador, Gabon, Ghana, Mozambique, United Kingdoms</td>
                                    </tr>
                                    <tr>
                                        <td>Amb. DB Venkatesh Varma</td>
                                        <td>Albania, Brazil, Malta, Russia, United States of America</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>
                                    Prizes and Awards:
                                </h4>
                            </div>

                        </Col>

                        <Col xl={12}>
                            <table class="table_style w-50 mx-auto">
                                <thead>
                                    <tr>
                                        <th>Award Name</th>
                                        <th>Award Amount</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Best Team Award</strong></td>
                                        <td><strong>Rs 25,000</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>First Runner Up</strong></td>
                                        <td><strong>Rs 10,000</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>


                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <div class="headingWithBG">
                                <h4>
                                    Important Dates:
                                </h4>
                            </div>

                        </Col>

                        <Col xl={12}>
                            <table class="table-bordered table_left w-50 mx-auto">
                                <tbody>
                                    <tr>
                                        <th>Registration Deadline</th>
                                        <td >31st August 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Shortlisted Candidates Shall be notified by:</th>
                                        <td >5th September 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Online Briefing Session<p></p>
                                            <ul >
                                                <li class="guide-txt">Introduction of the portfolios</li>
                                                <li class="guide-txt">Introduction to the mentors</li>
                                                <li class="guide-txt">Introduction of the agenda</li>
                                                <li class="guide-txt">Q and A</li>
                                            </ul>
                                        </th>
                                        <td >1st week of September (exact date would be conveyed through email)</td>
                                    </tr>
                                    <tr>
                                        <th>Allocate Simulation Teams and Share Relevant Documents</th>
                                        <td >2nd week of September</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col xl={12}>
                            <p className="mt-5">
                                “If you have any questions or require further information about the simulation, please do not hesitate to reach out to us at <a className='anchor' href="mailto:kc@kautilya.org.in">kc@kautilya.org.in</a>“
                            </p>
                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    );
}
export default Simulation;