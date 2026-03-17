import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import MobileMenu from './MobileMenu';

const Header = ({ onCartOpen }: { onCartOpen: () => void }) => {
  const { lang, setLang, t } = useLanguage();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { kz: 'Басты', ru: 'Главная', href: '#hero' },
    { kz: 'Санаттар', ru: 'Категории', href: '#categories' },
    { kz: 'Тауарлар', ru: 'Товары', href: '#products' },
    { kz: 'Байланыс', ru: 'Контакты', href: '#footer' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-14 md:h-16">
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>

          <a href="#hero" className="font-display text-lg md:text-xl font-bold tracking-widest uppercase">
            ASTANA STYLE
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.kz, item.ru)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs tracking-wider font-body">
              <button
                onClick={() => setLang('kz')}
                className={`px-1 transition-colors ${lang === 'kz' ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}
              >
                KZ
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLang('ru')}
                className={`px-1 transition-colors ${lang === 'ru' ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}
              >
                RU
              </button>
            </div>

            <button onClick={onCartOpen} className="relative p-2 -mr-2" aria-label="Cart">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-foreground text-background text-[10px] font-body font-semibold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
