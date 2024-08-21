



function CardImageComponent(props) {
  return (
    
    <div  className="card">
    <img variant="top" src={ props.imgURL } alt='student' />
      <div className='card-body'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      
      </div>
    </div>
    
  
    

  );
}

export default CardImageComponent;