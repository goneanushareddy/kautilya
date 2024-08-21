import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';


const BlogPage = () => {
    const location = useLocation();
    const { data } = location.state || {};
  

  // Check if data is available
  if (!data) {
    // Handle the case when data is not available
    return <div>Data not available</div>;
  }

  // Access data properties
  const { title, project_des,user_img,description,banner,download } = data;

  return (
    <section>
        <Container className='inner_capstone'>
         <h4>CAPSTONE PROJECT</h4>
         <h2>{title}</h2>
         <img src={banner} className='mt-4 mb-4' alt={title}/>
         <div className="d-flex">
          <img src={user_img} className='user_img' alt={title} />
          <p className='user_text'><span>CAPSTONE PROJECT by,<br/></span><span dangerouslySetInnerHTML={{ __html: project_des}}></span> </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: description}} className='mt-4 mb-3'></div>
         
          <a href="" download={download}><strong>DOWNLOAD THESIS <i className="fa fa-download" aria-hidden="true"></i></strong></a>
      </Container>
    </section>
  );
};

export default BlogPage;