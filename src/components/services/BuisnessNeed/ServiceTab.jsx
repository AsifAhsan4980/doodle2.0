import React from 'react';

function ServiceTab({ label, isActive }) {
  const baseClasses = "gap-2.5 self-stretch px-12 py-6 rounded-xl min-h-[74px] max-md:px-5";
  const activeClasses = "text-white bg-orange-500";
  const inactiveClasses = "bg-zinc-600 bg-opacity-10";

  return (
    <button className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}  bg-gray-100`}>
      {label}
    </button>
  );
}

export default ServiceTab;