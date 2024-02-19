import React, { Suspense } from 'react';
import { usersResponse } from '../constants/userResponse'
import BackToTop from '../components/BackToTop';
import Loader from '../components/loader';
const LazyHeroOne = React.lazy(() => import('../components/HeroSection/SectionOne'));
const LazyProjectCarousel = React.lazy(() => import('../components/HeroSection/ProjectCarousel'));
const LazyHomeSection1 = React.lazy(() => import('../components/Home/HomeSection1'));
const LazyHomeSection2 = React.lazy(() => import('../components/Home/HomeSection2'));
const LazyHomeSection3 = React.lazy(() => import('../components/Home/HomeSection3'));
const LazyTestimonyCarousel = React.lazy(() => import('../components/TestimonyCarousel'));
const LazyHomeSection4 = React.lazy(() => import('../components/Home/HomeSection4'));
const LazyDontLet = React.lazy(() => import('../components/DontLet'));
const LazyExplore = React.lazy(() => import('../components/HeroSection/Explore'));


const Home = () => {
  return (
    <div>
      <BackToTop />
      <Suspense fallback={<div className='h-screen'> <Loader/></div> }>
        <LazyHeroOne />
      
        <LazyExplore
          backgroundColor="gray-900"
          titleColor="blue-400"
          descriptionColor="gray-500"
          title="Explore What We Have Done"
          description="See how we have worked on projects for clients."
        />
  
        <LazyProjectCarousel bg_Color='gray-900' />
      
        <LazyHomeSection1 />

        <LazyHomeSection2 /> 
      
        <LazyHomeSection3 />
      
      <div className="carousel-container">   
          <LazyTestimonyCarousel users={usersResponse} />     
      </div>
      

      <div class="relative">
        <div class="sm:sticky top-0">
        
            <LazyHomeSection4
              backgroundImage="/images/Bluebkg.png"
              imageUrl="/images/3D circless.png"
              title="We’re a design driven team"
              firstHeading=" Designing world-class products & brands"
              firstDescription="We’ve helped top startups and other enterprises turn their ideas and goals into refined products and brands that generate millions in revenue."
              secondHeading="Pushing boundaries & designers everywhere"
              secondDescription="Our designs are inspiring millions of people across social media and product teams. We shape new trends and push the boundaries."
            />
          </div>
        <div class="sm:sticky top-0 ">
          
            <LazyHomeSection4
              backgroundImage="/images/Darkblue.png"
              imageUrl="/images/feasble.png"
              title="We get things done, fast & feasible "
              firstHeading="Agile and transparent"
              firstDescription="Forget a useless 80-slide presentation. We focus on design deliverables every week. And when we commit to a deadline, we make it happen. Always."
              secondHeading="Flexible collaboration & payments"
              secondDescription="Whether you're starting from scratch and need an autonomous team or are looking for staff augmentation with a lot of collaboration, we've got you covered."
            />
          </div>
        <div class="sm:sticky top-0 ">
          
            <LazyHomeSection4
              backgroundImage="/images/Darkblue2.png"
              imageUrl="/images/afford.png"
              title="We made world-class services affordable."
              firstHeading="We make the complex simple"
              firstDescription="From neurotech companies to admin tools with intricate access policies, we understand your product and simplify it for the people who use it."
              secondHeading="Commited to putting a smile on people’s faces"
              secondDescription="Get continuous high-quality design & fast turnaround at a flat rate to help scale your business. It helps you save time on hiring and career laddering and avoid the hustle of dealing with expensive agencies."
            />   
        </div>
      </div>    
        <LazyDontLet />
      </Suspense>
    </div>
  );
};

export default Home;



// import React, { Suspense } from 'react';
// import { usersResponse } from '../constants/userResponse'
// import BackToTop from '../components/BackToTop';
// import Loader from '../components/loader';
// const LazyHeroOne = React.lazy(() => import('../components/HeroSection/SectionOne'));
// const LazyProjectCarousel = React.lazy(() => import('../components/HeroSection/ProjectCarousel'));
// const LazyHomeSection1 = React.lazy(() => import('../components/Home/HomeSection1'));
// const LazyHomeSection2 = React.lazy(() => import('../components/Home/HomeSection2'));
// const LazyHomeSection3 = React.lazy(() => import('../components/Home/HomeSection3'));
// const LazyTestimonyCarousel = React.lazy(() => import('../components/TestimonyCarousel'));
// const LazyHomeSection4 = React.lazy(() => import('../components/Home/HomeSection4'));
// const LazyDontLet = React.lazy(() => import('../components/DontLet'));
// const LazyExplore = React.lazy(() => import('../components/HeroSection/Explore'));


// const Home = () => {
//   return (
//     <div >
//       <BackToTop />
//       <Suspense fallback={<Loader/>}>
//         <LazyHeroOne />
//       </Suspense>

//       <Suspense>
//         <LazyExplore
//           backgroundColor="gray-900"
//           titleColor="blue-400"
//           descriptionColor="gray-500"
//           title="Explore What We Have Done"
//           description="See how we have worked on projects for clients."
//         />
//       </Suspense>

//       <Suspense >
//         <LazyProjectCarousel bg_Color='gray-900' />
//       </Suspense>

//       <Suspense >
//         <LazyHomeSection1 />
//       </Suspense>

//       <Suspense>
//         <LazyHomeSection2 />
//       </Suspense>

//       <Suspense >
//         <LazyHomeSection3 />
//       </Suspense>

//       <div className="carousel-container">
//         <Suspense >
//           <LazyTestimonyCarousel users={usersResponse} />
//         </Suspense>
//       </div>

//       <div class="relative">
//         <div class="sticky top-0">
//           <Suspense >
//             <LazyHomeSection4
//               backgroundImage="/images/Bluebkg.png"
//               imageUrl="/images/3D circless.png"
//               title="We’re a design driven team"
//               firstHeading=" Designing world-class products & brands"
//               firstDescription="We’ve helped top startups and other enterprises turn their ideas and goals into refined products and brands that generate millions in revenue."
//               secondHeading="Pushing boundaries & designers everywhere"
//               secondDescription="Our designs are inspiring millions of people across social media and product teams. We shape new trends and push the boundaries."
//             />
//           </Suspense></div>
//         <div class="sticky top-0 ">
//           <Suspense>
//             <LazyHomeSection4
//               backgroundImage="/images/Darkblue.png"
//               imageUrl="/images/feasble.png"
//               title="We get things done, fast & feasible "
//               firstHeading="Agile and transparent"
//               firstDescription="Forget a useless 80-slide presentation. We focus on design deliverables every week. And when we commit to a deadline, we make it happen. Always."
//               secondHeading="Flexible collaboration & payments"
//               secondDescription="Whether you're starting from scratch and need an autonomous team or are looking for staff augmentation with a lot of collaboration, we've got you covered."
//             />
//           </Suspense></div>
//         <div class="sticky top-0 ">
//           <Suspense >
//             <LazyHomeSection4
//               backgroundImage="/images/Darkblue2.png"
//               imageUrl="/images/afford.png"
//               title="We made world-class services affordable."
//               firstHeading="We make the complex simple"
//               firstDescription="From neurotech companies to admin tools with intricate access policies, we understand your product and simplify it for the people who use it."
//               secondHeading="Commited to putting a smile on people’s faces"
//               secondDescription="Get continuous high-quality design & fast turnaround at a flat rate to help scale your business. It helps you save time on hiring and career laddering and avoid the hustle of dealing with expensive agencies."
//             />
//           </Suspense>
//         </div>
//       </div>

//       <Suspense>
//         <LazyDontLet />
//       </Suspense>
//     </div>
//   );
// };

// export default Home;