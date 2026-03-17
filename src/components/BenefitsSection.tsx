import { useLanguage } from '@/contexts/LanguageContext';
import { Gem, TrendingUp, Truck, MessageCircle } from 'lucide-react';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Gem, kz: 'Сапалы материалдар', ru: 'Качественные материалы' },
    { icon: TrendingUp, kz: 'Соңғы трендтер', ru: 'Актуальные тренды' },
    { icon: Truck, kz: 'Жылдам жеткізу', ru: 'Быстрая доставка' },
    { icon: MessageCircle, kz: 'Онлайн кеңес', ru: 'Онлайн консультация' },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
          {t('Біздің артықшылықтар', 'Наши преимущества')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="text-center">
              <b.icon size={28} className="mx-auto mb-4 text-muted-foreground" strokeWidth={1.5} />
              <p className="font-body text-sm tracking-wide">
                {t(b.kz, b.ru)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
