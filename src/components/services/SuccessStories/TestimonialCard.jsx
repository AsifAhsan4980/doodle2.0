import React from 'react';

function TestimonialCard({ content, name, role, elevated }) {
  const cardClasses = elevated
    ? "flex flex-col grow items-center px-11 pb-9 mt-10 w-full text-sm text-center bg-white rounded-2xl shadow-2xl text-stone-500 max-md:px-5 max-md:max-w-full"
    : "flex flex-col items-center text-sm text-center text-stone-500 max-md:mt-10 max-md:max-w-full";

  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className={cardClasses}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd329374ffc7ab104928c8c74cfc5f679c8af897cb32d21dcc9fe52973c47af7?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className={`object-contain aspect-square w-[88px] ${elevated ? 'z-10 -mt-10' : 'mt-10'}`} />
        <p className="self-stretch mt-10 leading-6 max-md:max-w-full">{content}</p>
        <h3 className="mt-10 text-base font-bold leading-none text-zinc-800">{name}</h3>
        <p className="mt-2 font-medium">{role}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;