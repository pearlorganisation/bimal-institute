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
import BlogDetails from "./pages/BlogDetails";
import ProtectedRoute from "./components/ProtectedRoute";

import Blogs from "./pages/admin/Blogs";
import Login from "./pages/admin/Login";
import NotFound from "./components/NotFound";
import BlogCreatePage from "./pages/admin/BlogCreatePage";
import BlogEditPage from "./pages/admin/BlogsEditPage";

function App() {
  return (

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
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* admin */}
        <Route path="/admin/login" element={<ProtectedRoute> <Login /> </ProtectedRoute>} />
        <Route path="/admin/blogs" element={<ProtectedRoute> <Blogs /> </ProtectedRoute>} />
        <Route path="/admin/blogs/create" element={<ProtectedRoute><BlogCreatePage /></ProtectedRoute>} />
        <Route path="/admin/blogs/edit/:slug" element={<ProtectedRoute><BlogEditPage /></ProtectedRoute>} />
        {/* <Route path="/admin/blogs/view/:slug" element={<BlogViewPage />} /> */}

        <Route path="/test" element={<Test2 />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
