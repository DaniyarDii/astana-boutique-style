import { useLanguage } from '@/contexts/LanguageContext';

const reviews = [
  {
    nameKz: 'Айгүл М.', nameRu: 'Айгуль М.',
    textKz: 'Өте сапалы киімдер! Жеткізу тез болды, өлшемі дәл келді. Рахмет!',
    textRu: 'Очень качественная одежда! Доставка была быстрой, размер подошёл идеально. Спасибо!',
  },
  {
    nameKz: 'Марат К.', nameRu: 'Марат К.',
    textKz: 'Керемет дүкен. Бағалары қолжетімді, сапасы жоғары. Жаңа коллекцияны күтемін!',
    textRu: 'Отличный магазин. Цены доступные, качество высокое. Жду новую коллекцию!',
  },
  {
    nameKz: 'Дана С.', nameRu: 'Дана С.',
    textKz: 'Былғары күртені сатып алдым — сапасы тамаша! Стильді және ыңғайлы.',
    textRu: 'Купила кожаную куртку — качество отличное! Стильная и удобная.',
  },
];

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
          {t('Пікірлер', 'Отзывы')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="border border-border p-8">
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6 italic">
                "{t(review.textKz, review.textRu)}"
              </p>
              <p className="font-body text-sm font-medium">
                — {t(review.nameKz, review.nameRu)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
