import { CalendarDays } from 'lucide-react';

const DateRangeFilter = ({ dateFrom, onDateFromChange }) => {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400">Data</span>
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 shadow-sm outline-none transition focus-within:border-red-600 dark:focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-600/20 dark:focus-within:ring-red-500/20">
        <CalendarDays size={18} className="text-red-600 dark:text-red-500 flex-shrink-0" />
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => onDateFromChange(e.target.value)}
          className="flex-1 bg-transparent text-sm text-gray-900 dark:text-gray-100 outline-none"
        />
      </div>
    </label>
  );
};

export default DateRangeFilter;
