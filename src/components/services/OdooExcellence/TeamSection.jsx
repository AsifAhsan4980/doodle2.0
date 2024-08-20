import React from 'react';

function TeamSection() {
  return (
    <div className="flex flex-col self-stretch my-auto">
      <div className="flex flex-col items-end pl-12 w-full text-lg font-medium text-zinc-800 max-md:pl-5">
        <div className="flex gap-4 leading-8">
          <div className="grow">New Feature</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b463afefbb50d762080cadf7ffdde0b39751dda3544daa4aa759ae49297da3aa?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 my-auto aspect-[1.93] w-[29px]" />
        </div>
        <div className="flex gap-4 mt-24 leading-6 max-md:mt-10">
          <div>
            New Feature <br /> Stories Tasks
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d87fb72c4f5c5de4f21b35607a3050eb82752e5241fd4b3eda6dca8fd83adeb?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 self-start mt-2.5 aspect-[1.93] w-[29px]" />
        </div>
      </div>
      <div className="mt-20 text-3xl font-bold leading-8 text-stone-500 max-md:mt-10">
        Project <br /> Team Follow
      </div>
    </div>
  );
}

export default TeamSection;