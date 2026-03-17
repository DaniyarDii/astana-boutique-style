import { useLanguage } from '@/contexts/LanguageContext';

const MapSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
          {t('Біздің дүкен', 'Наш магазин')}
        </h2>
        <div className="aspect-[16/9] md:aspect-[21/9] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.431478288189!2d71.41627!3d51.12854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a1973f7567e!2sAstana!5e0!3m2!1sen!2skz!4v1710000000000!5m2!1sen!2skz"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store location"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            {t('Астана, Мәңгілік Ел даңғылы, 1', 'Астана, проспект Мангилик Ел, 1')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
