
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Tabs_section from "../components/Tabs";

import '../assets/css/navbar.css';
import TabSection from '../components/TabSection';


function Facilities (){
  
  let page = "facilities"

  const [facilitiesData, setFacilitiesData] = useState([]);

  useEffect(() => {
    fetchfacilitiesData();
    
}, []);

  const fetchfacilitiesData = async () => {
    try {
      const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-facilitylistdata'); // Replace with your actual API endpoint
      setFacilitiesData(response.data.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  // console.log(facilitiesData)

 
  return(
      <>
       <section className="phd">   
          <Container>
              <h1 className='capstone-project-heading'>Facilities</h1>
              <div className="embed-responsive embed-responsive-21by9 mt-4 mb-5">
                  <iframe height="641" src="https://www.youtube.com/embed/TpAX1KKUl2E" title="The Kautilya campus - A vision comes to life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <p className="mb-5">Kautilya’s campus is designed to provide a unique experience for students, as they embark on their learning journey. Seated on 100 acres of green landscape, the campus is located just 10 km outside Hyderabad city. Welcoming a global student intake, the campus is a melting pot of cultures, languages, and traditions. Kautilya boasts of best-in-class infrastructure with horse-shoe and gallery-styled classrooms equipped with AV systems, projectors, teleprompters, Wi-Fi hotspots, hi-tech gadgets, and two state-of-the-art auditoriums with upgraded infra, and a breathtaking view.</p>
          </Container>

          <TabSection tabsData={facilitiesData} page={page} />
          </section>
      </>
  );
}
export default Facilities;