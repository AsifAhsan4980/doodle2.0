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
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
  );
};

export default ServicesSection;
