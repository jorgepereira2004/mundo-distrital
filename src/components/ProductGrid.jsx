import ProductCard from './ProductCard';

const ProductGrid = ({ produtos, titulo = 'Todos os Produtos' }) => {
  if (produtos.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif mb-8">
        {titulo}
      </h2>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
