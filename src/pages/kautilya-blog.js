import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kautilya from '../kautilya';  
import { Link,useNavigate   } from 'react-router-dom';

function KautilyaBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    kautilya.get('/blog-lists').then((res) => {
      setBlogs(res.data.data);
    
    });
    
  };
  const navigate = useNavigate();
    
  const handleNavigation = (eachObj) => {
    //console.log(`/blog/${eachObj.slug}`, { state: { data: eachObj } })
    navigate(`/blogs/${eachObj.slug}`, { state: { data: eachObj } });
  };
  return (
    <>
      <section className="capstone">
        <Container>
          <Row>
            <Col xl={12}>
            <h1 className="mt-4 mb-4 blog-heading">Blog</h1>

            <Card className='w-100  p-4'> 
                   
                   <Card.Body>
                       <Card.Text>
                           <Row>
                               <Col xl={7}>
                               <div className='m-2'>
                               <h4>OPINION</h4>
                               <h3 className='blog-main-card-caption'>No Questions about Hyderabad</h3>

                               <div class="blo-auth">
                                <ul className='d-flex'>
                                  <li><img src="./images/faculty/Syed.jpg"  className='auth_img' alt='syed'/></li>
                                  <li><ul className="blo-auth-name"><li>By Syed Akbaruddin, Dean</li></ul></li>
                                </ul>
                                </div>
                               <p>I never thought I would ever come back to Hyderabad. When I left in 1985, the city of my upbringing, the not-so-big city at the time, 
                                 was something I was eager to leave behind in the quest to be a global nomad. After 35 years I am back...</p>
                                 <a href='no-questions-about-hyderabad-the-deans-take' className='btn btn-primary'>Readmore</a>
                               </div>
                               </Col>
                               <Col xl={5}>
                                    
                               <div className='m-2 blog-intro-img-container'><img src="./images/blogs/blog_intro.jpg" alt='syed' className='blog-intro-img' /></div>
                      
                               </Col>
                           </Row>
                          
                           
                       </Card.Text>
                       
                   </Card.Body>
             </Card>
</Col>
            {blogs.map((eachObj, index) => (
                 (
                
                  <Col  xs={12} md={12} lg={6} xl={4} key={eachObj.id}>
                    <Card>
                    <div className='image_card'>
                        <Card.Img src={'https://guprojects.gitam.edu/kautilya-admin/public/media/'+ eachObj.thumbnail_path} />
                     </div>
                     <div className='txt-card'>
                        <Card.Body>
                          <Card.Title>{eachObj.title}</Card.Title>
                          <Card.Text>
                            <div className='d-flex'> 
                              <img src={'https://guprojects.gitam.edu/kautilya-admin/public/media/'+ eachObj.posted_by_path } className='user_img' alt='blog image' />
                              <span className='user_txt'> <span dangerouslySetInnerHTML={{ __html: eachObj.posted_by}}></span> </span>
                            </div>
                            <div className='sub-title'>{eachObj.posted_by_about}</div>
                          </Card.Text>
                            <Button variant="danger" onClick={() => handleNavigation(eachObj)}>Read more</Button>
                        </Card.Body>
                      </div>
                      </Card>
                  </Col>
                  )
                ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default KautilyaBlog;
