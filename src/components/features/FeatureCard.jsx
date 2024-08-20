import React from 'react';

function FeatureCard({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col grow items-start p-10 w-full bg-white shadow-[0px_4px_70px_rgba(91,91,91,0.07)] max-md:px-5 max-md:mt-9">
      <img loading="lazy" src={imageSrc} alt="" className="object-contain aspect-square w-[97px]" />
      <h3 className="mt-10 text-2xl font-semibold leading-9 text-stone-500">{title}</h3>
      <p className="self-stretch mt-2.5 text-base leading-7 text-zinc-500">{description}</p>
    </div>
  );
}

export default FeatureCard;