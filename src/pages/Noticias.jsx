import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import DateRangeFilter from '../components/DateRangeFilter';
import dados from '../data/noticias.json';

// Lista de notícias com filtros, busca e listagem completa.
const Noticias = ({ onAbrirNoticia }) => {
  const artigos = useMemo(() => (dados.artigos || []), []);

  // Derived lists for filters
  const categorias = useMemo(() => {
    const s = new Set(artigos.map((a) => a.category));
    return Array.from(s).sort();
  }, [artigos]);

  const autores = useMemo(() => {
    const s = new Set(artigos.map((a) => a.author));
    return Array.from(s).sort();
  }, [artigos]);

  // Filter state
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('');
  const [autor, setAutor] = useState('');
  const [dateFrom, setDateFrom] = useState('');

  // Filtering logic
  const filtered = useMemo(() => {
    return artigos.filter((a) => {
      if (tag && a.category !== tag) return false;
      if (autor && a.author !== autor) return false;

      if (dateFrom) {
        // Parse data do artigo (formato: "28 mai 2026")
        const months = {
          'jan': 0, 'fev': 1, 'mar': 2, 'abr': 3, 'mai': 4, 'jun': 5,
          'jul': 6, 'ago': 7, 'set': 8, 'out': 9, 'nov': 10, 'dez': 11
        };
        const [day, month, year] = a.date.toLowerCase().split(' ');
        const d = new Date(year, months[month], parseInt(day));
        const from = new Date(dateFrom + 'T00:00:00');
        
        // Comparar apenas ano, mês e dia
        const sameDay = d.getDate() === from.getDate() &&
                        d.getMonth() === from.getMonth() &&
                        d.getFullYear() === from.getFullYear();
        if (!sameDay) return false;
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
  }, [artigos, tag, autor, dateFrom, query]);

  const clearFilters = () => {
    setQuery(''); setTag(''); setAutor(''); setDateFrom('');
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-lg dark:shadow-xl dark:shadow-black/20 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-600 dark:text-red-500">Motor de busca</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl font-serif">Notícias</h1>
            <p className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-400 lg:text-base">Filtre por título, categoria, autor ou data para encontrar a notícia que procura.</p>
          </div>
          <button
            onClick={clearFilters}
            className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-5 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 transition hover:border-red-300 hover:bg-red-50 dark:hover:border-red-500/60 dark:hover:bg-red-500/10 dark:hover:text-red-300"
          >
            Limpar filtros
          </button>
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <label className="relative block">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400">Pesquisa</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Procurar notícias, títulos, excertos..."
              className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-3 pl-11 pr-4 text-sm text-gray-900 dark:text-gray-100 shadow-sm outline-none transition focus:border-red-600 dark:focus:border-red-500 focus:ring-2 focus:ring-red-600/20 dark:focus:ring-red-500/20"
            />
            <Search size={18} className="absolute left-4 top-[2.35rem] text-red-600 dark:text-red-500" />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-4 top-[2.35rem] text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <X size={14} />
              </button>
            )}
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400">Categoria</span>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 shadow-sm outline-none transition focus:border-red-600 dark:focus:border-red-500 focus:ring-2 focus:ring-red-600/20 dark:focus:ring-red-500/20"
            >
              <option value="">Todas as categorias</option>
              {categorias.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400">Autor</span>
            <select
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 shadow-sm outline-none transition focus:border-red-600 dark:focus:border-red-500 focus:ring-2 focus:ring-red-600/20 dark:focus:ring-red-500/20"
            >
              <option value="">Todos os autores</option>
              {autores.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </label>

          <DateRangeFilter
            dateFrom={dateFrom}
            onDateFromChange={setDateFrom}
          />
        </div>
      </div>

      <div className="space-y-6">
        {filtered.length === 0 && (
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-10 text-center text-gray-500 dark:text-gray-400">Nenhuma notícia encontrada para os filtros selecionados.</div>
        )}

        {filtered.map((a) => (
          <article key={a.id} className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg transition hover:-translate-y-1 hover:border-red-500 hover:shadow-xl hover:shadow-red-600/10 dark:hover:shadow-red-500/5 cursor-pointer" onClick={() => onAbrirNoticia && onAbrirNoticia(a)}>
            <div className="grid gap-0 lg:grid-cols-[240px_1fr] lg:min-h-40">
              <div className="h-40 overflow-hidden bg-gray-100 dark:bg-gray-800 lg:h-auto">
                <img src={a.image} alt={a.title} className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">{a.category}</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">{a.date}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-serif leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400 line-clamp-2">{a.excerpt}</p>
                <div className="mt-5 text-sm text-gray-600 dark:text-gray-400">Por {a.author}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Noticias;
