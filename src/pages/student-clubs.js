
import { Container,Row,Col } from 'react-bootstrap';
import Slider from "react-slick";
import StudentClubSliderimage from '../components/StudentClubSliderimage';
const Studentclubs = () => {
   const settings = {
      dots: true,
      slidesToShow: 1, 
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
    };
  
    const data = [
      {
        imgURL : "./images/studentClubs/1.jpg",
       
      },
      {
         imgURL : "./images/studentClubs/2.jpg",
        
      },
      {
         imgURL : "./images/studentClubs/3.jpg",
       
      },
      {
         imgURL : "./images/studentClubs/4.jpg",
       
      },
      {
         imgURL : "./images/studentClubs/5.jpg",
       
      },
      {
         imgURL : "./images/studentClubs/6.jpg",
       
      }
      
    ];
    
  return (
    <>
      <section className="student_cllubs">
         <Container>
            <h1 className='capstone-project-heading mb-3'> Student Clubs and Activities</h1>
         </Container>
      </section>

      <section className="">
    <Container>
      <Row className='student_club_slider'> 
      <Col xl={12}>
        
          
      
      <Slider {...settings}>
         {data.map((eachobj) => (
           <StudentClubSliderimage imgURL={eachobj.imgURL} key={eachobj.imgURL} />
         ))}
       </Slider>
       
     
   </Col>
      </Row>
    </Container>

     <Container>
      <Row>
      <Col xl={12} >
   
     <div className='headingWithBG'>
       <h4>Kautilya Climate Action Club</h4>
       <p>The club aims to foster awareness about climate change and climate action, its mitigation, and adoption, respectively. This is an enabling platform for members to apply their knowledge and expertise in the real world by taking decisions that are conducive to sustainable development and also adhere to the SDGs or Sustainable Development Goals. The club organizes and participates in various climate action hackathons focusing on various aspects of public policy and governance like environment, energy, resource management, impact, and assessment.</p>
    </div>
    <div className='headingWithBG'>
       <h4>Chabootra</h4>
       <p>This club has been formed with a very unique intention to help students through theatre as a medium. The core ideas are to help in recreation, purging inhibitions and developing empathy. The recreational activities include meditation, physical and emotional exercises. Members here learn the art of optimization of Self Expression’ with confidence, and work on improving empathy through reading, emoting, enacting and discussing.</p>
    </div>
    <div className='headingWithBG'>
       <h4>Professional Development Club</h4>
       <p>This club aims to arm students with essential skills of conduct required to enter the professional world. They learn about skills like team-building, communication, project planning and delivery, negotiation, professional writing, work ethics, conflict resolution, and time management. The members organize various skill shops on case studies, mock interviews, and resumé building where along with this they learn critical thinking and design thinking. One of their key aims is to help members develop a mindset required to adapt to organizational culture as they prepare to enter the professional world.</p>
    </div>
    <div className='headingWithBG'>
       <h4>Parliamentarians Club</h4>
       <p>The club supports the policy learning journey for students by mapping political processes that shape decision-making on issues relevant from local to global importance. The club was formed as an association of like-minded individuals from different professional and academic backgrounds who aspired to create a positive impact through evidence-based policymaking. Since its inception, it has successfully created a vibrant ecosystem at Kautilya through open discussion forums, live debates, study tours, and external engagement with officeholders and stakeholders. The Jan Manch (Mock Parliament) is its flagship event.</p>
    </div>
    <div className='headingWithBG'>
       <h4>Software Literacy Club</h4>
       <p>Keeping in mind how important data is for public policy, this club trains its members in Excel, data analytics, visualization, and quantitative research. Both primary and intermediate levels are covered during the training. Their sessions focus on statistical software like R which is used for gathering data, where members are taught end-to-end reporting using R markdown, citations, generating charts, and graphs and applying statistical equations. They organize both online and offline sessions.</p>
    </div>
    <div className='headingWithBG'>
       <h4>Think-In Podcast Club</h4>
       <p>As future change-makers, our public policy students hold regular discussions with notable personalities in the policy and advocacy space. The podcast forms a medium to voice their opinion on issues that matter and attention is given to covering every segment of society. Podcasts are slowly gaining popularity and have become a great medium to connect with the audience. The club aims to introduce Kautilya to various audiences through discussions with field-specific experts.</p>
    </div>
    <div className='headingWithBG'>
       <h4>Safarnama Club</h4>
       <p>This club brings together students with a passion for the outdoors and adventure. Organizing city walks, food trails, and exploring places of historical and cultural interest is a part of their activities.</p>
    </div>
    <div className='headingWithBG'>
       <h4>Social Empowerment Club</h4>
       <p>The club draws inspiration from the ideas and actions of great Indian Social reformers and rationalists who defied orthodox norms to promote social justice in the country. The Club stands for ‘progressive thought’ as it strives to preserve and progress the ideals of secularism, liberty, justice & scientific temper enshrined in the Indian Constitution. The club endeavours to create an atmosphere for public discourse on the country’s diversity, inclusion and representation issues.</p>
    </div>
    <div className='headingWithBG'>
       <h4>Kautilya Entrepreneurship Cell</h4>
       <p>The E-Cell is a platform for aspiring entrepreneurs to come together and explore ideas that would advance their business acumen. The club organizes various skill shops in partnership with business and industry leaders to instil in its members’ the confidence to start a venture. Their mission is to make Kautilya an entrepreneur-friendly campus and lead the way for social impact through innovative business opportunities.</p>
    </div>
    </Col>
    </Row>
    </Container>
      </section>
    </>
  );
};
export default Studentclubs;