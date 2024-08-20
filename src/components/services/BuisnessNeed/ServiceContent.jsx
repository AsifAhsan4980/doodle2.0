import React from 'react';
import ImageComponent from './ImageComponent';

function ServiceContent() {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-2.5 mb-0 w-full max-w-[1614px] max-md:mb-2.5 max-md:max-w-full">
      <div className="flex flex-col text-base leading-9 text-black max-md:max-w-full">
        <p className="mr-8 max-md:mr-2.5 max-md:max-w-full">
          Implementing Odoo can significantly enhance your business operations. At Doodle Inc., we are dedicated to ensuring that Odoo is perfectly implemented to align with your specific business processes and objectives. Our method involves a detailed analysis of your existing operations followed by a strategic plan for seamless Odoo integration into your business infrastructure.
          <br />
          We handle everything from analysis and system configuration to user training and post-implementation support. Our aim is to facilitate a smooth and efficient transition to Odoo, enabling you to fully utilize its comprehensive applications to optimize operations, boost productivity, and drive business growth.
          <br />
          Choose Doodle Inc. for an Odoo implementation that not only meets but exceeds your business expectations, enhancing your operational capabilities at every level.
        </p>
        <ImageComponent src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ce16786d6862417bbb7bf951a26a380aa093c0841b6ef45c02e79a4ab96cf37?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain self-end aspect-[2.05] w-[76px]" />
      </div>
      <div className="flex relative flex-col justify-center items-center px-20 py-32 mt-1.5 min-h-[385px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <ImageComponent src="https://cdn.builder.io/api/v1/image/assets/TEMP/11e5141083cffc86b6b82f80fe0528b18f4635238b46b8ca341d2d99f239ad19?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="Background image" className="object-cover absolute inset-0 size-full" />
        <ImageComponent src="https://cdn.builder.io/api/v1/image/assets/TEMP/485369be5b8237ffc66d33a13ee363b836652e5f9775cea9095b27ff66375e9e?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="Circular image" className="object-contain w-32 max-w-full aspect-square rounded-[319px]" />
      </div>
      <ImageComponent src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a7b42180580378e58687c2a812071212fac1ad0c4a759494a34bc7874d08045?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 self-start mt-5 aspect-[3.47] w-[52px]" />
    </div>
  );
}

export default ServiceContent;