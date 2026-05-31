import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = ({ onNavigate, onLogoClick, cartItemCount = 0, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', key: 'home', href: '/' },
    { label: 'Notícias', key: 'noticias', href: '/noticias' },
    { label: 'Modalidades', key: 'modalidades', href: '/modalidades' },
    { label: 'Loja', key: 'loja', href: '#' },
    { label: 'Contactos', key: 'contactos', href: '#' }
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 onClick={() => onLogoClick && onLogoClick()} className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white cursor-pointer">
              <span className="text-red-600">MUNDO</span>
              <span className="text-gray-900 dark:text-white"> DISTRITAL</span>
            </h1>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Portal de Futebol Distrital</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(item.key); }}
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-red-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(item.key); setIsMenuOpen(false); }}
                className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;