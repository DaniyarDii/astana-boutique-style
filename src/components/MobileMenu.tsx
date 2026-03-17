import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavItem {
  kz: string;
  ru: string;
  href: string;
}

const MobileMenu = ({ open, onClose, navItems }: { open: boolean; onClose: () => void; navItems: NavItem[] }) => {
  const { t } = useLanguage();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-background animate-fade-in">
      <div className="flex items-center justify-between h-14 px-6">
        <span className="font-display text-lg font-bold tracking-widest uppercase">ASTANA STYLE</span>
        <button onClick={onClose} className="p-2 -mr-2" aria-label="Close">
          <X size={20} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center gap-8 pt-20">
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="font-display text-2xl tracking-wider"
          >
            {t(item.kz, item.ru)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
