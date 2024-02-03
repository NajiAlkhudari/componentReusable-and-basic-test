import React, { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import Cookies from 'js-cookie';import './Header.css'
import naji from './../../assets/images/naji.jpg';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Button from '../ui/Button';
import { MdLanguage } from "react-icons/md";

const Header = () => {
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

    <header className='header '>
      <div className='flex items-center p-5 justify-between  cursor-pointer '>
        <div className='flex items-center  '>
          <img className='rounded-2xl opacity-90' src={naji} alt="logo" role="icon" width="80" height="100"  />
     
        </div>
        <ul className='flex  font-semibold '>
          <li className='px-2'>     <Link to="/" className='  hover:text-sky-600'>
    {t("Home")}
  </Link>  </li>

    <li className='px-2'>        <Link to="component" className='  hover:text-sky-600'>
    {t("Components")}
  </Link>  </li>
           <li className='px-2'>
    {t("About")}
    </li>

          <li className=' hover:text-sky-600'>
          <a href="https://github.com/NajiAlkhudari">
          <Icon icon="mdi:github" width="50" height="30"/>
          </a>
          </li>
          <li className='px-2'>
                   <Button className='btn btn-lang  px-4 py-1' onClick={() => changeLanguage(lang === 'en' ? 'ar' : 'en')}>
                   {lang === 'en' ? 'Ar' : ' En'}


        </Button></li>
        
        </ul>
      </div>
    </header>
    </div>

  )
}

export default Header
