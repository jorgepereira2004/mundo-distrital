import { useCallback, useEffect, useMemo, useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import HeroSection from './components/HeroSection';
import MainLayout from './components/MainLayout';
import Footer from './components/Footer';
import Noticia from './pages/Noticia';
import Noticias from './pages/Noticias';
import Modalidades from './pages/Modalidades';
import Loja from './pages/Loja';
import Contactos from './components/Contactos';
import CartDrawer from './components/CartSidebar';
import { CartProvider, useCart } from './contexts/CartContext';
import dados from './data/noticias.json';
import './App.css';

const getRouteFromPath = () => {
  const path = (window.location.pathname || '/').replace(/\/+$/, '') || '/';

  if (path.startsWith('/noticia/')) {
    const id = path.split('/')[2];
    return { vista: 'noticia', artigoId: id };
  }

  if (path === '/noticias') return { vista: 'noticias', artigoId: null };
  if (path === '/modalidades') return { vista: 'modalidades', artigoId: null };
  if (path === '/loja') return { vista: 'loja', artigoId: null };
  if (path === '/contactos') return { vista: 'contactos', artigoId: null };

  return { vista: 'home', artigoId: null };
};

const AppContent = () => {
  const { contarItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const artigos = useMemo(() => dados.artigos || [], []);

  const resolveArtigo = useCallback((id) => artigos.find((item) => String(item.id) === String(id)) || null, [artigos]);

  const [vistaAtual, setVistaAtual] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    return getRouteFromPath().vista;
  });

  const [artigoSelecionado, setArtigoSelecionado] = useState(() => {
    if (typeof window === 'undefined') return null;
    const { artigoId } = getRouteFromPath();
    return resolveArtigo(artigoId);
  });

  useEffect(() => {
    const handleNavigation = () => {
      const { vista, artigoId } = getRouteFromPath();
      setVistaAtual(vista);
      setArtigoSelecionado(artigoId ? resolveArtigo(artigoId) : null);
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);

    return () => window.removeEventListener('popstate', handleNavigation);
  }, [artigos, resolveArtigo]);

  const updateRoute = (nextVista, artigo = null) => {
    setVistaAtual(nextVista);
    setArtigoSelecionado(artigo);

    const path = nextVista === 'home'
      ? '/'
      : nextVista === 'noticias'
        ? '/noticias'
        : nextVista === 'modalidades'
          ? '/modalidades'
          : nextVista === 'loja'
            ? '/loja'
            : nextVista === 'contactos'
              ? '/contactos'
              : nextVista === 'noticia' && artigo
                ? `/noticia/${artigo.id}`
                : '/';

    window.history.pushState(null, '', path);
    window.scrollTo(0, 0);
  };

  const handleAbrirNoticia = (artigo) => {
    updateRoute('noticia', artigo);
  };

  const handleVoltarHome = () => {
    updateRoute('home');
  };

  const handleNavigate = (key) => {
    if (key === 'home') {
      handleVoltarHome();
      return;
    }

    if (key === 'noticias') {
      updateRoute('noticias');
      return;
    }

    if (key === 'modalidades') {
      updateRoute('modalidades');
      return;
    }

    if (key === 'loja') {
      updateRoute('loja');
      return;
    }

    if (key === 'contactos') {
      updateRoute('contactos');
      return;
    }

    console.log('Navigate to:', key);
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <TopBar />
      <Header 
        onNavigate={handleNavigate} 
        onLogoClick={handleVoltarHome}
        cartItemCount={contarItems()}
        onCartClick={() => setIsCartOpen(!isCartOpen)}
      />
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

        {vistaAtual === 'modalidades' && (
          <Modalidades />
        )}

        {vistaAtual === 'loja' && (
          <Loja onCartOpen={() => setIsCartOpen(true)} />
        )}

        {vistaAtual === 'contactos' && (
          <Contactos />
        )}
      </main>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;