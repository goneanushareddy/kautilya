
import { Col, Row } from 'react-bootstrap';
// import student1 from './../assets/img/blog/student1.jpg'


function Card_component(props) {
  return (
    
    <div  className="card">
    <img variant="top" src={ props.imgURL } alt='student' />
      <div className='card-body'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <a href='#' className='btn btn-sm btn-primay mt-5'>Read more </a>
      </div>
    </div>
    
  
    

  );
}

export default Card_component;