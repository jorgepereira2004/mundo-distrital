import React from 'react';
import { Calendar, User, ShoppingCart } from 'lucide-react';
import dados from '../data/noticias.json';

const MainLayout = () => {
  const newsArticles = dados.artigos.slice(3);
  
  // Vamos buscar o primeiro produto que esteja marcado como destaque
  const produtoDestaque = dados.produtos.find(p => p.emDestaque) || dados.produtos[0];

  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-8 lg:py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Lado Esquerdo: Notícias (2/3 largura) */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 font-serif">
            Últimas Notícias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-800 shadow-lg hover:shadow-lg hover:border-red-600 transition-all duration-300 overflow-hidden group cursor-pointer"
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

        {/* Sidebar - Lado Direito (1/3 largura) */}
        <aside className="space-y-6 sticky top-4 h-fit">
          
          {/* Anúncio 1: Só aparece se no JSON estiver true */}
          {dados.configuracoes.publicidade.mostrarAnuncioLateral1 && (
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-800 shadow-lg hover:shadow-lg hover:border-red-600 transition-all duration-300 p-4">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 text-sm font-semibold">Espaço Publicitário</p>
                  <p className="text-gray-400 text-xs">300 x 250</p>
                </div>
              </div>
            </div>
          )}

          {/* Destaque da Loja Dinâmico */}
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-800 shadow-lg hover:shadow-lg hover:border-red-600 transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-5">
              <h3 className="font-bold text-lg mb-1">Destaque da Loja</h3>
              <p className="text-xs text-red-100">Produto em Destaque</p>
            </div>
            <div className="p-5">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-32 flex items-center justify-center mb-4 overflow-hidden">
                <img src={produtoDestaque.imagem} alt={produtoDestaque.nome} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm font-serif">
                {produtoDestaque.nome}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">
                Emblema bordado oficial com qualidade premium.
              </p>
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{produtoDestaque.precoAtual}€</span>
                <span className="text-sm text-gray-500 line-through">{produtoDestaque.precoAntigo}€</span>
              </div>
              
              {/* Botão WhatsApp 100% Dinâmico */}
              <a 
                href={`https://wa.me/${dados.configuracoes.telefoneWhatsApp}?text=Olá! Quero encomendar o ${produtoDestaque.nome} por ${produtoDestaque.precoAtual}€.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center space-x-2 transition-colors hover:scale-105 transition-transform"
              >
                <ShoppingCart size={16} />
                <span>Encomendar</span>
              </a>
            </div>
          </div>

          {/* Anúncio 2: Oculto se no JSON estiver false */}
          {dados.configuracoes.publicidade.mostrarAnuncioLateral2 && (
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-800 shadow-lg hover:shadow-lg hover:border-red-600 transition-all duration-300 p-4">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                 <div className="text-center">
                   <p className="text-gray-500 text-sm font-semibold">Espaço Publicitário</p>
                   <p className="text-gray-400 text-xs">300 x 250</p>
                 </div>
              </div>
            </div>
          )}

        </aside>
      </div>
    </section>
  );
};

export default MainLayout;