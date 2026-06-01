import { CalendarDays, Globe2, Shield, Sparkles, Target, Users } from 'lucide-react';

const stats = [
  { label: 'Fundado em 2020', value: '15 de Setembro', icon: CalendarDays },
  { label: 'Cobertura Distrital', value: '100% clubes locais', icon: Globe2 },
  { label: 'Notícias Diárias', value: 'Atualizações constantes', icon: Sparkles },
  { label: 'Comunidade Regional', value: 'Apoio a atletas e clubes', icon: Users }
];

const values = [
  {
    title: 'Missão',
    icon: Target,
    description: 'Informar, inspirar e dar visibilidade ao desporto distrital, promovendo atletas, clubes e comunidades locais.'
  },
  {
    title: 'Visão',
    icon: Users,
    description: 'Ser a principal referência digital do desporto regional português.'
  },
  {
    title: 'Valores',
    icon: Shield,
    description: 'Ética, transparência, independência editorial, proximidade e respeito pelo desporto local.'
  }
];

const timeline = [
  { year: '15 Setembro 2020', title: 'Fundação do Mundo Distrital.', description: 'Nasce um portal preparado para dar voz ao futebol distrital e reunir as comunidades regionais.' },
  { year: '2021', title: 'Expansão da cobertura regional.', description: 'A presença cresce para mais distritos e clubes, aproximando ainda mais o público local.' },
  { year: '2023', title: 'Crescimento da comunidade digital.', description: 'A plataforma alcança milhares de leitores e reforça a sua identidade no desporto distrital.' },
  { year: 'Hoje', title: 'Referência no acompanhamento distrital.', description: 'Somos uma fonte confiável de resultados, histórias e iniciativas do nosso futebol regional.' },
  { year: 'Futuro', title: 'Expansão e proximidade renovada.', description: 'Vamos ampliar a cobertura e estreitar a relação entre clubes, atletas e adeptos.' }
];

const SobreNos = () => {
  return (
    <section className="animate-fade-in bg-slate-950 text-white">
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-black px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-red-600 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white">Fundado em 15 de Setembro de 2020</span>
            <h1 className="text-4xl font-bold leading-tight text-white font-serif sm:text-5xl lg:text-6xl">Sobre Nós</h1>
            <p className="max-w-3xl text-lg leading-8 text-gray-300">
              Dar voz ao desporto distrital, valorizar clubes regionais e aproximar comunidades através da paixão pelo futebol e pelo desporto local.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">Destaque</p>
              <h2 className="mt-4 text-3xl font-semibold font-serif text-white">Mundo Distrital, uma oportunidade sem igual.</h2>
              <p className="mt-4 text-gray-300 leading-7">Acesse tudo do Mundo Distrital num só lugar. Notícias, reportagens e reflexão num formato pensado para o futebol regional.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-red-500">Porque escolhemos o distrital</p>
              <p className="mt-4 text-gray-300 leading-7">Acreditamos que o desporto local merece uma plataforma premium, moderna e completamente dedicada às suas histórias.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 space-y-16">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-red-500/20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <Icon size={24} />
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.3em] text-red-400">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white font-serif">{item.value}</p>
              </div>
            );
          })}
        </div>

        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-red-500/20">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold font-serif text-white">{item.title}</h2>
                  <p className="mt-4 text-gray-300 leading-7">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="space-y-10">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.3em] text-red-500">O Nosso Percurso</span>
            <h2 className="mt-4 text-4xl font-bold font-serif text-white">Uma timeline de compromisso e crescimento.</h2>
            <p className="mt-4 text-gray-400 leading-7">A nossa história é construída em momentos-chave que fortalecem o futebol e o desporto distrital.</p>
          </div>
          <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="relative">
              <div className="absolute left-5 top-1 h-full w-px bg-white/10"></div>
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="relative pl-12">
                    <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
                      <span className="text-sm font-semibold">{item.year.split(' ')[0]}</span>
                    </div>
                    <p className="text-sm uppercase tracking-[0.3em] text-red-400">{item.year}</p>
                    <h3 className="mt-3 text-2xl font-semibold font-serif text-white">{item.title}</h3>
                    <p className="mt-3 text-gray-300 leading-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">
          <h2 className="text-3xl font-semibold font-serif text-white">Estatuto Editorial</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold font-serif text-white">Verdade Desportiva</h3>
              <p className="mt-4 text-gray-300 leading-7">Compromisso com informação rigorosa e verificada em cada texto e reportagem, valorizando a transparência no futebol distrital.</p>
            </article>
            <article className="rounded-3xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold font-serif text-white">Independência Editorial</h3>
              <p className="mt-4 text-gray-300 leading-7">Sem influência política, institucional ou comercial. A nossa voz é independente e centrada na comunidade local.</p>
            </article>
            <article className="rounded-3xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold font-serif text-white">Promoção do Desporto Local</h3>
              <p className="mt-4 text-gray-300 leading-7">Valorizamos clubes, atletas e associações regionais, dando visibilidade a quem constrói o desporto nas nossas comunidades.</p>
            </article>
            <article className="rounded-3xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold font-serif text-white">Respeito pelos Intervenientes</h3>
              <p className="mt-4 text-gray-300 leading-7">Comunicação responsável, ética e transparente, com respeito por atletas, clubes, treinadores e associações.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
