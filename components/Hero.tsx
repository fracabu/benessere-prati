import React from 'react';

const Hero: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section id="home" className="relative h-[100vh] min-h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img src="https://picsum.photos/1600/900?image=1018" alt="Persona che pratica yoga in un ambiente sereno" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-lora mb-4 drop-shadow-lg">
          Ritrova il Tuo Equilibrio Interiore
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Corsi di Yoga, Massaggi Shiatsu e Trattamenti Reiki nel cuore di Roma Prati.
        </p>
        <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-transform transform hover:scale-105 duration-300">
          Scopri i Servizi
        </a>
      </div>
    </section>
  );
};

export default Hero;