import ModalidadeCard from '../components/ModalidadeCard';
import modalidades from '../data/modalidades.json';

const stats = [
  { label: 'Modalidades', value: '8' },
  { label: 'Equipas', value: '42' },
  { label: 'Jogos', value: '96' },
  { label: 'Atletas', value: '320' },
];

const destaqueIds = [1, 2, 3];

const Modalidades = () => (
  <section className="mx-auto w-full max-w-7xl px-4 py-10 lg:px-8 lg:py-12">
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-2xl shadow-black/40 lg:p-10">
      <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">Dashboard desportivo</p>
          <h1 className="mt-4 text-5xl font-bold text-white font-serif lg:text-6xl">Modalidades Cobertas</h1>
          <p className="mt-4 text-base leading-8 text-slate-300 lg:text-lg">Acompanha resultados, classificações, equipas e estatísticas das principais modalidades distritais num painel moderno, claro e preparado para produção.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:w-[32rem]">
          {stats.map((item) => (
            <article key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900/95 p-5 shadow-lg shadow-black/20">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
              <p className="mt-3 text-3xl font-bold text-white">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {modalidades.map((modalidade) => {
        const isFeatured = destaqueIds.includes(modalidade.id);

        return (
          <div key={modalidade.id} className={isFeatured ? 'xl:col-span-2' : ''}>
            <ModalidadeCard
              modalidade={{
                ...modalidade,
                badge: isFeatured ? 'Popular' : modalidade.badge,
                featured: isFeatured,
              }}
            />
          </div>
        );
      })}
    </div>

    {/* Estatísticas Globais - Oculto temporariamente */}
    {false && (
    <section className="mt-10 rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-8 shadow-2xl shadow-black/40">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">Estatísticas Globais</p>
          <h2 className="mt-3 text-3xl font-bold text-white font-serif">Resumo do portal</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Visão rápida do ecossistema desportivo coberto pelo portal.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-lg shadow-black/20">
            <p className="text-[10px] uppercase tracking-[0.32em] text-slate-500">{item.label}</p>
            <p className="mt-4 text-3xl font-bold text-white">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
    )}

    {/* CTA Final - Oculto temporariamente */}
    {false && (
    <section className="mt-10 rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-8 shadow-2xl shadow-black/40">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">CTA</p>
          <h2 className="mt-3 text-3xl font-bold text-white font-serif">Explora todas as competições</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Consulta classificações, resultados e estatísticas detalhadas de cada modalidade.</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700">Ver Competições</button>
      </div>
    </section>
    )}
  </section>
);

export default Modalidades;
