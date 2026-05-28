import React from 'react';
import { AlertCircle } from 'lucide-react';
import dados from '../data/noticias.json';

const BreakingNews = () => {
  return (
    <div className="bg-red-600 text-white py-3 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center space-x-3">
        <AlertCircle size={20} className="flex-shrink-0 z-10 bg-red-600" />
        <div className="flex-1 overflow-hidden relative w-full h-5">
          {/* Animação simples de movimento contínuo */}
          <div className="absolute whitespace-nowrap animate-infinite hover:[animation-play-state:paused]" 
               style={{
                 animationName: 'marquee',
                 animationDuration: '15s',
                 animationTimingFunction: 'linear'
               }}>
            <span className="text-sm lg:text-base font-semibold pr-4">
              {dados.ultimaHora}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;