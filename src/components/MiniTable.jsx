const MiniTable = ({ rows }) => (
  <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/80 p-3 text-sm text-gray-900 dark:text-gray-100">
    <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
      <span>#</span>
      <span>Equipa</span>
      <span>PTS</span>
    </div>
    <div className="space-y-2">
      {rows.map((row) => (
        <div key={`${row.team}-${row.pos}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-xs text-gray-700 dark:text-gray-200">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300">{row.pos}</span>
          <span className="truncate">{row.team}</span>
          <strong className="text-red-600 dark:text-red-300">{row.pts}</strong>
        </div>
      ))}
    </div>
  </div>
);

export default MiniTable;
