import React, { lazy, Suspense } from 'react';
const BuiltFor = lazy(() => import('../components/AboutUs/BuilFor'));
const WhatWeDo = lazy(() => import('../components/AboutUs/WhatWeDo'));
const SuccessFull = lazy(() => import('../components/AboutUs/SuccessFull'));
const HowDoWe = lazy(() => import('../components/AboutUs/HowDoWe'));
const ReadyToCollabrate = lazy(() => import('../components/AboutUs/ReadyToCollabrate'));
const OurTechnology = lazy(() => import('../components/AboutUs/OurTechnology'));
const TeamTrust = lazy(() => import('../components/AboutUs/TeamTrust'));
const DontLet = lazy(() => import('../components/DontLet'));
 


function AboutUs() {
  return (
    <Suspense >
      <BuiltFor />
      <WhatWeDo />
      <SuccessFull />
      <HowDoWe />
      <ReadyToCollabrate />
      <OurTechnology />
      <TeamTrust />
      <DontLet />
    </Suspense>
  );
}

export default AboutUs;