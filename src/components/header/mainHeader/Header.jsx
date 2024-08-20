import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ContactButton from './ContactButton';
// import Logo from './Logo';
// import Navigation from './Navigation';
// import ContactButton from './ContactButton';

function Header() {
  return (
    <header className="flex overflow-hidden flex-col items-center px-16 pt-5 pb-3 bg-white bg-opacity-0 max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1569px] max-md:max-w-full">
        <Logo />
        <Navigation />
        <ContactButton />
      </div>
    </header>
  );
}

export default Header;