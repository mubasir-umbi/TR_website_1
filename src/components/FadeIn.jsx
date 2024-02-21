
import React, { useState, useEffect } from 'react';

function FadeIn({ children, id }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const elementOffsetTop = document.getElementById(id)?.offsetTop;

      if (elementOffsetTop && currentScrollY > elementOffsetTop - window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

  return (
    <div id={id} className={`fade-in-container ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    {children}
  </div>
  );
}

export default FadeIn;


// // FadeInComponent.js

// import React, { useState, useEffect } from 'react';

// function FadeInComponent({ children }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const elementOffsetTop = document.getElementById('fade-in-element').offsetTop;

//       if (currentScrollY > elementOffsetTop - window.innerHeight / 2) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div
//         id="fade-in-element"
//         className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// export default FadeInComponent;



// import React, { useState, useEffect } from 'react';


// function FadeIn() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const elementOffsetTop = document.getElementById('fade-in-element').offsetTop;

//       if (currentScrollY > elementOffsetTop - window.innerHeight / 2) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div
//         id="fade-in-element"
//         className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <h1 className="text-4xl">Fade In Animation</h1>
//         <p className="text-lg">Scroll down to see the animation</p>
//       </div>
//     </div>
//   );
// }

// export default FadeIn;
