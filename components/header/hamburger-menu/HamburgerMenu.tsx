import React, { useState } from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  handleClick: () => void;
}

const HamburgerMenu = ({ isOpen, handleClick }: HamburgerMenuProps) => {
  return (
    <span
      onClick={handleClick}
      className='flex flex-col justify-center items-center cursor-pointer p-2 transition-all hover:animate-pulse '
    >
      <span
        className={`bg-black  block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
      ></span>
    </span>
  );
};

export default HamburgerMenu;
