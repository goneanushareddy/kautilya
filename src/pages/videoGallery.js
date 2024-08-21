import { Col, Container, Row } from "react-bootstrap";
import VideoGalleryComponent from "../components/VideoGalleryComponent";
import React, { useState, useEffect } from 'react';
import kautilya from '../kautilya';

const VideoGallery = () => {
    const [videosData, setGalleryData] = useState([]);
  
    useEffect(() => {
            kautilya.get('/fetch-videosdata').then(response => {
               // //console.log(response.data);
                setGalleryData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

  //console.log("Videos Data", videosData)
  

    return(
        <>
        <section>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h1 className="video-page-heading">
                        Videos
                        </h1>
                    </Col>
                </Row>
                <VideoGalleryComponent videos={videosData} />
                  
            </Container>
        </section>
        </>
    );
}
export default VideoGallery;