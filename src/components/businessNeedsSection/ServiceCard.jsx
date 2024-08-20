import React from 'react';

const ServiceCard = ({ title, description, isHighlighted, imageSrc }) => {
    const baseClasses = "flex flex-col px-7 py-9 mx-auto w-full text-base font-semibold relative";
    const cardClasses = isHighlighted
        ? `${baseClasses} text-white bg-gradient-to-r from-yellow-500 to-orange-500`
        : `${baseClasses} bg-white shadow-[0px_5px_20px_rgba(95,95,95,0.1)]`;

    return (
        <div className={cardClasses}>
            {isHighlighted && (
                <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 w-full h-full blur-sm" />
            )}
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex-grow">
                    <h3 className={`text-2xl leading-9 ${isHighlighted ? 'relative' : 'text-stone-500'}`}>
                        {title}
                    </h3>
                    <p className={`mt-2.5 leading-7 ${isHighlighted ? 'relative self-stretch' : 'text-zinc-500'}`}>
                        {description}
                    </p>
                </div>
                <div className="flex items-end mt-11 max-md:mt-10">
                    <div className={`flex gap-5 ${isHighlighted ? 'text-white-500' : 'text-orange-500'}`}>
                        <span>Learn More</span>
                        <img
                            loading="lazy"
                            src={isHighlighted ? "https://cdn.builder.io/api/v1/image/assets/TEMP/1bd5d39a6de1f63b7d600961ab473f503fa0eaf3929c41b7530320f180f08cc8?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" : "https://cdn.builder.io/api/v1/image/assets/TEMP/2066cc4048937ce6d0a8e45aeae2b81d605e0fc1b0e9f1ca08f10455519db0fb?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"}
                            alt=""
                            className={`object-contain shrink-0 ${isHighlighted ? 'aspect-[3.62] w-[30px]' : 'w-4 aspect-square'}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
