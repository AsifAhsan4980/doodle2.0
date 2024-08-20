import React from 'react';

const FeedbackCard = ({ imageSrc, testimonial, name, role }) => {
  return (
    <article className="flex flex-col items-center px-11 pb-9 w-full bg-white rounded-2xl shadow-2xl max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src={imageSrc} alt={`${name}'s profile picture`} className="object-contain z-10 -mt-10 aspect-square w-[88px]" />
      <p className="self-stretch mt-10 leading-6 max-md:max-w-full">
        {testimonial}
      </p>
      <h2 className="mt-10 text-base font-bold leading-none text-zinc-800">
        {name}
      </h2>
      <p className="mt-2 font-medium">{role}</p>
    </article>
  );
};

export default FeedbackCard;