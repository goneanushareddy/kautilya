

import Container from 'react-bootstrap/Container';
import { Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../assets/css/navbar.css';


const data = [
    {
        Image: "https://kautilya.org.in/wp-content/uploads/2023/12/Thumbnail-min.jpg",
        title: "The Indian Government’s Digital Transformation Journey",
        user_img: "https://kautilya.org.in/wp-content/uploads/2023/12/Pratheekh-Chandra.png",
        user_text: "Pratheekh Chandra – Student, Kautilya",
        subtitle: "India is an economically growing and quickly digitizing country, with...",
    },
    {
        Image: "https://kautilya.org.in/wp-content/uploads/2023/11/Thumbnail-min.jpg",
        title: "Criminalization of Politics: A Threat to India’s Policy-Making Process",
        user_img: "https://kautilya.org.in/wp-content/uploads/2023/11/Janeswara-D.-Koripella.png",
        user_text: "Jnaneswara D. Koripella – Student, Kautilya",
        subtitle: "As the largest democracy in the world, India has been grappling with a recurring and complex...",

    },
    {
        Image: "https://kautilya.org.in/wp-content/uploads/2023/11/Artboard-blog.jpg",
        title: "Vaccine Nationalism & Covid-19: Impact on Access in Third World Nations",
        user_img: "https://kautilya.org.in/wp-content/uploads/2023/11/Shivangi-Pandey.png",
        user_text:"Shivangi Pandey – Academic Associate, Kautilya",
        subtitle: "Covid-19 was an instance, wherein the entire world’s humanity and solidarity...",

    },
    {
        Image: "https://kautilya.org.in/wp-content/uploads/2023/12/Thumbnail-min.jpg",
        title: "The Indian Government’s Digital Transformation Journey",
        user_img: "https://kautilya.org.in/wp-content/uploads/2023/12/Pratheekh-Chandra.png",
        user_text: "Pratheekh Chandra – Student, Kautilya",
        subtitle: "India is an economically growing and quickly digitizing country, with...",
    },
    {
        Image: "https://kautilya.org.in/wp-content/uploads/2023/11/Thumbnail-min.jpg",
        title: "Criminalization of Politics: A Threat to India’s Policy-Making Process",
        user_img: "https://kautilya.org.in/wp-content/uploads/2023/11/Janeswara-D.-Koripella.png",
        user_text: "Jnaneswara D. Koripella – Student, Kautilya",
        subtitle: "As the largest democracy in the world, India has been grappling with a recurring and complex...",

    },
    {
        Image: "https://kautilya.org.in/wp-content/uploads/2023/11/Artboard-blog.jpg",
        title: "Vaccine Nationalism & Covid-19: Impact on Access in Third World Nations",
        user_img: "https://kautilya.org.in/wp-content/uploads/2023/11/Shivangi-Pandey.png",
        user_text:"Shivangi Pandey – Academic Associate, Kautilya",
        subtitle: "Covid-19 was an instance, wherein the entire world’s humanity and solidarity...",

    },
]

function Researchblog (){
    return(
        <>
         <section className="phd">   
            <Container>
            <h1>Blog</h1>
                <Card className='w-100'> 
                   
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <Col xl={8}>
                                <div className=' m-2'>
                                <h4>KAUTILYA OPINION</h4>
                                <h3>No Questions about Hyderabad</h3>

                                <div class="blo-auth">
<ul className='d-flex'>
<li><img src="https://kautilya.org.in/wp-content/uploads/2021/09/Syed-Akbaruddin.jpg"  className='auth-img'/></li>

<li><ul className="blo-auth-name"><li>By Syed Akbaruddin, Dean</li><li></li></ul></li>
</ul>
</div>
                                <p>I never thought I would ever come back to Hyderabad. When I left in 1985, the city of my upbringing, the not-so-big city at the time, 
                                  was something I was eager to leave behind in the quest to be a global nomad. After 35 years I am back...</p>
                                  <Button className='btn btn-primary'>Readmore</Button>
                                </div>
                                </Col>
                                <Col xl={4}>
                                     
                                <div className=' m-2' ><img src="https://kautilya.org.in/wp-content/uploads/2021/09/Hyd-400x335-3.jpg"></img></div>
                       
                                </Col>
                            </Row>
                           
                            
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                <Row>
                {data.map((eachObj, index) => {
                    const{Image, title, user_img, user_text, subtitle} = eachObj;
                    return (
                        
                            <Col xs={12} md={4}>
                                <Card >
                                <Card.Img variant="top" src={eachObj.Image} />
                                <Card.Body>
                                    <Card.Title className='blog-title'>{eachObj.title}  </Card.Title>
                                    <Card.Text>
                                    <div className='d-flex'> 
                                    <img src={eachObj.user_img} className='auth-img' alt={user_text}/>
                                    <p className='auth-text'>{eachObj.user_text} </p></div>
                                    <div>{eachObj.subtitle}</div>
                                    </Card.Text>
                                    <Button className='btn btn-primary'>Read more</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                      
                    )
                })}
                  </Row>
            </Container>

            
            </section>
        </>
    );
}
export default Researchblog;