import { X, Minus, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

const CartDrawer = ({ open, onClose, onCheckout }: { open: boolean; onClose: () => void; onCheckout: () => void }) => {
  const { t } = useLanguage();
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-foreground/40" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-xl">
            {t('Себет', 'Корзина')}
          </h2>
          <button onClick={onClose} className="p-2 -mr-2" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar p-6">
          {items.length === 0 ? (
            <p className="font-body text-sm text-muted-foreground text-center mt-20">
              {t('Себет бос', 'Корзина пуста')}
            </p>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-secondary flex-shrink-0">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body text-sm mb-1 truncate">
                      {t(item.nameKz, item.nameRu)}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground mb-1">
                      {t('Өлшем', 'Размер')}: {item.size}
                    </p>
                    <p className="font-body text-sm mb-2">
                      {item.price.toLocaleString()} ₸
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center font-body text-xs">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="font-body text-xs text-muted-foreground underline hover:text-foreground transition-colors"
                      >
                        {t('Жою', 'Удалить')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border">
            <div className="flex justify-between mb-6">
              <span className="font-body text-sm">{t('Барлығы', 'Итого')}</span>
              <span className="font-body text-sm font-semibold">{totalPrice.toLocaleString()} ₸</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-foreground text-background py-4 font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors"
            >
              {t('Тапсырыс беру', 'Оформить заказ')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
