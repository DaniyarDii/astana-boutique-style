import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const CheckoutModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { t } = useLanguage();
  const { items, totalPrice, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const orderSummary = items
    .map(i => `${t(i.nameKz, i.nameRu)} (${i.size}) x${i.quantity}`)
    .join(', ');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(
      `${t('Тапсырыс', 'Заказ')}:\n${t('Аты', 'Имя')}: ${name}\n${t('Телефон', 'Телефон')}: ${phone}\n${t('Тауарлар', 'Товары')}: ${orderSummary}\n${t('Сома', 'Сумма')}: ${totalPrice.toLocaleString()} ₸\n${t('Пікір', 'Комментарий')}: ${comment}`
    );
    window.open(`https://wa.me/77023817322?text=${text}`, '_blank');
    clearCart();
    onClose();
    setSubmitted(false);
  };

  const sendTelegram = () => {
    const text = encodeURIComponent(
      `${t('Тапсырыс', 'Заказ')}:\n${t('Аты', 'Имя')}: ${name}\n${t('Телефон', 'Телефон')}: ${phone}\n${t('Тауарлар', 'Товары')}: ${orderSummary}\n${t('Сома', 'Сумма')}: ${totalPrice.toLocaleString()} ₸\n${t('Пікір', 'Комментарий')}: ${comment}`
    );
    window.open(`https://t.me/DaniyarDii?text=${text}`, '_blank');
    clearCart();
    onClose();
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60" onClick={onClose} />
      <div className="relative bg-background w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-up p-6 md:p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <h2 className="font-display text-2xl mb-8">
              {t('Тапсырыс беру', 'Оформить заказ')}
            </h2>

            <div className="mb-6 p-4 bg-secondary">
              <p className="font-body text-xs text-muted-foreground mb-1">
                {t('Тауарлар', 'Товары')}
              </p>
              <p className="font-body text-sm">{orderSummary}</p>
              <p className="font-body text-sm font-semibold mt-2">
                {t('Барлығы', 'Итого')}: {totalPrice.toLocaleString()} ₸
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-xs tracking-widest uppercase mb-2 block">
                  {t('Аты-жөні', 'Имя')}
                </label>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase mb-2 block">
                  {t('Телефон нөмірі', 'Номер телефона')}
                </label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors"
                  maxLength={20}
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase mb-2 block">
                  {t('Пікір', 'Комментарий')}
                </label>
                <textarea
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  rows={3}
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                  maxLength={500}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-background py-4 font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors mt-4"
              >
                {t('Тапсырыс беру', 'Оформить заказ')}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="font-display text-2xl mb-4">
              {t('Рахмет!', 'Спасибо!')}
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8">
              {t(
                'Тапсырысыңыз қабылданды. Деректерді мессенджер арқылы жіберіңіз.',
                'Ваш заказ принят. Отправьте данные через мессенджер.'
              )}
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={sendWhatsApp}
                className="w-full bg-foreground text-background py-4 font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              >
                {t('WhatsApp арқылы жіберу', 'Отправить через WhatsApp')}
              </button>
              <button
                onClick={sendTelegram}
                className="w-full border border-foreground py-4 font-body text-xs tracking-widest uppercase hover:bg-secondary transition-colors"
              >
                {t('Telegram арқылы жіберу', 'Отправить через Telegram')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
