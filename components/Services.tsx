
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="min-h-screen flex items-center py-20 bg-stone-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 font-lora">I Miei Trattamenti per il Tuo Benessere</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Offro un ventaglio di pratiche olistiche pensate per rispondere alle tue esigenze specifiche e accompagnarti verso un benessere completo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-lora">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
