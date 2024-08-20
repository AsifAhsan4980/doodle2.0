import React from 'react';
import FeedbackCard from './FeedbackCard';

const FeedbackSection = () => {
  const testimonialData = {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/525d29e3c99569100412eebe67b5efdddcd3423cfe0d68b268b7fd495e12aab5?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    testimonial: "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
    name: "Shalima Hayden",
    role: "Product Designer"
  };

  return (
    <section className="flex flex-col pt-10 text-sm text-center rounded-none max-w-[622px] text-stone-500">
      <FeedbackCard {...testimonialData} />
    </section>
  );
};

export default FeedbackSection;