
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/1027/600/700" 
              alt="Ritratto del professionista" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-lora">Benvenuti nel mio Spazio</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ciao, sono [Il Tuo Nome]. La mia passione è guidare le persone in un percorso di benessere e riscoperta di sé. Con anni di esperienza nelle discipline olistiche, ho creato uno spazio accogliente a Roma Prati dove potrai staccare dalla frenesia quotidiana e dedicarti alla cura del corpo e della mente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Credo in un approccio integrato che unisce la saggezza antica dello yoga e dello shiatsu con la delicata energia del Reiki. Il mio obiettivo è aiutarti a ritrovare l'armonia, alleviare lo stress e coltivare una profonda sensazione di pace interiore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
