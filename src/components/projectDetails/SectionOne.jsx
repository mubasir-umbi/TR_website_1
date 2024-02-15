import React from 'react'


const SectionOne = ({ name, text, image, h = 'h-9' }) => {

    return (
        <>
            {/* <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-around mt-[55px] w-full">
                <div className="flex flex-col gap-[42px] items-start justify-start md:mt-0 mt-[63px] w-1/2 md:w-full">
                    <img
                    // h-9
                        className={h}  
                        src={name}
                        alt="group230198"
                    />
                    <p
                        className="leading-[140.00%] text-gray-900 text-lg w-full font-montserrat font-normal text-start">
                       {text}
                    </p>
                </div>
                <div>
                    <img
                        className="h-[450px]  md:h-auto object-cover"
                        src={image}
                        alt="image"
                    />
                </div>
            </div> */}

            <div class="flex flex-col sm:flex-row items-start justify-around mt-[55px] w-[90%] mx-auto sm:px-20">
                <div class="flex flex-col gap-[42px] items-start justify-start md:mt-0 mt-[63px] w-full sm:w-1/2">
                    <img class={h} src={name} alt="group230198" />
                    <p class="leading-[140.00%] text-gray-900 text-lg w-full font-montserrat font-normal text-start">
                        {text}
                    </p>
                </div>
                <div class="sm:mt-0 mt-8 w-full sm:w-1/2">
                    <img class="h-[450px] md:h-auto object-cover" src={image} alt="image" />
                </div>
            </div>

        </>
    )
}

export default SectionOne
