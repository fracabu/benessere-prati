
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="min-h-screen flex items-center py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 font-lora">Dove Trovarmi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Il mio studio si trova nel cuore del quartiere Prati a Roma, un'oasi di tranquillità facilmente raggiungibile.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 text-gray-700">
            <h3 className="font-bold text-lg mb-2">Indirizzo:</h3>
            <p className="mb-4">Via [Nome della Via], 123<br/>00193 Roma (RM), Zona Prati</p>
            <h3 className="font-bold text-lg mb-2">Come Raggiungermi:</h3>
            <p className="mb-4">
              <strong>Metro:</strong> Fermata Lepanto (Linea A)<br/>
              <strong>Autobus:</strong> Linee 30, 70, 87, 280, 913
            </p>
            <p>Lo studio si trova al secondo piano, interno 4.</p>
          </div>
          <div className="md:w-1/2 h-80 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47509.80918769151!2d12.41870196238628!3d41.9080758410091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6061b7149b91%3A0x718f3a3654203f39!2sPrati%2C%20Roma%20RM!5e0!3m2!1sit!2sit!4v1684321098765!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa della zona Prati a Roma"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
