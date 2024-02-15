
import React, { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";


const ContactPage = () => {

    const [mail, setMail] = useState('')
    const [mobile, setMobile] = useState('')
    const [description, setDescription] = useState('')

    const sumbitData = () => {
        console.log(mail, mobile, description)
    }


    return (
        <>
            <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto pt-3 md:px-10 px-8 sm:px-5 w-auto sm:w-full md:w-full sm:mt-24 ">
                <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start lg:px-36 w-full">
                    <div className="flex flex-col font-exo md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
                        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
                            <p
                                className="mt-3 sm:mt-1 text-4xl sm:text-7xl  text-center text-gray-900 tracking-[-0.72px] w-auto font-exo font-extrabold"
                            >
                                IT’S TIME TO CONNECT
                            </p>
                            <div className="flex flex-col font-montserrat md:gap-10 gap-16 items-end justify-start w-auto md:w-full">
                                <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-full">


                                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start justify-start w-full md:w-full">
                                        <div className="flex flex-col gap-4 md:gap-8 items-start justify-start w-full sm:w-1/2">
                                            <p className="text-center text-gray-900 text-xl tracking-[0.60px] w-auto font-medium font-montserrat">
                                                EMAIL
                                            </p>
                                            <div className="border border-gray-900_33 border-solid w-full bg-white-A700 shadow-bs2 text-black-900_87 fill pb-[23px] pt-[27px] sm:px-5 px-[23px] rounded-[10px] ">
                                                <input
                                                    className="p-0 placeholder:text-black-900_87 text-left text-xl tracking-[-0.20px] w-full border-0 bg-transparent"
                                                    name="email_One"
                                                    placeholder="abcd@company.com"
                                                    type="email"
                                                    value={mail}
                                                    onChange={(e) => setMail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4  md:gap-8  items-start justify-start w-full sm:w-1/2">
                                            <p className="text-center text-gray-900 text-xl tracking-[0.60px] w-auto font-medium font-montserrat">
                                                PHONE
                                            </p>
                                            <div className="border border-gray-900_33 border-solid w-full bg-white-A700 shadow-bs2 text-black-900_87 fill pb-[23px] pt-[27px] sm:px-5 px-[23px] rounded-[10px]">
                                                <input
                                                    className="p-0 placeholder:text-black-900_87 text-left text-xl tracking-[-0.20px] w-full border-0 bg-transparent"
                                                    name="label"
                                                    placeholder="87 ** 87**90"
                                                    type="email"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start justify-start w-full md:w-full">
                                    <div className="flex flex-col gap-4 md:gap-8 items-start justify-center w-full md:w-full">
                                        <p
                                            className="text-center text-gray-900 text-xl tracking-[0.60px] uppercase w-auto font-medium font-montserrat"
                                        >
                                            Project Description
                                        </p>
                                        <textarea className="text-xl bg-white-A700 border border-gray-900_33 flex flex-col items-center justify-center p-4 md:p-16 rounded-[10px] shadow-bs2 w-auto md:w-full"
                                            placeholder="Enter your message here"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>

                                </div>

                                <button className="flex items-center justify-center text-white-A700 text-lg font-bold font-montserrat bg-deep_purple-800 border hover:bg-deep_purple-900 border-blue-100 border-solid px-5 py-3 rounded-full shadow-bs1"
                                    onClick={sumbitData}
                                >
                                    <span>Submit</span>
                                    <BsArrowRightCircleFill className="text-2xl ml-2" />
                                </button>

                            </div>
                        </div>

                        <div className=" bg-white-A700 border border-blue_gray-100 border-solid sm:flex-col font-montserrat md:gap-10 gap-[88px] md:h-auto items-start justify-start sm:px-5 px-8 py-9 rounded-[16px] shadow-bs2 md:w-full mb-10">
                            <div className="sm:flex sm:flex-row gap-4 items-center justify-center w-full">
                                <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                                    <p className="text-md lg:text-2xl md:text-[22px] text-center text-gray-900_87 sm:text-xl w-auto font-montserrat font-semibold">PREFER TO TALK?</p>
                                    <p className="text-lg lg:text-3xl sm:text-[23px]  text-center text-gray-900 underline w-auto font-montserrat font-semibold">Schedule a call</p>
                                </div>
                                <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                                    <p className="text-md lg:text-2xl md:text-[22px] text-center text-gray-900_87 sm:text-xl w-auto font-montserrat font-semibold">OLD, BUT GOLD</p>
                                    <p className="text-lg lg:text-3xl sm:text-[23px]  text-center text-gray-900 underline w-auto font-montserrat font-semibold">hello@techrender.com</p>
                                </div>
                                <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                                    <p className="text-md lg:text-2xl md:text-[22px] text-center text-gray-900_87 sm:text-xl uppercase w-auto font-montserrat font-semibold">Messenger?</p>
                                    <p className="text-lg lg:text-3xl sm:text-[23px] text-center text-gray-900 underline w-auto font-montserrat font-semibold">Whatsapp</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;































// import React, { useState } from "react";
// import { BsArrowRightCircleFill } from "react-icons/bs";


// const ContactPage = () => {

//     const [mail, setMail] = useState('')
//     const [mobile, setMobile] = useState('')
//     const [description, setDescription] = useState('')

//     const sumbitData = () => {
//         console.log(mail, mobile, description)
//     }


//     return (
//         <>
//             <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto pt-3 md:px-10 px-8 sm:px-5 w-auto sm:w-full md:w-full sm:mt-24 ">
//                 <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start lg:px-36 w-full">
//                     <div className="flex flex-col font-exo md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
//                         <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
//                             <p
//                                 className="sm:text-7xl text-4xl text-center text-gray-900 tracking-[-0.72px] w-auto font-exo font-extrabold"
//                             >
//                                 IT’S TIME TO CONNECT
//                             </p>
//                             <div className="flex flex-col font-montserrat md:gap-10 gap-16 items-end justify-start w-auto md:w-full">
//                                <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-full">
//                                     <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start justify-start w-full md:w-full">
//                                         <div className="flex flex-col gap-4 md:gap-8 items-start justify-start w-full sm:w-1/2">
//                                             <p className="text-center text-gray-900 text-xl tracking-[0.60px] w-auto font-medium font-montserrat">
//                                                 EMAIL
//                                             </p>
//                                             <div className="border border-gray-900_33 border-solid w-full bg-white-A700 shadow-bs2 text-black-900_87 fill pb-[23px] pt-[27px] sm:px-5 px-[23px] rounded-[10px] ">
//                                                 <input
//                                                     className="p-0 placeholder:text-black-900_87 text-left text-xl tracking-[-0.20px] w-full border-0 bg-transparent"
//                                                     name="email_One"
//                                                     placeholder="abcd@company.com"
//                                                     type="email"
//                                                     value={mail}
//                                                     onChange={(e) => setMail(e.target.value)}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="flex flex-col gap-4  md:gap-8  items-start justify-start w-full sm:w-1/2">
//                                             <p className="text-center text-gray-900 text-xl tracking-[0.60px] w-auto font-medium font-montserrat">
//                                                 PHONE
//                                             </p>
//                                             <div className="border border-gray-900_33 border-solid w-full bg-white-A700 shadow-bs2 text-black-900_87 fill pb-[23px] pt-[27px] sm:px-5 px-[23px] rounded-[10px]">
//                                                 <input
//                                                     className="p-0 placeholder:text-black-900_87 text-left text-xl tracking-[-0.20px] w-full border-0 bg-transparent"
//                                                     name="label"
//                                                     placeholder="87 ** 87**90"
//                                                     type="email"
//                                                     value={mobile}
//                                                     onChange={(e) => setMobile(e.target.value)}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-col gap-4 md:gap-8 items-start justify-start w-auto md:w-full">
//                                         <p
//                                             className="text-center text-gray-900 text-xl tracking-[0.60px] uppercase w-auto font-medium font-montserrat"
//                                         >
//                                             Project Description
//                                         </p>

//                                         <textarea className="text-xl bg-white-A700 border border-gray-900_33 flex flex-col items-center justify-center p-4 md:p-16 rounded-[10px] shadow-bs2 w-auto md:w-full"
//                                             placeholder="Enter your message here..."
//                                             value={description}
//                                             onChange={(e) => setDescription(e.target.value)}
//                                         />

//                                         {/* <div className="border border-gray-900_33 border-solid w-full bg-white-A700 shadow-bs2 text-black-900_87 fill pb-[23px] pt-[27px] sm:px-5 px-[23px] rounded-[10px] focus:border-transparent">
//     <textarea
//         className="p-0 placeholder:text-black-900_87 text-left text-xl tracking-[-0.20px] w-full border-0 bg-transparent focus:border-transparent"
//         placeholder="Enter your message here..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//     />
// </div> */}

//                                     </div>
//                                 </div>

//                                 <button className="flex items-center justify-center text-white-A700 text-lg font-bold font-montserrat bg-deep_purple-800 border hover:bg-deep_purple-900 border-blue-100 border-solid px-5 py-3 rounded-full shadow-bs1"
//                                     onClick={sumbitData}
//                                 >
//                                     <span>Submit</span>
//                                     <BsArrowRightCircleFill className="text-2xl ml-2" />
//                                 </button>

//                             </div>
//                         </div>

//                         <div className=" bg-white-A700 border border-blue_gray-100 border-solid sm:flex-col font-montserrat md:gap-10 gap-[88px] md:h-auto items-start justify-start sm:px-5 px-8 py-9 rounded-[16px] shadow-bs2 md:w-full mb-10">
//                             <div className="sm:flex sm:flex-row gap-4 items-center justify-center w-full">
//                                 <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
//                                     <p className="text-md lg:text-2xl md:text-[22px] text-center text-gray-900_87 sm:text-xl w-auto font-montserrat font-semibold">PREFER TO TALK?</p>
//                                     <p className="text-lg lg:text-3xl sm:text-[23px]  text-center text-gray-900 underline w-auto font-montserrat font-semibold">Schedule a call</p>
//                                 </div>
//                                 <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
//                                     <p className="text-md lg:text-2xl md:text-[22px] text-center text-gray-900_87 sm:text-xl w-auto font-montserrat font-semibold">OLD, BUT GOLD</p>
//                                     <p className="text-lg lg:text-3xl sm:text-[23px]  text-center text-gray-900 underline w-auto font-montserrat font-semibold">hello@techrender.com</p>
//                                 </div>
//                                 <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
//                                     <p className="text-md lg:text-2xl md:text-[22px] text-center text-gray-900_87 sm:text-xl uppercase w-auto font-montserrat font-semibold">Messenger?</p>
//                                     <p className="text-lg lg:text-3xl sm:text-[23px] text-center text-gray-900 underline w-auto font-montserrat font-semibold">Whatsapp</p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ContactPage;
