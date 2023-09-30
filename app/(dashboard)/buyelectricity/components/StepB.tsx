import React from 'react';
import CustomButton from '../../../(homepage)/home/CustomBotton';

interface StepBProps {
  formData: {
    // Define your formData types here
  };
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepB: React.FC<StepBProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <form className='max-w-[390px] mx-auto  text-[#808184]'>
      <button
        className='text-primary px-4 py-2 rounded-xl'
        onClick={handlePrevStep}
      >
        <span>Previous</span>
      </button>

      <div>Business Name</div>
      <div className='my-2 confirmdetails h-[369px] p-6'>
        <div className='flex justify-between items-center mb-4'>
          <span>State Disco</span>
          <span>PHED - Akwa Ibom</span>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <span>Meter Number:</span>
          <span>32067114812</span>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <span>Meter Name:</span>
          <span>H. Olaore</span>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <span>Address:</span>
          <span>32 Ewet Housing Estate</span>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <span>Amount:</span>
          <span>N 3, 000. 00</span>
        </div>

        <div className='flex justify-between items-center mb-4'>
          <span>Fee:</span>
          <span>N 100. 00</span>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <span>Phone Number:</span>
          <span>07034118901</span>
        </div>
        <div className='flex justify-between items-center'>
          <span>Email Address:</span>
          <span>N/A</span>
        </div>
      </div>

      <div className='my-2 flex justify-between items-center'>
        <CustomButton
          title={'Next'}
          btnType='button'
          containerStyles='border border-primary h-full bg-primary  text-white rounded-md  w-full '
          handleClick={() => {
            handleNextStep();
          }}
          // disabled={isLoading}
        />
      </div>
    </form>
  );
};

export default StepB;
