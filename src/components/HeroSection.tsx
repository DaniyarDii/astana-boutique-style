import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Send } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Fashion" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mb-6 animate-fade-in-up">
          {t('Астанадағы стильді киімдер', 'Стильная одежда в Астане')}
        </h1>
        <p className="font-body text-sm md:text-base tracking-widest uppercase text-primary-foreground/80 mb-12 animate-fade-in-up animate-delay-200">
          {t(
            'Заманауи үлгілер. Сапа. Жылдам жеткізу',
            'Трендовые модели. Качество. Быстрая доставка'
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <a
            href="https://wa.me/77023817322"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-body text-xs tracking-widest uppercase hover:bg-primary-foreground/90 transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href="https://t.me/DaniyarDii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground text-primary-foreground px-8 py-4 font-body text-xs tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            <Send size={16} />
            Telegram
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground text-primary-foreground px-8 py-4 font-body text-xs tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
