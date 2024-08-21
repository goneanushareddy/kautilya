import { Col, Container, Row } from "react-bootstrap";

function ThankYou(){
    return(
        <div className="thankyou">
<section>
    <Container>
        <Row>
            <Col xl={12} className="mt-5">
                <div className="center_align_text">
                    <h5 className="text-white">
                    Thank You For Contacting Kautilya.
                    </h5>
                    <p className="text-white">
                        <small>
                        We have emailed you the required details.
                        </small>
                    </p>
                    <p>
                    <a href="#" className="btn btn-primary"> whatsApp No. +918331039097 </a> 
                    </p>
                    <p>
                    <a href="./admission-process" className="btn btn-primary"> Admission Process</a>
                        </p>
                        <p>
                        <a href="https://kautilya.org.in/" className="btn btn-primary"> Visit website</a>
                        </p>
                  
                    
                    
                    
                    
                  
                </div>
             </Col>
        </Row>
    </Container>
</section>
        </div>
    );
}
export default ThankYou;