import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import OurStory from "./pages/OurStory";
import Program from "./pages/Program";
import LifeAtBimal from "./pages/LifeAtBimal";
import Resource from "./pages/Resource";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import MentorshipProgram from "./components/programs/programDetails/MentorshipProgram";
import MembershipProgram from "./components/programs/programDetails/MembershipProgram";
import InnerProgram from "./components/programs/programDetails/InnerProgram";
// import Image from "../src/assets/texter-bg.jpg";
import Image from "../src/assets/bg-2-texter.jpg";
import TrumpEffect from "../src/components/resource/TrumpCard";
import CoveredEffect from "../src/components/resource/CoverdCall";
import Test2 from "../src/pages/Test2";
import ReactiveForm from "./pages/ReativeForm";

function App() {
  return (
    <div
      className=""
      style={{
        width: "100%",
        backgroundImage: Image,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/program" element={<Program />} />
          <Route path="/life-at-bimal" element={<LifeAtBimal />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentorship-program" element={<MentorshipProgram />} />
          <Route path="/membership-program" element={<MembershipProgram />} />
          <Route path="/inner-circle-program" element={<InnerProgram />} />
          <Route path="/blog/trump-effect" element={<TrumpEffect />} />
          <Route path="/blog/covered-call" element={<CoveredEffect />} />
          <Route path="/test" element={<Test2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
