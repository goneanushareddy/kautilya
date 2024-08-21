import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card_component from "./Card";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NewsSlider = ({ sliderdata }) => {
  //console.log(sliderdata);

  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

  
  const itemMargin = 20; 
  const itemStyle = { marginRight: `${itemMargin}px` };

  return (
    <Slider {...settings}>
      {sliderdata.map((eachobj) => {
        return (
          <div key={eachobj.id} style={{...itemStyle, width: `calc(100% / ${settings.slidesToShow} - ${itemMargin}px)`}}>
            <img src={eachobj.imgURL} alt={eachobj.imgURL} />
            <p>{eachobj.heading}</p>
            <p className="event_heading">{eachobj.title}</p>
            <div className="text-light">
              <p className="date_p"> {eachobj.time}</p>
              <Link to={`${eachobj.url}`}>
                <span className="before_arrow readmoreIcon">
                  Read more
                  <img
                    src="./images/redarrow.png"
                    className="arrow_img" alt="Read more arrow"
                  />
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default NewsSlider;
