import { useCallback, useMemo, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
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
import SobreNos from './pages/SobreNos';
import CartDrawer from './components/CartSidebar';
import { CartProvider, useCart } from './contexts/CartContext';
import dados from './data/noticias.json';
import './App.css';

const NoticiaRoute = ({ artigos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artigo = useMemo(
    () => artigos.find((item) => String(item.id) === String(id)),
    [artigos, id]
  );

  if (!artigo) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 text-center text-gray-900 dark:text-white">
        <p className="text-lg font-semibold text-red-600">Notícia não encontrada</p>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          A notícia que procura não está disponível. Verifique se o link está correto ou volte para a lista de notícias.
        </p>
        <button
          onClick={() => navigate('/noticias')}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Ver todas as notícias
        </button>
      </section>
    );
  }

  return <Noticia artigo={artigo} onVoltar={() => navigate('/noticias')} />;
};

const LegalPage = ({ title }) => (
  <section className="animate-fade-in bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen px-4 py-16 lg:px-8">
    <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-10 shadow-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-red-600">Documentos Institucionais</p>
      <h1 className="mt-4 text-4xl font-bold font-serif text-gray-900 dark:text-white">{title}</h1>
      <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">
        Esta página está preparada para receber conteúdos legais e institucionais completos. Em breve, aqui ficará disponível o conteúdo formal relativo a {title.toLowerCase()}.
      </p>
    </div>
  </section>
);

const AppContent = () => {
  const { contarItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const artigos = useMemo(() => dados.artigos || [], []);

  const handleAbrirNoticia = useCallback(
    (artigo) => {
      navigate(`/noticia/${artigo.id}`);
    },
    [navigate]
  );

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <TopBar />
      <Header cartItemCount={contarItems()} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      <BreakingNews />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection onAbrirNoticia={handleAbrirNoticia} />
                <MainLayout onAbrirNoticia={handleAbrirNoticia} />
              </>
            }
          />
          <Route path="/noticias" element={<Noticias onAbrirNoticia={handleAbrirNoticia} />} />
          <Route path="/modalidades" element={<Modalidades />} />
          <Route path="/loja" element={<Loja onCartOpen={() => setIsCartOpen(true)} />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/noticia/:id" element={<NoticiaRoute artigos={artigos} />} />
          <Route path="/ficha-tecnica" element={<LegalPage title="Ficha Técnica" />} />
          <Route path="/estatuto-editorial" element={<LegalPage title="Estatuto Editorial" />} />
          <Route path="/termos-e-condicoes" element={<LegalPage title="Termos e Condições" />} />
          <Route path="/politica-de-privacidade" element={<LegalPage title="Política de Privacidade" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
