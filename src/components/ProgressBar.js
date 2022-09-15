import React from "react";



const ProgressBar = () => {
  
  return (
    <div className='mr-6 mt-5'>
      <div className='flex gap-x-2 mb-3'>
      <span className='text-2xl font-bold text-slate-900 dark:text-white'>594</span>
      <span className='text-sm mt-1 text-gray-400'>Total</span>
      </div>
      <div className='  bg-violet-300 rounded-2xl  '>
      <div className='h-full w-[120px] text-right  rounded-2xl bg-violet-800'>
      
     
        <span className='p-5 text-white font-bold'> </span>
      </div>
    </div>
    
    <div className='flex mt-4'>
    <div className='flex items-center gap-x-3'>
    <div className='w-7 h-[4px] bg-violet-800 rounded-3xl '></div> 
    <span className='text-sm text-gray-400'>Online</span>
    </div>

    <div className='flex items-center gap-x-3 ml-10'>
    <div className='w-7 h-[4px] bg-violet-300 rounded-3xl '></div> 
    <span className='text-sm text-gray-400'>Offline</span>
    </div>
    </div>

    <div className='flex gap-x-[60px] ml-10'>
      <span className='text-sm font-semibold text-slate-800 dark:text-white'>179 users</span>
      <span className='text-sm font-semibold text-slate-800 dark:text-white'>394 users</span>
    </div>

    

    </div>
  );
};

export default ProgressBar;