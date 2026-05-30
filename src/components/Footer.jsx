import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 border-t border-red-600">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna 1: Marca e Sobre */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-red-600">MUNDO</span> DISTRITAL
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            O portal de referência dedicado em exclusivo ao futebol distrital português. 
            Acompanhamos os clubes, os resultados e a paixão das distritais em tempo real.
          </p>
          <div className="flex space-x-4 pt-2">
            {/* Ícones SVG limpos para as Redes Sociais */}
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-serif border-b border-gray-800 pb-2">Informação Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500 transition-colors">Ficha Técnica</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Estatuto Editorial</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Termos e Condições</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contactos */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-serif border-b border-gray-800 pb-2">Contactos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-red-500" />
              <span>noticiapopular2015@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-red-500" />
              <span>+351 912 345 678</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={16} className="text-red-500" />
              <span>Porto, Portugal</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 pt-6 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {currentYear} Mundo Distrital. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido por Jorge Amadeu Pereira</p>
      </div>
    </footer>
  );
};

export default Footer;