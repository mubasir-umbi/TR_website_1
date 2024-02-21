import React, { useState } from 'react';
import { HiArrowUp } from 'react-icons/hi'; 

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  
  <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          // className="fixed bottom-4 right-5 bg-gray-500 text-white p-3 rounded-full shadow-md hover:bg-gray-600  focus:outline-none focus:bg-gray-600"       
          className="fixed bottom-4 right-5 bg-gray-200 text-white p-3 rounded-full shadow-md hover:bg-deep_purple-800 hover:text-white-A700 focus:outline-none focus:bg-gray-600"       
         
          style={{ zIndex: 9999 }}
       >
          <HiArrowUp size={24} />
        </button>
      )}
    </div>


//     <div
//     style={{
//       position: 'fixed',
//       bottom: '20px',
//       right: '20px',
//       display: isVisible ? 'block' : 'none',
//       zIndex: 9999 
//     }}
//   >
//     <button
//       onClick={scrollToTop}
//       className="bg-gray-500 text-white p-4 rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//     >
//       <HiArrowUp size={24} />
//     </button>
//   </div>
  );
};

export default BackToTop;



{/* <div className='flex justify-center items-center h-screen'>
<button
   className="fixed bottom-10 right-5 bg-gray-500 text-white p-4 rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 group"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
<HiArrowUp size={24} />
</button>
{isHovered && (
  <span className="ml-2 text-blue-700 font-bold">Back To Top</span>
)}
</div> */}