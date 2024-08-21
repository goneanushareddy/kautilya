import Container from 'react-bootstrap/Container';


const MentorComp = ({ faculty }) => {
   
   
   const imgPath = "https://guprojects.gitam.edu/kautilya-admin/public/mentors/"
  
    return (
      <Container className='faculty'>
        <div className={`grid-container ${faculty.length < 5 ? 'align-center1' : ''}`}>
          {faculty.map((eachobj) => (
            <div>
              <img src={`${imgPath}${eachobj.desktop_banner}`} alt={eachobj.name} />
              <p className='k-faculty-mai'>{eachobj.name}</p>
             
            </div>
          ))}
        </div>
  
      
      </Container>
    );
  }
  
  export default MentorComp;
  