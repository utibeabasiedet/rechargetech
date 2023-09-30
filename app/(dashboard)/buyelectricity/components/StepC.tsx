import React from 'react';
import CustomButton from '../../../(homepage)/home/CustomBotton';

interface StepCProps {
  formData: {
    // Define the types for formData fields here
  };
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevStep: () => void;
  handleSubmitFormData: () => void;
}

const StepC: React.FC<StepCProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleSubmitFormData,
}) => {
  return (
    <form className='max-w-[390px] mx-auto'>
      <button
        className='text-primary px-4 py-2 rounded-xl'
        onClick={handlePrevStep}
      >
        <span>Previous</span>
      </button>

      <div className='my-2 confirmdetails h-[154px] p-6 '>
        <div className="flex justify-between items-center mb-4">
          <span>State Disco</span><span>PHED - Akwa Ibom</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Meter Number:</span><span>32067114812</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Meter Name:</span><span>H. Olaore</span>
        </div>
      </div>

      <div className='my-2 flex justify-between items-center'>
        <CustomButton
          title={"Next"}
          btnType="button"
          containerStyles="border border-primary h-full bg-primary text-white rounded-md w-full "
          handleClick={() => { handleSubmitFormData() }}
        />
      </div>
    </form>
  );
};

export default StepC;
