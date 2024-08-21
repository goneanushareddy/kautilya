import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import LogoComponent from "./LogoComponent";

const placementPath =  {
  mobile: "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/",
  desktop: "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/",
}

const FirstSlider = ({slides}) => {

  
  const settings = {
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    cssEase: "linear",
    infinite: slides.length > 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };




  return (
    <Container>
      <section>
        <Slider {...settings}>
          {slides.map((eachObj) => (
            <LogoComponent imgURL={`${placementPath.mobile}${eachObj.mobile_banner}`} key={eachObj.mobile_banner} />
           
          ))}
        </Slider>
      </section>
    </Container>
  );
};

const SecondSlider = ({slides}) => {
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    cssEase: "linear",
    infinite: slides.length > 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <Container>
      <section>
        <Slider {...settings}>
          {slides.map((eachObj) => (
                 <LogoComponent imgURL={`${placementPath.mobile}${eachObj.mobile_banner}`} key={eachObj.mobile_banner} />

          ))}
        </Slider>
      </section>
    </Container>
  );
};

export { FirstSlider, SecondSlider };
