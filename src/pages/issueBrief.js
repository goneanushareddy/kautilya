import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import kautilya from "../kautilya";

function IssueBrief() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssue();
  }, []);

  const fetchIssue = () => {
    kautilya.get("/issues-lists").then((res) => {
      setIssues(res.data.data);
    });
  };

  const navigate = useNavigate();

  const handleNavigation = (eachObj) => {
    navigate(`/issue-brief/${eachObj.slug}`, { state: { data: eachObj } });
  };

  return (
    <section className="capstone">
      <Container>
        <Row>
          <h1 className="mt-4 mb-4 capstone-project-heading">Issue Brief</h1>
          {issues.map((eachObj) => (
            <Col xs={12} md={12} lg={6} xl={4} key={eachObj.id}>
              <Card className="image_card">
                <Card.Img
                  src={`https://guprojects.gitam.edu/kautilya-admin/public/media/${eachObj.thumbnail_path}`}
                />
                <Card.Body>
                  <Card.Title>{eachObj.title}</Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <img
                        src={`https://guprojects.gitam.edu/kautilya-admin/public/media/${eachObj.posted_by_path}`}
                        className="user_img"
                        alt=""
                      />
                      <span className="user_txt">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: eachObj.posted_by,
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="sub-title">{eachObj.posted_by_about}</div>
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleNavigation(eachObj)}
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default IssueBrief;
