import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = ({ onCheckout }: { onCheckout: () => void }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container text-center">
        <h2 className="font-display text-3xl md:text-5xl mb-8">
          {t('Қазір тапсырыс беріңіз', 'Оформите заказ сейчас')}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/77023817322"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-background text-foreground px-8 py-4 font-body text-xs tracking-widest uppercase hover:bg-background/90 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/astanastyle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-background text-background px-8 py-4 font-body text-xs tracking-widest uppercase hover:bg-background/10 transition-colors"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
