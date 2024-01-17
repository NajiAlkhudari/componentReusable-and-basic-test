import React, { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import Cookies from 'js-cookie';
import Button from '../components/ui/Button';


const Test = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(Cookies.get('lang') || 'en');


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    Cookies.set('lang', lng);
  };

  useEffect(() => {
    const cookieLang = Cookies.get('lang');
    if (cookieLang) {
      changeLanguage(cookieLang);
    }
  }, []);


  return (
    <div className="App" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <header className="bg-blue-500 text-white p-5">
        <h1 className="text-xl">{t('Header')}</h1>
        <Button className='btn btn-warning px-6' onClick={() => changeLanguage(lang === 'en' ? 'ar' : 'en')}>
       CH
        </Button>
      </header>
      <body className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <article className="border p-4 rounded">
            <h2 className="text-lg font-bold mb-2">{t('Article')} 1</h2>
            <p>{t('This is the content for Article')} 1.</p>
          </article>
          <article className="border p-4 rounded">
            <h2 className="text-lg font-bold mb-2">{t('Article')} 2</h2>
            <p>{t('This is the content for Article')} 2.</p>
          </article>
          <article className="border p-4 rounded">
            <h2 className="text-lg font-bold mb-2">{t('Article')} 3</h2>
            <p>{t('This is the content for Article')} 3.</p>
          </article>
        </div>
      </body>
    </div>
  );
}

export default Test;
