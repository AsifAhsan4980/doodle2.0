import React from 'react';
import LanguageSelector from './LanguageSelector';
import ServiceInfo from './ServiceInfo';
import ContactInfo from './ContactInfo';

function TopHeader() {
  return (
    <header className='absolute top-0 sticky bg-white z-50 hidden lg:block'>
      <div className='flex justify-between items-center  bg-gray-50 px-5 md:px-10 lg:px-16 xl:px-28 2xl:px-36 border-b-2'>
        <div className='flex justify-end items-center gap-5'>
          <LanguageSelector />
          <h1 className='font-bold'>Want to know about our other services? Visit now</h1>
        </div>
        <div className='flex justify-end items-center gap-5'>
          <ContactInfo />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d232cd42a6522b4c741f006990d673d64ad6944c538f7213689a4b0d991bc334?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" className="object-contain shrink-0 rounded-xl aspect-[3.66] w-[88px]" alt="" />
        </div>
      </div>
    </header>
  );
}

export default TopHeader;


