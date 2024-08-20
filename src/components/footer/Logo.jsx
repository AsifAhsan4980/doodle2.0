import React from 'react';

const Logo = () => (
  <div className="flex gap-2.5 self-start">
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex shrink-0 bg-orange-500 h-[7px]" />
        <div className="flex shrink-0 mt-2 bg-orange-500 h-[7px] w-[7px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/226dd2a11646b27bd05ab932dd92f94963eb35c27a572c2d3c6a243d8ee1ec37?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" alt="" className="object-contain aspect-[1.57] w-[22px]" />
      </div>
      <div className="flex shrink-0 my-auto bg-orange-500 h-[21px] w-[7px]" />
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39e67ab8ee25d419cb2bc3680a0ab472ffd6fb471f62455a381a94ca97f02a1e?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" alt="Company logo" className="object-contain shrink-0 my-auto max-w-full aspect-[7.19] w-[137px]" />
  </div>
);

export default Logo;