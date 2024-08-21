import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Carousel_slide from "../components/Carousel";
const Tabs_section = ({phd,popup}) => {
  console.log("PHD level",phd);
  const data = [
    {
      id:1,
      imgURL : './images/mpp/Slide-001-min.jpg',
      
    },
    {
      id:2,
      imgURL : "./images/mpp/Slide-002-min.jpg",
     
    },
    {
      id:3,
      imgURL : "./images/mpp/Slide-003-min.jpg",
      
    },
    {
      id:4,
      imgURL : "./images/mpp/Slide-004-min.jpg",
      
    },
    {
      id:5,
      imgURL : "./images/mpp/Slide-005-min.jpg",
      
    },
    {
      id:6,
      imgURL : "./images/mpp/Slide-006-min.jpg",
      
    },
    {
      id:7,
      imgURL : "./images/mpp/Slide-007-min.jpg",
      
    }
    
  ];
  const mentor_comp = phd[0].name === "Mentors Mix" ? "mentor-tab-color" : "";
  return (
    <Container>
      <Tabs
      defaultActiveKey={phd[0].name}
      id="fill-tab-example"
      className=""
      fill
    >
      {phd.map((eachobj)=>(
       
      
      <Tab eventKey={eachobj.name} title={<span className={mentor_comp}> <i className="fa-solid fa-circle-down"></i>  {eachobj.name} </span>} key={eachobj.id}>
         {eachobj.id === 14 ? (
                <Carousel_slide slider={data}/>
             
            ) : (
              <div dangerouslySetInnerHTML={{ __html: eachobj.description }} className='table-responsive'></div>
            )}
         
      </Tab>
      
    
      ))}
      </Tabs>
    </Container>
  );
}

export default Tabs_section;