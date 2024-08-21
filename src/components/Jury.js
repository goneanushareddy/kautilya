import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import EnquiryModal from './Enquiry_modal';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Jury = ({ faculty }) => {
  const [show, setShow] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedFaculty(null);
  };

  const handleShow = (faculty) => {
   
    setSelectedFaculty(faculty);
    setShow(true);
   
    
  };
  return (
 
      <Container className='faculty'>
        <Row className='d-flex justify-content-center'>
          {faculty.map((eachobj) => (
          
              <Col onClick={() => handleShow(eachobj)} lg={2} className='col-half-offset mt-5' key={eachobj.id}>
                <img src={eachobj.imgURL} alt={eachobj.name} />
               
                <p className='kc-sec2-sub2'>{eachobj.name}</p>
              </Col>
          
          ))}
        </Row>

        {/* Modal outside the loop */}
        <Modal show={show} onHide={handleClose} className='faculty_modal'>
            <Modal.Header closeButton>
               {/*<Modal.Title >{selectedFaculty && selectedFaculty.name}</Modal.Title>*/}
          </Modal.Header>
          <Modal.Body>
            {selectedFaculty && <EnquiryModal facultyData={selectedFaculty} />}
          </Modal.Body>
        </Modal>
      </Container>
    
  );
}


export default Jury;