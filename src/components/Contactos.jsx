import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contactos = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section className="animate-fade-in bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Fale connosco</p>
          <h1 className="mt-3 text-4xl font-bold font-serif text-gray-900 dark:text-white sm:text-5xl">
            Contactos
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-8">
            Estamos disponíveis para apoiar clubes, dirigentes e equipas com informações, parcerias e suporte técnico.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-red-600" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white font-serif">Email</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">geral@mundodistrital.pt</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-red-600" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white font-serif">Telefone</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">+351 912 345 678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-red-600" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white font-serif">Localização</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Porto, Portugal</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 text-gray-700 dark:text-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-serif">Apoio aos clubes</h2>
              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                O Mundo Distrital está comprometido em fortalecer os clubes locais com informação relevante, ferramentas de divulgação e um apoio permanente para iniciativas desportivas.
              </p>
              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                Contacte-nos para descobrir como podemos ajudar o seu clube a crescer, envolver a comunidade e alcançar melhores resultados.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nome" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="O seu nome"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="assunto" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                  Assunto
                </label>
                <input
                  id="assunto"
                  name="assunto"
                  type="text"
                  placeholder="Sobre o que deseja falar"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="5"
                  placeholder="Escreva a sua mensagem aqui"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                <Send size={16} />
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
