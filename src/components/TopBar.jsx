import React from 'react';
import { Mail } from 'lucide-react';

const TopBar = () => {
  const currentDate = new Date().toLocaleDateString('pt-PT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-900 dark:bg-black text-gray-100 py-2 px-4 lg:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs lg:text-sm">
        <span className="capitalize font-medium">{currentDate}</span>
        <div className="flex items-center space-x-4">
          {/* Facebook SVG */}
          <a href="#" className="hover:text-red-500 transition-colors" aria-label="Facebook">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
            </svg>
          </a>
          
          {/* X / Twitter SVG */}
          <a href="#" className="hover:text-red-500 transition-colors" aria-label="X (Twitter)">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          {/* Instagram SVG */}
          <a href="#" className="hover:text-red-500 transition-colors" aria-label="Instagram">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          
          <div className="w-px h-4 bg-gray-700"></div>
          
          <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">
            <Mail size={16} />
            <span className="hidden sm:inline">Login</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;