import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import dados from '../data/noticias.json';

// Lista de notícias com filtros, busca e listagem completa.
const Noticias = ({ onAbrirNoticia }) => {
  const artigos = useMemo(() => (dados.artigos || []), []);

  // Derived lists for filters
  const categorias = useMemo(() => {
    const s = new Set(artigos.map(a => a.category));
    return Array.from(s).sort();
  }, [artigos]);

  const autores = useMemo(() => {
    const s = new Set(artigos.map(a => a.author));
    return Array.from(s).sort();
  }, [artigos]);

  // Filter state
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('');
  const [autor, setAutor] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // Filtering logic
  const filtered = useMemo(() => {
    return artigos.filter((a) => {
      if (tag && a.category !== tag) return false;
      if (autor && a.author !== autor) return false;

      if (dateFrom) {
        const from = new Date(dateFrom);
        const d = new Date(a.date);
        if (isNaN(from) || d < from) return false;
      }
      if (dateTo) {
        const to = new Date(dateTo);
        const d = new Date(a.date);
        if (isNaN(to) || d > to) return false;
      }

      if (query) {
        const q = query.toLowerCase();
        if (!(
          (a.title && a.title.toLowerCase().includes(q)) ||
          (a.excerpt && a.excerpt.toLowerCase().includes(q)) ||
          (a.category && a.category.toLowerCase().includes(q))
        )) return false;
      }

      return true;
    });
  }, [artigos, tag, autor, dateFrom, dateTo, query]);

  const clearFilters = () => {
    setQuery(''); setTag(''); setAutor(''); setDateFrom(''); setDateTo('');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold font-serif">Notícias</h1>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Procurar notícias, títulos, excertos..."
              className="pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm w-64"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                <X size={14} />
              </button>
            )}
          </div>
          <button onClick={clearFilters} className="text-sm text-gray-600 hover:text-red-600">Limpar</button>
        </div>
      </div>

      {/* Filtros */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="col-span-1 md:col-span-2 flex flex-wrap gap-2">
          <button
            onClick={() => setTag('')}
            className={`px-3 py-1 text-sm rounded ${tag === '' ? 'bg-red-600 text-white' : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300'}`}
          >
            Todas
          </button>
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setTag(c)}
              className={`px-3 py-1 text-sm rounded ${tag === c ? 'bg-red-600 text-white' : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div>
          <select value={autor} onChange={(e) => setAutor(e.target.value)} className="w-full md:w-auto rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm px-3 py-2">
            <option value="">Todos os autores</option>
            {autores.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm px-3 py-2" />
          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm px-3 py-2" />
        </div>
      </div>

      {/* Lista vertical */}
      <div className="space-y-6">
        {filtered.length === 0 && (
          <div className="p-8 text-center text-gray-500">Nenhuma notícia encontrada para os filtros selecionados.</div>
        )}

        {filtered.map((a) => (
          <article key={a.id} className="flex items-start gap-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-800 shadow-lg hover:border-red-600 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => onAbrirNoticia && onAbrirNoticia(a)}>
            <div className="w-36 flex-shrink-0 h-24 md:h-32 overflow-hidden">
              <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">{a.category}</span>
                <span className="text-xs text-gray-500">{a.date}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 font-serif">{a.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{a.excerpt}</p>
              <div className="text-xs text-gray-500 mt-3">{a.author}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Noticias;
