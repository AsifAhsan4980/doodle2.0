import MenuIcon from '@/components/Icon/MenuIcon';
import React from 'react';

function Logo() {
  return (
    <div className="">
      <div className='flex justify-start items-center gap-2'>
        <div className='lg:hidden'>
          <MenuIcon size={40} className=''/>
        </div>
        <div className="flex gap-2.5">
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex shrink-0 bg-orange-500 h-[7px]" />
              <div className="flex shrink-0 mt-2 bg-orange-500 h-[7px] w-[7px]" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/226dd2a11646b27bd05ab932dd92f94963eb35c27a572c2d3c6a243d8ee1ec37?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" className="object-contain aspect-[1.57] w-[22px]" alt="" />
            </div>
            <div className="flex shrink-0 my-auto bg-orange-500 h-[21px] w-[7px]" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41264fcca452afc2ff19ac839e3c6eb9d4b23e1187d235a20e4298bdb72ba16c?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" className="object-contain shrink-0 my-auto max-w-full aspect-[7.19] w-[137px]" alt="Company logo" />
        </div>
      </div>

      <div className='pl-3 hidden lg:block'>
        <p className="mt-2 text-[9px] font-semibold leading-3  text-black">An ISO 9001:20215 & 27001:2022</p>
        <p className="text-[9px] pl-3 font-semibold leading-3 text-black">Certified Organization</p>
      </div>
    </div>
  );
}

export default Logo;