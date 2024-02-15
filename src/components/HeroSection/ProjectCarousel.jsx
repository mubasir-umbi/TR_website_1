import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function ProjectCarousel({ bg_Color }) {
    const gradientClasses = [
        "bg-gradient-to-b from-indigo-900 to-gray-900",
        "bg-gradient-to-b from-red-900 to-gray-900",
        "bg-gradient-to-b from-indigo-800 to-gray-900",
    ];

    const carouselItems = [
        {
            id: 1,
            href:'/projects/snaptrack',
            imageSrc: '/images/Snaptrack card image.png',
            imageSrcCenter: '/images/Snaptrack card image.png',
            badge: '/images/Top1.svg',
            title: 'SnapTrack',
            description: 'A SAAS based state-of-the-art attendance and payroll management software.'
        },
        {
            id: 2,
            href:'/projects/offroll',
            imageSrc: '/images/offrolls.png',
            imageSrcCenter: '/images/Screenshot122.png',
            badge: '/images/Top2.png',
            title: 'Offrolls',
            description: 'Helping corporations find the hidden talent within the dense branches.'
        },
        {
            id: 3,
            href:'/projects/bizbuz',
            // imageSrc: '/images/bizbuz.png',
            imageSrc: '/images/CrossMobile.png',
            imageSrcCenter: '/images/Snaptrack card image.png',
            badge: '/images/Top3.png',
            title: 'Biz & Buz',
            description: 'A dynamic B2B and B2C application that revolutionized public transportation.'
        },
        {
            id: 4,
            href:'/projects/dmtc',
            // imageSrc: '/images/EmailCampaign.svg',
            imageSrc: '/images/EmailCampaign.png',
            imageSrcCenter: '/images/EmailCampaignFull.png',
            badge: '/images/Top4.png',
            title: 'Data mappers card',
            description: 'Providing an advanced, self hosted email marketing solution.'
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
            //   breakpoint: { max: 1024, min: 464 },
            breakpoint: { max: 1250, min: 870 },
            items: 2
        },
        mobile: {
            //   breakpoint: { max: 464, min: 0 },
            breakpoint: { max: 800, min: 0 },
            items: 1
        }
    };
    return (
        <div className={`bg-${bg_Color} pb-0 sm:pb-20`}>
            <Carousel responsive={responsive} className='mx-5 sm:mx-16 pb-20'>
                {carouselItems.map((item, index) => (
                    <a key={item.id} href={item.href} className="cursor-pointer">
                        <div className='flex justify-center'>
                            <div className="relative h-[400px] w-[330px] md:w-[364px] sm:h-[500px] rounded-3xl border-t-10 border-deep_purple-800 ">
                                <div className={gradientClasses[index % gradientClasses.length] + " rounded-3xl h-full relative"}>
                                    <img className="absolute -top-8 sm:-top-8 left-8  w-20 h-20 p-4 sm:w-24 sm:h-24 border-white-A700" src={item.badge} alt="Badge" />
                                    <div className='pl-5 sm:pl-10'>
                                        <div className="fontMontserrat mt-20 pt-16 sm:pt-20 text-white-A700 text-left font-bold text-3xl mb-2 letter-spacing[-3%]">{item.title}</div>
                                        <p className="fontMontserrat text-white-A700 text-left font-normal text-sm sm:text-base sm:leading-[25.6px]">{item.description}</p>
                                    </div>

                                    <div className='flex justify-center'>
                                        <img className="absolute h-52 w-100 bottom-0 object-cover rounded-t-2xl" src={item.imageSrc} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </Carousel>
        </div>
    );
}

export default ProjectCarousel;


