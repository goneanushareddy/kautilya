import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card_component from "./Card"
import { Container } from "react-bootstrap";




const TextSlider = () => {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    //   autoplaySpeed: 3000,
      cssEase: "linear",
    };
  
    const data = [
      {
        title : "Internships & Capstone Projects",
        description: `
       <p> As part of the MPP, students intern at relevant policy organizations for 6-8 weeks. During the second year of the program, they are also required to submit their report of a capstone project on which they have worked. These projects are supervised by their academic supervisor.
       </p>
       <p>
       This hands-on approach to policymaking is critical in aiding a student make the transition into a professional environment. It also helps build key skills such as project management, and time management and emphasizes teamwork – the key traits to create and manage positive impact in the world today.
        </p>
       `,  },
      {
        title : "Getting interview- and industry-ready",
        description: `<p>Students can enroll to participate in seminars, interactions, and guidance sessions that can help craft their understanding of the needs of recruiters. Members participate in workshops on skill development and undergo mock interviews as part of the club. They also attend workshops on communications, team-building, and writing, among a host of other professional skills.</p>`,
      },
      {
        title : "Kautilya Entrepreneurship Cell",
        description: `<p>Created with a mission to make the campus friendly for entrepreneurs, the E-cell is a great place for those aspiring to sharpen their business acumen. Students can forge interpersonal connections amid a community of like-minded entrepreneurs. The cell also hosts several skill shops in partnership with business leaders. These sessions give students an objective view of running a business, the policy-level developments, as well as the challenges involved.</p>`,
      },
      
    
      
    ];
  return (
    
    
    <Slider {...settings}>
    
    {data.map((eachobj)=>
    {
      ////console.log(eachobj);
      return(
       
        <div>
         <h4>{eachobj.title}</h4>
          {/* <p>{eachobj.description}</p> */}
          <div dangerouslySetInnerHTML={{ __html: eachobj.description }} className='table-responsive'></div>
        </div>
       
      )
   }
   )}
   
     </Slider>
     
   
  );
};

export default TextSlider;
