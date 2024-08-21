import React, { useState } from 'react';
import DownArrow from '@/components/Icon/DownArrow';
import Link from "next/link";


function Navigation() {
  const navItems = [
    { id: '1', label: 'Home', link: '/', isActive: true },
    { id: '2', label: 'Services', link: '/services' },
    { id: '3', label: 'Industries & Expertise', link: '/', hasDropdown: true },
    { id: '4', label: 'Case Studies', link: '/' },
    { id: '5', label: 'Company', link: '/', hasDropdown: true }
  ];
  const [arrowMoodChange, setArrowMoodChange] = useState(false)


  return (
    <nav className="">
      <div className='flex justify-start gap-8 mx-auto items-center text-base font-semibold pt-5 text-zinc-800'>
        {navItems.map((item, index) => (
          <Link key={index} href={item.link} className={`flex justify-start test-xs lg:text-sm items-center gap-1 ${item.isActive ? 'font-bold text-orange-500' : ''}`}>{item.label}
            {item.hasDropdown && (
              <DownArrow onClick={() => { setArrowMoodChange(!arrowMoodChange); }} className={`transform transition-transform duration-300 ease-in-out ${arrowMoodChange ? 'rotate-180' : ''}`} />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;