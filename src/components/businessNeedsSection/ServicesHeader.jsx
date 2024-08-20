import React from 'react';

const ServicesHeader = () => {
  return (
      <header className="w-full z-10 py-6 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="flex flex-col text-zinc-800">
              <div className="flex items-center gap-4 text-lg font-medium leading-none">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a4858e6f01b789361d872ed52bb7c2b6b575f3744e3babc2414e4e59094ffd?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
                    alt=""
                    className="object-contain aspect-[31.25] w-[31px]"
                />
                <h2>Our Services</h2>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-normal leading-[55px]">
                To Meet Your Business Needs
              </h1>
            </div>

            {/* Right Section */}
            <div className="flex flex-col">
              <p className="text-lg leading-10 text-black">
                Discover our tailored services crafted to elevate and streamline your business operations. From innovative solutions to expert support, we're here to transform your challenges into opportunities for growth. Explore our comprehensive range of services designed to meet your unique needs and drive success. Let us help you optimize your operations and achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </header>
  );
};

export default ServicesHeader;
