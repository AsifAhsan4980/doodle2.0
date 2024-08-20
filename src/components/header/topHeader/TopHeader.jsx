import React from 'react';
import LanguageSelector from './LanguageSelector';
import ServiceInfo from './ServiceInfo';
import ContactInfo from './ContactInfo';

function TopHeader() {
  return (
    <header className="flex flex-col text-base font-semibold rounded-none">
      <div className="flex flex-col items-center px-16 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1570px] max-md:max-w-full">
          <div className="flex flex-wrap gap-9 max-md:max-w-full">
            <LanguageSelector />
            <ServiceInfo />
          </div>
          <div className="flex gap-9 my-auto text-zinc-500">
            <ContactInfo />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d232cd42a6522b4c741f006990d673d64ad6944c538f7213689a4b0d991bc334?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" className="object-contain shrink-0 rounded-xl aspect-[3.66] w-[88px]" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;