import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import ContactUsForm from "../components/ContactUsForm";
import Content from "../components/lifeatBimal/content";
import FAQ from "../components/FAQ";
import StillQue from "../components/StillQue";
import FixedSidebarButtons from "./FixedSidebarButtons";

function LifeAtBimal() {
  return (
    <div>
      <Navbar />
      <FixedSidebarButtons />
      <Content />
      {/* <FAQ /> */}
      {/* <StillQue /> */}
      <ContactUsForm />
      <Footer />
    </div>
  );
}

export default LifeAtBimal;
