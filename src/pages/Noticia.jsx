import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const Noticia = ({ artigo, onVoltar }) => {
  // Proteção: Se não houver artigo, não renderiza nada
  if (!artigo) return null;

  return (
    <article className="max-w-4xl mx-auto px-4 lg:px-8 py-12 animate-fade-in">
      {/* Botão de Voltar */}
      <button 
        onClick={onVoltar} 
        className="flex items-center space-x-2 text-red-600 font-bold mb-8 hover:text-red-800 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Voltar à página inicial</span>
      </button>

      {/* Cabeçalho da Notícia */}
      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase">
        {artigo.category}
      </span>

      <h1 className="text-3xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white mb-6 leading-tight">
        {artigo.title}
      </h1>

      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
        <div className="flex items-center space-x-2">
          <User size={16} />
          <span>{artigo.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar size={16} />
          <span>{artigo.date}</span>
        </div>
      </div>

      {/* Imagem Principal */}
      <img 
        src={artigo.image} 
        alt={artigo.title} 
        className="w-full h-[300px] md:h-[500px] object-cover rounded-xl mb-12 shadow-sm" 
      />

      {/* Corpo da Notícia (Para já, junta o resumo e um Lorem Ipsum para fazer volume) */}
      <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-300">
        <p className="text-xl font-medium mb-8 border-l-4 border-red-600 pl-4">
          {artigo.excerpt}
        </p>
        <p className="mb-6 leading-relaxed">
          O campeonato distrital continua a surpreender os adeptos jornada após jornada. 
          As equipas entraram em campo com uma determinação palpável, sabendo que os pontos 
          disputados nesta fase da época são cruciais para a tabela classificativa.
        </p>
        <p className="leading-relaxed">
          A direção do Mundo Distrital continuará a acompanhar de perto todos os desenvolvimentos 
          desta competição apaixonante, trazendo até aos leitores as melhores imagens e reportagens 
          dos campos da nossa região.
        </p>
      </div>
    </article>
  );
};

export default Noticia;