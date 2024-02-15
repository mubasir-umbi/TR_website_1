import React from 'react'
import ContatctUsBtn from './buttons/ContactUsBtn'

function DontLet() {
    return (
        <>
            <div className="relative bg-gray-900 p-10 md:px-40 py-28 md:py-60 ">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: "url('/images/grid.png')",  
                      
                    }}
                    // opacity: 0.5
                ></div>

                <div className="relative z-10">
                    <div className="fontExo text-center font-extrabold text-3xl md:text-[72px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] text-white-A700">
                        Don’t Let Your Idea <br/> Stay a Dream.
                    </div>

                    <div className="fontMontserrat text-gray-500 text-center text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
                        Drop us a line to know how technology and <br /> design will impact your business.
                    </div>

                    <div className="flex flex-row items-center justify-center mt-7">
                        {/* <button className="relative inline-flex items-center fontMontserrat px-4 py-2 font-bold text-base md:my-1 md:px-7  md:py-3 md:font-bold md:text-xl md:leading-normal leading-trim text-white-A700 uppercase tracking-wide bg-deep_purple-800 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
                            contact us
                        </button> */}
                        <ContatctUsBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DontLet

    {/* <div className='bg-customBlueishBlack p-10 md:px-40 py-28 md:py-60'>
        
        <div className="fontExo text-center font-extrabold text-3xl md:text-[64px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] uppercase text-white">
            Don’t Let Your Idea <br className='hidden md:block' /> Stay a Dream.
        </div>

        <div className="fontMontserrat text-customGrey1 text-center text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
            Drop us a line to know how technology and <br className='hidden md:block' /> design will impact your business.
        </div>

        <div className="flex flex-row items-center justify-center mt-7">
            <button className="relative inline-flex items-center fontMontserrat px-4 py-2 font-bold text-base md:my-1 md:px-7  md:py-3 md:font-bold md:text-xl md:leading-normal leading-trim text-white uppercase tracking-wide bg-customBlue rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 mb-4 md:mb-0 md:mr-4">
                contact us
            </button>               
        </div>         
    </div> */}