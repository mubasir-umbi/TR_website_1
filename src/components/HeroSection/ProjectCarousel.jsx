import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import SnapCardImage from '../../assets/images/SnapCardImage.webp'
import offrolls from '../../assets/images/offrolls.webp'
import CrossMobile from '../../assets/images/CrossMobile.webp'
import EmailCampaign from '../../assets/images/EmailCampaign.webp'
import MoreProjectImage from '../../assets/images/moreprojects.webp'

function ProjectCarousel({ bg_Color }) {
    const gradientClasses = [
        "bg-gradient-to-b from-indigo-900 to-gray-900",
        "bg-gradient-to-b from-red-900 to-gray-900",
        "bg-gradient-to-b from-indigo-800 to-gray-900",
    ];
    const BorderClasses = [
       "border-indigo-900",
       "border-red-900",
       "border-indigo-800"
    ];

    const carouselItems = [
        {
            id: 1,
            to: '/projects/snaptrack',
            // imageSrc: '/images/Snaptrack card image.png',
            imageSrc: SnapCardImage,
            badge: '/images/Top1.svg',
            title: 'SnapTrack',
            description: 'A SAAS based state-of-the-art attendance and payroll management software.',
            border: 'indigo-900'
        },
        {
            id: 2,
            to: '/projects/offroll',
            // imageSrc: '/images/offrolls.png',
            imageSrc: offrolls,
            badge: '/images/Top2.png',
            title: 'Offrolls',
            description: 'Helping corporations find the hidden talent within the dense branches.',
            border: 'blue-400'
        },
        {
            id: 3,
            to: '/projects/bizbuz',
            // imageSrc: '/images/CrossMobile.png',
            imageSrc: CrossMobile,
            badge: '/images/Top3.png',
            title: 'Biz & Buz',
            description: 'A dynamic B2B and B2C application that revolutionized public transportation.',
            border: 'indigo-800'
        },
        {
            id: 4,
            to: '/projects/dmct',
            // imageSrc: '/images/EmailCampaign.png',
            imageSrc:EmailCampaign,
            badge: '/images/Top4.png',
            title: 'Data Mappers',
            description: 'Providing an advanced, self hosted email marketing solution.',
            border: 'deep_purple-800'
        },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1250 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1250, min: 870 },
            items: 2
        },
        mobile: {

            breakpoint: { max: 800, min: 0 },
            items: 1
        }
    };
    return (
        <div className={`bg-${bg_Color}  sm:py-10`}>
            <div className='max-w-[1300px] mx-auto'>
          

<Carousel responsive={responsive} className='pt-8 mx-5 sm:mx-16 sm:pb-20'>
    {carouselItems.map((item, index) => (
        <Link  to={item.to} key={item.id} className="cursor-pointer">
            <div className='flex'>
                <div className={`relative h-[500px] w-[364px] md:w-[364px] sm:h-[500px] rounded-3xl hover:scale-95 transition duration-500 `}>
                    <div className={gradientClasses[index % gradientClasses.length] + ` rounded-3xl h-full m-2 relative border ${BorderClasses[index % BorderClasses.length]}`}>
                        <img className="absolute -top-8 sm:-top-8 left-8 w-24 h-24 p-4 sm:w-24 sm:h-24 object-cover" src={item.badge} alt="Badge" />
                        <div className='pl-5 sm:pl-10'>
                            <div className="fontMontserrat mt-16 pt-8 text-white-A700 text-left font-bold text-3xl mb-2 letter-spacing[-3%]">{item.title}</div>
                            <p className="fontMontserrat text-white-A700 text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">{item.description}</p>
                        </div>
                        {/* <div className='flex justify-center'>
                            <img className="absolute h-[200px] w-100 bottom-0 object-cover rounded-t-2xl hover:rounded-b-2xl  hover:scale-x-110 transition duration-500" src={item.imageSrc} alt="img" />
                        </div> */}
                        <div className='flex justify-center'>
                                           <img className="absolute h-52 w-100 bottom-0  object-cover rounded-t-2xl hover:rounded-b-2xl hover:scale-105 hover:bottom-[5px] transition duration-500" src={item.imageSrc} alt="img" />
                                       </div>

                    </div>
                </div>
            </div>
        </Link>
    ))}
   <Link to={'/projects'}><img className='h-[500px] w-[364px] m-2 hover:scale-95 transition duration-500' src={MoreProjectImage} alt="moreProjects" /> </Link> 
</Carousel>

            </div>
        </div>
    );
}

export default ProjectCarousel;








// import React, { useState } from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


// function ProjectCarousel({ bg_Color }) {
//     const gradientClasses = [
//         "bg-gradient-to-b from-indigo-900 to-gray-900",
//         "bg-gradient-to-b from-red-900 to-gray-900",
//         "bg-gradient-to-b from-indigo-800 to-gray-900",
//     ];

//     const carouselItems = [
//         {
//             id: 1,
//             href: '/projects/snaptrack',
//             imageSrc: '/images/Snaptrack card image.png',
//             imageSrcCenter: '/images/Snaptrack card image.png',
//             badge: '/images/Top1.svg',
//             title: 'SnapTrack',
//             description: 'A SAAS based state-of-the-art attendance and payroll management software.',
//             border: 'indigo-900'
//         },
//         {
//             id: 2,
//             href: '/projects/offroll',
//             imageSrc: '/images/offrolls.png',
//             imageSrcCenter: '/images/Screenshot122.png',
//             badge: '/images/Top2.png',
//             title: 'Offrolls',
//             description: 'Helping corporations find the hidden talent within the dense branches.',
//             border: 'blue-400'
//         },
//         {
//             id: 3,
//             href: '/projects/bizbuz',
//             // imageSrc: '/images/bizbuz.png',
//             imageSrc: '/images/CrossMobile.png',
//             imageSrcCenter: '/images/Snaptrack card image.png',
//             badge: '/images/Top3.png',
//             title: 'Biz & Buz',
//             description: 'A dynamic B2B and B2C application that revolutionized public transportation.',
//             border: 'indigo-800'
//         },
//         {
//             id: 4,
//             href: '/projects/dmct',
//             // imageSrc: '/images/EmailCampaign.svg',
//             imageSrc: '/images/EmailCampaign.png',
//             imageSrcCenter: '/images/EmailCampaignFull.png',
//             badge: '/images/Top4.png',
//             title: 'Data Mappers',
//             description: 'Providing an advanced, self hosted email marketing solution.',
//             border: 'deep_purple-800'
//         },
//     ];

//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 3
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1250 },
//             items: 3
//         },
//         tablet: {
//             //   breakpoint: { max: 1024, min: 464 },
//             breakpoint: { max: 1250, min: 870 },
//             items: 2
//         },
//         mobile: {
//             //   breakpoint: { max: 464, min: 0 },
//             breakpoint: { max: 800, min: 0 },
//             items: 1
//         }
//     };
//     return (
//         <div className={`bg-${bg_Color} py-10`}>
//             <div className='max-w-[1300px] mx-auto'>
//                 <Carousel responsive={responsive} className='pt-8 mx-5 sm:mx-16 sm:pb-20'>
//                     {carouselItems.map((item, index) => (
//                         <a key={item.id} href={item.href} className="cursor-pointer">
//                             <div className='flex'>
//                                 <div className="relative h-[500px] w-[364px] md:w-[364px] sm:h-[500px] rounded-3xl">
//                                     <div className={gradientClasses[index % gradientClasses.length] + ` rounded-3xl h-full relative border border-deep_purple-900`}>
//                                         <img className="absolute -top-8 sm:-top-8 left-8  w-20 h-20 p-4 sm:w-24 sm:h-24" src={item.badge} alt="Badge" />
//                                         <div className='pl-5 sm:pl-10'>
//                                             <div className="fontMontserrat mt-16 pt-8 text-white-A700 text-left font-bold text-3xl mb-2 letter-spacing[-3%]">{item.title}</div>
//                                             <p className="fontMontserrat text-white-A700 text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">{item.description}</p>
//                                         </div>
//                                         <div className='flex justify-center'>
//                                             <img className="absolute h-52 w-100 bottom-0  object-cover rounded-t-2xl hover:scale-110 hover:bottom-[10px] transition duration-500" src={item.imageSrc} alt="img" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     ))}
//                     <a href="/projects"><img className='h-[500px] w-[364px]' src="/images/moreprojects.png" alt="moreProjects" /></a>
//                 </Carousel>
//             </div>
//         </div>
//     );
// }

// export default ProjectCarousel;



// import React, { useState } from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


// function ProjectCarousel({ bg_Color }) {
//     const gradientClasses = [
//         "bg-gradient-to-b from-indigo-900 to-gray-900",
//         "bg-gradient-to-b from-red-900 to-gray-900",
//         "bg-gradient-to-b from-indigo-800 to-gray-900",
//     ];

//     const carouselItems = [
//         {
//             id: 1,
//             href:'/projects/snaptrack',
//             imageSrc: '/images/Snaptrack card image.png',
//             imageSrcCenter: '/images/Snaptrack card image.png',
//             badge: '/images/Top1.svg',
//             title: 'SnapTrack',
//             description: 'A SAAS based state-of-the-art attendance and payroll management software.'
//         },
//         {
//             id: 2,
//             href:'/projects/offroll',
//             imageSrc: '/images/offrolls.png',
//             imageSrcCenter: '/images/Screenshot122.png',
//             badge: '/images/Top2.png',
//             title: 'Offrolls',
//             description: 'Helping corporations find the hidden talent within the dense branches.'
//         },
//         {
//             id: 3,
//             href:'/projects/bizbuz',
//             // imageSrc: '/images/bizbuz.png',
//             imageSrc: '/images/CrossMobile.png',
//             imageSrcCenter: '/images/Snaptrack card image.png',
//             badge: '/images/Top3.png',
//             title: 'Biz & Buz',
//             description: 'A dynamic B2B and B2C application that revolutionized public transportation.'
//         },
//         {
//             id: 4,
//             href:'/projects/dmct',
//             // imageSrc: '/images/EmailCampaign.svg',
//             imageSrc: '/images/EmailCampaign.png',
//             imageSrcCenter: '/images/EmailCampaignFull.png',
//             badge: '/images/Top4.png',
//             title: 'Data Mappers',
//             description: 'Providing an advanced, self hosted email marketing solution.'
//         },
//     ];

//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 3
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1250 },
//             items: 3
//         },
//         tablet: {
//             //   breakpoint: { max: 1024, min: 464 },
//             breakpoint: { max: 1250, min: 870 },
//             items: 2
//         },
//         mobile: {
//             //   breakpoint: { max: 464, min: 0 },
//             breakpoint: { max: 800, min: 0 },
//             items: 1
//         }
//     };
//     return (
//         <div className={`bg-${bg_Color} pb-10 sm:pb-10 `}>
//             <div className='max-w-[1300px] mx-auto'>
//             <Carousel responsive={responsive} className='mx-5 sm:mx-16 sm:pb-20'>
//                 {carouselItems.map((item, index) => (
//                     <a key={item.id} href={item.href} className="cursor-pointer">
//                         <div className='flex justify-center'>
//                             <div className="relative h-[400px] w-[330px] md:w-[364px] sm:h-[500px] rounded-3xl border-t-10 border-deep_purple-800 ">
//                                 <div className={gradientClasses[index % gradientClasses.length] + " rounded-3xl h-full relative"}>
//                                     <img className="absolute -top-8 sm:-top-8 left-8  w-20 h-20 p-4 sm:w-24 sm:h-24 border-white-A700" src={item.badge} alt="Badge" />
//                                     <div className='pl-5 sm:pl-10'>
//                                         <div className="fontMontserrat mt-20 pt-16 sm:pt-20 text-white-A700 text-left font-bold text-3xl mb-2 letter-spacing[-3%]">{item.title}</div>
//                                         <p className="fontMontserrat text-white-A700 text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">{item.description}</p>
//                                     </div>

//                                     <div className='flex justify-center'>
//                                         <img className="absolute h-52 w-100 bottom-0 object-cover rounded-t-2xl" src={item.imageSrc} alt="img" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </a>
//                 ))}
//                <a href="/projects"><img className='h-[400px] w-[330px] md:h-[500px] md:w-[364px] mt-20'  src="/images/moreprojects.png" alt="moreProjects" /></a>  
//             </Carousel>
//         </div>    
//         </div>
//     );
// }

// export default ProjectCarousel;


// import React, { useState } from 'react';

// const ProjectCarousel = ({ bg_Color }) => {
//     const [defaultTransform, setDefaultTransform] = useState(0);

//     const goNext = () => {
//         let newTransform = defaultTransform - 398;
//         const slider = document.getElementById("slider");

//         if (Math.abs(newTransform) >= slider.scrollWidth / 1.7) {
//             newTransform = 0;
//         }

//         setDefaultTransform(newTransform);
//         slider.style.transform = `translateX(${newTransform}px)`;
//     }

//     const goPrev = () => {
//         let newTransform = defaultTransform + 398;
//         const slider = document.getElementById("slider");

//         if (Math.abs(defaultTransform) === 0) {
//             newTransform = 0;
//         }

//         setDefaultTransform(newTransform);
//         slider.style.transform = `translateX(${newTransform}px)`;
//     }

//         const gradientClasses = [
//             "bg-gradient-to-b from-indigo-900 to-gray-900",
//             "bg-gradient-to-b from-red-900 to-gray-900",
//             "bg-gradient-to-b from-indigo-800 to-gray-900",
//         ];
    
//         const carouselItems = [
//             {
//                 id: 1,
//                 href:'/projects/snaptrack',
//                 imageSrc: '/images/Snaptrack card image.png',
//                 imageSrcCenter: '/images/Snaptrack card image.png',
//                 badge: '/images/Top1.svg',
//                 title: 'SnapTrack',
//                 description: 'A SAAS based state-of-the-art attendance and payroll management software.'
//             },
//             {
//                 id: 2,
//                 href:'/projects/offroll',
//                 imageSrc: '/images/offrolls.png',
//                 imageSrcCenter: '/images/Screenshot122.png',
//                 badge: '/images/Top2.png',
//                 title: 'Offrolls',
//                 description: 'Helping corporations find the hidden talent within the dense branches.'
//             },
//             {
//                 id: 3,
//                 href:'/projects/bizbuz',
//                 // imageSrc: '/images/bizbuz.png',
//                 imageSrc: '/images/CrossMobile.png',
//                 imageSrcCenter: '/images/Snaptrack card image.png',
//                 badge: '/images/Top3.png',
//                 title: 'Biz & Buz',
//                 description: 'A dynamic B2B and B2C application that revolutionized public transportation.'
//             },
//             {
//                 id: 4,
//                 href:'/projects/dmtc',
//                 // imageSrc: '/images/EmailCampaign.svg',
//                 imageSrc: '/images/EmailCampaign.png',
//                 imageSrcCenter: '/images/EmailCampaignFull.png',
//                 badge: '/images/Top4.png',
//                 title: 'Data mappers card',
//                 description: 'Providing an advanced, self hosted email marketing solution.'
//             },
//         ];

//     return (
//         <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4 sm:pl-20">
//             <div className="w-full relative flex items-center justify-center">
//                 <button aria-label="slide backward" className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" onClick={goPrev}>
//                     <svg className="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </button>
//                 <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//                     <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                       
//                     {carouselItems.map((item, index) => (
//                     <a key={item.id} href={item.href} className="cursor-pointer">
//                         <div className='flex justify-center mb-24'>
//                             <div className="relative  h-[500px] w-[364px] rounded-3xl  ">
//                                 <div className={gradientClasses[index % gradientClasses.length] + " rounded-3xl h-full relative"}>
//                                     <img className="absolute -top-8 sm:-top-8 left-8  w-20 h-20 p-4 sm:w-24 sm:h-24 border-white-A700" src={item.badge} alt="Badge" />
//                                     <div className='pl-5 sm:pl-10'>
//                                         <div className="fontMontserrat mt-20 pt-16 sm:pt-20 text-white-A700 text-left font-bold text-3xl mb-2 letter-spacing[-3%]">{item.title}</div>
//                                         <p className="fontMontserrat text-white-A700 text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">{item.description}</p>
//                                     </div>

//                                     <div className='flex justify-center'>
//                                         <img className="absolute h-56 bottom-0 object-cover rounded-t-2xl" src={item.imageSrc} alt="img" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </a>
//                 ))}

// <img className='h-[500px] w-[364px] mt-16'  src="/images/moreprojects.png" alt="moreProjects" />

//                     </div>
//                 </div>
//                 <button aria-label="slide forward" className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" onClick={goNext}>
//                     <svg className="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ProjectCarousel;