import React from 'react';

function Explore({ backgroundColor, title, description, titleColor, descriptionColor }) {
    return (
        <div className={`bg-${backgroundColor}`}>
            {/* <div className='px-5 pt-10 md:pt-20 md:pl-14 max-w-[1300px] mx-auto'> */}
            <div className='px-4 sm:px-6 lg:px-8 pt-10 md:pt-20 max-w-[1300px] mx-auto'>

            {/* <div className={`fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%] md:max-w-[500px] bg-gradient-to-r ${titleColor ? `from-white-A700 to-${titleColor}` : 'from-gray-900 to-gray-900'} bg-clip-text text-transparent text-gray-900`}> */}
            <div className={`fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[79.6px] tracking-[-1%] md:max-w-[500px] bg-gradient-to-r ${titleColor ? `from-white-A700 to-blue-400` : 'from-gray-900 to-gray-900'} bg-clip-text text-transparent text-gray-900`}>
              
                {title}
            </div>
            <div className={`fontMontserrat text-left text-xs md:text-[24px] font-normal leading-5 md:leading-[38.4px] tracking-wide mt-4 sm:mt-4 md:max-w-[678px] text-${descriptionColor}`}>
                {description}
            </div>
            </div>
        </div>

    );
}

export default Explore;

