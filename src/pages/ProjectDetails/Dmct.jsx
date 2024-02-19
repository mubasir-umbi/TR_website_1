
import React from 'react'


import LetsChatSection from "../../components/LetsChatSection";
import SectionOne from "../../components/projectDetails/SectionOne";
import SectionTwo from "../../components/projectDetails/SectionTwo";
import ProjectDetailsSection from "../../components/projectDetails/ProjectDetailsSection";
import KeyFeturesSection from "../../components/projectDetails/KeyFeturesSection";


import dmct_img_0 from '../../assets/images/dmct_img_0.png'
import dmct_img_1 from '../../assets/images/dmct_img_1.png'
import dmct_img_2 from '../../assets/images/dmct_img_2.png'
import dmct_img_3 from '../../assets/images/dmct_img_3.png'
import dmct_img_3_1 from '../../assets/images/dmct_img_3.1.png'
import dmct_img_4 from '../../assets/images/dmct_img_4.png'
import dmct_img_5 from '../../assets/images/dmct_img_5.png'

import HaveProjForUs from '../../components/projectDetails/HaveProjForUs';
import BackToTop from '../../components/BackToTop';


const text1 = `DataMapers Group sought to provide an advanced, self-hosted
email marketing solution that enables users to send
high-volume marketing emails via their own servers or through
various SMTP providers`

const detText1 = `The goal was to empower businesses to have complete control over
their email marketing campaigns, eliminating the need for
expensive third-party services like Mailchimp, Mailgun or
Sendgrid.`

const detText2 = `DM_Campaign Tool (DMCT), a self-hosted PHP/Laravel Email Marketing
Web Application, provides businesses with complete control over
high-volume email campaigns. Users can send emails via their
servers or popular SMTP providers, eliminating reliance on costly
services like Mailchimp, Mailgun or Sendgrid. With seamless
integration, Zapier support, and a Automation workflow, DMCT
simplifies email marketing.`




const datas = [
  {
      name1: 'DataMapers Group',
      name2: '',
      text: 'CLIENT',
      pClass: 'leading-[140.00%] max-w-[180px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl font-bold font-montserrat'
  },
  {
      name1: 'Philadelphia, USA',
      name2: '',
      text: 'LOCATION',
      pClass: 'text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto font-bold font-montserrat'
  },
  {
      name1: 'Web App',
      name2: '',
      text: 'Deliverables',
      pClass: 'leading-[140.00%] max-w-[180px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl font-bold font-montserrat'
  },
  {
      name1: 'Web',
      name2: '',
      text: 'PLATFORMS',
      pClass: 'text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto font-bold font-montserrat'
  },
]

const color = 'text-indigo-111'



const Dmct = () => {
  return (
    <>
      <div className='max-w-[1300px] mx-auto'>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-12">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex flex-col w-full">
          <BackToTop/>
            <SectionOne 
                 name = {dmct_img_0 } 
                 text = {text1} 
                 image = {dmct_img_1}
                 h='h-14' 
            />

            <SectionTwo 
                 datas= {datas} 
            />

            <ProjectDetailsSection
                 head1 = 'Understanding'
                 head2 = 'The Problem' 
                 img = {dmct_img_2}
                 align = 'items-start'
                 color = {color}
                 text = {detText1}
            />

            <ProjectDetailsSection
                 head1 = 'A new solution'
                 head2 = 'That people love' 
                 img = {dmct_img_3_1}
                 align = 'items-end'
                 color = {color}
                 text = {detText2}
            />

            <ProjectDetailsSection
                 head1 = 'Rewards'
                 head2 = 'Screens' 
                 img = {dmct_img_4}
                 align = 'items-start'
                 color = {color}
                 text = {''}
            />


            <KeyFeturesSection 
                 img = {dmct_img_5}
                 color = {color}
                 text = {''}
             />
                        
          </div>
        </div>
        </div>
      </div>
      <HaveProjForUs/>
      
    </>
  )
}

export default Dmct

