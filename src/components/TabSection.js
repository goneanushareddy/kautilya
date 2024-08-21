import {useState, useEffect} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Carousel_slide from "../components/Carousel";
import CarouselSlider from './CarouselSlider';


const TabSection = ({tabsData,page,phd}) => {

  const [mppTabsData, setMppTabsData] = useState([]);

  // console.log("facilities",page);
  // console.log("facilites .js",tabsData)


  useEffect(() => {
    if (phd) {
      const filteredTabsData = phd.filter(each => each.category !== "Batch Profile");
      const batchProfile = phd.filter(each => each.category === "Batch Profile");
      setMppTabsData([...filteredTabsData, {id:0, category: "Batch Profile", slides: batchProfile }]);
    } else {
      setMppTabsData(tabsData);
    }
  },[phd, tabsData])
  // const data = [
  //   {
  //     id:1,
  //     imgURL : './images/mpp/Slide-001-min.jpg',
      
  //   },
  //   {
  //     id:2,
  //     imgURL : "./images/mpp/Slide-002-min.jpg",
     
  //   },
  //   {
  //     id:3,
  //     imgURL : "./images/mpp/Slide-003-min.jpg",
      
  //   },
  //   {
  //     id:4,
  //     imgURL : "./images/mpp/Slide-004-min.jpg",
      
  //   },
  //   {
  //     id:5,
  //     imgURL : "./images/mpp/Slide-005-min.jpg",
      
  //   },
  //   {
  //     id:6,
  //     imgURL : "./images/mpp/Slide-006-min.jpg",
      
  //   },
  //   {
  //     id:7,
  //     imgURL : "./images/mpp/Slide-007-min.jpg",
      
  //   }
    
  // ];

  // const mentor_comp = mppTabsData[0].category === "Mentors Mix" ? "mentor-tab-color" : "";   className={mentor_comp}
  return (
    <Container>
      <Tabs
      defaultActiveKey={(mppTabsData[0]?.category === "Academic Associates page" || mppTabsData[0]?.category === "Publications page") ? mppTabsData[0]?.name  : mppTabsData[0]?.category }
      id="fill-tab-example"
      className=""
      fill
    >
      {mppTabsData?.map((eachobj)=>(
       
      
      <Tab eventKey={(eachobj.category === "Academic Associates page" || eachobj.category === "Publications page") ? eachobj.name : eachobj.category} title={<span > <i className="fa-solid fa-circle-down"></i>{(eachobj.category === "Academic Associates page" || eachobj.category === "Publications page") ? eachobj.name : eachobj.category}  </span>} key={eachobj.id}>
         {eachobj.category === "Batch Profile" ? (
               
                <CarouselSlider  slider={eachobj.slides} pagesMpp={page} />
             
            ) : (
              <div dangerouslySetInnerHTML={{ __html: eachobj.description }} className='table-responsive'></div>
            )}
         
      </Tab>
      
    
      ))}
      </Tabs>
    </Container>
  );
}

export default TabSection;