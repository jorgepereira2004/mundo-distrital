import ProductCard from './ProductCard';

const FeaturedProducts = ({ produtos }) => {
  const featured = produtos.filter((p) => p.emDestaque).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
          Produtos em Destaque
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Confira a nossa seleção especial dos melhores produtos.
        </p>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
