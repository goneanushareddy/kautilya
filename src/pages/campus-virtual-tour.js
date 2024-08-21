
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tabs_section from "../components/Tabs";

import '../assets/css/navbar.css';


function Campus (){
    
    return(
        <>
         <section className="phd virtualTour">   
            <Container>
                
            <div className="embed-responsive embed-responsive-21by9 mt-4 mb-5">
                     <iframe src="https://my.matterport.com/show/?m=4DDHt7LHvnM" title="The Kautilya campus - A vision comes to life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                </div>
            </Container>

            </section>
        </>
    );
}
export default Campus;