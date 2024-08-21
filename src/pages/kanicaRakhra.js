import { useState } from 'react';
import { Col,Row, Container } from "react-bootstrap";
import Tabs_section from "../components/Tabs";
import '../assets/css/navbar.css';



function KanicaRakhra (){
    const [masterprogram,change1] = useState([
        {
          id:1,
          name : " Research Interest",
          description: `
         
          <ul class="entry_content" >
          <li>International Relations.</li>
          <li>Security Studies.</li>
          <li>Foreign Policy.</li>
          <li>Nuclear Disarmament and Non-Proliferation</li>
</ul>
          `
        },
       
        
        {
            id:2,
          name : "  Areas of Expertise",
          description: `
          <ul class="entry_content" >
          <li>South Asia and Indian Foreign Policy.</li>
          <li>Global Public Health.</li>
          <li>Conflict Management &amp; Terrorism.</li>
          <li>Decision making &amp; International Norms.</li>
          <li>State Identity in International Politics.</li>
          <li>Nuclear Disarmament and Non-Proliferation.</li>
          </ul>
          `
        },
        {
            id:3,
          name : " Grants and Distinctions",
          description: `
          <ul class="entry_content" >
        
          <li>Received a commendation by the External Adjudicator for Ph.D. Thesis titled “Understanding the Role of Prestige in the Indian and Iranian Nuclear Programmes”.</li>
          <li>Received a Grant under the ‘Small Grants Program of the International Society for Political Psychology to organize the first international conference on Political Psychology in South Asia.</li>
          <li>Received the South Asia Studies Network (SASNET) Fellowship to engage in research activities with the Academic Community in Sweden.</li>
          <li>Received a Travel Grant to participate in the International Studies Association (ISA) Annual Convention.</li>
          <li>Received a Travel Grant to participate in the International Society for Political Psychology (ISPP) Annual Conference.</li>
            </ul>
          `
        },
        {
            id:4,
          name : "  Publications",
          description: `
          <h5>BOOKS</h5>
          <ul class="entry_content" >
          <li>Upcoming: “Women Voices in Disarmament” edited by Dr. Manpreet Sethi and Dr. Kanica Rakhra Routledge, Taylor and Francis</li>
           </ul>
           <h5>BOOK CHAPTERS:</h5>
           <ul class="entry_content" >
           <li>Upcoming: “Nuclear Confidence Building Measures with India’s Nuclear Neighbours” edited by Dr. Rajiv Nayan, IDSA</li>
           <li>“Challenges to the NPT” in &amp;#39; The Global Nuclear Landscape: Energy, Non- proliferation, and Disarmament, (ISBN: 9789391490539) edited by Dr. Manpreet Sethi, Knowledge World Publications, 2021.&nbsp;<strong><a href="http://kwpub.in/Home/product/9789391490539/the-global-nuclear-landscape-energy_-non-proliferation-and-disarmament">Read The Full Article</a></strong></li>
           <li>“India and the Non-Proliferation Treaty: Lessons for the Outlier States” in ‘India and Global Nuclear Governance’ edited by Reshmi Kazi (Jamia Milia Islamia) and Ashild Kolas (Peace Research Institute Oslo), Knowledge World Publications, 2019&nbsp;<strong><a href="http://kwpub.in/Home/product/9789387324985/india-in-global-nuclear-governance">Read The Full Article</a></strong></li>
           <li>&nbsp;“Introduction: Global Nuclear Governance in the Making” Reshmi Kazi and Kanica Rakhra in ‘India and Global Nuclear Governance’ edited by Reshmi Kazi (Jamia Milia Islamia) and mAshild Kolas (Peace Research Institute Oslo), Knowledge World Publications, 2019</li>
            </ul>
            <h5>JOURNAL ARTICLES:</h5>
            <ul class="entry_content" >
            <li>The Role of Prestige in Diplomatic Decision Making for South Asian Journal of Diplomacy 2016 ISSN 2229 – 3361</li>
<li>“December 13 Attack on Indian Parliament: Looking at Attribution Theory Explanations” for Defense and Diplomacy Journal Vol. 2 (3).</li>
<li>&nbsp;“Impasse in Iran” for Defense and Diplomacy Journal Vol. 2 (2).</li>
 </ul>
 <h5>REPORTS:</h5>
          <ul class="entry_content" >
          <li>Getting to the Table: From Bilateral to Multilateral Nuclear Arms Control Negotiations&amp;quot;&ensp; By Maria Chepurina, Kanica Rakhra, Victoria Sanchez, Benjamin Schaller&nbsp; ACONA Report&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/Setting-the-Stage-for-a-New-Multilateral-Nuclear-Arms-Control-Regime68.pdf">Read The Full Article</a></strong></li>
          <li>“Suicide Terrorism (Jul-Dec 2007): A Review ” Special Report for Institute of Peace and Conflict Studies.&nbsp;<a href="http://www.ipcs.org/special-report/suicide-terrorism/suicide-terrorism-jul-dec-2007-a-review-55.html"><strong>Read The Full Article</strong></a></li>
           </ul>

           <h5>BOOK REVIEW:</h5>
           <ul class="entry_content" >
           <li>“Nuclear Disarmament: India-EU Perspectives, ed.” Book Review for Indian Foreign Affairs Journal, Vol. 6 (3).</li>
            </ul>

            <h5>ARTICLES:</h5>
            <ul class="entry_content" >
            <li>Upcoming: “Women Voices in Disarmament” edited by Dr. Manpreet Sethi and Dr. Kanica Rakhra Routledge, Taylor and Francis</li>
            <li>Upcoming: “Nuclear Confidence Building Measures with India’s Nuclear Neighbours” edited by Dr. Rajiv Nayan, IDSA</li>
            <li>There’s a Global Shift Towards Health Securitization: What’s the Way Forward? ” The Quint, By Kanica Rakhra and Smritima Diksha Lama.&nbsp;<strong><a href="https://www.thequint.com/fit/global-shift-towards-health-securitisation">Read The Full Article</a></strong></li>
            <li>“Between Consensus and Efficiency: The Future of Multilateralism ” Modern Diplomacy.&nbsp;<strong><a href="https://www.google.com/url?sa=D&amp;q=https://moderndiplomacy.eu/2023/04/01/between-consensus-and-efficiency-the-future-of-multilateralism/&amp;ust=1695789300000000&amp;usg=AOvVaw2gqMkQsYnrI0G-VrI02A6v&amp;hl=en&amp;source=gmail">Read The Full Article</a></strong></li>
            <li>“Changing Perspectives during Global Insecurity” Anniversary Magazine Bound to change: where are we heading?” of the Alfred Herrhausen Gesellschaft&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/AHG_Magazin_Jubilaum_EN.pdf">Read The Full Article on Page 06</a></strong></li>
            <li>“Nuclear Responsibility in a Deterrence Driven World” British American Security Institute Cooperation (BASIC)&nbsp;<strong><a href="https://basicint.org/nuclear-responsibilities-in-a-deterrence-driven-world/">Read The Full Article</a></strong></li>
            <li>“Challenges to the NPT” in &amp;#39; The Global Nuclear Landscape: Energy, Non- proliferation, and Disarmament, (ISBN: 9789391490539) edited by Dr. Manpreet Sethi, Knowledge World Publications, 2021.&nbsp;<strong><a href="http://kwpub.in/Home/product/9789391490539/the-global-nuclear-landscape-energy_-non-proliferation-and-disarmament">Read The Full Article</a></strong></li>
            <li>Getting to the Table: From Bilateral to Multilateral Nuclear Arms Control Negotiations&amp;quot;&ensp; By Maria Chepurina, Kanica Rakhra, Victoria Sanchez, Benjamin Schaller&nbsp; ACONA Report&nbsp;<strong><a href="https://kautilya.org.in/wp-content/uploads/2023/09/Setting-the-Stage-for-a-New-Multilateral-Nuclear-Arms-Control-Regime68.pdf">Read The Full Article</a></strong></li>
            <li>“Patterns of Arms Trade ” Institute of Defence Studies and Analysis, Comment&nbsp;<strong><a href="http://kwpub.in/Home/product/9789391490539/the-global-nuclear-landscape-energy_-non-proliferation-and-disarmament">Read The Full Article</a></strong></li>
            <li>“Power Defiance Redefined ” Institute of Defence Studies and Analysis, Comment&nbsp;<a href="http://kwpub.in/Home/product/9789391490539/the-global-nuclear-landscape-energy_-non-proliferation-and-disarmament"><strong>Read The Full Article</strong></a></li>
            <li>“India and the Non-Proliferation Treaty: Lessons for the Outlier States” in ‘India and Global Nuclear Governance’ edited by Reshmi Kazi (Jamia Milia Islamia) and Ashild Kolas (Peace Research Institute Oslo), Knowledge World Publications, 2019&nbsp;<strong><a href="http://kwpub.in/Home/product/9789387324985/india-in-global-nuclear-governance">Read The Full Article</a></strong></li>
            <li>&nbsp;India’s Nuclear Behavior ” for Peace Research Institute, Oslo.&nbsp;<strong><a href="https://blogs.prio.org/2016/03/indias-nuclear-behavior/">Read The Full Article</a></strong></li>
            <li>“The Nuclear Order Challengers: India and Iran” for Indrastra; ISSN 2381-3652&nbsp;<strong><a href="https://www.indrastra.com/2016/01/OPINION-Nuclear-Order-Challengers-India-and-Iran-002-01-2016-0071.html">Read The Full Article</a></strong></li>
            <li>“Prestige and Security: Interlinked, not Separate ” for International Society for Political Psychology.&nbsp;<strong><a href="https://ispp.org/ecc/blog/prestige-and-security-separate-or-interlinked">Read The Full Article</a></strong></li>
            <li>“Iran Analysis: Becoming ‘Acceptable’ –India’s Lesson to Tehran for a Nuclear Deal and Beyond” for EAWorldView. April-June 2013: “December 13 Attack on Indian Parliament: Looking at Attribution Theory Explanations” for Defense and Diplomacy Journal Vol. 2 (3). January-March 2013: “Impasse in Iran” for Defense and Diplomacy Journal Vol. 2 (2).&nbsp;<strong><a href="https://ispp.org/ecc/blog/prestige-and-security-separate-or-interlinked">Read The Full Article</a></strong></li>
            <li>“Suicide Terrorism (Jul-Dec 2007): A Review ” Special Report for Institute of Peace and Conflict Studies.&nbsp;<a href="http://www.ipcs.org/special-report/suicide-terrorism/suicide-terrorism-jul-dec-2007-a-review-55.html"><strong>Read The Full Article</strong></a></li>
            <li>“An Inquiry into Suicide Terrorism: Psychological Perspectives ” for Institute of Peace and Conflict Studies.&nbsp;<strong><a href="http://www.ipcs.org/comm_select.php?articleNo=2596">Read The Full Article</a></strong></li>
             </ul>
          `
        },
        {
            id:5,
          name : "  Membership",
          description: `
          <h5>Member of:</h5>
          <ul class="entry_content" >
        
          <li>Working Group on Emotions and International Relations, British International Studies Association (BISA).</li>
          <li>The Nehru Memorial Museum and Library (NMML).</li>
          <li>Women in Nuclear (India Chapter).</li>
          <li>World Institute of Nuclear Security (WINS).</li>
          <li>Women in International Security (WIIS-Global).</li>
          <li>International Studies Association.</li>
          <li>International Society for Political Psychology.</li>
            </ul>
          `
        },
        
        
      ]);
   
    return(
        <>
         <section className="phd">   
         
            <Container>
                <img src="./images/faculty/kanica.webp" className='mt-3'></img>
                <p className="mt-5">
                Dr. Kanica is a Centre for International Politics, Organization and Disarmament, School of International Studies (SIS), Jawaharlal Nehru University, Master of Philosophy, Diplomacy and Disarmament, CIPOD, SIS, Jawaharlal Nehru University, and Master of Arts, Conflict Analysis and Peace-building, Nelson Mandela Centre for Peace and Conflict Resolution, Jamia Millia Islamia
                </p>
                <p>
                Currently, working as an assistant professor at the Kautilya School of Public Policy. Before joining Kautilya, Dr. Rakhra worked with the Indian Ministry of External Affairs (MEA) where she was with the Policy Planning and Research Division (2016-17) and then the Disarmament and International Security Affairs (D&ISA) Division (2017-2021). At D&ISA, she handled regional organizations in Asia, namely, ARF and CICA. She coordinated international and regional conferences for the division and assisted in producing the AV ‘Internal Compliance Programme for Effective Export Controls’ for MEA. Additionally, she was the founding Lead Coordinator-Annual Disarmament and International Security Affairs Fellowship Programme that was initiated in 2019. She has also worked on counter-terrorism, maritime security, nuclear disarmament, non-proliferation, international security, and a range of multilateral issues during her tenure in the D&ISA division.
                </p>
               
                <h5 className='mt-5 mb-4'>Contact: <span className='text-primary'> <a href='https://www.linkedin.com/in/kanica-rakhra-ph-d-35240715' ><i className='fa fa-linkedin'></i></a> </span>
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
export default KanicaRakhra;