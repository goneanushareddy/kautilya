import '../assets/css/navbar.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container, Nav, Tab } from "react-bootstrap";
import kautilya from "../kautilya";

const Faculty_brief = () => {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await kautilya.get(`/faculty-brief/${slug}`);
                setData(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Data not available</div>;
    }

    const {
        full_banner,
        name,
        brief_description,
        linkedin_id,
        inded_id,
        twitter_id,
        mail,
        research_interest,
        areas_expertise,
        grants_distinctions,
        publications,
        membership,
        intiatives,
        recognitions,
        courses_fostered,
        talks_conferences,
        post_graduate,
        awards,
        funding,
    } = data;
    
   //console.log(data)
    const tabs = [
        { key: 'research_interest', label: 'Research Interest', content: research_interest },
        { key: 'areas_expertise', label: 'Areas of Expertise', content: areas_expertise },
        { key: 'grants_distinctions', label: 'Grants and Distinctions', content: grants_distinctions },
        { key: 'publications', label: 'Publications', content: publications },
        { key: 'membership', label: 'Membership', content: membership },
        { key: 'intiatives', label: 'Initiatives', content: intiatives },
        { key: 'recognitions', label: 'Recognitions', content: recognitions },
        { key: 'courses_fostered', label: 'Courses Fostered', content: courses_fostered },
        { key: 'talks_conferences', label: 'Talks & Conferences', content: talks_conferences },
        { key: 'post_graduate', label: 'Postgraduate', content: post_graduate },
        { key: 'awards', label: 'Awards', content: awards },
        { key: 'funding', label: 'Funding', content: funding },
    ];
    const defaultActiveKey = tabs.find(tab => tab.content)?.key || 'grants_distinctions';

    return (
        <>
            <section className="phd">
                <Container>
                    {full_banner && (
                        <img
                            src={`https://guprojects.gitam.edu/kautilya-admin/public/faculty/banner/${full_banner}`}
                            className="mt-3"
                            alt={name}
                        />
                    )}
                    <p className="mt-5"><span dangerouslySetInnerHTML={{ __html: brief_description }}></span></p>
                    <h5 className="mt-5 mb-4 d-flex flex-row align-items-center">
                        Contact:
                        {linkedin_id && (
                            <span className="text-primary contact-icon">
                                <a href={linkedin_id}><i className="fa fa-linkedin"></i></a>
                            </span>
                        )}
                        {mail && (
                            <span className="text-primary contact-icon">
                                <a href={`mailto:${mail}`}><i className="fa fa-envelope"></i></a>
                            </span>
                        )}
                        {twitter_id && (
                            <span className="text-primary contact-icon">
                                <a href={twitter_id}><i className="fa fa-twitter"></i></a>
                            </span>
                        )}
                        {inded_id && (
                            <span className="text-primary contact-icon">
                                <a href={inded_id}><i className="fa fa-inded"></i></a>
                            </span>
                        )}
                    </h5>
                </Container>
            </section>
            <section className="section_bg">
                <Container>
                <Row>
                        <Col xl={12} className="mt-4">
                            <Tab.Container defaultActiveKey={defaultActiveKey}>
                                <Nav variant="tabs" className="nav-fill">
                                    {tabs.map(tab => tab.content && (
                                        <Nav.Item key={tab.key} className='tab_item'>
                                            <Nav.Link eventKey={tab.key} className='tab_link'>{tab.label}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                                <Tab.Content>
                                    {tabs.map(tab => tab.content && (
                                        <Tab.Pane eventKey={tab.key} key={tab.key}>
                                            <span dangerouslySetInnerHTML={{ __html: tab.content }}></span>
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Faculty_brief;