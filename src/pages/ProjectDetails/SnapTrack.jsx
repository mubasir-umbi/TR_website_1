import React from 'react'
import LetsChatSection from "../../components/LetsChatSection";
import SectionOne from "../../components/projectDetails/SectionOne";
import SectionTwo from "../../components/projectDetails/SectionTwo";
import ProjectDetailsSection from "../../components/projectDetails/ProjectDetailsSection";
import KeyFeturesSection from "../../components/projectDetails/KeyFeturesSection";
import img_group230198 from '../../assets/images/img_group230198.svg'
import handMockup from '../../assets/images/img_mockup2withhand.png'
import snaptrack_heading_img from '../../assets/images/snaptrack_heading_img.svg'
import img_group2301911 from '../../assets/images/img_group2301911.png'
import Group_230192 from '../../assets/images/Group 230192.png'
import snaptrac_img_1 from '../../assets/images/snaptrac_img_1.png'
import HaveProjForUs from '../../components/projectDetails/HaveProjForUs';
import BackToTop from '../../components/BackToTop';

const txt = `A Software as a Service (SAAS) attendance and payroll
solution, functioning akin to a digital HR assistant,
ensures organization, security, and automation of
essential processes.`

const ProjDetText = `The implementation of SnapTrack not only improved the
accuracy of attendance tracking but also automated the
payroll process, reducing manual errors and saving
valuable time for various SME’s and startup’s.`

const ProjDetText0 = `SME and startups facing challenges employee/ workforce
onboridng, attendance and payroll management with enhanced
security features, including facial recognition and
biometric device integration.`

const color = 'text-indigo-400'

const datas = [
  {
      name1: 'Techrender',
      name2: 'Business Solution',
      text: 'CLIENT',
      pClass: 'leading-[140.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl font-bold font-montserrat'
  },
  {
      name1: 'Bangalore, India',
      name2: '',
      text: 'LOCATION',
      pClass: 'leading-[140.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl font-bold font-montserrat'
  },
  {
      name1: 'UI, UX, Strategy',
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


const SnapTrack = () => {
  return (
    <>
      <div className='max-w-[1300px] mx-auto'>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-12">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex flex-col w-full">
          <BackToTop/>
            <SectionOne 
                 h = 'h-16'
                 name = {snaptrack_heading_img} 
                 text = {txt} 
                 image = {handMockup} 
            />

            <SectionTwo 
                 datas= {datas} 
            />

            <ProjectDetailsSection
                 head1 = 'Understanding'
                 head2 = 'The Problem' 
                 img = {snaptrac_img_1}
                 align = 'items-start'
                 color = {color}
                 text = {ProjDetText0}    
            />
            <ProjectDetailsSection
                 head1 = 'A new experience'
                 head2 = 'That people love' 
                 img = {img_group2301911}
                 align = 'items-end'
                 color = {color}
                 text = {ProjDetText}
            />

            <KeyFeturesSection 
                 img = {Group_230192}
                 color = {color}
             />
            
          </div>
        </div>
      </div>
      </div>
      <HaveProjForUs/>

    </>
  )
}

export default SnapTrack


