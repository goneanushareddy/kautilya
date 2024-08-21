import { Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';
import LazyLoad from 'react-lazyload';
const VideoGalleryComponent = ({ videos }) => {
  const opts = {
    height: '315', 
    width:"100%",  
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Row>
      {videos.map((video, index) => (
        <Col key={index} sm={6} md={4}>
          <div style={{ marginRight: '20px',marginBottom:'40px', height:"300px" }} className='iframe_video youtube-video'>
          <LazyLoad  offset={100}>
          <YouTube videoId={video.iframe_link} opts={opts} className='video-height' />
          </LazyLoad>
          <p className='video-desc'>{video.video_title}</p>
          </div>
         
        </Col>
      ))}
    </Row>
  );
};

export default VideoGalleryComponent;