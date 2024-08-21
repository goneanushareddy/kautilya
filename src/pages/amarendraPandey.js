import { useState } from 'react';
import { Col,Row, Container } from "react-bootstrap";
import Tabs_section from "../components/Tabs";
import '../assets/css/navbar.css';



function AmarendraPandey (){
    const [masterprogram,change1] = useState([
        {
          id:1,
          name : " Research Interest",
          description: `
          <p>
          With a total of 09 years of work experience, out of which 07 years in teaching and research. His areas of research interest lies in:
          </p>
          

          <ul class="entry_content" >
<li>Macro Economics</li>
<li>Economic policy and regulation</li>
<li>Structural Transformation and Economic Growth</li>
<li>Interaction between the Financial Market and Real Economy</li>
</ul>
          `
        },
        {
          id:2,
          name : "Awards",
          description: `
          <ul class="entry_content" >
<li>Best Teacher Award, Birla Institute of Management Technology, 2020</li>
<li>Best Doctoral Thesis Award, Birla Institute of Management Technology, 2018.</li>
</ul>
          `
        },
        {
          id:3,
          name : "Publications",
          description: `
          <h6> ARTICLES:</h6>
          <ul class="entry_content" >
<li>Kumar, V., Singh, R., &amp; Pandey, A. (2023). Multiple stakeholders’ critical success factors scale for success on large construction projects. Asian Journal of Civil Engineering, 1-15. 10.1007/s42107-023-00871-3 <strong><a href="https://link.springer.com/article/10.1007/s42107-023-00871-3">Read The Full Article</a></strong></li>
<li>Kumar, V., Pandey, A., &amp; Singh, R. (2023). Project success and critical success factors of construction projects: project practitioners’ perspectives. Organization, Technology, and Management in Construction: an International Journal, 15(1), 1-22. <strong><a href="https://sciendo.com/article/10.2478/otmcj-2023-0001">Read The Full Article</a></strong></li>
<li>Kumar, V., Pandey, A. &amp; Singh, R. (2023). Critical Success Factor Models for Project Success. Journal of Engineering, Project &amp;amp; Production Management, 13(2), 148-158. <strong><a href="https://www.researchgate.net/publication/370072493_Critical_Success_Factor_Models_for_Project_Success">Read The Full Article</a></strong>.</li>
<li>Pandey, A., &amp; Shettigar, J. (2022). Long-Run Relationship Between Monetary Policy and Inflation in India. Finance India, 36(4), 1193-1204 <strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/FI-364-Art02.pdf">Read The Full Article</a></strong></li>
<li>Shrivastava, A., &amp; Pandey, A. (2022), Understanding inter-group response biases in culturally diverse teams, International Journal of Intercultural Relations, 88, 189-199. <strong><a href="https://www.sciencedirect.com/science/article/abs/pii/S0147176722000517?via%3Dihub">Read The Full Article</a></strong></li>
<li>Kumar,V., Pandey, A., &amp; Singh, R. (2021), Can Artificial Intelligence be a Critical Success Factor of Construction Projects? Project practitioners’ perspectives. Technology Innovation Management Review, 11(11/12): 17-32. <strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/TIMReview_2021_Issue_11-12-2.pdf">Read The Full Article</a></strong></li>
<li>Pandey, A., Shettigar, J., &amp; Bose, A. (2021). Evaluation of the Inflation Forecasting Process of the Reserve Bank of India: A Text Analysis Approach. SAGE Open, 11(3). <strong><a href="https://journals.sagepub.com/doi/10.1177/21582440211033826">Read The Full Article</a></strong></li>
<li>Pandey, A., &amp; Shettigar, J. (2019), Impact of external shock on inflation in India, Indian Journal of Economics &amp; Business, 19(1), 293-306. <strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/90189_22_amrendra_pandey.pdf">Read The Full Article</a></strong></li>
</ul>
          `
         },
        {
            id:4,
          name : " Courses Fostered",
          description: `
          <ul class="entry_content" >
          <li>Macroeconomics of Public Policy.</li>
<li>Reforming the Indian Economy: Challenges and Opportunities.</li>
<li>Elementary Econometrics.</li>
<li>Advanced Econometrics.</li>
<li>Fixed income Securities.</li>
          </ul>
          `
        },
        {
            id:5,
          name : "  Funding",
          description: `
          <ul class="entry_content" >
          <li>A Comparative Assessment of the Impact of Beti Bachao Beti Padhao Scheme in the Gender-Critical Districts of Telangana and Uttar Pradesh, <em>Indian Council of Social Science Research</em>, 2023</li>
          <li>Impact of EASE Reforms on Banking, <em>Indian Institute of Banking and Finance (IIBF), India</em>, 2022</li>
          <li>Microinsurance product development for the SWAPNO Project Beneficiaries in Bangladesh, <em>United Nations Development Programme (UNDP), Bangladesh</em>, 2020</li>
          <li>Assessing and closing the protection gap of healthcare needs of rural areas through community participation and PPP- A comparative study of Uttar Pradesh and Kerala, <em>Insurance Regulatory Development Authority of India (IRDAI)</em>, 2019</li>
          <li>Developing lexicon for mapping consumer perception of Indian brands using online narrative campaigns,<em> Jagadish Seth Foundation</em>, 2018</li>
          </ul>
          `
        },
        
        
      ]);
   
    return(
        <>
         <section className="phd">   
         
            <Container>
                <img src="./images/faculty/amar.webp" className='mt-3' alt='faculty image' />
                <p className="mt-5 mb-5">Dr. Amrendra is a Fellow in Management (Doctorate), from BIMTECH, India, and a Financial Risk Manager (FRM) graduate from GARP, USA. He is a member of, the Global Association of Risk Professionals, USA, and conducts research in the areas of economic policy. Currently, working as an associate professor at the Kautilya School of Public Policy and also chair the research program.</p>
               
                <p className='mb-5'>Dr. Pandey has numerous research papers and articles to his credit which have been published in the International Journal of Intercultural Relations, Sage Open, Technology Innovation Management Review, Current Issues in Economics and Finance (Book chapter- Springer Nature), and Advances in Finance & Applied Economics (Book chapter- Springer Nature).’</p>
           
                <h5 className='mt-5 mb-4'>Contact: <span className='text-primary'> <a href='https://www.linkedin.com/in/dr-amrendra-pandey-frm-47144214' ><i className='fa fa-linkedin'></i></a> </span>
                 <span className='text-primary'> <a href='mailto:amrendra@kautilya.org.in'>
                 <i className='fa fa-envelope'></i>    </a>  </span>
                
                 </h5>
            </Container>
            
            
            </section>
            <section className="section_bg">
            <Container>
                <Row>
                   
                    <Col xl={12} className="mt-4">
                        <Tabs_section phd={masterprogram}/>
                    </Col>
                
                </Row>
            </Container>
        </section>
      
        </>
    );
}
export default AmarendraPandey;