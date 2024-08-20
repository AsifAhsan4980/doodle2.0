import React from 'react';

function LanguageSelector() {
  return (
    <div className="flex gap-2.5 justify-start items-center bg-slate-100 p-5">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/159a559eae6e702db50f6112251cc0af009bb7d523c8dfdcb84c1ef0a00557d5?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" className="object-contain shrink-0 rounded-xl aspect-square w-[25px]" alt="" />
      <div className="basis-auto font-bold">Language: English</div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6050d0f5e85b6ce7a5f070c2720cd50a30b50883d579446537853d539595e5f2?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" className="object-contain shrink-0 my-auto aspect-square w-[21px]" alt="" />
    </div>
  );
}

export default LanguageSelector;