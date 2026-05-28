import React from 'react';
import { Calendar, User } from 'lucide-react';

const HeroSection = () => {
  const featuredNews = [
    {
      id: 1,
      title: 'Sporting garante primeira divisão com épica remontada',
      excerpt: 'Equipa de Alvalade cumpre objetivo após campanha eletrizante...',
      category: 'Primeira Divisão',
      image: 'https://picsum.photos/600/400?random=1',
      author: 'João Silva',
      date: '27 mai 2026'
    },
    {
      id: 2,
      title: 'Porto vence clássico em casa',
      excerpt: 'Grande exibição no Estádio do Dragão...',
      category: 'Divisão',
      image: 'https://picsum.photos/400/250?random=2',
      author: 'Maria Santos',
      date: '26 mai 2026'
    },
    {
      id: 3,
      title: 'Braga confirma favoritismo',
      excerpt: 'Equipa mineira segue sem derrotas...',
      category: 'Divisão',
      image: 'https://picsum.photos/400/250?random=3',
      author: 'Pedro Costa',
      date: '26 mai 2026'
    }
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-8 lg:py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 font-serif">
          Destaques Principais
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Featured Card - Left */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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

          {/* Small Cards - Right */}
          <div className="flex flex-col space-y-6">
            {featuredNews.slice(1, 3).map((news) => (
              <div key={news.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
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