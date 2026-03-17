import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const FloatingCart = ({ onClick }: { onClick: () => void }) => {
  const { totalItems } = useCart();

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:bg-foreground/90 transition-colors md:hidden"
      aria-label="Cart"
    >
      <ShoppingBag size={20} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-background text-foreground text-[10px] font-body font-semibold rounded-full flex items-center justify-center border border-foreground">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default FloatingCart;
