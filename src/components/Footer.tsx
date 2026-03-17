import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="py-16 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-lg tracking-widest uppercase mb-4">
              ASTANA STYLE
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {t(
                'Астанадағы премиум сән бренді. Сапалы киімдер, заманауи үлгілер.',
                'Премиальный бренд моды в Астане. Качественная одежда, современные модели.'
              )}
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4">
              {t('Байланыс', 'Контакты')}
            </h4>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>+7 (700) 123-45-67</p>
              <p>info@astanastyle.kz</p>
              <p>{t('Астана, Мәңгілік Ел даңғылы, 1', 'Астана, проспект Мангилик Ел, 1')}</p>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4">
              {t('Әлеуметтік желілер', 'Социальные сети')}
            </h4>
            <div className="flex gap-6">
              <a href="https://instagram.com/astanastyle" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="https://t.me/astanastyle" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Telegram
              </a>
              <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 ASTANA STYLE. {t('Барлық құқықтар қорғалған', 'Все права защищены')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
