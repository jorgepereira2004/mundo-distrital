import React from 'react';
import { Calendar, User, ShoppingCart } from 'lucide-react';

const MainLayout = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Revisão das regras: o que muda em 2026',
      excerpt: 'A Federação Portuguesa de Futebol introduz novas regulamentações para melhorar a qualidade do jogo.',
      category: 'Regulamentos',
      image: 'https://picsum.photos/400/250?random=4',
      author: 'João Silva',
      date: '27 mai 2026'
    },
    {
      id: 2,
      title: 'Campeonato distrital: calendário 2026/27 divulgado',
      excerpt: 'Confira as datas e horários das principais jornadas da próxima época.',
      category: 'Calendário',
      image: 'https://picsum.photos/400/250?random=5',
      author: 'Maria Santos',
      date: '26 mai 2026'
    },
    {
      id: 3,
      title: 'Taça de Portugal: Sub-19 arranca em agosto',
      excerpt: 'Escalões mais jovens terão competição própria a partir do próximo mês.',
      category: 'Formação',
      image: 'https://picsum.photos/400/250?random=6',
      author: 'Pedro Costa',
      date: '25 mai 2026'
    },
    {
      id: 4,
      title: 'Prémios Desportivos 2025 entregues com cerimónia',
      excerpt: 'Os melhores jogadores e equipas da época foram homenageados.',
      category: 'Destaque',
      image: 'https://picsum.photos/400/250?random=7',
      author: 'Ana João',
      date: '24 mai 2026'
    },
    {
      id: 5,
      title: 'Projeto de desenvolvimento: novo centro de treinos',
      excerpt: 'Investimento de 5 milhões para formar os talentos do futuro.',
      category: 'Desenvolvimento',
      image: 'https://picsum.photos/400/250?random=8',
      author: 'Carlos Mendes',
      date: '23 mai 2026'
    },
    {
      id: 6,
      title: 'Futebol feminino: crescimento exponencial',
      excerpt: 'Mais equipas e jogadoras do que nunca na história do futebol distrital.',
      category: 'Feminino',
      image: 'https://picsum.photos/400/250?random=9',
      author: 'Sofia Martins',
      date: '22 mai 2026'
    }
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-8 lg:py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - 2/3 */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 font-serif">
            Últimas Notícias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 font-serif group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar - 1/3 */}
        <aside className="space-y-6">
          {/* Advertisement Space */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                  Espaço Publicitário
                </p>
                <p className="text-gray-400 dark:text-gray-600 text-xs">
                  300 x 250
                </p>
              </div>
            </div>
          </div>

          {/* Shop Highlight */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-5">
              <h3 className="font-bold text-lg mb-1">Destaque da Loja</h3>
              <p className="text-xs text-red-100">Produto em Destaque</p>
            </div>
            
            <div className="p-5">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-32 flex items-center justify-center mb-4">
                <img
                  src="https://picsum.photos/250/200?random=10"
                  alt="Product"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm font-serif">
                Emblema Oficial Mundo Distrital
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">
                Emblema bordado oficial com qualidade premium e bordado à máquina.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">19,99€</span>
                  <span className="text-sm text-gray-500 line-through">29,99€</span>
                </div>
              </div>
              
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center space-x-2 transition-colors">
                <ShoppingCart size={16} />
                <span>Encomendar</span>
              </button>
            </div>
          </div>

          {/* Second Ad Space */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                  Espaço Publicitário
                </p>
                <p className="text-gray-400 dark:text-gray-600 text-xs">
                  300 x 250
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MainLayout;