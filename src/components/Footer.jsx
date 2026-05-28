import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* About Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-serif">Sobre Nós</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Mundo Distrital é o portal oficial de notícias do futebol distrital português. Cobrindo todas as divisões e modalidades com informação atualizada e análise profunda.
            </p>
            <p className="text-xs text-gray-500">
              © 2026 Mundo Distrital. Todos os direitos reservados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-serif">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Últimas Notícias
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Calendário
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Classificações
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Loja Oficial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-serif">Contactos</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+351 21 234 5678</p>
                  <p className="text-gray-500 text-xs">Seg-Sex: 9h-18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-400">info@mundodistrital.pt</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-400">Av. Futebol Distrital, 100<br />1000-001 Lisboa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Desenvolvido com ❤️ para o futebol distrital português</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-red-600 transition-colors">Termos</a>
            <a href="#" className="hover:text-red-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;