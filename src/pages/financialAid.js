import { Col, Container, Row } from "react-bootstrap";

function FinancialAid () {
    return(
        <>
         <div className="financial-ad">
        <Container>
            <Row>
                <Col xl={12}>
                <h1 className="financial-ad-heading">Scholarships & TAship</h1>
                </Col>
            </Row>
        </Container>
                       
        </div>
        <section className="other-fad">
            <Container>
                <Row>
                   
                    <Col>
                    <p>
                    Kautilya offers <strong>up to 100% need-based scholarships in the form of tuition fee waivers</strong> to deserving candidates. Students seeking scholarships are encouraged to choose the scholarship option in the application form. Your scholarship application will not influence your acceptance to the program. The scholarship will be granted for 1st year only. Continuation of the scholarship in 2nd year will be purely based upon student academic performance and code of conduct.
                    </p>
                    <p>
                    Apart from the scholarships, students will get a chance to explore their passion through a <strong>Teaching Assistantship (TA)</strong>, which is provisioned for the Final Year students of Kautilya School of Public Policy. This is an opportunity for students to subsidize their fees through Teaching Assistantship.

                    </p>
                   
                    </Col>
                </Row>
                <Row>
                <Col xl={12}>
                <p className="fin-aid-sub-head"><b>OTHER FINANCIAL BENEFITS:</b></p>
                    <ul>
                    <li>Documentation support to avail Education Loan from the Banks.</li>
                    <li>Short-term EMI Facility from partnered NBFCs.</li>
                    <li>Documentation support to avail loan from the state government Schemes.</li>
                    <li>Documentation support to apply for Bihar Student Credit Card Scheme College Code: 16319</li>
                    </ul>

                    <p><strong>NOTE: </strong>Students will have to apply directly to the lending institutions of their choice to avail education loan or any other EMI facility. Kautilya has no role in EMI / loan grant, and doesn’t guarantee that, except providing documents as asked by the lending institution.</p>
                    </Col>
                </Row>
                <Row>
                <Col xl={12}>
                <p className="mt-3 fin-aid-sub-head"> <b>REQUIRED DOCUMENTS: </b></p>
                    <ul>
                    <li>Duly updated Curriculum Vitae of self (CV).</li>
                    <li>Duly submitted Statement of Purpose (SOP).</li>
                    <li>The latest Self ITR is used as proof of annual income. (If applicable).</li>
                    <li>For income proof, the latest ITR of a self, spouse, and the parents, as proof of family annual income referring to the below-mentioned points from 01 to 05.

                    </li>
                    </ul>

                    <ol>
<li >If the applicant is working &amp; single,&nbsp; self ITR&nbsp;is a must along with parents&nbsp;<span class="il">ITR</span>.</li>
<li >If the applicant is working, married and has a working spouse, the Spouse’s ITR&nbsp;must be submitted along with self <span class="il">ITR</span>&nbsp;and Parents&nbsp;<span class="il">ITR</span>.</li>
<li >If the applicant has a non-working spouse, an affirmation email is a must from the applicant declaring that the spouse has no income along with the Self and parents ITR, but still, the&nbsp;Spouse’s&nbsp;&nbsp;<span class="il">ITR</span> with zero income declaration is mandatory.</li>
<li >If the applicant is not working &amp; single,&nbsp; Parents ITR is a must.</li>
<li >If the applicant has a non-working father/mother, an affirmation email is a must from the applicant’s parent declaring that the non-working mother/father has no income but a non-working parent <span class="il">ITR</span> with zero income declaration is mandatory.</li>
</ol>
                </Col>
                </Row>
                <Row>
                <Col xl={12}>
                <p className="mt-3"><b>Key Points to remember for TAship:</b></p>
                    <ul>
                    <li>TAs must take one course per term for all three terms.</li>
<li>The selection process for the TAship will open in May.</li>
<li>The quantum of TAship will be informed before the end of June.</li>
<li>The program manager will share a list of detailed instructions, KRAs, and SOPs with the selected TAs.</li>
                    </ul>
                </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default FinancialAid;