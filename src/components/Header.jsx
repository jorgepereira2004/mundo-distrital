import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = ({ cartItemCount = 0, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Início', to: '/' },
    { label: 'Notícias', to: '/noticias' },
    { label: 'Modalidades', to: '/modalidades' },
    { label: 'Loja', to: '/loja' },
    { label: 'Contactos', to: '/contactos' },
    { label: 'Sobre Nós', to: '/sobre-nos' }
  ];

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-red-600' : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500'}`;

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 onClick={() => navigate('/')} className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white cursor-pointer">
              <span className="text-red-600">MUNDO</span>
              <span className="text-gray-900 dark:text-white"> DISTRITAL</span>
            </h1>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Portal de Futebol Distrital</p>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-red-600 h-5 w-5 text-xs font-bold text-white">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-red-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors font-medium"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
