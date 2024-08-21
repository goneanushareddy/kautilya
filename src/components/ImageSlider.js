import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card_component from "./Card"
import { Container } from "react-bootstrap";
import CardImageComponent from "./ImageCard";




const ImageSlider = () => {
    const settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
    //   autoplaySpeed: 3000,
      cssEase: "linear",
    };
  
    const data = [
      {
        imgURL : "https://kautilya.org.in/wp-content/uploads/2023/09/PB-000.jpg",
       
      },
      {
        imgURL : "https://kautilya.org.in/wp-content/uploads/2023/09/PB-001.jpg",
        
      },
      {
        imgURL : "https://kautilya.org.in/wp-content/uploads/2023/09/PB-002.jpg",
       
      },
      {
        imgURL : "https://kautilya.org.in/wp-content/uploads/2023/09/PB-003.jpg",
       
      },
      {
        imgURL : "https://kautilya.org.in/wp-content/uploads/2023/09/PB-004.jpg",
       
      },
      {
        imgURL : "https://kautilya.org.in/wp-content/uploads/2023/09/PB-000.jpg",
       
      }
      
    ];
  return (
    <Container>
    <section className="">
    
    <Slider {...settings}>
    
    {data.map((eachobj)=>
    {
      
      return(
       
      
        <CardImageComponent  imgURL={eachobj.imgURL} />
       
      )
   }
   )}
   
     </Slider>
     
    </section>
    </Container>
  );
};

export default ImageSlider;
