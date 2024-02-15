import React from 'react'

const RecentPrjCard = ({ img, logo, bg, txt, imgAlt, logoAlt, logoClass, imgClass, cocontainerClass }) => {
    return (
        <>
            {/* <div className="flex lg:flex-col flex-row md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
                    
                    <img
                        className={`${logoClass} sm:w-auto`}
                        src={logo}
                        alt={imgAlt}
                    />
                   

                    <p className="text-left leading-[160.00%] max-w-[498px] md:max-w-full text-base text-black-900_01 tracking-[0.48px] font-montserrat font-normal px-10">
                        {txt}
                    </p>
                </div>
                <div
                    className="bg-cover bg-gray-200 bg-no-repeat flex flex-col h-[300px] items-center justify-start rounded w-[300px] "
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                >
                    <img
                        className={`${imgClass} sm:w-full w-auto`}
                        src={img}
                        alt={logoAlt}
                    />
                </div>
            </div>
            <div className="bg-gray-900_87 h-px rotate-[-180deg] w-full" ></div> */}

            {/* <div class="flex flex-col md:flex-row items-center justify-start w-auto md:w-[90%] mx-auto">
                <div class="flex flex-col md:flex-row md:gap-10 gap-16 items-center justify-start w-[70%] md:w-full">
                    <img class="${logoClass} md:w-[20%]" src={logo} alt={imgAlt} />
                    <p class="text-left leading-[160.00%] w-[60%] max-w-[498px] md:max-w-full text-base text-black-900_01 tracking-[0.48px] font-montserrat font-normal px-10">
                        {txt}
                    </p>
                </div>
                <div class="bg-cover bg-gray-200 bg-no-repeat flex flex-col h-[400px] items-center justify-start rounded w-[400px] "
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                    <img class="${imgClass} md:w-full w-auto" src={img} alt={logoAlt} />
                </div>
            </div>
            <div class="bg-gray-900_87 h-px rotate-[-180deg] w-[90%] mx-auto"></div> */}





            {/* <div class='flex flex-col bg-gray-900_87 w-[90%] h-auto mx-auto'>
    <div class='flex flex-col sm:flex-row'>
        <div class='bg-red-500 h-28 w-full sm:w-[20%]'></div>
        <div class='bg-blue-500 h-28 w-full sm:w-[45%]'></div>
        <div class='bg-green-500 h-28 w-full sm:w-[35%]'></div>
    </div>
</div> */}


            {/* <div className="flex flex-col md:flex-row md:items-center md:justify-start md:w-[90%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-start">
                    <img
                        className={`${logoClass} md:w-auto`}
                        src={logo}
                        alt={imgAlt}
                    />
                    <p className="text-left leading-[160.00%] max-w-[498px] md:max-w-full text-base text-black-900_01 tracking-[0.48px] font-montserrat font-normal px-10">
                        {txt}
                    </p>
                </div>

                <div className="bg-cover bg-gray-200 bg-no-repeat flex flex-col items-center md:items-start justify-start rounded  w-[80%] md:w-[80%] md:h-[80%]" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <img
                        className={`${imgClass} md:w-[80%] w-[80%]`}
                        src={img}
                        alt={logoAlt}
                    />
                </div>
            </div>
            <div className="bg-gray-900_87 h-px rotate-[-180deg] w-full"></div> */}



            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row gap-1 m-10">
                    <div className="relative bg-blue-400 shadow-md rounded-md p-4 mb-4 sm:w-2/5">
                        <h2 className="text-lg font-bold mb-2">Title</h2>
                        <p className="text-gray-700">para</p>
                    </div>
                    <div className="relative bg-red-400 shadow-md rounded-md p-4 mb-4 sm:w-3/10">
                        <h2 className="text-lg font-bold mb-2">Title</h2>
                        <p className="text-gray-700">paragraph</p>
                    </div>
                    <div className="relative bg-yellow-400 shadow-md rounded-md p-4 mb-4 sm:w-2/5">
                        <h2 className="text-lg font-bold mb-2">Title</h2>
                        <p className="text-gray-700">paragraph</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default RecentPrjCard
