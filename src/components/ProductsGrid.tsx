import { useLanguage } from '@/contexts/LanguageContext';
import { products, Product } from '@/data/products';

const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
  const { t } = useLanguage();

  return (
    <button
      onClick={onClick}
      className="group text-left w-full"
    >
      <div className="aspect-[3/4] overflow-hidden mb-4 bg-secondary">
        <img
          src={product.image}
          alt={t(product.nameKz, product.nameRu)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="font-body text-sm tracking-wide mb-1">
        {t(product.nameKz, product.nameRu)}
      </h3>
      <p className="font-body text-sm text-muted-foreground">
        {product.price.toLocaleString()} ₸
      </p>
    </button>
  );
};

const ProductsGrid = ({ onProductClick }: { onProductClick: (product: Product) => void }) => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
          {t('Тауарлар', 'Товары')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
