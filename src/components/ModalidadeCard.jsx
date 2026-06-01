import { ArrowRight, BadgeCheck, BadgeHelp, Box, Shield, Sparkles, Swords } from 'lucide-react';
import MiniTable from './MiniTable';

const iconMap = {
  Shield,
  Sparkles,
  BadgeCheck,
  BadgeHelp,
  Box,
  Swords,
};

const ModalidadeCard = ({ modalidade }) => {
  const Icon = iconMap[modalidade.icon] || iconMap.Shield;

  const renderContent = () => {
    // Último Resultado - Oculto temporariamente
    // if (modalidade.variant === 'result' && modalidade.lastResult) {
    //   return (
    //     <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-4">
    //       <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{modalidade.lastResult.label}</p>
    //       <p className="mt-3 text-3xl font-semibold text-white">{modalidade.lastResult.score}</p>
    //       <p className="text-sm text-slate-400">vs {modalidade.lastResult.opponent}</p>
    //     </div>
    //   );
    // }

    // Próximo Jogo - Oculto temporariamente
    // if (modalidade.variant === 'next' && modalidade.nextMatch) {
    //   return (
    //     <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-4">
    //       <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{modalidade.nextMatch.date}</p>
    //       <p className="mt-3 text-base font-semibold text-white">{modalidade.nextMatch.opponent}</p>
    //       <p className="text-sm text-slate-400">{modalidade.nextMatch.venue}</p>
    //     </div>
    //   );
    // }

    // Estatísticas Rápidas - Oculto temporariamente
    // if (modalidade.variant === 'stats' && modalidade.stats) {
    //   return (
    //     <div className="grid grid-cols-3 gap-3 rounded-3xl border border-slate-800 bg-slate-900/95 p-3">
    //       {modalidade.stats.map((item) => (
    //         <div key={item.label} className="rounded-3xl bg-slate-950/95 p-3 text-center">
    //           <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
    //           <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
    //         </div>
    //       ))}
    //     </div>
    //   );
    // }

    // Classificação (MiniTable) - Oculto temporariamente
    // return <MiniTable rows={modalidade.table} dark />;
    return null;
  };

  return (
    <article className={`group relative overflow-hidden rounded-[1.9rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-red-500 ${modalidade.featured ? 'ring-1 ring-red-500/20' : ''}`}>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-transparent to-red-500/30" />
      <div className="relative flex h-full flex-col gap-5 p-6 pt-8">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="rounded-2xl bg-slate-900/95 p-3 text-red-400 shadow-lg shadow-red-500/10 flex-shrink-0">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Modalidade</p>
              <h2
                className="mt-1 text-lg sm:text-2xl font-semibold text-white font-serif whitespace-normal break-normal pr-3"
                style={{ wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none' }}
              >
                {modalidade.name}
              </h2>
            </div>
          </div>
          <span className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300 flex-shrink-0 relative z-10">{modalidade.badge}</span>
        </div>

        <p className="text-sm leading-6 text-slate-400">{modalidade.description}</p>

        {renderContent()}

        {/* Ver Mais - Oculto temporariamente */}
        {false && (
        <div className="mt-auto flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900/95 px-4 py-3 text-xs uppercase tracking-[0.18em] text-slate-400">
          <span>{modalidade.footerLabel || 'Resumo'}</span>
          <button className="inline-flex items-center gap-2 text-red-400 transition group-hover:text-red-300">
            Ver mais <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        )}
      </div>
    </article>
  );
};

export default ModalidadeCard;
