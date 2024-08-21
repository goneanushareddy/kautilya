import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EnquiryForm from '../pages/register';

import { useLocation } from 'react-router-dom';



const EnquiryModal = ({ facultyData }) => {

  const { pathname } = useLocation();

  
const imagePath = 'https://guprojects.gitam.edu/kautilya-admin/public/ourteam/';

const imagePathfaculty = 'https://guprojects.gitam.edu/kautilya-admin/public/faculty/';


  
const pageUrl = window.location.pathname;
// Split the URL path by '/'
const parts = pageUrl.split('/');
// Get the last part of the URL path after the last '/'
const lastPart = parts[parts.length - 1];


  if(!facultyData){
    return ;
  }
  ////console.log(facultyData);
  // Use facultyData to display information in the modal
  return (
    <div className='enquiry_modal_content'>
      {/* <img src={`${imagePath}${facultyData.profile}`} alt={facultyData.name}  /> */}
      {pathname === "/alumni-association" || pathname === "/paper-presentation" || pathname === "/simulation" || pathname === "/contact-us"
       ? <img src={facultyData.imgURL} alt="alumni-association-images" /> :
              <img src={lastPart == "our-faculty" ? `${imagePathfaculty}${facultyData.profile}` : `${imagePath}${facultyData.profile}`} alt="profile" />}
      <p className='faculty_name'>{facultyData.name}</p>
      <p className='faculty_designation'>{facultyData.designation} {facultyData.city} </p>
      
      <p dangerouslySetInnerHTML={ { __html:  facultyData.description} }></p>
    
      {/* Add more fields as needed */}
    </div>
  );
};

export default EnquiryModal;