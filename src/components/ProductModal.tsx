import { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import { toast } from 'sonner';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const { t } = useLanguage();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem({
      id: product.id,
      nameKz: product.nameKz,
      nameRu: product.nameRu,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.image,
    });
    toast.success(t('Себетке қосылды', 'Добавлено в корзину'));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60" onClick={onClose} />
      <div className="relative bg-background w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="aspect-[3/4] bg-secondary">
            <img
              src={product.image}
              alt={t(product.nameKz, product.nameRu)}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10 flex flex-col justify-center">
            <h2 className="font-display text-2xl md:text-3xl mb-2">
              {t(product.nameKz, product.nameRu)}
            </h2>
            <p className="font-body text-lg mb-6">
              {product.price.toLocaleString()} ₸
            </p>
            <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed">
              {t(product.descriptionKz, product.descriptionRu)}
            </p>

            <div className="mb-6">
              <p className="font-body text-xs tracking-widest uppercase mb-3">
                {t('Өлшем', 'Размер')}
              </p>
              <div className="flex gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 font-body text-sm border transition-colors ${
                      selectedSize === size
                        ? 'bg-foreground text-background border-foreground'
                        : 'border-border hover:border-foreground'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="font-body text-xs tracking-widest uppercase mb-3">
                {t('Саны', 'Количество')}
              </p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 h-12 flex items-center justify-center font-body text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full bg-foreground text-background py-4 font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors"
            >
              {t('Себетке қосу', 'Добавить в корзину')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
