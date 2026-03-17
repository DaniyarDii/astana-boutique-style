import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { products, Product } from '@/data/products';
import { toast } from 'sonner';

const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
  const { t } = useLanguage();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      nameKz: product.nameKz,
      nameRu: product.nameRu,
      price: product.price,
      size: 'M',
      quantity: 1,
      image: product.image,
    });
    toast.success(t('Себетке қосылды', 'Добавлено в корзину'));
  };

  return (
    <div className="group">
      <button onClick={onClick} className="text-left w-full">
        <div className="aspect-square overflow-hidden mb-3 bg-secondary">
          <img
            src={product.image}
            alt={t(product.nameKz, product.nameRu)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </button>
      <div className="flex items-start justify-between gap-2">
        <button onClick={onClick} className="text-left min-w-0">
          <h3 className="font-body text-sm tracking-wide mb-1 truncate">
            {t(product.nameKz, product.nameRu)}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {product.price.toLocaleString()} ₸
          </p>
        </button>
        <button
          onClick={handleAddToCart}
          className="shrink-0 w-10 h-10 flex items-center justify-center border border-border hover:bg-foreground hover:text-background transition-colors"
          aria-label={t('Себетке қосу', 'Добавить в корзину')}
        >
          <ShoppingBag size={16} />
        </button>
      </div>
    </div>
  );
};

const ProductsGrid = ({ onProductClick }: { onProductClick: (product: Product) => void }) => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 md:py-28 px-6 md:px-12">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
          {t('Тауарлар', 'Товары')}
        </h2>
        <div className="max-w-5xl mx-auto grid <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-8"> gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-8">
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
