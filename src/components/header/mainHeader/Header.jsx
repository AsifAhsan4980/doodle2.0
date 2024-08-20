import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ContactButton from './ContactButton';

function Header() {
  return (
    <header>
      <div className='grid grid-cols-12 px-5 md:px-10 lg:px-16 xl:px-28 2xl:px-36 py-3.5'>
        <div className='grid col-span-6 lg:col-span-3'>
          <Logo />
        </div>
        <div className='grid col-span-6 lg:col-span-6 hidden lg:block'>
          <Navigation />
        </div>
        <div className='grid col-span-6 lg:col-span-3'>
          <ContactButton />
        </div>
      </div>
    </header>
  );
}

export default Header;

{/* <header className="flex overflow-hidden flex-col items-center px-16 pt-5 pb-3 bg-white bg-opacity-0 max-md:px-5">
  <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1569px] max-md:max-w-full">
    <Logo />
    <Navigation />
    <ContactButton />
  </div>
</header> */}