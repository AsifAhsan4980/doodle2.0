import React from 'react';
import LanguageSelector from './LanguageSelector';
import ServiceInfo from './ServiceInfo';
import ContactInfo from './ContactInfo';
import LinkedinIcon from '@/components/Icon/LinkedinIcon';
import InstargamIcon from '@/components/Icon/InstagramIcon';
import FacebookIcon from '@/components/Icon/FacebookIcon';
import WhatsAppIcon from '@/components/Icon/WhatsAppIcon';

function TopHeader() {
  return (
    <header className='top-0 sticky bg-white z-50 hidden lg:block'>
      <div className='flex justify-between items-center  bg-gray-50 px-5 md:px-10 lg:px-16 xl:px-28 2xl:px-36 border-b-2'>
        <div className='flex justify-end items-center'>
          <LanguageSelector />
          <h1 className='font-bold text-sm lg:text-md pl-2'>Want to know about our other services? Visit now</h1>
        </div>
        <div className='flex justify-end items-center gap-5'>
          <WhatsAppIcon className='cursor-pointer' size={23} />
          <h1>(+1) 923 2341 22</h1>
          <LinkedinIcon className='cursor-pointer'/>
          <InstargamIcon className='cursor-pointer'/>
          <FacebookIcon className='cursor-pointer' />
        </div>
      </div>
    </header>
  );
}

export default TopHeader;


