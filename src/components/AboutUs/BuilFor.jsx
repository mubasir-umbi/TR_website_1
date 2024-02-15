import React from 'react';
import LetsTalk from '../buttons/LetsTalk';


function BuiltFor() {
    return (
        // <div className="relative flex items-center justify-center">
       <div className="relative flex md:h-[660px]"> 
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25 w-full md:h-auto"
                style={{
                    backgroundImage: "url('images/background.png')"
                }}
            ></div>

            <div className="relative z-10 text-left py-[50px] pl-[32px] md:pl-[64px] md:pt-[80px]">
                <div className="font-Montserrat text-sm text-gray-900 md:text-2xl font-normal leading-[33.6px] tracking-[5%] pb-3">
                    We are Techrenders 🔥❤️
                </div>

                <div className="font-Exo text-left font-extrabold text-3xl md:text-[63px] leading-[2.5rem] md:leading-[89.6px] text-customBlueishBlack max-w-[300px] md:max-w-[1000px]">
                    Built for modern founders who want to make waves.
                </div>

                <div className="text-left mt-7">
                    {/* <button className="relative items-center font-Montserrat md:my-1 pl-6 pr-[70px] py-4 font-bold text-xl leading-normal leading-trim text-white-A700 uppercase tracking-wide bg-deep_purple-800 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
                        LET’S TALK
                    </button> */}
                    <LetsTalk/>
                </div>

                <img
                    src="/images/chair.png"
                    alt="chair"
                    className="absolute w-96 h-112 right-3 md:top-[220px] md:pb-20 hidden lg:block"
                />
            </div>
        </div>
        // </div>
    );
}

export default BuiltFor;
