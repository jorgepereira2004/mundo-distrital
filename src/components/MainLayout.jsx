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
        
        {/* Lado Esquerdo: Notícias (mantém o teu código que já estava perfeito) */}
        <div className="lg:col-span-2">
           {/* ... teu código do grid das notícias ... */}
        </div>

        {/* Sidebar - Lado Direito */}
        <aside className="space-y-6">
          
          {/* Anúncio 1: Só aparece se no JSON estiver true */}
          {dados.configuracoes.publicidade.mostrarAnuncioLateral1 && (
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 text-sm font-semibold">Espaço Publicitário 1</p>
                </div>
              </div>
            </div>
          )}

          {/* Destaque da Loja Dinâmico */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-5">
              <h3 className="font-bold text-lg mb-1">Destaque da Loja</h3>
            </div>
            <div className="p-5">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-32 flex items-center justify-center mb-4 overflow-hidden">
                <img src={produtoDestaque.imagem} alt={produtoDestaque.nome} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm font-serif">
                {produtoDestaque.nome}
              </h4>
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{produtoDestaque.precoAtual}€</span>
                <span className="text-sm text-gray-500 line-through">{produtoDestaque.precoAntigo}€</span>
              </div>
              
              {/* Botão WhatsApp 100% Dinâmico */}
              <a 
                href={`https://wa.me/${dados.configuracoes.telefoneWhatsApp}?text=Olá! Quero encomendar o ${produtoDestaque.nome} por ${produtoDestaque.precoAtual}€.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center space-x-2 transition-colors"
              >
                <ShoppingCart size={16} />
                <span>Encomendar</span>
              </a>
            </div>
          </div>

          {/* Anúncio 2: Oculto se no JSON estiver false */}
          {dados.configuracoes.publicidade.mostrarAnuncioLateral2 && (
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                 <p className="text-gray-500 text-sm font-semibold">Espaço Publicitário 2</p>
              </div>
            </div>
          )}

        </aside>
      </div>
    </section>
  );
};

export default MainLayout;