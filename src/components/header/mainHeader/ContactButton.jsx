import React from 'react';

function ContactButton() {
  return (
    <div className='flex justify-end items-center'>
      <button className="text-center px-3 md:px-4 lg:px-5 py-2 md:py-3 lg:py-3 font-semibold text-white bg-orange-500 rounded-md ">
        Get in touch
      </button>
    </div>
  );
}

export default ContactButton;