import React from 'react'

import HomeSection2 from '../components/Home/HomeSection2'
import HomeSection3 from '../components/Home/HomeSection3'
import HeroOne from '../components/HeroSection/SectionOne'
import ProjectCarousel from '../components/HeroSection/ProjectCarousel'
import HomeSection4 from '../components/Home/HomeSection4'
import HomeSection1 from '../components/Home/HomeSection1'
import DontLet from '../components/DontLet'
import Explore from '../components/HeroSection/Explore'
import TestimonyCarousel from '../components/TestimonyCarousel'
import { usersResponse } from '../constants/userResponse'


const Home = () => {
  return (
    <>
      <HeroOne />
      <Explore
        backgroundColor="gray-900"
        titleColor="blue-400"
        descriptionColor="gray-500"
        title="Explore What We Have Done"
        description="See how we have worked on projects for clients."
      />
      <ProjectCarousel bg_Color='gray-900' />

      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      {/* <div className='w-65% sm:mx-auto px-5 mb-12'>
        <TestimonyCarousel users={usersResponse} />
    </div> */}

      <div className="carousel-container">
        <TestimonyCarousel users={usersResponse} />
      </div>

      <HomeSection4
        backgroundImage="/images/Bluebkg.png"
        imageUrl="/images/3D circless.png"
        title="We’re a design driven team"
        firstHeading=" Designing world-class products & brands"
        firstDescription="We’ve helped top startups and other enterprises turn their ideas and goals into refined products and brands that generate millions in revenue."
        secondHeading="Pushing boundaries & designers everywhere"
        secondDescription="Our designs are inspiring millions of people across social media and product teams. We shape new trends and push the boundaries."
      />
      <HomeSection4
        backgroundImage="/images/Darkblue.png"
        imageUrl="/images/feasble.png"
        title="We get things done, fast & feasible "
        firstHeading="Agile and transparent"
        firstDescription="Forget a useless 80-slide presentation. We focus on design deliverables every week. And when we commit to a deadline, we make it happen. Always."
        secondHeading="Flexible collaboration & payments"
        secondDescription="Whether you're starting from scratch and need an autonomous team or are looking for staff augmentation with a lot of collaboration, we've got you covered."
      />
      <HomeSection4
        backgroundImage="/images/Darkblue2.png"
        imageUrl="/images/afford.png"
        title="We made world-class services affordable."
        firstHeading="We make the complex simple"
        firstDescription="From neurotech companies to admin tools with intricate access policies, we understand your product and simplify it for the people who use it."
        secondHeading="Commited to putting a smile on people’s faces"
        secondDescription="Get continuous high-quality design & fast turnaround at a flat rate to help scale your business. It helps you save time on hiring and career laddering and avoid the hustle of dealing with expensive agencies."
      />
      
      <DontLet />

    </>
  )
}

export default Home
