
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Phd from "./pages/phd-duration";
import Faculty from "./pages/faculty";
import Mentorship from "./pages/mentorship-program";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.scss";
import "./assets/css/responsive.css";
import Research from "./pages/research";
import Research_projects from "./pages/research-projects";
import Publications from "./pages/publications";
import Researchfaqs from "./pages/research-faqs";
import Facilities from "./pages/facilities";
import Studentclubs from "./pages/student-clubs";
import Library from "./pages/library";

import AcademicCalendar from "./pages/academicCalender";
import StudentMix from "./pages/studentMix";
import FinancialAid from "./pages/financialAid";
import AcademicFaqs from "./pages/academicFaqs";
import AboutUs from "./pages/about";
import Kautilyaadvantage from "./pages/kaultilyaAdvantage";
import MasterProgramAdmissions from "./pages/mastersProgram";
import Capstone from "./pages/capstone-project";
import Campus from "./pages/campus-virtual-tour";
import Admissionfaqs from "./pages/admissions-faqs";
import Researchblog from "./pages/blog";
import Resourcelist from "./pages/resource-list-of-podcasts";
import "./assets/css/responsive.css";
import "./assets/css/style.scss";
import Contact from "./pages/contact";
import Careers from "./pages/careers";
import Policies from "./pages/policies";
import VideoGallery from "./pages/videoGallery";
import Events from "./pages/events";
import Placements from "./pages/placements";
import Nirf from "./pages/nirf-ranking";
import Privacy_policy from "./pages/privacy-policy";
import Cash_policy from "./pages/cash-policy";
import CapstonePage from "./components/Capstone";
import AdmissionProcess from "./pages/admission-process";
import AcademicAssociates from "./pages/publications-academic-associates";
import AluminiNewwork from "./pages/alumniNetwork";
import SilencedLives from "./pages/blogs/SilencedLives";
import BeyondQuotas from "./pages/blogs/BeyondQuotas";
import GovernorshipConundrum from "./pages/blogs/GovernorshipConundrum";
import Simulation from "./pages/event/conclave/simulation";
import ContactConclave from "./pages/event/conclave/contactConclave";
import ConclaveRegistration from "./pages/event/conclave/registrationConclave";
import PaperPresentation from "./pages/event/conclave/paperPresentation";
import AboutConclave from "./pages/event/conclave/abutConclave";
import StrengthenYourMPP from "./pages/event/StrengthenyourMPP";
import InteractAlumini from "./pages/event/interactAlumini";
import MasteringPublicPolicy from "./pages/event/masteringPublicPolicy";
import EmergingOppurtunities from "./pages/event/emergingOpertutinities";
import InfoSessionDelhi from "./pages/event/infoSessionDelhi";
import BraveNewWorld from "./pages/event/policySeries/braveNewWorld";
import ChildrenAreOurFuture from "./pages/event/policySeries/childrenAreFuture";
import AcceleratingClimate from "./pages/event/policySeries/acceleratingClimate";
import NuclearDealToTech from "./pages/event/policySeries/nuclearDealtoTech";
import OppurtunitiesChallanges from "./pages/event/policySeries/oppurtunitiesChallanges";
import MasterPlayBook from "./pages/event/policySeries/mastersPlaybook";
import RailwaySaftey from "./pages/event/policySeries/railwaySaftey";
import PakisthanImranKhan from "./pages/event/policySeries/pakisthanImranKhan";
import AreWeReadyForAI from "./pages/event/policySeries/areWeReadyForAI";
import WomenInWorkForce from "./pages/event/policySeries/womeninWorkForce";
import Letstalkpolicy from "./pages/event/policySeries/letstalkpolicy";
import Augusttalkpolicy from "./pages/event/policySeries/augusttalkpolicy";
import Septembertalkpolicy from "./pages/event/policySeries/septembertalkpolicy";
import Octobertalkpolicy from "./pages/event/policySeries/octobertalkpolicy";
import Novembertalkpolicy from "./pages/event/policySeries/novembertalkpolicy";
import Budget from "./pages/event/policySeries/budget2023";
import MasterInPublicPolicy from "./pages/event/policySeries/masterInPublicPolicy";
import UniteDividedg20 from "./pages/event/policySeries/uniteDividedg20";
import DataProtectionBill from "./pages/event/policySeries/dataProtectionBill";
import CryptoCurrency from "./pages/event/policySeries/cryptoCurrency";
import PoliticalCompanion from "./pages/event/policySeries/politicalCompanian";
import Challanges5g from "./pages/event/policySeries/5gChallanges";
import EconomyInflation from "./pages/event/policySeries/economyInflation";
import PoliticalCommunicationExpert from "./pages/event/policySeries/politicalCommunicationExpert";
import BuildingCareer from "./pages/event/policySeries/buildingCareer";
import MentalHealthSuside from "./pages/event/policySeries/mentalHealthSuside";
import HealthFitness from "./pages/event/policySeries/healthFitness";
import RussiaUkrain from "./pages/event/policySeries/russiaUkraine";
import KautilyaBlog from "./pages/kautilya-blog";
import Blogpage from "./components/Blog_innerpage";
// import AmarendraPandey from "./pages/amarendraPandey";
// import Vasudha from "./pages/vasudha";
// import KanicaRakhra from "./pages/kanicaRakhra";
// import VishnuPillai from "./pages/vishnuPillai";
import IssueBriefPage from "./pages/issueBrief";
import BlogsIntro from "./pages/blogs/blogsIntro";
import PolicyMakingForNewIndia from "./pages/event/conclave/policyMakingNewIndia";
import ThankYou from "./pages/event/conclave/thankyou";
import CareerInPublicPolicy from "./pages/event/policySeries/careerInPublicPolicy";
import BuildImpactfulCareer from "./pages/event/policySeries/buildImpactfulCareer";
import AreCryptoCurrencyViable from "./pages/event/policySeries/areCryptoCurrencyViable";
import Issue_brief from "./components/Issue_brief";
import PPForPg from "./pages/event/ppforpg";
import Partnership from "./pages/partnership";
import PartnershipInner from "./pages/partnershipInner";
import AdmissionProcessMPP from "./pages/admissionProcessMPP";
import ColloquyEvent from "./pages/event/kautilyaColluqyEvent";
import GovernExcellenceInitiative from "./pages/governExcellenceInitiative";

// import ContactUs from "./components/Contact_us" 


import Faculty_brief from "./components/Faculty_brief";

const Routers = () => {
  return (
    <>
      <Routes>
        {/*home*/}
        <Route path="/" element={<Home />} />
        <Route path="/nirf-ranking" element={<Nirf />} />
        {/*footer*/}
        <Route path="/privacy-policy" element={<Privacy_policy />} />
        <Route
          path="/kspps-commitment-to-building-a-harassment-free-environment"
          element={<Cash_policy />}
        />
        {/*ourteam*/}
        <Route path="/about" element={<AboutUs />} />
        {/* <Route
          path="/profile-dr-amrendra-pandey"
          element={<AmarendraPandey />}
        /> */}
        <Route path="/our-faculty/:slug" element={<Faculty_brief />} />

        
       {/* <Route path="/profile-dr-vasudha" element={<Vasudha />} />  */}
        {/* <Route path="/profile-dr-kanica-rakhra" element={<KanicaRakhra />} /> */}
         {/* <Route path="/profile-dr-vishnu-s-pillai" element={<VishnuPillai />} /> */}
        {/*academics*/}
        <Route path="/study-at-kautilya" element={<Kautilyaadvantage />} />
        <Route path="/our-faculty" element={<Faculty />} />
        <Route path="/doctoral-ph-d-duration" element={<Phd />} />
        <Route path="/mpp" element={<MasterProgramAdmissions />} />
        <Route path="/mentorship-program" element={<Mentorship />} />
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/academics-faqs" element={<AcademicFaqs />} />
        {/*research*/}
        <Route path="/research" element={<Research />} />
        <Route path="/research-projects" element={<Research_projects />} />
        <Route path="/capstone-project" element={<Capstone />} />
        <Route path="/capstone-project/:slug" element={<CapstonePage />} />
        <Route path="/issue-brief" element={<IssueBriefPage />} />
        {/* <Route path='/issue-brief/:slug' element= { <IssueBrief/>} /> */}
        <Route path="/issue-brief/:slug" element={<Issue_brief />} />

        {/* <Route path='/issue-brief' element= { <IssueBriefPage/>} />
   <Route path='/issue-brief/:slug' element= { <IssueBrief/>} /> */}
        <Route path="/publications" element={<Publications />} />
        <Route path="/research-faqs" element={<Researchfaqs />} />
        <Route
          path="/publications-academic-associates"
          element={<AcademicAssociates />}
        />

        {/*admissions*/}
        <Route path="/campus-virtual-tour" element={<Campus />} />
        <Route path="/student-mix" element={<StudentMix />} />
        <Route path="/ph-d-duration" element={<Phd />} />
        <Route path="/admission-process" element={<AdmissionProcess />} />
        {/* <Route path="/admissionProcessMPP" element={<AdmissionProcessMPP />} /> */}
        <Route path="/partnership" element={<Partnership />} />
        <Route
          path="/ie-universitys-school-of-politics"
          element={<PartnershipInner />}
        />
        <Route path="/scholarships-financial-aid" element={<FinancialAid />} />
        <Route path="/admissions-faqs" element={<Admissionfaqs />} />
        {/*placements*/}
        <Route path="/placements" element={<Placements />} />
        {/*beyond academics*/}
        <Route path="/campus" element={<Facilities />} />
        <Route path="/alumni-association" element={<AluminiNewwork />} />
        <Route path="/student-clubs" element={<Studentclubs />} />
        <Route path="/library" element={<Library />} />
        <Route path="/kautilya-blog" element={<Researchblog />} />
        <Route path="/resource-list-of-podcasts" element={<Resourcelist />} />
        <Route path="/videos" element={<VideoGallery />} />
        <Route path="/kspp-policies" element={<Policies />} />
        <Route path="/resources" element={<Events />} />
        {/*work@ka*/}
        <Route path="/careers" element={<Careers />} />
        {/*contact*/}
        <Route path="/contactus" element={<Contact />} />

        {/* blogs */}

        <Route path="/blogs" element={<KautilyaBlog />} />
        <Route path="/blogs/:slug" element={<Blogpage />} />
        <Route path="/blog1" element={<SilencedLives />} />
        <Route path="/blog2" element={<BeyondQuotas />} />
        <Route path="/blog3" element={<GovernorshipConundrum />} />
        {/*<Route path='/executive-education' element={< ExecutiveEducation />} />*/}
        {/* {events} */}
        <Route path="/kautilya-colloquy" element={<AboutConclave />} />
        <Route path="/paper-presentation" element={<PaperPresentation />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/contact-us" element={<ContactConclave />} />
        <Route path="/kc-registration" element={<ConclaveRegistration />} />

        <Route
          path="/strengthen-your-mpp-application-with-expert-guidance"
          element={<StrengthenYourMPP />}
        />
        <Route
          path="/interact-with-our-alumni-and-co-founder"
          element={<InteractAlumini />}
        />
        <Route
          path="/the-2-year-route-to-mastering-public-policy"
          element={<MasteringPublicPolicy />}
        />
        <Route
          path="/emerging-opportunities-in-public-policy"
          element={<EmergingOppurtunities />}
        />
        <Route
          path="/kautilya-school-of-public-policy-info-session-delhi-2023"
          element={<InfoSessionDelhi />}
        />
        <Route
          path="/no-questions-about-hyderabad-the-deans-take"
          element={<BlogsIntro />}
        />
        <Route path="/public-policy-for-public-good" element={<PPForPg />} />
        
        <Route path="/kautilya-colloquy-2024" element={<ColloquyEvent />} />

        {/* events policy_series  */}
        <Route
          path="/brave-new-world-public-policy-and-ai"
          element={<BraveNewWorld />}
        />
        <Route
          path="/children-are-our-future"
          element={<ChildrenAreOurFuture />}
        />
        <Route
          path="/accelerating-climate-transition-in-india"
          element={<AcceleratingClimate />}
        />
        <Route
          path="/from-nuclear-deal-to-critical-tech"
          element={<NuclearDealToTech />}
        />
        <Route
          path="/economic-outlook-for-india-opportunities-and-challenges"
          element={<OppurtunitiesChallanges />}
        />
        <Route
          path="/a-masters-playbook-on-incubating-public-policy-excellence"
          element={<MasterPlayBook />}
        />
        <Route
          path="/indian-railways-safety-and-modernization-challenges"
          element={<RailwaySaftey />}
        />
        <Route
          path="/the-pakistan-conundrum-and-imran-khan-challenge"
          element={<PakisthanImranKhan />}
        />
        <Route
          path="/are-we-really-ready-for-artificial-intelligence"
          element={<AreWeReadyForAI />}
        />
        <Route
          path="/how-can-we-increase-the-number-of-women-in-the-workforce"
          element={<WomenInWorkForce />}
        />
        <Route path="/budget-2023-reading-the-fine-print" element={<Budget />} />
        <Route
          path="/what-do-you-need-for-a-master-in-public-policy"
          element={<MasterInPublicPolicy />}
        />
        <Route
          path="/can-india-unite-a-divided-g20"
          element={<UniteDividedg20 />}
        />
        <Route
          path="/data-protection-bill-2022-unpacking-the-revised-law"
          element={<DataProtectionBill />}
        />
        <Route
          path="/decrypting-crypto-how-should-india-regulate-cryptocurrency"
          element={<CryptoCurrency />}
        />
        <Route
          path="/political-campaigns-in-india-can-they-shape-up-narratives-for-2024"
          element={<PoliticalCompanion />}
        />
        <Route
          path="/5g-in-india-aspirations-challenges"
          element={<Challanges5g />}
        />
        <Route
          path="/the-state-of-the-indian-economy-and-inflation"
          element={<EconomyInflation />}
        />
        <Route path="/4-sep-lets-talk-policy" element={<Letstalkpolicy />} />
        <Route
          path="/august-3-lets-talk-policy"
          element={<Augusttalkpolicy />}
        />
        <Route
          path="/18-september-lets-talk-policy"
          element={<Septembertalkpolicy />}
        />
        <Route
          path="/11-october-lets-talk-policy"
          element={<Octobertalkpolicy />}
        />
        <Route
          path="/25-november-lets-talk-policy"
          element={<Novembertalkpolicy />}
        />
        <Route
          path="/growing-demand-for-policy-political-communication-experts"
          element={<PoliticalCommunicationExpert />}
        />
        <Route
          path="/building-a-career-in-a-multilateral-organization"
          element={<BuildingCareer />}
        />
        <Route
          path="/mental-health-crisis-in-india-suicide-prevention"
          element={<MentalHealthSuside />}
        />
        <Route
          path="/career-in-public-policy"
          element={<CareerInPublicPolicy />}
        />
        <Route
          path="/how-to-build-an-impactful-career-in-public-policy"
          element={<BuildImpactfulCareer />}
        />
        <Route
          path="/are-cryptocurrencies-viable"
          element={<AreCryptoCurrencyViable />}
        />
        <Route
          path="/fitness-and-health-policy-challenges-post-pandemic"
          element={<HealthFitness />}
        />
        <Route
          path="/understanding-russia-ukraine-crisis"
          element={<RussiaUkrain />}
        />
        <Route
          path="/policymaking-for-new-india"
          element={<PolicyMakingForNewIndia />}
        />
        <Route path="/thank-you" element={<ThankYou />} />
        {/*<Route path='/executive-education' element={< ExecutiveEducation />} />*/}

        <Route path="/governance-excellence-initiative" element={<GovernExcellenceInitiative />} />

        {/* <Route path="/contact-us-gei" element={<ContactUs />} /> */}


      </Routes>
    </>
  );
};

export default Routers;
