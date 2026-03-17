import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'kz' | 'ru';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (kz: string, ru: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('kz');
  const t = (kz: string, ru: string) => lang === 'kz' ? kz : ru;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
