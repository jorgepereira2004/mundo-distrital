const PageHeader = ({ eyebrow, title, description }) => (
  <header className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-lg lg:p-8">
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.25em] text-red-600 dark:text-red-400">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl font-serif">{title}</h1>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 lg:text-base">{description}</p>
    </div>
  </header>
);

export default PageHeader;
