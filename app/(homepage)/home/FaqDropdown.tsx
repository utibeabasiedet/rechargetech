// 'use client'

// // components/FaqDropdown.tsx
// import React, { useState } from 'react';
// import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// interface FaqDropdownProps {
//   faqItem: FaqItem;
// }

// const FaqDropdown: React.FC<FaqDropdownProps> = ({ faqItem }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="mb-4">
//       <button
//         onClick={toggleDropdown}
//         className="flex justify-between  items-center w-full p-4 border-b  focus:outline-none transition-opacity duration-300 ease-in-out"
//       >
//         <span className="text-[16px] max-w-[90%] text-left tracking-tight leading-[140%] font-medium text-[#56585C]">{faqItem.question}</span>
//         {isOpen ? (
//         //   <RiSubtractFill className="text-primary" />
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#075DED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
        
//         ) : (
//         //   <RiAddFill className="text-primary" />
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#075DED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//         )}
//       </button>
//       {isOpen && (
//         <div className={`p-4 bg-white  border-b transition-opacity duration-300 ease-in-out ${
//             isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
//           }`}>
//           {/* <p >{faqItem.answer}</p> */}
//           <p dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
//         </div>
//       )}
//     </div>
    
//   );
// };

// export default FaqDropdown;
// // components/FaqDropdown.tsx
// // 'use client'
// // import React, { useState } from 'react';
// // import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

// // interface FaqItem {
// //   question: string;
// //   answer: string;
// // }

// // interface FaqDropdownProps {
// //   faqItem: FaqItem;
// // }

// // const FaqDropdown: React.FC<FaqDropdownProps> = ({ faqItem }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="mb-4">
// //       <button
// //         onClick={toggleDropdown}
// //         className="flex justify-between items-center w-full p-4 border-b focus:outline-none transition-opacity duration-300 ease-in-out"
// //       >
// //         <span className="text-[16px] tracking-tight leading-[140%] font-medium text-[#56585C]">
// //           {faqItem.question}
// //         </span>
// //         {isOpen ? (
// //           <RiSubtractFill className="text-primary text-xl" />
// //         ) : (
// //           <RiAddFill className="text-primary text-xl" />
// //         )}
// //       </button>
// //       <div
// //         className={`p-0 bg-white  border-b transition-opacity duration-300 ease-in-out ${
// //           isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
// //         }`}
// //       >
// //         <p>{faqItem.answer}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FaqDropdown;

// import React from "react";

// interface FaqItemProps {
//   faqItem: {
//     question: string;
//     answer: string;
//   };
//   isOpen: boolean;
//   toggleFaq: () => void;
// }

// const FaqDropdown: React.FC<FaqItemProps> = ({ faqItem, isOpen, toggleFaq }) => {
//   return (
//     <div className="faq-item">
//       <button className="faq-question" onClick={toggleFaq}>
//         {faqItem.question}
//       </button>
//       {isOpen && (
//         <div className="faq-answer">
//           <div dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FaqDropdown;
// import React, { useState } from 'react';

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// interface FaqDropdownProps {
//   faqItem: FaqItem;
// }

// const FaqDropdown: React.FC<FaqDropdownProps> = ({ faqItem }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="mb-4">
//       <button
//         onClick={toggleDropdown}
//         className="flex justify-between items-center w-full p-4 border-b focus:outline-none transition-opacity duration-300 ease-in-out"
//       >
//         <span className="text-[16px] max-w-[90%] text-left tracking-tight leading-[140%] font-medium text-[#56585C]">
//           {faqItem.question}
//         </span>
//         {isOpen ? (
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#075DED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#075DED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//           </svg>
//         )}
//       </button>
//       {isOpen && (
//         <div className={`p-4 bg-white border-b transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
//           <p dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FaqDropdown;

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqDropdownProps {
  faqItem: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

const FaqDropdown: React.FC<FaqDropdownProps> = ({ faqItem, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 border-b focus:outline-none transition-opacity duration-300 ease-in-out"
      >
        <span className="text-[16px] max-w-[90%] text-left tracking-tight leading-[140%] font-medium text-[#56585C]">
          {faqItem.question}
        </span>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#075DED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#075DED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div
          className={`p-4 bg-white border-b transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
          }`}
        >
          <p dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
        </div>
      )}
    </div>
  );
};

export default FaqDropdown;






