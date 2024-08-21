import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Tabs_section from "../components/Tabs";
import TabSection from "../components/TabSection";


import '../assets/css/navbar.css';


function Publications() {

  const bannerPath = "https://guprojects.gitam.edu/kautilya-admin/public/publications/"

  const [publicantsbanner, setPublicantsbanner] = useState([]);
  const [publicantsTabsData, setPublicantsTabsData] = useState([]);

  useEffect(() => {
    fetchpublicantsbanner();
    fetchpublicantsTabsData();
  }, []);
  const fetchpublicantsbanner = async () => {
    try {
      const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-publication-slider-data'); // Replace with your actual API endpoint
      setPublicantsbanner(response.data.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchpublicantsTabsData = async () => {
    try {
      const response = await axios.get('https://guprojects.gitam.edu/kautilya-admin/api/fetch-publication-tabs-data'); // Replace with your actual API endpoint
      setPublicantsTabsData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log("publication Tabs", publicantsTabsData);

  const facultyTabs = publicantsTabsData?.filter((each) => each.category === "Publications page");


  const [phddata, change] = useState([
    {
      id: '1',
      name: " Dr. Amrendra",
      description: `
      <div>
        <p><strong>ARTICLES:</strong></p>
        <ul class="anchor_color_red">
          <li>Kumar, V., Singh, R., Pandey, A. (2023). Multiple stakeholders’ critical success factors scale for success on large construction projects. Asian Journal of Civil Engineering, 1-15. 10.1007/s42107-023-00871-3&nbsp;<strong><a href="https://link.springer.com/article/10.1007/s42107-023-00871-3">Read The Full Article</a></strong></li>
          <li>Kumar, V., Pandey, A., Singh, R. (2023). Project success and critical success factors of construction projects: project practitioners’ perspectives. Organization, Technology, and Management in Construction: an International Journal, 15(1), 1-22.&nbsp;<strong><a href="https://sciendo.com/article/10.2478/otmcj-2023-0001">Read The Full Article</a></strong></li>
          <li>Kumar, V., Pandey, A. Singh, R. (2023). Critical Success Factor Models for Project Success. Journal of Engineering, Projectamp; Production Management, 13(2), 148-158.&nbsp;<strong><a href="https://www.researchgate.net/publication/370072493_Critical_Success_Factor_Models_for_Project_Success">Read The Full Article</a></strong>.</li>
          <li>Pandey, A., Shettigar, J. (2022). Long-Run Relationship Between Monetary Policy and Inflation in India. Finance India, 36(4), 1193-1204&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/FI-364-Art02.pdf">Read The Full Article</a></strong></li>
          <li>Shrivastava, A., Pandey, A. (2022), Understanding inter-group response biases in culturally diverse teams, International Journal of Intercultural Relations, 88, 189-199.&nbsp;<strong><a href="https://www.sciencedirect.com/science/article/abs/pii/S0147176722000517?via%3Dihub">Read The Full Article</a></strong></li>
          <li>Kumar,V., Pandey, A., Singh, R. (2021), Can Artificial Intelligence be a Critical Success Factor of Construction Projects? Project practitioners’ perspectives. Technology Innovation Management Review, 11(11/12): 17-32.&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/TIMReview_2021_Issue_11-12-2.pdf">Read The Full Article</a></strong></li>
          <li>Pandey, A., Shettigar, J., Bose, A. (2021). Evaluation of the Inflation Forecasting Process of the Reserve Bank of India: A Text Analysis Approach. SAGE Open, 11(3).&nbsp;<strong><a href="https://journals.sagepub.com/doi/10.1177/21582440211033826">Read The Full Article</a></strong></li>
          <li>Pandey, A., Shettigar, J. (2019), Impact of external shock on inflation in India, Indian Journal of Economics Business, 19(1), 293-306.&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/90189_22_amrendra_pandey.pdf">Read The Full Article</a></strong></li>
          
        </ul>

        <p class=""><strong>BOOKS, CHAPTERS AND TECHNICAL REPORTS</strong></p>
        <ul >
         
            <li>Pandey, A., Shettigar, J. (2018) Impact of fiscal policy initiatives on inflation in India,&nbsp;&nbsp;<i>In: Bhanumurthy N., Shanmugan K., Nerlekar S., and Hegade, S. (eds), Advances in Finance Applied Economics,&nbsp;</i>Springer, Singapore<i>. https://doi.org/10.1007/978-981-13-1696-8_7</i></li>
            <li>Pandey, A., Shettigar, J. (2017), Relationship Between Monetary Policy and Industrial Production in India”,<i>&nbsp;In: Kamaiah B., Shylajan C., Seshaiah S., Aruna M., Mukharjee S. (eds), Current issues in Economics and Finance.&nbsp;</i>Springer Singapore.&nbsp;<i>https://doi.org/10.1007/978-981-10-5810-3_3</i></li>
            <li>Assessing and closing the protection gap of healthcare needs of rural areas through community participation and PPP- A comparative study of UP and Kerala. (2020).&nbsp;&nbsp;<i>Insurance Regulatory Development Authority of India (IRDAI).&nbsp;</i></li>
            <li>Need Assessment of Micro-Insurance Products for SWAPNO Beneficiaries in Bangladesh. For the United Nations Development Programme, Bangladesh</li>
            
           
        </ul>
      </div>
    `,
    },

    {
      id: '2',
      name: " Dr. Sharique",
      description: `
    <div class="anchor_color_red">
   <strong>List of Publications:</strong>
<ul>
<li>Manazir, S.H. Reimagining public policy formulation and analysis: a comprehensive theoretical framework for public policy.&nbsp;Discov glob soc, Springer Nature&nbsp;1, 16 (2023).&nbsp;<strong><a href="https://doi.org/10.1007/s44282-023-00018-4">Read The Full Article</a></strong></li>
<li>Sharique Hassan&nbsp;Manazir&nbsp;(2023)&nbsp;Abstruse Characteristics of People Participation: An Analysis of the Smart City Campaign Over myGov Platform in India,&nbsp;International Journal of Public Administration, Routledge Publication.&nbsp;DOI:&nbsp;10.1080/01900692.2023.2262159</li>
<li>Manazir, S. H., Govind, M., &amp; R, R. (2019). My Safetipin Mobile Phone Application: Case Study of E-Participation Platform for Women Safety in India.&nbsp;Journal of Scientometric Research,&nbsp;8(1), 47–53.&nbsp;<strong><a href="https://doi.org/10.5530/jscires.8.1.7">Read The Full Article</a></strong></li>
<li>Manazir, S. H. (2017). Valuation of Patents-Comparative Analysis.&nbsp;Journal of Scientometric Research,&nbsp;5(3), 230–235.&nbsp;<strong><a href="https://doi.org/10.5530/jscires.5.3.6">Read The Full Article</a></strong></li>
<li>Manazir, S. H. (2017). Scientifically Yours: Selected Indian Women Scientists.&nbsp;Journal of Scientometric Research,&nbsp;6(1), 60–61.&nbsp;<strong><a href="https://doi.org/10.5530/jscires.6.1.10">Read The Full Article</a></strong></li>
</ul>


<p><strong>Book Chapter:</strong></p>
<ol >
<li>Digital Democracy and India: Study of Evolution in Citizen e-Participation, published as a chapter in the book titled “Emerging Trends in Information Technology” Page: 48-63, ISBN: 978-93-89165-99-9, by Bloomsbury Publication.</li>
</ol>

<p ><strong>Working Paper:</strong></p>
<ol >
<li>Revisiting Marx and Schumpeter on Technology: A Comparative Analysis (2022). Available at SSRN, Elsevier.</li>
<li>Personal Data &amp; Digital Democracy Regime: A Critical Analysis of Proposed Policies in India (2022). Available at SSRN, Elsevier</li>
</ol>

<p ><strong>Policy Document/Brief:</strong></p>
<ol >
<li>Customer-Centric E-Commerce in India” published by Bharti Institute of Public Policy, Indian School of Business, August 2022</li>
<li>E-learning pedagogy in Institute of Higher Education in India post-lockdown due to COVID-19 Pandemic, published by Digital Inclusion Research Forum, December 2020</li>
</ol>

<p ><strong>Articles in Press:</strong></p>
<ol >
<li><em>Design Thinking&nbsp;</em>Can Impact Public Policy, It’s The Secret Sauce India Needs | Opinion published by ABP News (2024)</li>
<li>Why it is Imperative to Priorities Capacity Building of Elected Representatives in India | Opinion published by News 18 (2023)</li>
<li>Social Shaping and Construction of Technology: Response to Noam Chomsky’s Critique of ChatGPT | Opinion published by News 18 (2023)</li>
<li>Non-Personal Data Governance Policies in South Asia: An STS perspective from India published by Backchannels: Society for Social Studies of Sciences (2021)</li>
<li>Gender Disparity in Internet Access in India &amp; Facebook’s 3i Report: Evaluation or Misrepresentation published by Backchannels: Society for Social Studies of Sciences (2020)</li>
<li>Why the UN e-Government Survey in India needs to understand better the idea of Digital Inclusion published by LSE South Asia Blog (2019)</li>
<li>Union Budget 2017-18: Leading India towards a digital economy published by LSE South Asia Blog (2017)</li>
<li>A story of demand and dissent for Mumbai’s skywalks published by World Resource Institute: Ross Centre (2014)</li>
</ol>

         </div>
  `
    },
    {
      id: '3',
      name: " Dr. Kanica",
      description: `
      <div class="anchor_color_red">
        <p><strong>BOOKS</strong></p>
        <ul>
          <li>Upcoming: “Women Voices in Disarmament” edited by Dr. Manpreet Sethi and Dr. Kanica Rakhra Routledge, Taylor and Francis</li>
        </ul>
  
        <p><strong>BOOK CHAPTERS:</strong></p>
        <ul>
          <li>Upcoming: “Nuclear Confidence Building Measures with India’s Nuclear Neighbours” edited by Dr. Rajiv Nayan, IDSA</li>
          <li>“Challenges to the NPT” in 'The Global Nuclear Landscape: Energy, Non-proliferation, and Disarmament, (ISBN: 9789391490539) edited by Dr. Manpreet Sethi, Knowledge World Publications, 2021. <strong><a href="http://kwpub.in/Home/product/9789391490539/the-global-nuclear-landscape-energy_-non-proliferation-and-disarmament">Read The Full Article</a></strong></li>
          <li>“India and the Non-Proliferation Treaty: Lessons for the Outlier States” in ‘India and Global Nuclear Governance’ edited by Reshmi Kazi (Jamia Milia Islamia) and Ashild Kolas (Peace Research Institute Oslo), Knowledge World Publications, 2019 <strong><a href="http://kwpub.in/Home/product/9789387324985/india-in-global-nuclear-governance">Read The Full Article</a></strong></li>
          <li>“Introduction: Global Nuclear Governance in the Making” Reshmi Kazi and Kanica Rakhra in ‘India and Global Nuclear Governance’ edited by Reshmi Kazi (Jamia Milia Islamia) and Ashild Kolas (Peace Research Institute Oslo), Knowledge World Publications, 2019</li>
        </ul>
  
        <p><strong>JOURNAL ARTICLES:</strong></p>
        <ul>
          <li>The Role of Prestige in Diplomatic Decision Making for South Asian Journal of Diplomacy 2016 ISSN 2229 – 3361</li>
          <li>“December 13 Attack on Indian Parliament: Looking at Attribution Theory Explanations” for Defense and Diplomacy Journal Vol. 2 (3).</li>
          <li>“Impasse in Iran” for Defense and Diplomacy Journal Vol. 2 (2).</li>
        </ul>
  
        <p><strong>REPORTS:</strong></p>
        <ul>
          <li>Getting to the Table: From Bilateral to Multilateral Nuclear Arms Control Negotiations" By Maria Chepurina, Kanica Rakhra, Victoria Sanchez, Benjamin Schaller ACONA Report <strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/Setting-the-Stage-for-a-New-Multilateral-Nuclear-Arms-Control-Regime68.pdf">Read The Full Article</a></strong></li>
          <li>“Suicide Terrorism (Jul-Dec 2007): A Review” Special Report for Institute of Peace and Conflict Studies. <a href="http://www.ipcs.org/special-report/suicide-terrorism/suicide-terrorism-jul-dec-2007-a-review-55.html"><strong>Read The Full Article</strong></a></li>
        </ul>
  
        <p><strong>BOOK REVIEW:</strong></p>
        <ul>
          <li>“Nuclear Disarmament: India-EU Perspectives, ed.” Book Review for Indian Foreign Affairs Journal, Vol. 6 (3).</li>
        </ul>
  
        <p><strong>ARTICLES:</strong></p>
        <ul >
          <li>Upcoming: “Women Voices in Disarmament” edited by Dr. Manpreet Sethi and Dr. Kanica Rakhra Routledge, Taylor and Francis</li>
          <li>Upcoming: “Nuclear Confidence Building Measures with India’s Nuclear Neighbours” edited by Dr. Rajiv Nayan, IDSA</li>
          <li>There’s a Global Shift Towards Health Securitization: What’s the Way Forward? ” The Quint, By Kanica Rakhra and Smritima Diksha Lama. <strong><a href="https://www.thequint.com/fit/global-shift-towards-health-securitisation">Read The Full Article</a></strong></li>
          <li>“Between Consensus and Efficiency: The Future of Multilateralism” Modern Diplomacy. <strong><a href="https://www.google.com/url?sa=Dq=https://moderndiplomacy.eu/2023/04/01/between-consensus-and-efficiency-the-future-of-multilateralism/ust=1695789300000000usg=AOvVaw2gqMkQsYnrI0G-VrI02A6vhl=ensource=gmail">Read The Full Article</a></strong></li>
          <li>“Changing Perspectives during Global Insecurity” Anniversary Magazine Bound to change: where are we heading?” of the Alfred Herrhausen Gesellschaft <strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/AHG_Magazin_Jubilaum_EN.pdf">Read The Full Article on Page 06</a></strong></li>
          <li>“Nuclear Responsibility in a Deterrence Driven World” British American Security Institute Cooperation (BASIC) <strong><a href="https://basicint.org/nuclear-responsibilities-in-a-deterrence-driven-world/">Read The Full Article</a></strong></li>
          <li>“Challenges to the NPT” in 'The Global Nuclear Landscape: Energy, Non-proliferation, and Disarmament, (ISBN: 9789391490539) edited by Dr. Manpreet Sethi, Knowledge World Publications, 2021. <strong><a href="http://kwpub.in/Home/product/9789391490539/the-global-nuclear-landscape-energy_-non-proliferation-and-disarmament">Read The Full Article</a></strong></li>
          <li>Getting to the Table: From Bilateral to Multilateral Nuclear Arms Control Negotiations" By Maria Chepurina, Kanica Rakhra, Victoria Sanchez, Benjamin Schaller ACONA Report <strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/Setting-the-Stage-for-a-New-Multilateral-Nuclear-Arms-Control-Regime68.pdf">Read The Full Article</a></strong></li>
          <li>“Patterns of Arms Trade” Institute of Defence Studies and Analysis, Comment <strong><a href="http://kwpub.in/Home/product/9789391490539/the-global-nuclear-landscape-energy_-non-proliferation-and-disarmament">Read The Full Article</a></strong></li>
          <li>“Power Defiance Redefined” Institute of Defence Studies and Analysis, Comment <a href="http://kwpub.in/Home/product/9789391490539/the-global-nuclear-landscape-energy_-non-proliferation-and-disarmament"><strong>Read The Full Article</strong></a></li>
          <li>“India and the Non-Proliferation Treaty: Lessons for the Outlier States” in ‘India and Global Nuclear Governance’ edited by Reshmi Kazi (Jamia Milia Islamia) and Ashild Kolas (Peace Research Institute Oslo), Knowledge World Publications, 2019 <strong><a href="http://kwpub.in/Home/product/9789387324985/india-in-global-nuclear-governance">Read The Full Article</a></strong></li>
          <li>India’s Nuclear Behavior” for Peace Research Institute, Oslo. <strong><a href="https://blogs.prio.org/2016/03/indias-nuclear-behavior/">Read The Full Article</a></strong></li>
          <li>“The Nuclear Order Challengers: India and Iran” for Indrastra; ISSN 2381-3652 <strong><a href="https://www.indrastra.com/2016/01/OPINION-Nuclear-Order-Challengers-India-and-Iran-002-01-2016-0071.html">Read The Full Article</a></strong></li>
          <li>“Prestige and Security: Interlinked, not Separate” for International Society for Political Psychology. <strong><a href="https://ispp.org/ecc/blog/prestige-and-security-separate-or-interlinked">Read The Full Article</a></strong></li>
          <li>“Iran Analysis: Becoming ‘Acceptable’ –India’s Lesson to Tehran for a Nuclear Deal and Beyond” for EAWorldView. April-June 2013: “December 13 Attack on Indian Parliament: Looking at Attribution Theory Explanations” for Defense and Diplomacy Journal Vol. 2 (3). January-March 2013: “Impasse in Iran” for Defense and Diplomacy Journal Vol. 2 (2). <strong><a href="https://ispp.org/ecc/blog/prestige-and-security-separate-or-interlinked">Read The Full Article</a></strong></li>
          <li>“Suicide Terrorism (Jul-Dec 2007): A Review” Special Report for Institute of Peace and Conflict Studies. <a href="http://www.ipcs.org/special-report/suicide-terrorism/suicide-terrorism-jul-dec-2007-a-review-55.html"><strong>Read The Full Article</strong></a></li>
          <li>“An Inquiry into Suicide Terrorism: Psychological Perspectives” for Institute of Peace and Conflict Studies. <strong><a href="http://www.ipcs.org/comm_select.php?articleNo=2596">Read The Full Article</a></strong></li>
        </ul>
      </div>
    `
    },
    {
      id: "4",
      name: "Dr. Vasudha",
      description: `<div class="anchor_color_red">
      <p><strong>List of Publications:</strong></p>
      <ul><li>The autonomous women’s movement in India: Beyond the NGOization framework. 2022. Asian Journal of Gender Studies, 28(4). DOI:10.1080/12259276.2022.2142361 <strong><a href=\"https://www.tandfonline.com/doi/abs/10.1080/12259276.2022.2142361\">Read The Full Article</a></strong></li><li>Book Review: Niharika Banerjea, Debanuj Dasgupta, Rohit. K Dasgupta and Jaime Grant eds., Friendship as Social Justice Activism: Critical Solidarities in a Global Perspective. 2020.Social Movement Studies, 20(4). DOI: 10.1080/14742837.2020.1770074 <strong><a href=\"https://www.tandfonline.com/doi/abs/10.1080/14742837.2020.1770074\">Read The Full Article</a></strong></li><li>Book Review: Gargi Chakravartty and Supriya Chotani, Charting a New Path: Early Years of National Federation of Indian Women. 2018. Indian Journal of Gender Studies, 25(1). <strong><a href=\"https://journals.sagepub.com/doi/abs/10.1177/0971521517738437\">Read The Full Article</a></strong></li><li>Human Rights and Gender Studies Class 11. 2013. Central Board of Secondary Education. Co-authored. <strong><a href=\"https://kautilya.org.in/wp-content/uploads/2023/09/2_Human__Gender_Studies_PART_1.pdf\">Read The Full Article</a></strong></li><li>Human Rights and Gender Studies Class 12. 2013. Central Board of Secondary Education. Co-authored. <strong><a href=\"https://kautilya.org.in/wp-content/uploads/2023/09/1_Human_Rights_and_Gender_Studies_Class_XII.pdf\">Read The Full Article</a></strong></li></ul></div>`
    },
    {
      id: '5',
      name: " Dr. Vishnu",
      description: `
      <div class="anchor_color_red">
      <p><strong>List of Publications:</strong></p>
      <ul>
      <li>Sivarudran Pillai, V., Matus, K.J.M., 2020. Towards a responsible integration of artificial intelligence technology in the construction sector. Science and Public Policy 47, 689–704. <a href="https://doi.org/10.1093/scipol/scaa073"><strong>Read The Full Article</strong></a></li>
      <li>Vishnu S. Pillai, C. Rajasekaran, P.K. Vatsa, (2016). Monitoring and Forecasting in Construction Projects Using Time Buffer. Journal of Construction Engineering, Technology  Management, 6(2): 9–16p. <a href="https://engineeringjournals.stmjournals.in/index.php/JoCETM/article/view/4838"><strong>Read The Full Article</strong></a></li>
      <li>Vishnu S Pillai,  Rajasekaran, C. (2016). Role of Time Buffer on Project Monitoring and Forecasting of Steel Structures – A New Approach to Structural Planning, International Journal of Earth Sciences and Engineering <strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/SPL02090307.pdf">Read The Full Article</a></strong></li>
      </ul>
      <p><strong>Working Paper</strong></p>
      <ul>
      <li>Pillai, Vishnu Sivarudran and Matus, Kira, Regulation of AI Technologies in the Construction Industry (2019). HKUST IEMS Working Paper No. 2019-65, Available at SSRN: <strong><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3439826">Read The Full Article</a></strong></li>
      </ul>
      </div>
      `  },

    {
      id: '5',
      name: " Dr. Sach",
      description: `
        <div class="anchor_color_red">
      
<p ><strong>Articles:</strong></p>
<ul >
<li>Policy Games: Leading by Example Across the Atlantic. April 2014. United Nations University – MERIT website. <a href="https://www.merit.unu.edu/policy-games/" target="_blank" rel="noopener noreferrer" data-saferedirecturl="https://www.google.com/url?q=https://www.merit.unu.edu/policy-games/&amp;source=gmail&amp;ust=1714802238652000&amp;usg=AOvVaw2DM3pgW1hqZneAflitUQTB">https://www.merit.unu.edu/<wbr>policy-games/</a></li>
<li>Is now Special? January 2018. Hākārā, a bilingual journal. <a href="https://www.hakara.in/sach-wry/" target="_blank" rel="noopener noreferrer" data-saferedirecturl="https://www.google.com/url?q=https://www.hakara.in/sach-wry/&amp;source=gmail&amp;ust=1714802238652000&amp;usg=AOvVaw3VnDvUyM_jsNYz-5hTzrMq">https://www.hakara.in/<span class="il">sach</span>–<wbr>wry/</a></li>
<li>A pedagogical role for Economic History in Economics and Policy Working Paper, December 2023.</li>
</ul>

        `  },

  ]);
  return (
    <>
      <section className="phd">
        <Container>
          <div className="mt-3 mb-5">


            <picture>

              <source media="(max-width:620px)" srcSet={`${bannerPath}${publicantsbanner.mobile_banner}`} />
              <source media="(min-width:621px)" srcSet={`${bannerPath}${publicantsbanner.desktop_banner}`} />
              <img
                className="d-block_carousel"
                src={`${bannerPath}${publicantsbanner.desktop_banner}`}
                alt={`Slide ${publicantsbanner.category}`}
              />
            </picture>

          </div>

        </Container>

        {/* <Tabs_section phd={phddata} /> */}
        <TabSection tabsData={facultyTabs} />
      </section>
    </>
  );
}
export default Publications;