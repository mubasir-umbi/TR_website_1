import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ProjectsPage = React.lazy(() => import("./pages/Projects"));
const SnapTrackPage = React.lazy(() => import("./pages/ProjectDetails/SnapTrack"));
const OffrollPage = React.lazy(() => import("./pages/ProjectDetails/Offroll"));
const BizbuzPage = React.lazy(() => import("./pages/ProjectDetails/BizBuz"));
const DmctPage = React.lazy(() => import("./pages/ProjectDetails/Dmct"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUs"));

const SiteRoutes = () => {
  return (
    <React.Suspense>
      <Router>
        <Routes>
          <Route path="/" exact element={<><Navbar /><Home /> <Footer /></>} />
          <Route path="/about_us" element={<><Header /><AboutUsPage /> <Footer /></>} />
          <Route path="/projects" element={<><Header /><ProjectsPage /> <Footer /></>} />
          <Route path="/projects/snaptrack" element={<><Header /><SnapTrackPage /> <Footer /></>} />
          <Route path="/projects/offroll" element={<><Header /><OffrollPage /> <Footer /></>} />
          <Route path="/projects/bizbuz" element={<><Header /><BizbuzPage /> <Footer /></>} />
          <Route path="/projects/dmct" element={<><Header /><DmctPage /> <Footer /></>} />
          <Route path="/#services" element={<Home />} />
          <Route path="*" element={<><Header /><PageNotFound /> <Footer /></>} />
          <Route path="/contact_us" element={<><Header /><ContactPage /></>} />
        </Routes> 
      </Router>
    </React.Suspense>
  );
};

export default SiteRoutes;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import PageNotFound from "./components/PageNotFound";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";


// const ContactPage = React.lazy(() => import("./pages/ContactPage"));
// const ProjectsPage = React.lazy(() => import("./pages/Projects"));
// const SnapTrackPage = React.lazy(() => import("./pages/ProjectDetails/SnapTrack"));
// const OffrollPage = React.lazy(() => import("./pages/ProjectDetails/Offroll"));
// const BizbuzPage = React.lazy(() => import("./pages/ProjectDetails/BizBuz"));
// const DmctPage = React.lazy(() => import("./pages/ProjectDetails/Dmct"));
// const AboutUsPage = React.lazy(() => import("./pages/AboutUs"));


// const SiteRoutes = () => {
//   return (
//     <React.Suspense>
//       <Router>
//         <Header/>
//         <Navbar/>
//         <Routes>  
//           <Route path="/" exact element={<Home />} />
//           <Route path="/about_us" element={<AboutUsPage />} />
//           <Route path="/projects" element={<ProjectsPage />} />
//           <Route path="/projects/snaptrack" element={<SnapTrackPage />} />
//           <Route path="/projects/offroll" element={<OffrollPage />} />
//           <Route path="/projects/bizbuz" element={<BizbuzPage />} />
//           <Route path="/projects/dmct" element={<DmctPage />} />
//           <Route path="/#services" element={<Home/>} />
//           <Route path="*" element={<PageNotFound />} />
//           <Route path="/contact_us" element={<ContactPage />} />
//         </Routes>
//         <Footer/>
//       </Router>
//     </React.Suspense>
//   );
// };


// export default SiteRoutes;
