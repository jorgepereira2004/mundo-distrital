import { ShoppingCart, TrendingUp, Package, AlertCircle } from 'lucide-react';

const StockBadge = ({ stock }) => {
  if (stock > 10) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
        <Package size={14} />
        Em Stock
      </div>
    );
  }

  if (stock === 0) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 dark:bg-red-900/30 px-3 py-1.5 text-xs font-semibold text-red-700 dark:text-red-400">
        <AlertCircle size={14} />
        Esgotado
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
      <TrendingUp size={14} />
      Últimas {stock}
    </div>
  );
};

const DiscountBadge = ({ precoAtual, precoAntigo }) => {
  if (!precoAntigo || parseFloat(precoAtual) >= parseFloat(precoAntigo)) {
    return null;
  }

  const desconto = Math.round(
    ((parseFloat(precoAntigo) - parseFloat(precoAtual)) / parseFloat(precoAntigo)) * 100
  );

  return (
    <div className="inline-flex items-center rounded-lg bg-red-600 px-2.5 py-1 text-xs font-bold text-white">
      -{desconto}%
    </div>
  );
};

const FeaturedBadge = () => {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-bold text-white">
      <TrendingUp size={14} />
      Destaque
    </div>
  );
};

export { StockBadge, DiscountBadge, FeaturedBadge };
