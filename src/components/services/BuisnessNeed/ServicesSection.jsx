import React from 'react';
import ServiceTab from './ServiceTab';
import ServiceContent from './ServiceContent';
import ImageComponent from './ImageComponent';

const serviceTabs = [
  { label: 'Implementation', isActive: true },
  { label: 'Customization & Development', isActive: false },
  { label: 'Integration', isActive: false },
  { label: 'Migration', isActive: false }
];

function ServicesSection() {
  return (
    <section className="px-5 py-28 w-full bg-white max-md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-zinc-800">
            <div className="flex gap-4 text-lg font-medium leading-none">
              <ImageComponent 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a4858e6f01b789361d872ed52bb7c2b6b575f3744e3babc2414e4e59094ffd?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" 
                alt="" 
                className="object-contain shrink-0 my-auto aspect-[31.25] w-[31px]" 
              />
              <span className="basis-auto">Our Services</span>
            </div>
            <h2 className="mt-6 ml-11 text-4xl font-bold tracking-normal leading-[55px]">
              To Meet Your Business Needs
            </h2>
          </div>
          <div className="mt-14 text-lg leading-10 text-black md:mt-0">
            Discover our tailored services crafted to elevate and streamline your business operations. From innovative solutions to expert support, we're here to transform your challenges into opportunities for growth. Explore our comprehensive range of services designed to meet your unique needs and drive success. Let us help you optimize your operations and achieve your business goals.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-16 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-base font-semibold text-center text-zinc-800">
            {serviceTabs.map((tab, index) => (
              <ServiceTab key={index} label={tab.label} isActive={tab.isActive} />
            ))}
          </div>
          <div className=" gap-6 mt-7">
            <ImageComponent 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b45810ffe50bda7a348c22136f34c4d609280db01741e663360021868d54a05?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" 
              alt="" 
              className="object-contain shrink-0 my-auto aspect-[0.67] w-[31px]" 
            />
            <div className="flex gap-2.5 items-start">
              <ImageComponent 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc35eb5295116b542fe5c51ee3d8a5993475256a5fe04a26ea37fc037975a38?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" 
                alt="" 
                className="object-contain shrink-0 self-start aspect-[0.34] w-[21px]" 
              />
              <ImageComponent 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/425cdc1b22af2ef37dce0b706844abe5a11828e497fec1098ca5c37733ff804f?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" 
                alt="" 
                className="object-contain shrink-0 self-end mt-9 w-10 aspect-[0.93]" 
              />
            </div>
          </div>
          
        </div>
        <div className='grid grid-cols-2'>
          <ServiceContent className="grid grid-cols-1" />
          </div>
        
       
      </div>
    </section>
  );
}

export default ServicesSection;
