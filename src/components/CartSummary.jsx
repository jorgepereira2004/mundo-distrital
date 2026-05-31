import { ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartSummary = ({ onEncomendar, isLoading = false }) => {
  const { cartItems, calcularTotal, contarItems } = useCart();
  const total = calcularTotal();
  const itemCount = contarItems();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12">
        <ShoppingCart size={48} className="text-gray-300 dark:text-gray-700" />
        <p className="text-gray-600 dark:text-gray-400">Carrinho vazio</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{itemCount} item{itemCount !== 1 ? 's' : ''}</span>
          <span>{total}€</span>
        </div>
        <div className="flex justify-between font-bold text-gray-900 dark:text-white">
          <span>Total</span>
          <span className="text-xl">{total}€</span>
        </div>
      </div>

      <button
        onClick={onEncomendar}
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#20BA5A] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MessageCircle size={18} />
        Encomendar via WhatsApp
      </button>
    </div>
  );
};

export default CartSummary;
