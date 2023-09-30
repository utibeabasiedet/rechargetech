import React from 'react';
import SimpleMultiStepForm from './components/SimpleMultiStepForm';

const page = () => {
  return (
    <div className=' rounded-lg h-full px-6 pt-6 w-auto  min-w-[100%]'>
      
      <SimpleMultiStepForm showStepNumber={true} />
    </div>
  );
};

export default page;
