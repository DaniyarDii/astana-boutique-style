import { useLanguage } from '@/contexts/LanguageContext';

const HowToOrderSection = () => {
  const { t } = useLanguage();

  const steps = [
    { num: '01', kz: 'Жазыңыз', ru: 'Напишите' },
    { num: '02', kz: 'Тауар таңдаңыз', ru: 'Выберите' },
    { num: '03', kz: 'Жеткізу', ru: 'Получите' },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
          {t('Қалай тапсырыс беруге болады', 'Как заказать')}
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <span className="font-display text-5xl md:text-6xl text-border block mb-4">
                {step.num}
              </span>
              <p className="font-body text-sm tracking-widest uppercase">
                {t(step.kz, step.ru)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
