import React from 'react'
import LetsTalk from '../buttons/LetsTalk'


function ReadyToCollabrate({text1}) {
    return (

        // <div className="relative bg-gray-900 p-10 md:px-40 py-28 md:py-60">
        <div className='relative bg-gray-900 m-8 md:m-[64px] rounded-[12px] p-10 md:p-[160px]'>
        <div
            className="absolute inset-0 bg-cover bg-center z-0 rounded-xl"
            style={{
                backgroundImage: "url('/images/CollabrateBackground.png')",  
              
            }}
        ></div>

        <div className="relative z-10">
            <div className="fontExo text-center font-extrabold text-3xl md:text-[64px] leading-[2.5rem] md:leading-[89.6px] tracking-[-1%] text-white-A700">
              READY TO<br />COLLABORATE?{text1}
            </div>

            <div className="fontMontserrat text-gray-500 text-center text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-7">
            Drop us a line to Know how technology and<br className='hidden md:block' />design will impact your business.
            </div>

            <div className="flex flex-row items-center justify-center mt-7">
            <LetsTalk/>
            </div>
        </div>
    </div>

    )
}

export default ReadyToCollabrate