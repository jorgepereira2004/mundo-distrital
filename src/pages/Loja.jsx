import { useState, useMemo } from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductGrid from '../components/ProductGrid';
import dados from '../data/produtos.json';

const Loja = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('');

  const produtos = useMemo(() => dados.produtos || [], []);

  const categorias = useMemo(() => {
    const cats = new Set(produtos.map((p) => p.categoria));
    return Array.from(cats).sort();
  }, [produtos]);

  const produtosFiltrados = useMemo(() => {
    if (!filtroCategoria) return produtos;
    return produtos.filter((p) => p.categoria === filtroCategoria);
  }, [produtos, filtroCategoria]);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header da Loja */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-red-600 dark:text-red-500 font-semibold">Loja Online</p>
          <h1 className="mt-3 text-5xl font-bold text-gray-900 dark:text-white lg:text-6xl font-serif">
            Produtos Oficiais
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-400 lg:text-base">
            Descubra nossa seleção de produtos oficiais, emblemas e equipamento desportivo de qualidade premium.
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-12">
        {/* Produtos em Destaque */}
        <FeaturedProducts produtos={produtos} />

        {/* Filtros */}
        <div className="mb-12 flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroCategoria('')}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              filtroCategoria === ''
                ? 'bg-red-600 text-white'
                : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:border-red-600'
            }`}
          >
            Todos os Produtos
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltroCategoria(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                filtroCategoria === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:border-red-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <ProductGrid
          produtos={produtosFiltrados}
          titulo={filtroCategoria ? `${filtroCategoria}` : 'Todos os Produtos'}
        />
      </div>
    </section>
  );
};

export default Loja;