import React, { useEffect, useState } from 'react'

import LetsChatSection from "../../components/LetsChatSection";
import SectionOne from "../../components/projectDetails/SectionOne";
import SectionTwo from "../../components/projectDetails/SectionTwo";
import ProjectDetailsSection from "../../components/projectDetails/ProjectDetailsSection";
import KeyFeturesSection from "../../components/projectDetails/KeyFeturesSection";
import HaveProjForUs from '../../components/projectDetails/HaveProjForUs';



import buz_buz_img_0 from '../../assets/images/buz_buz_img_0.png'
import buz_buz_img_1 from '../../assets/images/buz_buz_img_1.png'
import buz_buz_img_2 from '../../assets/images/buz_buz_img_2.png'
import buz_buz_img_3 from '../../assets/images/buz_buz_img_3.png'
import buz_buz_img_4 from '../../assets/images/buz_buz_img_4.png'
import buz_buz_img_5 from '../../assets/images/buz_buz_img_5.png'
import BackToTop from '../../components/BackToTop';

const text1 = `A dynamic B2B and B2C application that revolutionized public
transportation experience. Biz&Buz seamlessly integrates
real-time tracking, estimated times of arrival/departure, and
advertisement publishing.`

const detText1 = `La Empresa sought a comprehensive B2B and B2C application aimed
at enhancing the public transportation experience for end
consumers and digital marketing solutions for business.They
needed a platform that could seamlessly integrate real-time
tracking, estimated times of arrival/departure, advertisement
publishing, rewards points, and exclusive business offers.`


const detText2 = `Biz&Buz seamlessly integrates real-time tracking, estimated
times of arrival/departure, and advertisement publishing. It
also incorporates a robust rewards points system and exclusive
business offers, enhancing customer engagement.`

const key_fet = `Key features include, Real-time Tracking, Enhance public
transport “bus” tracking for the end user. Estimated Times of
Arrival/Departure: Provide accurate information to users.
Advertisement Publishing: Facilitate targeted marketing
strategies. Rewards Points: Build customer loyalty and
engagement. Exclusive Business Offers: Increase sales through
personalized promotions.`


const datas = [
  {
      name1: 'La Empresa Softwares Pvt Ltd,',
      name2: '',
      text: 'CLIENT',
      pClass: 'leading-[140.00%] max-w-[180px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl font-bold font-montserrat'
  },
  {
      name1: 'Kerala, India',
      name2: '',
      text: 'LOCATION',
      pClass: 'text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto font-bold font-montserrat'
  },
  {
      name1: 'UI, UX, Brand Identity',
      name2: '',
      text: 'Deliverables',
      pClass: 'leading-[140.00%] max-w-[180px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl font-bold font-montserrat'
  },
  {
      name1: 'Mobile App',
      name2: '',
      text: 'PLATFORMS',
      pClass: 'text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto font-bold font-montserrat'
  },
]

const BizBuz = () => {
  return (
    <>
      {/* <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-12 w-full">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start  mx-1 md:px-5 w-full"> */}
      <div className='max-w-[1300px] mx-auto'>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-12">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex flex-col w-full">
          <BackToTop/>
            <SectionOne 
                 name = {buz_buz_img_0} 
                 text = {text1} 
                 image = {buz_buz_img_1}
                 h='h-16' 
            />

            <SectionTwo 
                 datas= {datas} 
            />

            <ProjectDetailsSection
                 head1 = 'Understanding'
                 head2 = 'The Problem' 
                 img = {buz_buz_img_2}
                 align = 'items-start'
                 color = {'text-indigo-A200'}
                 text = {detText1}
            />

            <ProjectDetailsSection
                 head1 = 'A new solution'
                 head2 = 'That people love' 
                 img = {buz_buz_img_3}
                 align = 'items-end'
                 color = {'text-indigo-A200'}
                 text = {detText2}
            />

            <ProjectDetailsSection
                 head1 = 'Rewards'
                 head2 = 'Screens' 
                 img = {buz_buz_img_4}
                 align = 'items-start'
                 color = {'text-indigo-A200'}
                 text = {''}
            />

            <KeyFeturesSection 
                 img = {buz_buz_img_5}
                 color = {'text-indigo-A200'}
                 text = {key_fet}
             />
            
          </div>
        </div>
      </div>
      </div>
      <HaveProjForUs/>
      
    </>
  )
}

export default BizBuz
