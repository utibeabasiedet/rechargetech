
import React, { useState } from 'react';
import CustomButton from '../../../(homepage)/home/CustomBotton';
import CombinedInput from './CombinedInput';

interface StepAProps {
  formData: {
    state: string;
    meterNumber: string;
    meterType: string;
    phoneNumber:string;
    email: string;
    amount:string;
    // Add the rest of your formData fields and their types here
  };
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
}

const StepA: React.FC<StepAProps> = ({
  formData,
  handleChangeInput,
  handleNextStep,
}) => {
  const [errors, setErrors] = useState({
    state: '',
    meterNumber: '',
    meterType: '',
    phoneNumber:'',
    email:"",
    amount:''
    // Add error fields for other form fields here
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate firstName
    if (!formData.state) {
      newErrors.state = ' Name of State is required';
      valid = false;
    } else {
      newErrors.state = '';
    }

    // Validate lastName
    if (!formData.meterNumber) {
      newErrors.meterNumber = 'Meter Number is required';
      valid = false;
    } else {
      newErrors.meterNumber = '';
    }

    // Validate meterType
    if (!formData.meterType) {
      newErrors.meterType = 'Meter Type is required';
      valid = false;
    } else {
      newErrors.meterType = '';
    }
    // Validate phoneNumber
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
      valid = false;
    } else {
      newErrors.phoneNumber = '';
    }
    // Validate email
     // Validate emailAddress (basic email format check)
     if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = 'Invalid Email Address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    // Validate rechargeAmount (numeric check)
    if (!formData.amount || isNaN(Number(formData.amount))) {
      newErrors.amount = 'Recharge Amount must be a number';
      valid = false;
    } else {
      newErrors.amount = '';
    }

    // Add more validation for other fields here

    setErrors(newErrors);
    return valid;
  };

  const handleMeterTypeChange = (value: string) => {
    handleChangeInput({
      target: {
        name: 'meterType',
        value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed to the next step
      handleNextStep();
    }
  };

  return (
    <form className='max-w-[390px] mx-auto' onSubmit={handleSubmit}>
      <div className='my-2'>
        <label>State Disco</label>
        <input
          type='text'
          name='state'
          value={formData.state}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600'
        />
        <span className='text-red-500'>{errors.state}</span>
      </div>
      <div className='my-2'>
        <label>Meter Number</label>
        <input
          type='text'
          name='meterNumber'
          value={formData.meterNumber}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600'
        />
        <span className='text-red-500'>{errors.meterNumber}</span>
      </div>
      <div className='my-2'>
        <label>Meter Type</label>
        <div className='relative'>
          <CombinedInput
            options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
            value={formData.meterType}
            onChange={handleMeterTypeChange}
          />
        </div>
        <span className='text-red-500'>{errors.meterType}</span>
      </div>
      <div className='my-2'>
        <label>Phone Number</label>
        <input
          type='text'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600'
        />
        <span className='text-red-500'>{errors.phoneNumber}</span>
      </div>
      <div className='my-2'>
        <label>Email Address</label>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600'
        />
        <span className='text-red-500'>{errors.email}</span>
      </div>
      <div className='my-2'>
        <label>Amount To Recharge</label>
        <input
          type='text'
          name='amount'
          value={formData.amount}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600'
        />
        <span className='text-red-500'>{errors.amount}</span>
      </div>
      {/* Add more form fields here */}
      <CustomButton
        title={'Next'}
        btnType='submit'
        containerStyles='border border-primary h-full bg-primary text-white rounded-md w-full'
      />
    </form>
  );
};

export default StepA;



