import React from "react";
import RecentProject from "../components/RecentProject";
import CardList from "../components/RecentProject/CardList;";
import ProjectCarousel from "../components/HeroSection/ProjectCarousel";
import Explore from "../components/HeroSection/Explore";
import ReadyToCollabrate from "../components/AboutUs/ReadyToCollabrate";

const Projects = () => {
  return (
    <>
      {" "}
      <div className="w-[96%] mx-auto">
        <Explore
          backgroundColor=""
          titleColor=""
          descriptionColor=""
          title="Case Studies"
          description="Explore how our innovative solutions have addressed unique challenges for our clients."
        />
      </div>
      <ProjectCarousel bg_Color="white-A700" />
      <div className="w-[96%] mx-auto">
        <CardList />
        <ReadyToCollabrate />

      </div>
    </>
  );
};

export default Projects;
