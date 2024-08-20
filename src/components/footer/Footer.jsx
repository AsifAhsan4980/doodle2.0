import React from 'react';
import Logo from './Logo';
import Newsletter from './Newsletter';
import FooterMiddle from './FooterMiddle';
import FooterBottom from './FooterBottom';
import WhatsAppIcon from '../Icon/WhatsAppIcon';

const Footer = () => {
  const industries = ['Manufacturing', 'Logistics & Supply Chain', 'Hospitality', 'Education', 'Service Sector'];
  const services = ['Odoo Implementation', 'Odoo Customization & Development', 'Odoo Integration', 'Migrate to Odoo'];
  const company = ['About Us', 'Our Services', 'Contact Us'];

  return (
    <footer className='bg-gray-100'>
      <div className='px-5 md:px-10 lg:px-16 xl:px-28 2xl:px-36 py-3.5 '>
        <div className='relative'>
        <Newsletter/>
        <FooterMiddle/>
        <FooterBottom/>  
        <WhatsAppIcon size={40} className='absolute bottom-16 right-0'/>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, items, children }) => (
  <div className="flex flex-col items-start self-stretch text-base font-medium leading-10 text-zinc-800">
    <h2 className="self-stretch text-lg font-bold leading-8 text-zinc-800 max-md:mr-1">{title}</h2>
    <nav>
      <ul className="mt-8">
        {items.map((item, index) => (
          <li key={index} className={index > 0 ? "mt-5" : ""}>{item}</li>
        ))}
      </ul>
    </nav>
    {children}
  </div>
);

export default Footer;


{/* <footer className="flex flex-col items-center px-20 py-16 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1570px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <Logo />
            <p className="mt-12 text-base font-medium leading-10 text-zinc-800 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque, mauris eu quis ultricies viverra dui venenatis. Eu odio sit tincidunt elementum a. Vulputate egestas sed gravida ut purus id tristique. Eu feugiat aliquam egestas convallis ultrices tellus.
            </p>
          </div>
          <FooterSection title="Industries & Expertise" items={industries} />
          <FooterSection title="Services" items={services} />
          <FooterSection title="Company" items={company}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5512fe37da54d4b01560ef0fd54522862b93a91fa154088b1471732b56c8de?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" alt="" className="object-contain self-end mt-9 aspect-square w-[70px]" />
          </FooterSection>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-16 w-full text-base font-medium leading-10 text-zinc-800 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 self-start max-md:max-w-full">
            <div className="text-lg basis-auto">@2024 Doodle Inc. All rights reserved.</div>
            <a href="#" className="basis-auto">Privacy Policy</a>
            <a href="#" className="basis-auto">Terms and Condition</a>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26a0ae08d694e15485904ac9c7e2c4b3d2b73f52bc69c92d26fed7565e49901f?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" alt="Social media icons" className="object-contain shrink-0 max-w-full rounded-3xl aspect-[4.59] w-[197px]" />
        </div>
      </div>
    </footer> */}