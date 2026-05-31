import { useEffect } from 'react';
import { ShoppingBag, X, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, clearCart } = useCart();
  const whatsappNumber = '351912044809';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleEncomendar = () => {
    if (cartItems.length === 0) return;

    let mensagem = 'Olá! Gostaria de encomendar:\n\n';
    cartItems.forEach((item) => {
      const subtotal = (parseFloat(item.precoAtual) * item.quantidade).toFixed(2);
      mensagem += `${item.nome} x${item.quantidade} - ${subtotal}€\n`;
    });

    const total = cartItems
      .reduce((sum, item) => sum + parseFloat(item.precoAtual) * item.quantidade, 0)
      .toFixed(2);

    mensagem += `\nTotal: ${total}€\n\nObrigado.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-sm overflow-y-auto bg-white dark:bg-gray-950 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-red-600 dark:text-red-500" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Carrinho</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 px-4 py-4 sm:px-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center px-2">
              <ShoppingBag size={44} className="text-gray-300 dark:text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Carrinho vazio</h3>
              <p className="max-w-xs text-sm text-gray-600 dark:text-gray-400">
                Adicione produtos à loja para continuar a sua compra.
              </p>
              <button
                onClick={onClose}
                className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-4 sm:px-6 space-y-3">
            <CartSummary onEncomendar={handleEncomendar} />

            <button
              onClick={clearCart}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm font-semibold text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Trash2 size={16} />
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
