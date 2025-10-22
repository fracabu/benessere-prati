import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import LogoIcon from './LogoIcon'; // Importa la nuova icona

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center text-2xl font-bold text-emerald-800 font-lora gap-2">
          <LogoIcon className="w-8 h-8" />
          <span>Benessere Prati</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              {link.name}
            </a>
          ))}
          <a href="#booking" onClick={(e) => handleScroll(e, '#booking')} className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-300">
            Prenota Ora
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center px-4 pt-2 pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-gray-600 hover:text-emerald-600 py-2">
                {link.name}
              </a>
            ))}
            <a href="#booking" onClick={(e) => handleScroll(e, '#booking')} className="w-full text-center bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-300">
              Prenota Ora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;