"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import "./category.css"
const Nav = () => {
  const sections =['Home', 'Games', 'About', 'Contact']
  const [activeIndex, setActiveIndex] = useState<number>(0);
   const Xvalues=["0","150","300","450"]
  const handleNav = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="relative text-black font-normal">
      <ul className="hidden md:flex justify-center w-[550px] items-start md:items-end  gap-[50px] mt-4 relative overflow-hidden">
        <li 
          className="absolute h-full w-[100px] bg-black bottom-0 rounded-t-xl left-0 transition-transform duration-300 black-nav-block"
          style={{
            transform: `translateX(${Xvalues[activeIndex]}%)`,
          }}
        ></li>

        {sections.map((item, index) => (
          <li
            key={index}
            onClick={() => handleNav(index)}
            style={{ color: activeIndex === index ? 'white' : 'black' }}
            className="relative z-10 rounded-xl px-4 py-3 cursor-pointer h-full w-[100px]"
          >
            <Link href={`#${item}`} className="block text-center ">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
