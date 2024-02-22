import React, {Suspense } from 'react';
import BackToTop from '../components/BackToTop';
import Loader from '../components/loader';
const BuiltFor = React.lazy(() => import('../components/AboutUs/BuilFor'));
const WhatWeDo = React.lazy(() => import('../components/AboutUs/WhatWeDo'));
const SuccessFull = React.lazy(() => import('../components/AboutUs/SuccessFull'));
const HowDoWe = React.lazy(() => import('../components/AboutUs/HowDoWe'));
const ReadyToCollabrate = React.lazy(() => import('../components/AboutUs/ReadyToCollabrate'));
const OurTechnology = React.lazy(() => import('../components/AboutUs/OurTechnology'));
const TeamTrust = React.lazy(() => import('../components/AboutUs/TeamTrust'));
const DontLet = React.lazy(() => import('../components/DontLet'));
 
const AboutUs = () => {
  return (
    <>
    <BackToTop/>
    <Suspense fallback={<div className='h-screen'> <Loader/></div> }>  
      <BuiltFor />
      <WhatWeDo />
      <SuccessFull />
      <HowDoWe />
      <ReadyToCollabrate />
      <OurTechnology />
      <TeamTrust />
      <DontLet />
    </Suspense>
    </>
  );
}

export default AboutUs;