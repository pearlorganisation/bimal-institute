// import React from "react";
import ProgramDesign from "../components/programs/ProgramDesign";
import Enquiry from "../components/programs/Enquiry";
// import Download from "../components/programs/Download";
import StudentReviews from "../components/programs/StudentReview";
// import StillQue from "../components/StillQue";
import ContactUsForm from "../components/ContactUsForm";
import Footer from "../components/Footer";
import TraderProgram from "../components/programs/TraderProgram";
import Navbar from "./Navbar";
import FixedSidebarButtons from "./FixedSidebarButtons";
import PixelsWithPurpose from "./Test2";

function Program() {
  return (
    <div>
      <Navbar />
      <FixedSidebarButtons />
      <TraderProgram />
      <Enquiry />
      <ProgramDesign />
      {/* <Download /> */}
      <StudentReviews />
      {/* <StillQue /> */}
      <PixelsWithPurpose />
      <ContactUsForm />
      <Footer />
    </div>
  );
}

export default Program;
