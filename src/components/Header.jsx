import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Notícias', href: '#' },
    { label: 'Modalidades', href: '#' },
    { label: 'Loja', href: '#' },
    { label: 'Contactos', href: '#' }
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
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
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-red-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
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