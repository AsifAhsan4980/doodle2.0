import React from 'react';

const ServicesHeader = () => {
  return (
    <header className="z-10 mt-0 w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-zinc-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-4 self-start text-lg font-medium leading-none">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a4858e6f01b789361d872ed52bb7c2b6b575f3744e3babc2414e4e59094ffd?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" alt="" className="object-contain shrink-0 my-auto aspect-[31.25] w-[31px]" />
              <h2 className="basis-auto">Our Services</h2>
            </div>
            <h1 className="mt-6 ml-11 text-4xl font-bold tracking-normal leading-[55px] max-md:max-w-full">
              To Meet Your Business Needs
            </h1>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <p className="mt-14 text-lg leading-10 text-black max-md:mt-10 max-md:max-w-full">
            Discover our tailored services crafted to elevate and streamline your business operations. From innovative solutions to expert support, we're here to transform your challenges into opportunities for growth. Explore our comprehensive range of services designed to meet your unique needs and drive success. Let us help you optimize your operations and achieve your business goals.
          </p>
        </div>
      </div>
    </header>
  );
};

export default ServicesHeader;