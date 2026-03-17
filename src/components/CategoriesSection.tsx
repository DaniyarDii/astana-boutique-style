import { useLanguage } from '@/contexts/LanguageContext';

const categories = [
  { kz: 'Ерлерге', ru: 'Мужская', id: 'men' },
  { kz: 'Әйелдерге', ru: 'Женская', id: 'women' },
  { kz: 'Жаңа топтама', ru: 'Новинки', id: 'new' },
  { kz: 'Хит сатылымдар', ru: 'Хиты продаж', id: 'bestseller' },
];

const CategoriesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
          {t('Санаттар', 'Категории')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#products"
              className="group relative aspect-[3/4] bg-secondary flex items-end p-6 overflow-hidden hover:bg-foreground transition-colors duration-500"
            >
              <span className="font-display text-lg md:text-xl tracking-wide group-hover:text-primary-foreground transition-colors duration-500">
                {t(cat.kz, cat.ru)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
