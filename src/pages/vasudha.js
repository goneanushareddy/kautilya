import { useState } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Tabs_section from "../components/Tabs";
import '../assets/css/navbar.css';



function Vasudha() {
  const [masterprogram, change1] = useState([
    {
      id: 1,
      name: " Research Interest",
      description: `
         
          <ul class="entry_content" >
          <li>Sociology.</li>
          <li>Gender.</li>
          <li>Feminism.</li>
          <li>Activism.</li>
          <li>Academic Writing</li>
</ul>
          `
    },


    {
      id: 2,
      name: " Courses Fostered",
      description: `
          <ul class="entry_content" >
          <li>Academic Writing Practices.</li>
<li>Understanding Gender.</li>
<li>Foundations of Academic Writing.</li>
<li>Gender, State, and Society.</li>
<li>Writing and Communication in Mathematics.</li>
          </ul>
          `
    },
    {
      id: 3,
      name: "Publications",
      description: `
          <ul class="entry_content" >
        
<li>The autonomous women’s movement in India: Beyond the NGOization framework. 2022. Asian Journal of Gender Studies, 28(4). DOI:10.1080/12259276.2022.2142361&nbsp;<strong><a href="https://www.tandfonline.com/doi/abs/10.1080/12259276.2022.2142361">Read The Full Article</a></strong></li>
<li>Book Review: Niharika Banerjea, Debanuj Dasgupta, Rohit. K Dasgupta and Jaime Grant eds., Friendship as Social Justice Activism: Critical Solidarities in a Global Perspective. 2020.Social Movement Studies, 20(4). DOI: 10.1080/14742837.2020.1770074&nbsp;<strong><a href="https://www.tandfonline.com/doi/abs/10.1080/14742837.2020.1770074">Read The Full Article</a></strong></li>
<li>Book Review: Gargi Chakravartty and Supriya Chotani, Charting a New Path: Early Years of National Federation of Indian Women. 2018. Indian Journal of Gender Studies, 25(1).&nbsp;<strong><a href="https://journals.sagepub.com/doi/abs/10.1177/0971521517738437">Read The Full Article</a></strong></li>
<li>Human Rights and Gender Studies Class 11. 2013. Central Board of Secondary Education. Co-authored.&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/2_Human__Gender_Studies_PART_1.pdf">Read The Full Article</a></strong></li>
<li>Human Rights and Gender Studies Class 12. 2013. Central Board of Secondary Education. Co-authored.&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/1_Human_Rights_and_Gender_Studies_Class_XII.pdf">Read The Full Article</a></strong></li>
    </ul>
          `
    },
    {
      id: 4,
      name: " Recognitions",
      description: `
          <ul class="entry_content" >
        
          <li>Junior Research Fellowship, University Grants Commission, 2010.</li>
          <li>Awarded the University gold medal in Sociology, University of Hyderabad, 2008.</li>
           </ul>
          `
    },


  ]);

  return (
    <>
      <section className="phd">

        <Container>
          <img src="./images/faculty/vasudha.webp" className='mt-3'></img>
          <p className="mt-5 mb-5">
            Dr. Vasudha is a Fellow in Sociology from Jawaharlal Nehru University, New Delhi, and an MA in Sociology from the University of Hyderabad,
            Hyderabad. Currently, working as an assistant professor at the Kautilya School of Public Policy and also chair the CASH initiatives.
            She has conducted writing workshops like, “The Pieces and the Puzzle: Theory, Method, and Data in Research Writing”;
            “How to Write Assignment Questions”; “Abstract Writing”; “Conducting Interviews During Fieldwork”;
            “Cultivation of Writing in the Field and Archive.” Vasudha has also co-authored
            the ‘Human Rights and Gender Studies’ book for high school students under the Central Board of Secondary Education.
          </p>

          <h5 className='mt-5 mb-4'>Contact:   <span className='text-primary'> <a href='mailto:vasudha@kautilya.org.in'>
            <i className='fa fa-envelope'></i>    </a>  </span>

          </h5>
        </Container>


      </section>
      <section className="section_bg">
        <Container>
          <Row>

            <Col xl={12} className="mt-4">
              <Tabs_section phd={masterprogram} />
            </Col>

          </Row>
        </Container>
      </section>

    </>
  );
}
export default Vasudha;