
import React from 'react';
import type { Service, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Chi Sono', href: '#about' },
  { name: 'Servizi', href: '#services' },
  { name: 'Testimonianze', href: '#testimonials' },
  { name: 'Contatti', href: '#booking' },
];

const YogaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" />
    <path d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
  </svg>
);

const ShiatsuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 14c-1.1 0-2-.9-2-2 0-1.1.9-2 2-2" />
    <path d="M16 10c1.1 0 2 .9 2 2 0 1.1-.9 2-2 2" />
    <path d="M9.5 22c-1.12 0-2.22-.3-3.22-.9a5.03 5.03 0 0 1-1.3-1.6l-1.92-3.48c-.36-.67-.1-1.5.6-1.88a12.8 12.8 0 0 1 5.4-1.2c.56-.07 1.12.04 1.66.33a5.03 5.03 0 0 1 2.44 2.44l.06.12c.3.54.37 1.18.2 1.76l-1.3 4.28c-.5 1.6-2.02 2.72-3.76 2.73H9.5z" />
    <path d="M15.5 2c1.12 0 2.22.3 3.22.9a5.03 5.03 0 0 1 1.3 1.6l1.92 3.48c.36.67.1 1.5-.6 1.88a12.8 12.8 0 0 1-5.4 1.2c-.56.07-1.12-.04-1.66-.33a5.03 5.03 0 0 1-2.44-2.44l-.06-.12c-.3-.54-.37-1.18-.2-1.76l1.3-4.28c.5-1.6 2.02-2.72 3.76-2.73h.2z" />
  </svg>
);

const ReikiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 17.5a2.5 2.5 0 0 0-3 4.33 1.5 1.5 0 0 0 1.5-2.6" />
    <path d="M22 6.5c-1.5 1.5-3.29 2.7-5.5 3.5-2.21.8-5.18 1-7.5 0-2.32-.99-4-2.5-5.5-4" />
    <path d="M13.5 14.5a2.5 2.5 0 0 0-3-4.33 1.5 1.5 0 0 0 1.5 2.6" />
    <path d="M16 22c3-2 5-5 5-9" />
    <path d="M8 22c-3-2-5-5-5-9" />
    <path d="m15 13-1-1" />
    <path d="m10 13-1-1" />
  </svg>
);

export const SERVICES: Service[] = [
  {
    title: 'Corsi di Yoga',
    description: 'Lezioni individuali e di gruppo per tutti i livelli, per riscoprire l\'equilibrio tra corpo e mente, migliorare la flessibilità e ridurre lo stress quotidiano.',
    icon: <YogaIcon className="w-12 h-12 text-emerald-600" />,
  },
  {
    title: 'Massaggi Shiatsu',
    description: 'Un antico trattamento giapponese che utilizza la pressione delle dita per riequilibrare l\'energia vitale (Ki), alleviare tensioni muscolari e promuovere un profondo stato di rilassamento.',
    icon: <ShiatsuIcon className="w-12 h-12 text-emerald-600" />,
  },
  {
    title: 'Trattamenti Reiki',
    description: 'Una tecnica di guarigione energetica che canalizza l\'energia universale per ridurre lo stress, promuovere il rilassamento e supportare i naturali processi di guarigione del corpo.',
    icon: <ReikiIcon className="w-12 h-12 text-emerald-600" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Un\'oasi di pace nel cuore di Prati. Le lezioni di yoga mi hanno aiutato a ritrovare la serenità e a combattere il mal di schiena. Professionalità e gentilezza uniche.',
    name: 'Giulia R.',
    role: 'Cliente Yoga',
  },
  {
    quote: 'Il trattamento Shiatsu è stato trasformativo. Ho sentito le tensioni sciogliersi e ho dormito come non facevo da mesi. Consigliatissimo!',
    name: 'Marco B.',
    role: 'Cliente Shiatsu',
  },
  {
    quote: 'Non avevo mai provato il Reiki prima e sono rimasta sorpresa dalla profonda sensazione di benessere che mi ha lasciato. Un\'esperienza da ripetere assolutamente.',
    name: 'Alessia V.',
    role: 'Cliente Reiki',
  },
];
