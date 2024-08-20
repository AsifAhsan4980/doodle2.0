import React from 'react';

const ServiceCard = ({ title, description, isHighlighted, imageSrc }) => {
  const baseClasses = "flex flex-col px-7 py-9 mx-auto w-full text-base font-semibold";
  const cardClasses = isHighlighted
    ? `${baseClasses} text-white relative`
    : `${baseClasses} bg-white shadow-[0px_5px_20px_rgba(95,95,95,0.1)]`;

  return (
    <div className={cardClasses}>
      {isHighlighted && (
        <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
      )}
      <h3 className={`text-2xl leading-9 ${isHighlighted ? 'relative' : 'text-stone-500'}`}>
        {title}
      </h3>
      <p className={`mt-2.5 leading-7 ${isHighlighted ? 'relative self-stretch' : 'text-zinc-500'}`}>
        {description}
      </p>
      <div className={`flex gap-5 mt-11 ${isHighlighted ? 'relative' : 'text-orange-500'} max-md:mt-10`}>
        <span>Learn More</span>
        <img
          loading="lazy"
          src={isHighlighted ? "https://cdn.builder.io/api/v1/image/assets/TEMP/1bd5d39a6de1f63b7d600961ab473f503fa0eaf3929c41b7530320f180f08cc8?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" : "https://cdn.builder.io/api/v1/image/assets/TEMP/2066cc4048937ce6d0a8e45aeae2b81d605e0fc1b0e9f1ca08f10455519db0fb?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"}
          alt=""
          className={`object-contain shrink-0 my-auto ${isHighlighted ? 'aspect-[3.62] w-[58px]' : 'w-4 aspect-square'}`}
        />
      </div>
    </div>
  );
};

export default ServiceCard;