import { useState, useEffect } from 'react';
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import DynamicCard from "./../components/PolicyCard"
function Policies() {

 
  const [policiesPdfData, setPoliciesPdfData] = useState([]);
  useEffect(() => {
    fetchpoliciesPdfData();
  }, []);
  const fetchpoliciesPdfData = async () => {
    try {
      const response = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-publicpolicies"
      ); 
      setPoliciesPdfData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log("policies Data", policiesPdfData);





  return (
    <>
      <div className="policies p-5">
        <section>
          <Container>
            <Row>
              <Col xl={12}>
                <h2>POLICIES & GUIDELINES</h2>
                <p className="text-center">Download and Read What Matters The Most</p>
              </Col>
            </Row>
          </Container>

          <DynamicCard data={policiesPdfData} />


        </section>

      </div>
    </>
  );
}
export default Policies;