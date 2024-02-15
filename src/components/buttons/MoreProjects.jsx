import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";

function MoreProjects() {
    return (
        <>
            {/* <button className="relative overflow-hidden text-blue-100 shadow-2xl inline-flex items-center fontMontserrat cursor-pointer px-2 py-3 md:my-1 md:px-6 md:py-4 mb-4 md:mb-0 md:mr-4 font-semibold md:font-bold text-sm md:text-xl leading-normal leading-trim  uppercase tracking-wide border border-white border-solid rounded-full hover:bg-customBlue" >
                <span relative="relative z-10">More Project</span>
                <BsArrowRightCircleFill className="ml-2 text-2xl text-blue-100 hover:text-white-700 lg md:text-2xl" />
            </button> */}
            <button className="relative overflow-hidden text-blue-100 hover:text-white-A700 shadow-xl inline-flex items-center font-montserrat cursor-pointer px-4 py-2  md:px-6 md:py-3 md:mb-0 md:mr-4 font-semibold md:font-bold text-sm md:text-xl leading-normal leading-trim  uppercase tracking-wide  rounded-full border border-white border-solid" >
                <span relative="relative z-10">More Project</span>
                <BsArrowRightCircleFill className="ml-2 text-lg md:text-2xl" />
            </button>
        </>
    )
}

export default MoreProjects