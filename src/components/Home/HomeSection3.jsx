import React from 'react'

import logo1 from '../../assets/images/offroll_logo.svg'
import logo_1_akessia from '../../assets/images/logo_1_akessia.png'
import logo_1_bizbuz from '../../assets/images/logo_1_bizbuz.png'
import logo_1_dm from '../../assets/images/logo_1_dm.png'
import logo_1_gc from '../../assets/images/logo_1_gc.png'
import logo_1_la from '../../assets/images/logo_1_la.png'
import logo_1_norq from '../../assets/images/logo_1_norq.png'
import logo_1_siloplus from '../../assets/images/logo_1_siloplus.png'
import logo_1_smarttech from '../../assets/images/logo_1_smarttech.png'
import logo_1_wonderla from '../../assets/images/logo_1_wonderla.png'
import logo_1_ofroll from '../../assets/images/logo_1_ofroll.png'
import arrowL from '../../assets/images/arro_left.svg'
import dhanush_img from '../../assets/images/dhanush_img.png'
import img_image112 from '../../assets/images/img_image112.png'
import datamappersLogo from '../../assets/images/datmapper.jpg'


const HomeSection3 = () => {

    const logos = [
        { src: logo_1_ofroll, alt: 'logo1' },
        { src: logo_1_siloplus, alt: 'logo2' },
        { src: logo_1_wonderla, alt: 'logo3' },
        { src: logo_1_norq, alt: 'logo4' },
        { src: logo_1_la, alt: 'image1605' },
        { src: logo_1_akessia, alt: 'image1604' },
        { src: logo_1_bizbuz, alt: 'logoOne' },
        { src: datamappersLogo, alt: 'logo8' },
        { src: logo_1_smarttech, alt: 'logo9' },
        { src: logo_1_gc, alt: 'logo10' }
    ];
    return (
        <>
            <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1300px] mx-auto px-5 sm:px-24 relative">
                <div className="flex flex-col md:gap-10 gap-16 items-center justify-start  mx-auto md:px-5 w-full">
                    <div className="flex flex-col h-auto md:h-auto items-center justify-start  w-full">
                        <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">

                                <div className=''>
                                    <div className={`bg-clip-text bg-gradient9 fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%]  from-white-A700 to-blue-400 text-transparent text-gray-900`}>
                                        Trusted by
                                        <br />
                                        Happy clients
                                    </div>
                                    <p
                                        className="mt-3 text-lg md:text-[24px] text-left text-gray-900 sm:text-xl tracking-[-0.72px] w-auto font-montserrat font-normal"
                                    >
                                        Hear from the decision makers themselves!
                                    </p>
                                </div>

                                <div className="flex flex-col gap-8 items-start w-auto vertical">
                                    <div className="gap-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start my-0 w-full">
                                        {logos.map((logo, index) => (
                                            <div key={index} className="h-20 sm:h-24 lg:h-32 bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg shadow-bs hover:scale-110 transition duration-500 hover:shadow-lg ">
                                                <img className="h-auto max-h-full w-auto max-w-full logo-image" src={logo.src} alt={logo.alt} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                          

                            <div className="flex flex-col gap-6 items-center justify-start w-full md:w-full bs2  mt-0 sm:mt-16">
                                <div className="flex flex-col items-center justify-start sm:w-24 w-12 ">
                                    <div className=" h-[35px] sm:h-[76px] relative w-full">
                                        <img
                                            className="absolute h-[35px] sm:h-[76px] inset-y-[0] my-auto object-cover right-[0] w-18 sm:w-[55%]"
                                            src={img_image112}
                                            alt="image112"
                                        />
                                        <img
                                            className="absolute h-[35px] sm:h-[76px] inset-y-[0] left-[0] my-auto object-cover  w-18  sm:w-[55%]"
                                            src={img_image112}
                                            alt="image113"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection3



// import React from 'react'

// import logo1 from '../../assets/images/offroll_logo.svg'
// import logo_1_akessia from '../../assets/images/logo_1_akessia.png'
// import logo_1_bizbuz from '../../assets/images/logo_1_bizbuz.png'
// import logo_1_dm from '../../assets/images/logo_1_dm.png'
// import logo_1_gc from '../../assets/images/logo_1_gc.png'
// import logo_1_la from '../../assets/images/logo_1_la.png'
// import logo_1_norq from '../../assets/images/logo_1_norq.png'
// import logo_1_siloplus from '../../assets/images/logo_1_siloplus.png'
// import logo_1_smarttech from '../../assets/images/logo_1_smarttech.png'
// import logo_1_wonderla from '../../assets/images/logo_1_wonderla.png'
// import logo_1_ofroll from '../../assets/images/logo_1_ofroll.png'


// import arrowL from '../../assets/images/arro_left.svg'
// import dhanush_img from '../../assets/images/dhanush_img.png'
// import img_image112 from '../../assets/images/img_image112.png'



// const usersResponse = [
//     {
//         comment: `Entering our third year with MT5, 
//                   their swift claim handling and tailored service have greatly
//                    boosted our employee relations and streamlined HR operations, 
//                    becoming essential in our employee care approach. Big thanks to the team!`,
//         name: "Dhanush K K",
//         desg: "CEO, MT6",
//         image: dhanush_img,
//         show: true
//     },
//     {
//         comment: `Entering our third year with MT5, 
//                   their swift claim handling and tailored service have greatly
//                    boosted our employee relations and streamlined HR operations, 
//                    becoming essential in our employee care approach. Big thanks to the team!`,
//         name: "Dhanush K K",
//         desg: "CEO, MT6",
//         image: dhanush_img,
//         show:false
//     },
// ];


// const HomeSection3 = () => {
//     return (
//         <>
//             <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-auto md:w-full px-5 sm:px-24 relative">
//                 <div className="flex flex-col md:gap-10 gap-16 items-center justify-start  mx-auto md:px-5 w-full">
//                     <div className="flex flex-col h-auto md:h-auto items-center justify-start  w-full">
//                         <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
//                             <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
//                                 {/* 
//                                 <div className="flex flex-col font-exo items-start justify-start w-full">
//                                     <p
//                                         className="text-start bg-clip-text bg-gradient9  leading-[140.00%] sm:text-5xl text-[64px] text-transparent tracking-[-0.64px] font-exo font-extrabold">
//                                         <>
//                                             Trusted by
//                                             <br />
//                                             Happy clients
//                                         </>
//                                     </p>
//                                 </div> */}

//                                 <div className=''>
//                                     <div className={`bg-clip-text bg-gradient9 fontExo text-left font-extrabold text-4xl md:text-[64px] md:leading-[89.6px] tracking-[-1%]  from-white-A700 to-blue-400 text-transparent text-gray-900`}>

//                                         Trusted by
//                                         <br />
//                                         Happy clients
//                                     </div>

//                                     <p
//                                         className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.72px] w-auto font-montserrat font-normal"
//                                     >
//                                         Hear from the decision makers themselves!
//                                     </p>

//                                 </div>




//                                 <div
//                                     className="flex flex-col gap-8 items-start w-auto vertical"

//                                 >
//                                     {/* <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start my-0 w-auto md:w-full">
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:px-5 rounded-lg shadow-bs h-full w-full">

//                                             <img
//                                                 className="h-auto rounded-lg w-full"
//                                                 src={logo_1_ofroll}
//                                                 alt={'logo1'}
//                                             />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img
//                                                 className="h-[51px] md:h-auto object-cover rounded-[50px] w-[66%]"
//                                                 src={logo_1_siloplus}
//                                                 alt="logo2"
//                                             />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[30px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img
//                                                 className="h-[38px] md:h-auto object-cover w-[72%]"
//                                                 src={logo_1_wonderla}
//                                                 alt="logo3"
//                                             />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-[39px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img
//                                                 className="h-[21px] md:h-auto object-cover w-[66%]"
//                                                 src={logo_1_norq}
//                                                 alt="logo4"
//                                             />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[34px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img
//                                                 className="h-[30px] md:h-auto object-cover w-[91%]"
//                                                 src={logo_1_la}
//                                                 alt="image1605"
//                                             />
//                                         </div>
//                                     </div> */}


//                                     {/* <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start my-0 w-[1128px] md:w-full">
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-10 sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img
//                                                 className="h-[18px] md:h-auto object-cover w-[84%]"
//                                                 src={logo_1_akessia}
//                                                 alt="image1604"
//                                             />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-[12px] sm:px-5 rounded-lg shadow-bs h-full w-full">
//                                             <img
//                                                 className="h-[18px] md:h-auto object-cover w-[50%]"
//                                                 src={logo_1_bizbuz}
//                                                 alt="logoOne"
//                                             />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[19px] sm:px-5 rounded-lg shadow-bs h-full w-full">
//                                             <div className="flex flex-col items-center justify-center py-2 w-[82%] md:w-full">
//                                                 <img
//                                                     className="h-10 md:h-auto object-cover w-auto"
//                                                     src={logo_1_dm}
//                                                     alt="logo8"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-[35px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img
//                                                 className="h-[26px] md:h-auto mb-[3px] object-cover w-[77%]"
//                                                 src={logo_1_smarttech}
//                                                 alt="logo9"
//                                             />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[30px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img
//                                                 className="h-[38px] md:h-auto object-cover w-[53%]"
//                                                 src={logo_1_gc}
//                                                 alt="logo10"
//                                             />
//                                         </div>
//                                     </div> */}




//                                     {/* <div className="gap-8 grid grid-cols-5 sm:grid-cols-1 md:grid-cols-5 items-start justify-start my-0 w-full">
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:px-5 rounded-lg shadow-bs h-full">
//                                             <img className="h-auto max-h-40 w-full max-w-full" src={logo_1_ofroll} alt="logo1" />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img className="h-auto max-h-20 md:max-h-full object-cover rounded-[50px] w-full max-w-[66%]" src={logo_1_siloplus} alt="logo2" />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[30px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img className="h-auto max-h-16 md:max-h-full object-cover w-full max-w-[72%]" src={logo_1_wonderla} alt="logo3" />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-[39px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img className="h-auto max-h-10 md:max-h-full object-cover w-full max-w-[66%]" src={logo_1_norq} alt="logo4" />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[34px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img className="h-auto max-h-14 md:max-h-full object-cover w-full max-w-[91%]" src={logo_1_la} alt="image1605" />
//                                         </div>

//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-10 sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img className="h-[18px] md:h-auto object-cover w-[84%]" src={logo_1_akessia} alt="image1604" />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-[12px] sm:px-5 rounded-lg shadow-bs h-full w-full">
//                                             <img className="h-[18px] md:h-auto object-cover w-[50%]" src={logo_1_bizbuz} alt="logoOne" />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-[19px] sm:px-5 rounded-lg shadow-bs h-full w-full">
//                                             <div className="flex flex-col items-center justify-center py-2 w-[82%] md:w-full">
//                                                 <img className="h-6 md:h-6 object-cover w-auto" src={logo_1_dm} alt="logo8" />
//                                             </div>
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-[35px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img className="h-[26px] md:h-auto mb-[3px] object-cover w-[77%]" src={logo_1_smarttech} alt="logo9" />
//                                         </div>
//                                         <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-[30px] sm:px-5 rounded-lg shadow-bs w-full">
//                                             <img className="h-[38px] md:h-auto object-cover w-[53%]" src={logo_1_gc} alt="logo10" />
//                                         </div>
//                                     </div> */}


//                                     <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start justify-start my-0 w-full">
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-auto max-h-40 w-full" src={logo_1_ofroll} alt="logo1" />
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-auto max-h-20 md:max-h-full object-cover rounded-[50px] w-full max-w-[66%]" src={logo_1_siloplus} alt="logo2" />
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-auto max-h-16 md:max-h-full object-cover w-full max-w-[72%]" src={logo_1_wonderla} alt="logo3" />
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-auto max-h-10 md:max-h-full object-cover w-full max-w-[66%]" src={logo_1_norq} alt="logo4" />
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-auto max-h-14 md:max-h-full object-cover w-full max-w-[91%]" src={logo_1_la} alt="image1605" />
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-[18px] md:h-auto object-cover w-[84%]" src={logo_1_akessia} alt="image1604" />
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-[18px] md:h-auto object-cover w-[50%]" src={logo_1_bizbuz} alt="logoOne" />
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <div className="flex flex-col items-center justify-center py-2 w-[82%] md:w-full">
//                                                 <img className="h-6 md:h-6 object-cover w-auto" src={logo_1_dm} alt="logo8" />
//                                             </div>
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-[26px] md:h-auto mb-[3px] object-cover w-[77%]" src={logo_1_smarttech} alt="logo9" />
//                                         </div>
//                                         <div className="h-full bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center p-6 sm:p-4 rounded-lg shadow-bs">
//                                             <img className="h-[38px] md:h-auto object-cover w-[53%]" src={logo_1_gc} alt="logo10" />
//                                         </div>
//                                     </div>


//                                 </div>
//                             </div>


//                        {/* testimony section */}

//                             <div className="flex flex-col gap-6 items-center justify-start w-full md:w-full bs2 mb-20">
//                                 <div className="flex flex-col items-center justify-start w-24 ">
//                                     <div className="h-[76px] relative rotate-[180deg] w-full">
//                                         <img
//                                             className="absolute h-[76px] inset-y-[0] my-auto object-cover right-[0] w-[55%]"
//                                             src={img_image112}
//                                             alt="image112"
//                                         />
//                                         <img
//                                             className="absolute h-[76px] inset-y-[0] left-[0] my-auto object-cover w-[55%]"
//                                             src={img_image112}
//                                             alt="image113"
//                                         />

//                                     </div>
//                                 </div>


//                                 <div className="flex flex-col gap-6 items-center justify-start w-full md:w-full ">

//                                     < >
//                                         {/* <div className="flex flex-col items-center justify-start mx-2.5 "> */}
//                                             <div className="sm:flex sm:flex:-col flex-row gap-2.5 items-center justify-between w-full">
//                                                 <button
//                                                     className="fill p-[19px] bg-gray-50_87 rounded-[50%] border border-black-900_87 border-solid flex h-16 items-center justify-center md:mt-0  rotate-[180deg] w-16 my-4 mx-auto"

//                                                 >
//                                                     <img
//                                                         className="h-[29px]"
//                                                         src={arrowL}
//                                                         alt="arrowdown"
//                                                     />
//                                                 </button>


//                                                 {usersResponse.map((user) => (
//                                                     user.show ?
//                                                     <>
                                                    
//                                                     <div className="w-full sm:w-[85%] sm:h-auto bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-end p-10 px-2 sm:px-5 rounded-[24px] shadow-bs1">
//                                                         <div className="flex flex-col gap-6 items-center justify-start mt-[5px] w-full md:w-full px-3">
//                                                             <p
//                                                                 className="sm:leading-[160.00%] leading-[140.00%]  md:max-w-[90%] text-md md:text-[22px] text-center text-gray-900 sm:text-2xl tracking-[-0.72px] font-medium font-montserrat"
//                                                             >
//                                                                 &quot;{user.comment}&quot;
//                                                             </p>
//                                                             <div className="flex flex-col gap-4 items-center justify-start w-auto">
//                                                                 <img
//                                                                     className="h-12 md:h-auto rounded-[50%] w-12"
//                                                                     src={user.image}
//                                                                     alt="ellipseTwentyEight"
//                                                                 />
//                                                                 <div className="flex flex-col gap-3 items-center justify-start w-auto">
//                                                                     <p
//                                                                         className="text-gray-900_87 text-lg tracking-[-0.54px] w-auto font-medium font-montserrat"
//                                                                     >
//                                                                         {user.name}
//                                                                     </p>
//                                                                     <p
//                                                                         className="text-gray-900 text-lg w-auto font-montserrat font-semibold"
//                                                                     >
//                                                                         {user.desg}
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     </>:<>
                                                    
//                                                     </>
//                                                 ))}

//                                                 <button
//                                                     className="fill p-[19px] bg-gray-50_01 rounded-[50%] border border-black-900 border-solid flex h-16 items-center justify-center my-4 w-16 mx-auto"

//                                                 >
//                                                     <img
//                                                         className="h-[29px]"
//                                                         src={arrowL}
//                                                         alt="arrowleft"
//                                                     />
//                                                 </button>
//                                             </div>
//                                         {/* </div> */}
//                                     </>

//                                     {/* PageIndicator */}

//                                     <div className="flex gap-1.5 h-3 items-start justify-start w-12">
//                                         <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-blue_gray-100_01 w-3" />
//                                         <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-900 w-3" />
//                                         <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-blue_gray-100_01 w-3" />
//                                     </div>


//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default HomeSection3
