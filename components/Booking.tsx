
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };
  
  return (
    <section id="booking" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 font-lora">Contattami e Prenota la Tua Seduta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fai il primo passo verso il tuo benessere. Compila il modulo per richiedere informazioni o prenotare un appuntamento.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          {submitted ? (
            <div className="text-center text-emerald-700">
                <h3 className="text-2xl font-bold mb-2">Grazie!</h3>
                <p>Il tuo messaggio è stato inviato con successo. Ti risponderò al più presto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"/>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Servizio di Interesse</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 bg-white">
                  <option value="">Seleziona un servizio</option>
                  <option value="yoga">Corsi di Yoga</option>
                  <option value="shiatsu">Massaggi Shiatsu</option>
                  <option value="reiki">Trattamenti Reiki</option>
                  <option value="info">Richiesta Informazioni</option>
                </select>
              </div>
              <div className="mb-6">
                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Messaggio</label>
                 <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"></textarea>
              </div>
              <div className="text-center">
                 <button type="submit" className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors duration-300">
                    Invia Richiesta
                 </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
