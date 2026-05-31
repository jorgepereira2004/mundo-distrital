import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { incrementQuantidade, decrementQuantidade, removeFromCart } = useCart();
  const subtotal = (parseFloat(item.precoAtual) * item.quantidade).toFixed(2);

  return (
    <div className="flex gap-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 transition-all duration-200 hover:shadow-md">
      {/* Imagem */}
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <img
          src={item.imagem}
          alt={item.nome}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-1">
            {item.nome}
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {item.precoAtual}€ un.
          </p>
        </div>

        {/* Controles de quantidade */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => decrementQuantidade(item.id)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Minus size={16} className="text-gray-600 dark:text-gray-400" />
          </button>
          <span className="w-8 text-center text-sm font-bold text-gray-900 dark:text-white">
            {item.quantidade}
          </span>
          <button
            onClick={() => incrementQuantidade(item.id)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Plus size={16} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Subtotal e Remove */}
      <div className="flex flex-col items-end justify-between">
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {subtotal}€
        </span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-400 transition hover:text-red-600 dark:hover:text-red-500"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
