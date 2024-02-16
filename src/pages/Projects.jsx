import React,{Suspense} from "react";
import RecentProject from "../components/RecentProject";
import CardList from "../components/RecentProject/CardList;";
import ProjectCarousel from "../components/HeroSection/ProjectCarousel";
import Explore from "../components/HeroSection/Explore";
import ReadyToCollabrate from "../components/AboutUs/ReadyToCollabrate";
import BackToTop from "../components/BackToTop";
import Loader from "../components/loader";


const Projects = () => {
  return (
    <div>
    <BackToTop/>
     <Suspense fallback={<div className='h-screen'> <Loader/></div> }>
        <Explore
          backgroundColor=""
          titleColor=""
          descriptionColor=""
          title="Case Studies"
          description="Explore how our innovative solutions have addressed unique challenges for our clients."
          />

      <ProjectCarousel bg_Color="white-A700" />
        <CardList />
        <ReadyToCollabrate />

          </Suspense>

    </div>
  );
};

export default Projects;





// import React from "react";
// import RecentProject from "../components/RecentProject";
// import CardList from "../components/RecentProject/CardList;";
// import ProjectCarousel from "../components/HeroSection/ProjectCarousel";
// import Explore from "../components/HeroSection/Explore";
// import ReadyToCollabrate from "../components/AboutUs/ReadyToCollabrate";
// import BackToTop from "../components/BackToTop";


// const Projects = () => {
//   return (
//     <>
//     <BackToTop/>
//       {" "}
//       {/* <div className="w-[96%] mx-auto"> */}
//         <Explore
//           backgroundColor=""
//           titleColor=""
//           descriptionColor=""
//           title="Case Studies"
//           description="Explore how our innovative solutions have addressed unique challenges for our clients."
//         />
//       {/* </div> */}
//       <ProjectCarousel bg_Color="white-A700" />
//       {/* <div className="w-[96%] mx-auto"> */}
//         <CardList />
//         <ReadyToCollabrate />

//       {/* </div> */}
//     </>
//   );
// };

// export default Projects;
