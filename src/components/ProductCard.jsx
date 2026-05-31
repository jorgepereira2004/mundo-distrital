import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { StockBadge } from './Badges';

const ProductCard = ({ produto }) => {
  const { addToCart } = useCart();
  const whatsappNumber = '351912044809';
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const timeoutRef = useRef(null);
  const isOutOfStock = produto.stock <= 0;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleComprarJa = () => {
    if (isOutOfStock) return;

    const mensagem = `Olá, gostaria de encomendar:\n\n${produto.nome} x1 - ${produto.precoAtual}€\n\nObrigado.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const handleAdicionarCarrinho = () => {
    if (isOutOfStock) return;

    addToCart(produto, 1);
    setShowAddedMessage(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowAddedMessage(false);
    }, 1400);
  };

  const desconto = ((parseFloat(produto.precoAntigo) - parseFloat(produto.precoAtual)) / parseFloat(produto.precoAntigo) * 100).toFixed(0);

  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-red-500/5">
      {/* Imagem com badge de desconto */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 h-64">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="h-full w-full object-cover object-center transition group-hover:scale-110"
        />
        {produto.precoAntigo !== produto.precoAtual && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{desconto}%
          </div>
        )}
        {produto.emDestaque && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Destaque
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
            {produto.categoria}
          </span>
          <StockBadge stock={produto.stock} />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white font-serif line-clamp-2">
          {produto.nome}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {produto.descricao}
        </p>

        {/* Preço */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {produto.precoAtual}€
          </span>
          {produto.precoAntigo !== produto.precoAtual && (
            <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
              {produto.precoAntigo}€
            </span>
          )}
        </div>

        {/* Botões */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleAdicionarCarrinho}
            disabled={isOutOfStock}
            className={`flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-100 dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white transition ${isOutOfStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            <ShoppingCart size={18} />
            Carrinho
          </button>
          <button
            onClick={handleComprarJa}
            disabled={isOutOfStock}
            className={`flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition ${isOutOfStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
          >
            <Zap size={18} />
            Comprar Já
          </button>
        </div>
        <div className="min-h-[24px]">
          {showAddedMessage && (
            <p className="mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Adicionado ao carrinho
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;