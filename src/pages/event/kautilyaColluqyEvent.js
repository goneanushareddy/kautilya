import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GoChevronRight } from "react-icons/go";



const kautilyaColloquyData = [
    {
        panelDiscussion: [
            {
                id: 1,
                title: 'Digital Governance',
                desc: 'Digital Governance is a key driver for efficient governance, promoting development through “Digital Connectivity” and “Data-Led Governance.” These policy interventions aim to enhance government services, making them more accessible to all citizens. However, the digital divide poses significant challenges and risks of exclusion. To realize India’s inclusive policy vision, critical interventions must focus on strategies that leverage digital technologies to augment government efficiency and transparency. The overarching goal is to ensure that no one is left behind in the digital revolution and that the benefits of technological advancements are equally distributed across the nation.',
                img: './../images/colluquy/kc-colloquy-1.jpeg',
                contentOrder: true
            },
            {
                id: 2,
                title: 'Climate Change & ESG',
                desc: 'Climate change and ESG imperatives underscore the need for sustainable development, shaping policy frameworks around critical interventions such as enforcing air pollution norms, setting renewable energy targets, implementing solid waste management rules, mandating industrial effluent treatment, and promoting environmental stewardship.',
                img: './../images/colluquy/kc-colloquy-2.jpeg',
                contentOrder: false,
            },
            {
                id: 3,
                title: 'Navigating the Future of Finance',
                desc: 'The panel discussion on the topic will rotate around themes like the role of emerging technologies, the existing regulatory landscape, compliance regulations, and regulatory insight. Similarly, conversations will revolve around digital transformation and the emergence of fintech, financial inclusion, access, and the future of work in finance. The panel will also propose policy recommendations that balance existing banking structures with the evolving financial landscape.',
                img: './../images/colluquy/kc-colloquy-3.jpeg',
                contentOrder: true,
            },
            {
                id: 4,
                title: 'Women In Public Policy',
                desc: 'The panel will discuss increasing women’s representation in the workforce and leadership positions. Discussions will cover gender-responsive policies, challenges faced by women, the importance of diverse perspectives, mentorship for women leaders, changing public perceptions through media, and the role of men as allies in achieving equality.',
                img: './../images/colluquy/kc-colloquy-4.jpeg',
                contentOrder: false,
            }
        ]
    },
    {
        Research_Paper_Abstract_Submission_Guidelines: [
            "Abstracts should be submitted in English and should be at most 500 words.",
            "Font size should be 12-point Times New Roman and 1.5 Spacing.",
            "The abstract should clearly state the research objectives, methodology, key findings, and implications.",
            "Authors must adhere to the APA style when formatting the abstract.",
            "Submissions must be original work and not under consideration for publication elsewhere.",
            "Please note that plagiarism and the submission of AI-generated content will not be encouraged for research paper abstract submissions. We value originality and authentic contributions to our discourse.",
            "Themes: Digital Governance, Climate Change & ESG (Environmental, Social, and Governance), Women in Public Policy, and Navigating the Future of Finance.",
            "The abstract submission should mention the theme under which the submission is being made.",
            "Last Date for Abstract Submission: 15th July.",
            "The shortlisted abstract submissions will be notified and given 20 days to submit their full paper.",
            "Conference Registration Charges: Rs 450 for selected abstracts.",
            "The registered shortlisted paper presenters will receive a conference kit, lunch, and high tea coupons.",
            "The jury will award certificates for the best paper presentations, categorised by theme, and all the paper presenters will receive digital presentation certificates."
        ]
    },
    {
        Organising_Committee: [
            "Aradhana Pandian – (Core Committee, MPP Cohort of 2023-25)",
            "Yvonna Tia Steele – (Core Committee, MPP Cohort of 2023-25)",
            "Lakshmanan S – (Head of Content team, MPP Cohort of 2023-25)",
            "Rohit Singh – (Head of Marketing team, MPP Cohort of 2023-25)",
            "Subhash Gottumukkala – (Head of Operations and Logistics, MPP Cohort of 2023-25)",
            "Vivek Kalhan Reshi – (Head of Paper Presentations team, MPP Cohort of 2023-25)",
            "Oaishik Bhattacharya – (Head of Paper Presentations team, MPP Cohort of 2023-25)"
        ]
    }
];

const TextImgContent = ({ content }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <p>{content.desc}</p>
                </Col>
                <Col xs={12} md={4}>
                    <img src={content.img} alt='kc-colloquy-img'/>
                </Col>
            </Row>
        </Container>
    )
}

const ImgTextContent = ({ content }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <img src={content.img} alt='kc-colloquy-img' />
                </Col>
                <Col xs={12} md={8}>
                    <p>{content.desc}</p>
                </Col>
            </Row>
        </Container>
    )
}

const ColloquyEvent = () => {



    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab) => {
        setActiveTab(tab);

    };

    const handleScroll = (tab) => {
        document.getElementById(tab).scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className='kautilya-Colloquy-main-container'>
            <div className='title-container'>
                <h2 className='kc-title'>Kautilya Colloquy</h2>
                <p className='kc-caption'>Inclusive Policies for India</p>
            </div>

            <div className='kc-colloquy-tabs-container'>
                <ul className='kc-colloquy-ul'>
                    <li className={`kc-colloquy-ul-li ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleScroll('about')} onMouseEnter={() => handleTabClick('about')} onMouseLeave={() => handleTabClick('about')}>
                        About
                    </li>
                    <li className={`kc-colloquy-ul-li ${activeTab === 'panel-discussion' ? 'active' : ''}`} onClick={() => handleScroll('panel-discussion')} onMouseEnter={() => handleTabClick('panel-discussion')} onMouseLeave={() => handleTabClick('panel-discussion')}>
                        Panel discussion
                    </li>
                    <li className={`kc-colloquy-ul-li ${activeTab === 'research-paper-submission' ? 'active' : ''}`} onClick={() => handleScroll('research-paper-submission')} onMouseEnter={() => handleTabClick('research-paper-submission')} onMouseLeave={() => handleTabClick('research-paper-submission')}>
                        Research Paper Submission
                    </li>
                </ul>
            </div>


            <div id='about' className='kc-section-container'>
                <div className='kc-section-content-container'>
                    <h2 className='section-headings'>About</h2>
                    <p>
                        The Kautilya School of Public Policy at GITAM University, Hyderabad, is proud to announce the second annual Kautilya Colloquy, a student-led initiative, scheduled for September 21st, 2024. The Colloquy will feature research presentations and panel discussions centred around four subthemes: Digital Governance, Climate Change & ESG, Women in Public Policy, and Navigating the Future of Finance. During the research paper presentations, researchers and practitioners will share insights, addressing key policy challenges and proposing inclusive policy solutions. The panel discussions on these four subthemes will host experts, including renowned academicians, senior government officials, industry stalwarts, and policy practitioners. These panels will offer diverse perspectives and explore pathways for inclusive policies in India across digital governance, climate change, women in public policy, and the future of finance.
                    </p>
                </div>
            </div>

            <div id='panel-discussion' className='kc-section-container panel-container'>
                <div className='kc-section-content-container panel-section-container'>
                    <h2 className='section-headings'>Panel Discussion</h2>
                    {kautilyaColloquyData[0].panelDiscussion.map((each) => {
                        return (
                            <React.Fragment key={each.id}>
                                <div className='panel-discussion-title-container'>
                                    <GoChevronRight className='pointer-icon' />
                                    <h3 className='panel-discussion-title'>{each.title}</h3>
                                </div>
                                {each.contentOrder ? <TextImgContent content={each} /> : <ImgTextContent content={each} />}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>

            <div id='research-paper-submission' className='kc-section-container'>
                <div className='kc-section-content-container'>
                    <h2 className='section-headings'>Research Paper Submission Process</h2>
                    <p>
                        We invite researchers to submit abstracts for presentations. We welcome Advanced Research (projects with results and conclusions ready for discussion) and Research in Progress (ongoing projects with preliminary findings or where results are still being developed). Please include the following information with your abstract: names, designations (job titles), affiliations (institutions or organisations), email addresses, and contact phone numbers for all authors <a href='https://docs.google.com/forms/d/e/1FAIpQLSdrGhLbylkseTgP58tAFHDDrpAxe_Zika2v1PTDcDgwppNlLg/viewform' className='anchor'> Click here for Abstract submission </a>. Kindly review the abstract submission guidelines before submitting the abstract.
                    </p>

                    <div className='panel-discussion-title-container'>
                        <GoChevronRight className='pointer-icon' />
                        <h3 className='panel-discussion-title'>Research Paper Abstract Submission Guidelines:</h3>
                    </div>

                    <ul className='kc-colloquy-ul-research'>
                        {kautilyaColloquyData[1].Research_Paper_Abstract_Submission_Guidelines.map((each, index) => (
                            <li key={index} className='kc-colloquy-ul-li-research'>{each}</li>
                        ))}
                        <li className='kc-colloquy-ul-li-research'>If you have any queries regarding the research paper presentation, write to us at <a href="mailto:paper_kspp2024@kautilya.org.in" className='anchor-mail'>paper_kspp2024@kautilya.org.in</a></li>
                    </ul>
                </div>
            </div>

            <div className='kc-section-container panel-container'>
                <div className='kc-section-content-container panel-section-container'>
                    <h2 className='section-headings'>Become a Kautilya Colloquy Delegate</h2>
                    <p>Become a delegate at the Kautilya Colloquy and immerse yourself in a day of insightful panel discussions, cutting-edge research presentations, and valuable networking opportunities.<a href="https://gevents.gitam.edu/registration/MTQ2Mg" target='_blank' className='anchor'>Click here for Payment</a></p>
                </div>
            </div>

            <div className='kc-section-container'>
                <div className='kc-section-content-container'>
                    <h2 className='section-headings'>Contact Us</h2>
                    <ul>
                        <li>In case of any queries or suggestions, please write to us at: <a href="mailto:queries_kspp2024@kautilya.org.in" className='anchor-mail'>queries_kspp2024@kautilya.org.in</a></li>
                    </ul>
                </div>
            </div>

            <div className='kc-section-container panel-container'>
                <div className='kc-section-content-container'>
                    <h2 className='section-headings'>Organising Committee</h2>
                    <ul className='kc-colloquy-ul-research'>
                        {kautilyaColloquyData[2].Organising_Committee.map((each, index) => (
                            <li key={index} className='kc-colloquy-ul-li-research'>{each}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ColloquyEvent;