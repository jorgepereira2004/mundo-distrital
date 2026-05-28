import React from 'react';
import { Calendar, User } from 'lucide-react';
// Importamos o JSON (que agora tem ultimaHora e artigos)
import dados from '../data/noticias.json';

const HeroSection = () => {
  // Apontamos diretamente para a gaveta dos artigos
  const featuredNews = dados.artigos;

  // Proteção contra ecrãs brancos caso o JSON esteja vazio
  if (!featuredNews || featuredNews.length === 0) {
    return <div className="p-8 text-center">Nenhuma notícia encontrada.</div>;
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-8 lg:py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 font-serif">
          Destaques Principais
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Destaque Grande (Esquerda) - Lê a posição 0 do JSON */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative h-96 overflow-hidden rounded-lg border border-gray-800 shadow-lg hover:shadow-xl hover:border-red-600 transition-all duration-300">
              <img
                src={featuredNews[0].image}
                alt={featuredNews[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  {featuredNews[0].category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 font-serif">
                  {featuredNews[0].title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">{featuredNews[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-300">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{featuredNews[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{featuredNews[0].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Destaques Pequenos (Direita) - Lê as posições 1 e 2 do JSON */}
          <div className="flex flex-col space-y-6">
            {featuredNews.slice(1, 3).map((news) => (
              <div key={news.id} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-800 shadow-lg hover:shadow-lg hover:border-red-600 transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 px-2 py-1 rounded text-xs font-bold mb-2">
                    {news.category}
                  </span>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2 font-serif">
                    {news.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>{news.author}</span>
                    <span>{news.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;