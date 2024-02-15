import React from 'react'
import { ReactTyped } from "react-typed";
import LetsTalk from '../buttons/LetsTalk';


function WeTransform() {
    return (

        // <div className="relative min-h-screen flex items-center justify-center p-5">
        <div className="relative flex items-center justify-center py-10 px-5 sm:py-32">
            <div className="absolute inset-0 bg-white-A700"></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('images/background.png')" }}
            ></div>

            <div className="relative z-10 text-center">
                <ReactTyped className="fontMontserrat text-sm md:text-base font-normal leading-6 tracking-wide pt-10 md:pt-32" strings={[" PEOPLE - CENTERED DESIGN 😎", "AGILE AND TRANSPARENT"]} typeSpeed={30} loop={true} />



                <div className="fontExo font-extrabold text-3xl sm:text-5xl md:text-7xl md:leading-[75px] text-center tracking-[-1%]  uppercase text-deep_purple-800 mt-3 md:mt-7">
                    We Transform Your Business<br />

                </div>
                <div className="fontExo font-extrabold lowercase text-black text-2xl sm:text-4xl md:text-7xl leading-6">
                    through custom software <br className='hidden md:block'/> solutions.
                </div>
        

                {/* Description */}
                <div className="px-10 sm:px-0 fontMontserrat text-center text-[10px] md:text-xl font-normal md:leading-7  sm:tracking-wide mt-7">
                    We take responsibility of your vision as our duty and <br className='hidden md:block' /> create your tomorrow. Today.
                </div>


                <div className="flex flex-row items-center justify-center mt-10">
                    <LetsTalk />
                    <img
                        src="/images/arrowGroup.png"
                        alt="Responsive Image"
                        className="w-[150px] h-[28px] sm:w-[244px] sm:h-[45px] px-3"
                    />
                </div>

                <div className="flex justify-center">
                    <img
                        src="/images/ThreeCards.svg"
                        alt="Responsive Image"
                        className="max-w-full mt-10 md:mt-24"
                    />
                </div>

                <img
                    src="/images/GraphGroup.png"
                    alt="Responsive Image"
                    className="max-w-full md:mt-[-50px]"
                />


            </div>
        </div>

    )
}

export default WeTransform


