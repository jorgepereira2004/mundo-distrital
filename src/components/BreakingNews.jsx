import React from 'react';
import { AlertCircle } from 'lucide-react';

const BreakingNews = () => {
  return (
    <div className="bg-red-600 text-white py-3 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center space-x-3">
        <AlertCircle size={20} className="flex-shrink-0" />
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-sm lg:text-base font-semibold">
              ⚡ ÚLTIMA HORA: Benfica garante mais um título distrital com vitória de goleada!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;