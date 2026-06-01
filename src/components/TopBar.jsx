import { Mail } from 'lucide-react';
import { FaInstagram, FaThreads, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa6';

const TopBar = () => {
  const currentDate = new Date().toLocaleDateString('pt-PT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-900 dark:bg-black text-gray-100 py-2 px-4 lg:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:flex-row md:justify-between md:items-center text-xs lg:text-sm">
        <span className="capitalize font-medium">{currentDate}</span>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://www.instagram.com/mundodistrital" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="Instagram">
            <FaInstagram size={16} />
          </a>
          <a href="https://www.threads.com/@mundodistrital" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="Threads">
            <FaThreads size={16} />
          </a>
          <a href="https://www.tiktok.com/@mundodistrital" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="TikTok">
            <FaTiktok size={16} />
          </a>
          <a href="https://www.youtube.com/@MundoDistrital" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="YouTube">
            <FaYoutube size={16} />
          </a>
          <a href="https://www.facebook.com/DistritalPortugal" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors duration-300" aria-label="Facebook">
            <FaFacebook size={16} />
          </a>
          <a href="mailto:geral@mundodistrital.pt" className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-1" aria-label="Contacto por email">
            <Mail size={16} />
            <span className="hidden sm:inline">Contactos</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
