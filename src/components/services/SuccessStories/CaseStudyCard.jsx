import React from 'react';

function CaseStudyCard({ image, title, description }) {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pb-9 w-full bg-white max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src={image} alt={title} className="object-contain w-full aspect-[1.2] max-md:max-w-full" />
        <div className="flex flex-col px-5 mt-5 max-md:px-5 max-md:max-w-full">
          <h3 className="text-2xl font-semibold leading-10 max-md:max-w-full text-[#985184]">{title}</h3>
          <p className="mt-6 text-base leading-6 text-zinc-500 max-md:max-w-full">{description}</p>
          <a href="#" className="self-start mt-6 text-sm font-medium text-zinc-800">Read More</a>
          <div className="flex shrink-0 h-1 bg-red-400 w-[68px]" />
        </div>
      </div>
    </article>
  );
}

export default CaseStudyCard;