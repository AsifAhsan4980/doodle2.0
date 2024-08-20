import React from 'react';

function ManufacturingButton() {
  return (
    <div className='flex gap-3'>
    <button className="gap-2.5 self-stretch px-12 py-6 text-base font-semibold text-center text-white whitespace-nowrap bg-orange-500 rounded-xl">
      <span className='text-white'>Manufacturing</span>
    </button>
    <button className="gap-2.5 self-stretch px-12 py-6 text-base font-semibold text-center text-white whitespace-nowrap bg-[#f1edf0] rounded-xl">
      <span className='text-black'>Logistic and Supply</span> <i class="fas fa-file-chart-line    "></i>
    </button>
    <button className="gap-2.5 self-stretch px-12 py-6 text-base font-semibold text-center text-white whitespace-nowrap bg-[#f1edf0] rounded-xl">
       <span className='text-black'>Education</span>
    </button>
    <button className="gap-2.5 self-stretch px-12 py-6 text-base font-semibold text-center text-white whitespace-nowrap bg-[#f1edf0] rounded-xl">
       <span className='text-black'>Service Sector</span>
    </button>
    </div>
  );
}

export default ManufacturingButton;