import React from "react";


import LetsChatSection from "../../components/LetsChatSection";
import SectionOne from "../../components/projectDetails/SectionOne";
import SectionTwo from "../../components/projectDetails/SectionTwo";
import ProjectDetailsSection from "../../components/projectDetails/ProjectDetailsSection";
import KeyFeturesSection from "../../components/projectDetails/KeyFeturesSection";

import HaveProjForUs from '../../components/projectDetails/HaveProjForUs';


import img_group230198 from '../../assets/images/img_group230198.svg'
import offroll_img_1 from '../../assets/images/offroll_img_1.png'
import offroll_img_2 from '../../assets/images/offroll_img_2.png'
import offroll_img_3 from '../../assets/images/offroll_img_3.png'
import offroll_img_4 from '../../assets/images/offroll_img_4.png'
import offroll_key_f_img from '../../assets/images/offroll_key_f_img.png'
import img_group2301911 from '../../assets/images/img_group2301911.png'
import Group_230192 from '../../assets/images/Group 230192.png'



const text = `The vision offrolls is to help corporations find the talent
              hidden within the dense thicket and tangled branches. Our web
              of talent farmers unearths the right talent—those that are
              perfectly aligned with the specific needs of your
              ever-evolving business landscape.`

const detText = `Industries facing challenges in engaging companies and
                 recruiters efficiently to achieve effective and quick closures
                 for job positions.`

const key_fet = ` Key features include Efficient Communication: Enhance
                  collaboration between companies and recruiters. Quick Closure:
                  Accelerate the hiring process for faster recruitment. Real-time
                  Updates: Keep all stakeholders informed throughout the hiring
                  journey.                  `

const detText2 = ` The implementation of Offrolls significantly reduced the
                   time-to-fill for job positions, resulting in increased
                   efficiency and satisfaction for both companies and recruiters.`

const color = 'text-deep_orange-600'


const datas = [
  {
      name1: 'Earth Suppliers',
      name2: '',
      text: 'CLIENT',
      pClass: 'leading-[140.00%] max-w-[180px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl font-bold font-montserrat'
  },
  {
      name1: 'Bangalore, India',
      name2: '',
      text: 'LOCATION',
      pClass: 'leading-[140.00%] max-w-[180px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl font-bold font-montserrat'
  },
  {
      name1: 'UI, UX, Website',
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


const Offroll = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto pt-12 w-full">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start mx-1 md:px-5 w-full">

            <SectionOne 
                 name = {img_group230198} 
                 text = {text} 
                 image = {offroll_img_1} 
            />

            <SectionTwo 
                 datas= {datas} 
            />

            <ProjectDetailsSection
                 head1 = 'Understanding'
                 head2 = 'The Problem' 
                 img = {offroll_img_2}
                 align = 'items-start'
                 color = {'text-deep_orange-600'}
                 text = {detText}
            />

            <ProjectDetailsSection
                 head1 = 'A new identity'
                 head2 = 'That people love' 
                 img = {offroll_img_3}
                 align = 'items-end'
                 color = {color}
                 text = {detText2}
            />

            <ProjectDetailsSection
                 head1 = ' Job'
                 head2 = 'dashboard' 
                 img = {offroll_img_4}
                 align = 'items-start'
                 color = {color}
                 text = {''}
            />

            <KeyFeturesSection 
                 img = {offroll_key_f_img}
                 color = {color}
                 text = {key_fet}
             />
            
          </div>
        </div>
      </div>

      <HaveProjForUs/>

    </>
  );
};

export default Offroll;
