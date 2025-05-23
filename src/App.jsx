import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from 'react'; // Import Suspense and lazy

// Lazy load page components
const HomeLayout = lazy(() => import("./pages/HomeLayout"));
const OurStory = lazy(() => import("./pages/OurStory"));
const Program = lazy(() => import("./pages/Program"));
const LifeAtBimal = lazy(() => import("./pages/LifeAtBimal"));
const Resource = lazy(() => import("./pages/Resource"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Test2 = lazy(() => import("../src/pages/Test2")); // Corrected path if it was intended as a page

// Lazy load program detail components
const MentorshipProgram = lazy(() => import("./components/programs/programDetails/MentorshipProgram"));
const MembershipProgram = lazy(() => import("./components/programs/programDetails/MembershipProgram"));
const InnerProgram = lazy(() => import("./components/programs/programDetails/InnerProgram"));

// Lazy load admin components
const Login = lazy(() => import("./pages/admin/Login"));
const Blogs = lazy(() => import("./pages/admin/Blogs"));
const BlogCreatePage = lazy(() => import("./pages/admin/BlogCreatePage"));
const BlogEditPage = lazy(() => import("./pages/admin/BlogsEditPage"));
// const BlogViewPage = lazy(() => import("./pages/admin/BlogViewPage")); // If you re-add this

// Lazy load utility components
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const NotFound = lazy(() => import("./components/NotFound"));

// Commented out imports - no need to lazy load if not used
// import Test from "./pages/Test";
// import Image from "../src/assets/texter-bg.jpg";
// import Image from "../src/assets/bg-2-texter.jpg";
// import TrumpEffect from "../src/components/resource/TrumpCard";
// import CoveredEffect from "../src/components/resource/CoverdCall";
// import ReactiveForm from "./pages/ReativeForm";


function App() {
  // You can create a more sophisticated loading component
  const loadingFallback = <div>Loading page...</div>;

  return (
    <BrowserRouter>
      <Suspense fallback={loadingFallback}>
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
          {/* Note: ProtectedRoute itself is lazy-loaded.
              The components it renders (Login, Blogs, etc.) are also lazy-loaded.
              Suspense will handle the loading of ProtectedRoute, and then subsequently
              the loading of the component it's meant to render.
          */}
          <Route
            path="/admin/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs/create"
            element={
              <ProtectedRoute>
                <BlogCreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs/edit/:slug"
            element={
              <ProtectedRoute>
                <BlogEditPage />
              </ProtectedRoute>
            }
          />

          <Route path="/test" element={<Test2 />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;