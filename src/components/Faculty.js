import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import EnquiryModal from './Enquiry_modal';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'



const Faculty = ({ faculty, popup }) => {
  const [show, setShow] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const linkedin_icon_profiles = ["Antara Maitra",
    'Garima Goel', 'Rashika Singh', 'Sunidhi Singh', 'Akshit Dedha',
    'Lekhani Raja', 'Shitiz Jha', 'Vaibhavi Awasthi']

  const linkedin_profiles = {
    "Antara Maitra": "https://www.linkedin.com/in/antaramaitra/",
    'Garima Goel': "https://www.linkedin.com/in/garimagoel97/",
    'Rashika Singh': "https://www.linkedin.com/in/rashika-singh-5a2355248/",
    'Sunidhi Singh': "https://www.linkedin.com/in/singhsunidhi/",
    'Akshit Dedha': "https://www.linkedin.com/in/akshit-dedha-570831156/",
    'Lekhani Raja': "https://www.linkedin.com/in/lekhani-raja-b3a77b166/",
    'Shitiz Jha': "https://www.linkedin.com/in/shitiz-jha-84b96a122/",
    'Vaibhavi Awasthi': "https://www.linkedin.com/in/vaibhavi-awasthi-4709a3152/?originalSubdomain=in",
  }

  // const [showLinkedin, setShowLinkedin] = useState(false)


  const { pathname } = useLocation();

  // line added
  const navigate = useNavigate();


  const handleClose = () => {
    setShow(false);
    setSelectedFaculty(null);
  };

  const handleShow = (faculty) => {
    if (faculty.name === 'Arushi Jha Thakur' || faculty.name === 'Neelam Mehra' || faculty.name === 'Aluri Chakradhar Sarma' ||
      faculty.name === 'Vemali. V. Seshagiri Rao' || faculty.name === 'Ravuri Srinivas' || faculty.name === 'P. Lalitha' ||
      faculty.name === 'N. Venkata Raman' || faculty.name === 'Mr. Sridhar Pabbisetty' || faculty.name === 'Jitendra Biswal' ||
      faculty.name === 'Shuvabrata Garai' || faculty.name === 'Kaushal Kasliwal' || faculty.name === 'Vinay Chaudhary' ||
      faculty.name === 'Saumya Anand' || faculty.name === 'Oaishik Bhattacharya' || faculty.name === 'Aarini Mishra' || faculty.name === "Antara Maitra" ||
      faculty.name === 'Garima Goel' || faculty.name === 'Rashika Singh' || faculty.name === 'Sunidhi Singh' || faculty.name === 'Akshit Dedha' ||
      faculty.name === 'Lekhani Raja' || faculty.name === 'Shitiz Jha' || faculty.name === 'Vaibhavi Awasthi'
    ) {
      setShow(false);
    } else {
      setSelectedFaculty(faculty);
      setShow(true);
    }
  };
  const imagePath = 'https://guprojects.gitam.edu/kautilya-admin/public/ourteam/';
  const imagePathfaculty = 'https://guprojects.gitam.edu/kautilya-admin/public/faculty/';



  //console.log(faculty);
  const pageUrl = window.location.pathname;
  // Split the URL path by '/'
  const parts = pageUrl.split('/');
  // Get the last part of the URL path after the last '/'
  const lastPart = parts[parts.length - 1];

  // fnction added
  const handleNavigate = (slug) => {
    navigate(`/our-faculty/${slug}`);
  };


  return (
    <Container className='faculty'>
      {/* <img src={aluminImg1} alt='alumni' /> */}
      <div className={`grid-container ${faculty.length < 5 ? 'align-center1' : ''}`}>
        {faculty.map((eachobj) => (

          <div onClick={() => handleShow(eachobj)} key={eachobj.id}>
            {pathname === "/alumni-association" || pathname === "/contact-us" ? <img src={eachobj.imgURL} alt="alumni-association-images" /> :
              <img src={lastPart == "our-faculty" ? `${imagePathfaculty}${eachobj.profile}` : `${imagePath}${eachobj.profile}`} alt="profile" />}
            {/* {lastPart == "our-faculty" ? <img src={`${imagePathfaculty}${eachobj.profile}`} alt="profile" /> :  <img src={`${imagePath}${eachobj.profile}`} alt="profile" />} */}
            

            <div className='mt-2 d-flex flex-column align-items-center'>
            <p className='k-faculty-mai'>{eachobj.name}</p>
            {/* <p className='k-faculty-sub'>{eachobj.city}</p> */}
            {eachobj.city && <p className='mb-1'>{eachobj.city}</p>}
            {/* <p className='k-faculty-sub'>{eachobj.designation}</p> */}
            {/* <p className={eachobj.role === "Founding Team" || "Dean"  ?  'k-faculty-sub k-faculty-width' : 'k-faculty-sub' }>{eachobj.designation}</p> */}
            <p className={eachobj.role === "Founding Team" || eachobj.role === "Dean" ? 'k-faculty-sub k-faculty-width' : 'k-faculty-sub'}>{eachobj.designation}</p>
           </div>
           
            {linkedin_icon_profiles.includes(eachobj.name) && (
              <span className="text-primary contact-icon">
                <a href={linkedin_profiles[eachobj.name]} target='_blank'><i className="fa fa-linkedin"></i></a>


              </span>
            )}

          </div>
        ))}
      </div>

      {/* Modal outside the loop */}
      <Modal show={show} onHide={handleClose} className='faculty_modal'>
        <Modal.Header closeButton>
          {/* <Modal.Title >{selectedFaculty && selectedFaculty.name}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {selectedFaculty && <EnquiryModal facultyData={selectedFaculty} />}
        </Modal.Body>
        <Modal.Footer>
          {selectedFaculty && selectedFaculty.readmore === "Yes" && (
            <button className="btn btn-primary" onClick={() => handleNavigate(selectedFaculty.slug)}>

              Read More
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Faculty;




/*  */



