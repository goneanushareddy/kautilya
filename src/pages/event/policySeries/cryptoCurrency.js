import { Col, Container, Row } from "react-bootstrap";
function CryptoCurrency() {
    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <p style={{ textAlign: "right", marginTop: "60px" }}>
                            <a style={{ padding: "10px", color: "#000", fontWeight: "bold" }}>INVITE US TO A COLLEGE WEBINAR</a>
                        </p>
                    </Col>
                </Row>
            </Container>

            <section className="crypto">
                <Container>
                    <Row>
                        <Col xl={12} className="m-3 p-3"></Col>
                        <Col xl={12}>
                            <div class="top-div">
                                <img src="./images/events/policy_series/innerPage/crypto/quote.png" />

                                <h4 class="cus-public text-white"><strong>Let’s Talk Policy</strong></h4>
                                <h4 class="k-h2 eventsubtitle-lineheighttit text-white">Decrypting Crypto- How<br />
                                    Should India Regulate<br />
                                    Cryptocurrency?
                                </h4>
                                <h4 class="cus-time text-white">07:00 pm – 8:00 pm IST | November 21st</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container className="wpb_single_image ">
                    <Row>
                        <Col xl={3}>
                            <img src="./images/events/policy_series/innerPage/crypto/1.jpg" />
                        </Col>
                        <Col xl={3}>
                            <img src="./images/events/policy_series/innerPage/crypto/2.jpg" />
                        </Col>
                        <Col xl={3}>
                            <img src="./images/events/policy_series/innerPage/crypto/3.jpg" />
                        </Col>
                        <Col xl={3}>
                            <img src="./images/events/policy_series/innerPage/crypto/4.jpg" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="crypto2">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="m-5">
                                <h4 className="eventsubtitle-lineheight2  txt-white"><strong>What will be discussed</strong></h4>
                                <div class="heading_border_white mb-4"> </div>
                                <p className="text-white">
                                    The draft Cryptocurrency and Regulation of Official Digital Currency Bill, 2021, declares that the mining, holding, selling, issuing, transfer or use of cryptocurrency by Indians will attract a maximum imprisonment of 10 years. However, this draft bill is still in limbo as Parliament keenly watches the global headwinds,
                                    which means although cryptocurrency is not banned in India, it is still an unregulated sector.
                                </p>

                                <p className="text-white">
                                    We are yet to decide on our fate on whether we join the league of countries like China, Thailand, Indonesia and Taiwan who have banned its use as against countries like Canada, Japan and USA who have proper laws regulating its usage & penalties for misuse. While the RBI and other global regulators like IMF have acknowledged the benefits of DLT (Distributed Ledger Technology)
                                    underlying cryptocurrencies,
                                    India can learn something from its Asian counterpart, Japan, who have some of the best crypto laws in the world.
                                </p>
                                <p className="text-white">
                                    Institutions in India have shifted grounds on crypto many times with the RBI banning lenders from dealing with crypto exchanges way back in 2018,
                                    a move that was quashed by the Supreme Court in 2020, to be followed by the introduction of the draft Crypto Bill in 2021 which suggests banning all private
                                    cryptocurrencies in India and preparing the ground for introducing an official digital currency by RBI.
                                </p>
                                <p className="text-white">
                                    While the global divide hardens on the issue- on the one hand we have countries where cryptoassets are
                                    becoming a part of the mainstream financial system and on the other hand we see higher
                                    walls being constructed to save the citizen from its volatility.
                                </p>
                                <p className="text-white">
                                    Our panel of esteemed speakers will discuss the virtues of the suggested ban and whether it will be effective technologically and fruitful in the long run.
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h4 className="pseudo_border">What will be discussed?</h4>
                            <div className="heading_border mb-4"> </div>

                        </Col>
                        <Col xl={12}>
                            <p>
                                In this episode of Let’s Talk Policy,
                                our panel experts will discuss and answer questions which are at the core of this renewed policy and its impact on India and her citizens.
                            </p>
                            <ul className="entry_content">
                                <li>Young Indians who are committed to bringing about change and building India.</li>
                                <li>Those aspiring to build a career in politics, public policy, public administration, journalism, political consulting, public relations, image consulting and related fields</li>
                                <li>Those working as researchers, academicians, journalists, and in the fields mentioned above</li>
                                <li>Others who take a deep interest in the subject</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default CryptoCurrency;