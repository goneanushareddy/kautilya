
import { useState , useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Faqs from "../components/Faqs";

import '../assets/css/navbar.css';


function Resourcelist (){
    const [faqdata, setfaq] = useState([]);
    

      useEffect(() => {
        fetchData();
       }, []);
       const fetchData = async () => {
       
         try {
     
           fetch("https://guprojects.gitam.edu/kautilya-admin/api/fetch-faqdata", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               type: 'Podcasts',
             }),
           })
             .then((response) => response.json())
             .then((data) => {
               setfaq(data)
             })
             .catch((error) => {
               console.error("Error:", error);
             });
     
     
         } catch (error) {
           console.error('Error fetching data:', error);
         }
         
     
     };
    return(
        <>
         <section className="faqs">  
             <Container>
                <img src="./images/podcast.jpg" alt='podcast banner' className='mb-5 mt-5'></img>
                <p className='res_para'><i> “ <b>Listening is the new reading. </b>  To ensure that students of public policy get up-to-date analysis of the latest developments
                 in the field, Kautilya School of Public Policy brings to its readers a list of podcasts covering topics from – developments in world politics,
                  and economics to emerging trends in society. The compiled list <b>intends to inspire young scholars </b> of public policy to aid their
                   interests within this diverse field. Regular engagement with the podcasts would enrich their knowledge base and<b> provide insights
                    beyond the classroom.</b> ” </i> </p>
                <p className='res_para-sub-head'>An evolving database of selected podcasts.</p>
            </Container> 
            <Faqs faq={faqdata}/>
            </section>
        </>
    );
}
export default Resourcelist;