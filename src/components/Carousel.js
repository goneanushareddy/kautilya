import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';




const Carousel_slide = ({ slider }) => { 
  ////console.log(slider);
  if(!slider){
    return ;
  }
  return (
 

    <Carousel variant="dark">
    {slider.map((slider)=>
    {
     
      return(
        <CarouselItem key={slider.id}>
            <img className="d-block_carousel" src={slider.imgURL} alt={`Slide ${slider.id}` }/>       
          </CarouselItem>
      )})
     }  
    </Carousel>

    
  );
}

export default Carousel_slide;