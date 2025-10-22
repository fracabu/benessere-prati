
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="min-h-screen flex items-center py-20 bg-emerald-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 font-lora">Cosa Dicono i Miei Clienti</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          La fiducia e la soddisfazione di chi si affida a me sono la mia più grande ricompensa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="font-semibold text-emerald-800">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
