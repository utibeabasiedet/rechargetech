'use client'
import React, { useEffect, useState } from 'react';
import StepA from './StepA';
import StepB from './StepB';
import StepC from './StepC';
import StepFinal from './StepFinal';

interface FormData {
  state: string;
  meterNumber: string;
  phoneNumber: string;
  email: string;
  amount: string;
  
  agreeToTerms: boolean;
  meterType:string;
}

interface Step {
  label: string;
  description: string;
}

interface SimpleMultiStepFormProps {
  showStepNumber: boolean;
}

const initialFormData: FormData = {
  state: '',
  meterNumber: '',
  phoneNumber: '',
  email: '',
  amount: '',
  
  agreeToTerms: false,
  meterType: ''
};

const stepsArray: Step[] = [
  {
    label: 'A',
    description: 'Electricity',
  },
  {
    label: 'B',
    description: 'Confirm',
  },
  {
    label: 'C',
    description: 'Pay Completion',
  },
];

const SimpleMultiStepForm: React.FC<SimpleMultiStepFormProps> = ({
  showStepNumber,
}) => {
  const [step, setStep] = useState<string>('A');
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleNextStep = () => {
    if (step === 'A') setStep('B');
    else if (step === 'B') setStep('C');
  };

  const handlePrevStep = () => {
    if (step === 'C') setStep('B');
    else if (step === 'B') setStep('A');
  };
  
  const handleChangeMeterType = (value: string) => {
    setFormData({
      ...formData,
      meterType: value,
    });
  };
  
  
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    let fieldValue: string | boolean | number;
    if (fieldName === 'agreeToTerms') {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  const handleSubmitFormData = () => {
    setStep('Final');
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final') {
      return null;
    }
    return (
      <section className='bg-[#F6F9FF] rounded-md f  h-[116px] '>
        <div className="items-center flex justify-between h-full w-[90%] md:w-[434px] mx-auto">
        {stepsArray.map((stepItem, index) => (
  <React.Fragment key={stepItem.label}>
    <div className="relative">
      <div
        className={`min-w-[40px] min-h-[40px] flex justify-center items-center border-2 border-[#b5cdf8] rounded-full cursor-pointer ${
          stepItem.label === step
            ? 'border-primary border-4 '
            : ''
        }`}
        onClick={() => setStep(stepItem.label)}
      >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
          <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#F6F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div
        className={`mt-2 absolute w-[150px] text-primary-1 ${
          stepItem.label === 'A'
            ? 'md:right-[-102px] right-[-105px]'
            : stepItem.label === 'B'
            ? 'md:right-[-105px] right-[-109px]'
            : stepItem.label === 'C'
            ? 'right-[-76px]'
            : ''
        }`}
      >
        <span className='text-[12px] md:text-[14px] font-[500px] md:font-bold'>
          {stepItem.description}
        </span>
      </div>
    </div>

    {index < stepsArray.length - 1 && (
      <div
        className="w-full h-[2px] bg-[#b5cdf8] self-stretch mt-2"
        style={{
          alignSelf: 'center',
        }}
      ></div>
    )}
  </React.Fragment>
))}
        </div>
      </section>
    );
  };

  return (
    <div className=' bg-white max-w-full  mx-auto rounded-lg '>
      {renderTopStepNumbers()}

      {step === 'A' ? (
        <StepA
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'B' ? (
        <StepB
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'C' ? (
        <StepC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
      {step === 'Final' ? <StepFinal /> : null}
    </div>
  );
};

export default SimpleMultiStepForm;
// ...
// 'use client'
// import React, { useEffect, useState } from 'react';
// import StepA from './StepA';
// import StepB from './StepB';
// import StepC from './StepC';
// import StepFinal from './StepFinal';

// // Define CSS classes for the labels with different background colors
// const labelClasses: Record<string, string> = {
//   A: 'bg-blue-500',
//   B: 'bg-green-500',
//   C: 'bg-red-500',
//   Final: 'bg-purple-500',
// };

// // ... Rest of your code ...
// interface FormData {
//   state: string;
//   meterNumber: string;
//   phoneNumber: string;
//   email: string;
//   amount: string;
  
//   agreeToTerms: boolean;
//   meterType:string;
// }

// interface Step {
//   label: string;
//   description: string;
// }

// interface SimpleMultiStepFormProps {
//   showStepNumber: boolean;
// }

// const initialFormData: FormData = {
//   state: '',
//   meterNumber: '',
//   phoneNumber: '',
//   email: '',
//   amount: '',
  
//   agreeToTerms: false,
//   meterType: ''
// };

// const stepsArray: Step[] = [
//   {
//     label: 'A',
//     description: 'Electricity',
//   },
//   {
//     label: 'B',
//     description: 'Confirm',
//   },
//   {
//     label: 'C',
//     description: 'Pay Completion',
//   },
// ];

// const SimpleMultiStepForm: React.FC<SimpleMultiStepFormProps> = ({
//   showStepNumber,
// }) => {
//   const [step, setStep] = useState<string>('A');
  
//   // Define a function to render the step numbers section
//   const renderTopStepNumbers = () => {
//     if (!showStepNumber || step === 'Final') {
//       return null; // Return null when conditions are met
//     }
//     return (
//       <section className='bg-[#F6F9FF] rounded-md f  h-[116px] '>
//         <div className="items-center flex justify-between h-full w-[90%] md:w-[434px] mx-auto">
//           {stepsArray.map((stepItem, index) => (
//             <React.Fragment key={stepItem.label}>
//               <div className="relative">
//                 <div
//                   className={`min-w-[40px] min-h-[40px] flex justify-center items-center border-2 border-[#b5cdf8] rounded-full cursor-pointer ${
//                     stepItem.label === step
//                       ? 'border-primary border-4 '
//                       : ''
//                   }`}
//                   onClick={() => setStep(stepItem.label)}
//                 >
//                   <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
//                     <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#F6F9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>

//                 <div
//                   className={`mt-2 absolute w-[150px] ${
//                     stepItem.label === step
//                       ? labelClasses[stepItem.label] // Apply the background color class based on step
//                       : 'bg-gray-500' // Apply a default background color for other steps
//                   } text-primary-1 ${
//                     stepItem.label === 'A'
//                       ? 'md:right-[-102px] right-[-105px]'
//                       : stepItem.label === 'B'
//                       ? 'md:right-[-105px] right-[-109px]'
//                       : stepItem.label === 'C'
//                       ? 'right-[-76px]'
//                       : ''
//                   }`}
//                 >
//                   <span className='text-[12px] md:text-[14px] font-[500px] md:font-bold'>
//                     {stepItem.description}
//                   </span>
//                 </div>
//               </div>

//               {index < stepsArray.length - 1 && (
//                 <div
//                   className="w-full h-[2px] bg-[#b5cdf8] self-stretch mt-2"
//                   style={{
//                     alignSelf: 'center',
//                   }}
//                 ></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </section>
//     );
//   };

//   // ... previous code ...

// // Inside your SimpleMultiStepForm component
// return (
//   <div className=' bg-white max-w-full  mx-auto rounded-lg '>
//     {renderTopStepNumbers()}

//     {/* Render the steps based on the current step state */}
//     {step === 'A' ? (
//       <StepA
//         formData={formData}
//         handleChangeInput={handleChangeInput}
//         handleNextStep={handleNextStep}
//       />
//     ) : null}
//     {step === 'B' ? (
//       <StepB
//         formData={formData}
//         handleChangeInput={handleChangeInput}
//         handlePrevStep={handlePrevStep}
//         handleNextStep={handleNextStep}
//       />
//     ) : null}
//     {step === 'C' ? (
//       <StepC
//         formData={formData}
//         handleChangeInput={handleChangeInput}
//         handlePrevStep={handlePrevStep}
//         handleSubmitFormData={handleSubmitFormData}
//       />
//     ) : null}
//     {step === 'Final' ? <StepFinal /> : null}
//   </div>
// );

  

// export default SimpleMultiStepForm;

