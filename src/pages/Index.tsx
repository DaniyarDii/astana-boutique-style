import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import ProductsGrid from '@/components/ProductsGrid';
import ProductModal from '@/components/ProductModal';
import BenefitsSection from '@/components/BenefitsSection';
import HowToOrderSection from '@/components/HowToOrderSection';
import MapSection from '@/components/MapSection';
import ReviewsSection from '@/components/ReviewsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import FloatingCart from '@/components/FloatingCart';
import { Product } from '@/data/products';

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onCartOpen={() => setCartOpen(true)} />
      <HeroSection />
      <CategoriesSection />
      <ProductsGrid onProductClick={setSelectedProduct} />
      <BenefitsSection />
      <HowToOrderSection />
      <MapSection />
      <ReviewsSection />
      <CTASection onCheckout={handleCheckout} />
      <Footer />

      <FloatingCart onClick={() => setCartOpen(true)} />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </div>
  );
};

export default Index;
