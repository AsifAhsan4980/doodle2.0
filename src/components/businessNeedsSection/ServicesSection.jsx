import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    title: "Odoo Implementation",
    description: "Streamline your business operations with our expert Odoo implementation services. We ensure a smooth transition and setup to enhance your system's efficiency and user adoption.",
    isHighlighted: true,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f29bc6821b2af40bbeab5f42640d15d4a88646b416091d52729052644b0e3ed2?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
  },
  {
    title: "Odoo Customization & Development",
    description: "Tailor Odoo to your unique business needs with our customization and development services. From module modifications to creating new features, we build solutions that enhance operational efficiency and reduce effort.",
    isHighlighted: false
  },
  {
    title: "Odoo Integration",
    description: "Connect Odoo seamlessly with your existing software systems. Our integration services enhance data consistency and workflow efficiency across your business platforms.",
    isHighlighted: false
  },
  {
    title: "Migrate to Odoo",
    description: "Transition smoothly from your current systems to Odoo with our migration services. We prioritize data integrity and minimal downtime to ensure a successful ERP upgrade.",
    isHighlighted: false
  }
];

const ServicesSection = () => {
  return (
    <section className="self-end mt-24 w-full max-w-[1487px] max-md:mt-10 max-md:mr-1 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;