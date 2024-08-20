import React from 'react';

function Navigation() {
  const navItems = [
    { label: 'Home', isActive: true },
    { label: 'Services' },
    { label: 'Industries & Expertise', hasDropdown: true },
    { label: 'Case Studies' },
    { label: 'Company', hasDropdown: true }
  ];

  return (
    <nav className="flex justify-evenly items-center text-base font-semibold pt-5 text-zinc-800">
      {navItems.map((item, index) => (
        <div key={index} className={`flex gap-1.5 ${item.isActive ? 'font-bold text-orange-500' : ''}`}>
          <div className="grow">{item.label}</div>
          {item.hasDropdown && (
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e4edb1eae8c9114383c96830ed432193df4fe98ac1877c36938ab1e1dadd501?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" 
              className="object-contain shrink-0 my-auto aspect-square w-[15px]" 
              alt=""
            />
          )}
        </div>
      ))}
    </nav>
  );
}

export default Navigation;