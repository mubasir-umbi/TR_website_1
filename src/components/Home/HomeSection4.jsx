


import React from 'react';

function HomeSection4({ backgroundImage, imageUrl, title,firstHeading,secondHeading,firstDescription, secondDescription }) {
    return (
        <>
            <div className="py-20 sm:py-32 bg-cover bg-center flex items-center justify-center flex-wrap" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="max-w-6xl px-8 p-4 sm:p-8 flex w-full flex-col sm:flex-row">
                    <div className="w-full pr-0 sm:pr-8">
                        <h1 className="fontExo text-5xl sm:text-[64px] text-white-A700 text-left font-extrabold mb-4 w-max-[700px]">{title}</h1>
                    </div>
                    <div className="w-full sm:mt-[-100px] pr-0 sm:pr-8">
                        <img
                            src={imageUrl}
                            alt="image"
                            className="w-48 sm:w-auto h-auto rounded-md"
                        />
                    </div>
                </div>

                <div className="max-w-6xl mt-[-30px] sm:mt-0 px-8 flex flex-col sm:flex-row">
                    <div className="mb-8 sm:mr-40">
                        <h1 className="fontMontserrat text-xl sm:text-3xl text-white-A700 text-left font-extrabold mb-4 w-max-[300px]">{firstHeading}</h1>
                        <p className="text-white-A700 text-left text-sm sm:text-xl">
                        {firstDescription}
                        </p>
                    </div>

                    <div className="">
                        <h1 className="fontMontserrat text-xl sm:text-3xl text-white-A700 text-left font-extrabold mb-4 w-max-[300px]">{secondHeading}</h1>
                        <p className="text-white-A700 text-left text-sm sm:text-xl">
                          {secondDescription}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeSection4;