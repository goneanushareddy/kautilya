import { Container, Row, Col } from "react-bootstrap";
import SimpleSlider from "../components/SlickSlider";
import NumberCounter from "../components/Counter";
import { useEffect, useState } from "react";
import axios from 'axios';

function StudentMix() {
    // const slider1 = [
    //     {
    //         id: 1,
    //         imgURL: "./images/studentmix/601-800-Rank-in-THE-mpact-Rankings-2023-in-Overall-SDGs.jpg",
    //     },
    //     {
    //         id: 2,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-3.jpg",
    //     },
    //     {
    //         id: 3,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-4.jpg",
    //     },
    //     {
    //         id: 4,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-5.jpg",
    //     },
    //     {
    //         id: 5,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-1.jpg",
    //     },

    // ];
    // const slider2 = [
    //     {
    //         id: 1,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-1-1.jpg",
    //     },
    //     {
    //         id: 2,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-2-1.jpg",
    //     },
    //     {
    //         id: 3,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-3-1.jpg",
    //     },
    //     {
    //         id: 4,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-4-1.jpg",
    //     },
    //     {
    //         id: 5,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-5-1.jpg",
    //     },

    // ];

    // const slider3 = [
    //     {
    //         id: 1,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-1-2.jpg",
    //     },
    //     {
    //         id: 2,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-2-2.jpg",
    //     },
    //     {
    //         id: 3,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-3-2.jpg",
    //     },
    //     {
    //         id: 4,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-4-2.jpg",
    //     },
    //     {
    //         id: 5,
    //         imgURL: "./images/studentmix/kautilya-batch-profiles-web-slides-5-2.jpg",
    //     },

    // ];

    const page = "student-Mix"

    const [studentMixData, setstudentMixData] = useState([]);
    

    useEffect(() => {
        fetchstudentMixData();
    }, []);
    const fetchstudentMixData = async () => {
        try {
            const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-student-mix'); // Replace with your actual API endpoint
            setstudentMixData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // console.log("student-mix live now",studentMixData)
   
    const firstSlider = studentMixData?.filter(each => each.category === "2023-25");
    const secondSlider = studentMixData?.filter(each => each.category === "2022-24");
    const thirdSlider = studentMixData?.filter(each => each.category === "2021-23");
    

    return (
        <section className="student-mix">
            <Container>
                <Row>
                    <Col xl={12}>
                        <h1 className="mb-5">#IndiaByKautilya</h1>

                    </Col>

                    <Col xl={4}>
                        <p className="count-ratio"><NumberCounter end={19} duration={1000} />:<span className="counter ">1</span></p>
                        <p className="counter-txt">States Represented by Students</p>
                    </Col>
                    <Col xl={4}>
                        <p className="count-ratio"><span className="counter "><NumberCounter end={41} duration={1000} /></span></p>
                        <p className="counter-txt"><span className="counter ">₹ 41 LPA highest package</span></p>
                    </Col>
                    <Col xl={4}>
                        <p className="count-ratio"><NumberCounter end={35} duration={1000} />%</p>
                        <p className="counter-txt">Students having prior work experience</p>
                    </Col>
                    <Row className="mt-5">
                        <Col xl={4}>
                            <p className="count-ratio"><NumberCounter end={56} duration={1000} /></p>
                            <p className="counter-txt">Cities Represented by Students</p>
                        </Col>
                        <Col xl={4}>
                            <p className="count-ratio"><span className="counter "><NumberCounter end={60} duration={1000} />+</span></p>
                            <p className="counter-txt"><span className="counter ">Publications By Faculties</span></p>
                        </Col>

                        <Col xl={4}>
                            <p className="count-ratio"><NumberCounter end={42} duration={1000} />%</p>
                            <p className="counter-txt">Students are girl child</p>
                        </Col>
                    </Row>
                    <Col xl={12}>
                        <p className="batch"><b>BATCH 2023-25</b></p>
                        <SimpleSlider sliderdata={firstSlider} page={page} />
                        <p className="batch"><b>BATCH 2022-24:</b></p>
                        <SimpleSlider sliderdata={secondSlider} page={page} />
                        <p className="batch"><b>BATCH 2021-23:</b></p>
                        <SimpleSlider sliderdata={thirdSlider} page={page} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default StudentMix;