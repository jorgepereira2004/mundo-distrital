import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import HeroSection from './components/HeroSection';
import MainLayout from './components/MainLayout';
import Footer from './components/Footer';
import Noticia from './pages/Noticia'; // Importamos a nova página
import Noticias from './pages/Noticias'; // Página de listagem com filtros
import './App.css';

const App = () => {
  // Estados que controlam a "navegação"
  const [vistaAtual, setVistaAtual] = useState('home');
  const [artigoSelecionado, setArtigoSelecionado] = useState(null);

  // Função para abrir a notícia
  const handleAbrirNoticia = (artigo) => {
    setArtigoSelecionado(artigo);
    setVistaAtual('noticia');
    window.scrollTo(0, 0); // Faz scroll para o topo quando muda de página
  };

  // Função para voltar à home
  const handleVoltarHome = () => {
    setVistaAtual('home');
    setArtigoSelecionado(null);
    window.scrollTo(0, 0);
  };

  const handleNavigate = (key) => {
    if (key === 'home') {
      handleVoltarHome();
      return;
    }

    if (key === 'noticias') {
      setVistaAtual('noticias');
      setArtigoSelecionado(null);
      window.scrollTo(0, 0);
      return;
    }

    // Fallback: for other keys just log for now
    console.log('Navigate to:', key);
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <TopBar />
      {/* Header receives navigation callbacks */}
      <Header onNavigate={handleNavigate} onLogoClick={handleVoltarHome} />
      <BreakingNews />
      
      {/* RENDERIZAÇÃO CONDICIONAL */}
      <main className="flex-grow">
        {vistaAtual === 'home' && (
          <>
            <HeroSection onAbrirNoticia={handleAbrirNoticia} />
            <MainLayout onAbrirNoticia={handleAbrirNoticia} />
          </>
        )}

        {vistaAtual === 'noticia' && (
          <Noticia artigo={artigoSelecionado} onVoltar={handleVoltarHome} />
        )}

        {vistaAtual === 'noticias' && (
          <Noticias onAbrirNoticia={handleAbrirNoticia} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;