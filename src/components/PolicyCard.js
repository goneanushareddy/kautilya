
import { Container, Row, Col } from 'react-bootstrap';

const DynamicCard = ({ data }) => {

  // console.log("PolicyData", data)
  return (
    <Container >
      <Row className='d-flex justify-content-center'>
        <Col sm={12} md={10} className='d-flex justify-content-around flex-wrap'>
          {data.map((item, index) => (
            <Col key={index} xs={12} md={3} className='policy-card'>
              {item.type === "Scholarship Policy" ?
                <div style={{ height: "100%" }} className='policy-card-pdf'>
                  <a href={'./scholarships-financial-aid'} target="_blank" className='full-height'>
                    <div className="card_policies">
                      <h4>{item.type}</h4>
                      <p>{item.subtitle}</p>
                    </div>
                  </a>
                </div> :
                <div style={{ height: "100%" }} className='policy-card-pdf'>
                  <a href={`${"https://guprojects.gitam.edu/kautilya-admin/public/policies/"}${item.policypdf}`} target="_blank" className='full-height'>
                    <div className="card_policies">
                      <h4>{item.type}</h4>
                      <p>{item.subtitle}</p>
                    </div>
                  </a>
                </div>
              }
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default DynamicCard;
