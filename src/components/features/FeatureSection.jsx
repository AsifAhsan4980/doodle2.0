import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/016bb8841fab5e9b8843097633e220b5163c0cd479e39e5f9706adfbd5c005d8?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "Subject Matter Expertise",
    description: "Leverage our deep industry knowledge with teams who specialize in Odoo ERP across various sectors. Our subject matter experts ensure your solution is perfectly aligned with industry standards and innovations."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f360eb7f7728edd37e391414856d5e63c51ba2c4b8a44824816a48ebf0da9953?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "Exceptional Talent",
    description: "Benefit from our pool of expert resources, where seasoned Odoo ERP professionals apply their skills to optimize and transform your business processes. Our team's technical proficiency ensures a smooth and efficient implementation."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b2fef20017d5ad5d26aab54aab7e02458b8b352036fa6a8cf349fbdcb279c45?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "Cost Efficiency",
    description: "Achieve significant cost savings without compromising on quality. Our strategic approach to Odoo ERP implementation focuses on maximizing your ROI, delivering top-tier solutions that fit your budget."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8160c38c228cc3e08b175fac94de1a32147a427d3b4d8cd9591bd246c09a75d2?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "Customer-Centric Approach",
    description: "At the heart of our services is a commitment to client satisfaction. We prioritize your needs, offering flexible, scalable solutions and ongoing support to ensure your ERP system continuously meets your evolving business requirements."
  }
];

function FeatureSection() {
  return (
      <section className="py-10 w-full bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    imageSrc={feature.imageSrc}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
          </div>
        </div>
      </section>
  );
}

export default FeatureSection;
