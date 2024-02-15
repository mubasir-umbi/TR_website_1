import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";

const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ProjectsPage = React.lazy(() => import("./pages/Projects"));
const SnapTrackPage = React.lazy(() => import("./pages/ProjectDetails/SnapTrack"));
const OffrollPage = React.lazy(() => import("./pages/ProjectDetails/Offroll"));
const BizbuzPage = React.lazy(() => import("./pages/ProjectDetails/BizBuz"));
const DmctPage = React.lazy(() => import("./pages/ProjectDetails/Dmct"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUs"));


const SiteRoutes = () => {
  return (
    // <React.Suspense fallback={<>Loading...</>}>
    <React.Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact_us" element={<ContactPage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/snaptrack" element={<SnapTrackPage />} />
          <Route path="/projects/offroll" element={<OffrollPage />} />
          <Route path="/projects/bizbuz" element={<BizbuzPage />} />
          <Route path="/projects/dmtc" element={<DmctPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};


export default SiteRoutes;
