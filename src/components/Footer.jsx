import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaThreads, FaTiktok, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 border-t border-red-600">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid gap-8 grid-cols-1 lg:grid-cols-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-red-600">MUNDO</span> DISTRITAL
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            O portal de referência exclusivo ao futebol distrital português. Notícias, análises e a paixão que move a comunidade local.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://www.facebook.com/DistritalPortugal" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/mundodistrital" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.threads.com/@mundodistrital" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="Threads">
              <FaThreads size={18} />
            </a>
            <a href="https://www.tiktok.com/@mundodistrital" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="TikTok">
              <FaTiktok size={18} />
            </a>
            <a href="https://www.youtube.com/@MundoDistrital" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="YouTube">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-serif border-b border-gray-800 pb-2">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-500 transition-colors">Início</Link></li>
            <li><Link to="/noticias" className="hover:text-red-500 transition-colors">Notícias</Link></li>
            <li><Link to="/modalidades" className="hover:text-red-500 transition-colors">Modalidades</Link></li>
            <li><Link to="/loja" className="hover:text-red-500 transition-colors">Loja</Link></li>
            <li><Link to="/contactos" className="hover:text-red-500 transition-colors">Contactos</Link></li>
            <li><Link to="/sobre-nos" className="hover:text-red-500 transition-colors">Sobre Nós</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-serif border-b border-gray-800 pb-2">Informação Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/ficha-tecnica" className="hover:text-red-500 transition-colors">Ficha Técnica</Link></li>
            <li><Link to="/estatuto-editorial" className="hover:text-red-500 transition-colors">Estatuto Editorial</Link></li>
            <li><Link to="/termos-e-condicoes" className="hover:text-red-500 transition-colors">Termos e Condições</Link></li>
            <li><Link to="/politica-de-privacidade" className="hover:text-red-500 transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-serif border-b border-gray-800 pb-2">Contactos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-gray-300">
              <Mail size={16} className="text-red-500" />
              <span>geral@mundodistrital.pt</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Phone size={16} className="text-red-500" />
              <span>+351 912 345 678</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <MapPin size={16} className="text-red-500" />
              <span>Porto, Portugal</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 pt-6 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {currentYear} Mundo Distrital. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido por Jorge Amadeu Pereira</p>
      </div>
    </footer>
  );
};

export default Footer;
