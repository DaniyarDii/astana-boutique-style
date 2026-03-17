import { useLanguage } from '@/contexts/LanguageContext';
import categoryMen from '@/assets/category-men.jpg';
import categoryWomen from '@/assets/category-women.jpg';
import categoryNew from '@/assets/category-new.jpg';
import categoryBestseller from '@/assets/category-bestseller.jpg';

const categories = [
  { kz: 'Ерлерге', ru: 'Мужская', id: 'men', image: categoryMen },
  { kz: 'Әйелдерге', ru: 'Женская', id: 'women', image: categoryWomen },
  { kz: 'Жаңа топтама', ru: 'Новинки', id: 'new', image: categoryNew },
  { kz: 'Хит сатылымдар', ru: 'Хиты продаж', id: 'bestseller', image: categoryBestseller },
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
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={t(cat.kz, cat.ru)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute bottom-6 left-6 font-display text-lg md:text-xl tracking-wide text-white">
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
