import { useState } from "react";
import HomePage from "../components/HomePage";
import Navbar from "./Navbar";
import HomeBanner from "../components/HomeBanner";
import GradientText from "../components/GradientText";
import CourseInformation from "../components/CourseInformation";
import IndiaMap from "../components/IndiaMap";
import LifeAtBimalInstitute from "../components/LifeatBimal";
import FAQ from "../components/FAQ";
import VideoComponent from "../components/VideoComponent";
import Footer from "../components/Footer";
import ContactUsForm from "../components/ContactUsForm";
// import StillQue from "../components/StillQue";
import FixedSidebarButtons from "./FixedSidebarButtons";
import Bubble from "./Bubble";
import MobileBubble from "./MobileBubble";
import SmartTraderProgram from "../components/SmartTraderProgram";
import ReactiveForm from "./ReativeForm";

const Layout = () => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Navbar />
      <FixedSidebarButtons /> {/* Sidebar buttons fixed on the left */}
      <ReactiveForm showPopup={showPopup} setShowPopup={setShowPopup} />
      <SmartTraderProgram />
      <HomeBanner />
      <HomePage />
      <GradientText setShowPopup={setShowPopup} />
      <CourseInformation />
      <Bubble classname="sm:flex hidden" />
      <MobileBubble classname="flex sm:hidden" />
      <IndiaMap />
      <LifeAtBimalInstitute />
      <FAQ />
      <VideoComponent />
      {/* <StillQue /> */}
      <ContactUsForm />
      <Footer />
    </div>
  );
};

export default Layout;
