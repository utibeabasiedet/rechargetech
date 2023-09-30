// import React, { useState } from 'react';

// interface CombinedInputProps {
//   options: string[];
//   value: string;
//   onChange: (value: string) => void;
// }

// const CombinedInput: React.FC<CombinedInputProps> = ({ options, value, onChange }) => {
//   const [showOptions, setShowOptions] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(e.target.value);
//   };

//   const handleSelectOption = (option: string) => {
//     onChange(option);
//     setShowOptions(false);
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         value={value}
//         onChange={handleInputChange}
//         onClick={() => setShowOptions(!showOptions)}
//         className="w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600"
//       />
//       {showOptions && (
//         <div className="absolute top-full left-0 w-full border border-t-0 border-[#D3D4D5] bg-white">
//           {options.map((option) => (
//             <div
//               key={option}
//               onClick={() => handleSelectOption(option)}
//               className="px-2 py-1 cursor-pointer hover:bg-[#F1F1F1]"
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CombinedInput;
import React, { useState } from 'react';

interface CombinedInputProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const CombinedInput: React.FC<CombinedInputProps> = ({ options, value, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSelectOption = (option: string) => {
    onChange(option);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onClick={() => setShowOptions(!showOptions)}
        className="w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600"
      />
      {showOptions && (
        <div className="absolute top-full left-0 w-full border border-t-0 border-[#D3D4D5] bg-white">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelectOption(option)}
              className="px-2 py-1 cursor-pointer hover:bg-[#F1F1F1]"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CombinedInput;

