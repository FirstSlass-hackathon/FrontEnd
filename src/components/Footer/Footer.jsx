import React from "react";
import { Link } from "react-router-dom";
import { LanguageSelector } from '../ui/LanguageSelector/LanguageSelector';
import cn from 'classnames';
import s from './styles.module.scss';
import phone from '../../assets/images/phone-line.svg';
import mail from '../../assets/images/mail-line.svg';
import logo from '../../assets/images/logo-3 1.svg';
import tg from '../../assets/images/social/телеграм.svg';
import youtube from '../../assets/images/social/ютуб.svg';
import vk from '../../assets/images/social/вк.svg';
import whatsapp from '../../assets/images/social/whatsapp.svg';
import inst from '../../assets/images/social/инст.svg';



export const Footer = () => {
  return (
    <div className={s.footer}>
      <section className={s.footer__up}>
        <div className={s.footer__up_textBlock}>
          <div className={s.footer__up__title}>Наши
            <br/>
            контакты</div>
          <div className={s.footer__up__name}>Мы на связи 24 часа</div>
        </div>
        
        <div className={s.footer__up_contacts}>
          <img className={s.footer__up_img} src={phone} alt={phone}/>
          <Link className={s.footer__link} to='/'>+7 (999) 555 66 77</Link>
        </div>

        <div className={s.footer__up_contacts}>
          <img className={s.footer__up_img} src={mail} alt={mail}/>
          <Link className={s.footer__link} to='/'>info@firstclass.com</Link>
        </div>
      </section>

      <section className={s.footer__down}>
        <img className={s.footer__logo} src={logo} alt={'logo'}/>
        <div className={s.footer__columns}>
          <div className={s.footer__column}>
            <div className={s.footer__down__title}>Направления</div>
            <div className={s.footer__column_links}>
              <Link className={cn(s.link, s.link__main, s.upper)} to='/africa'>африка</Link>
              <Link className={cn(s.link, s.link__main, s.upper)} to='/inprogress'>азия</Link>
              <Link className={cn(s.link, s.link__main, s.upper)} to='/inprogress'>австралия</Link>
              <Link className={cn(s.link, s.link__main, s.upper)} to='/inprogress'>европа</Link>
              <Link className={cn(s.link, s.link__main, s.upper)} to='/inprogress'>америка</Link>
            </div>
          </div>

          <div className={s.footer__column}>
            <div className={s.footer__down__title}>Виды отдыха</div>
            <div className={s.footer__column_links}>
              <Link className={cn(s.link, s.link__tr)} to='/inprogress'>Пляжный отдых</Link>
              <Link className={cn(s.link, s.link__tr)} to='/inprogress'>Кайтсерфинг</Link>
              <Link className={cn(s.link, s.link__tr)} to='/inprogress'>Дайвинг</Link>
              <Link className={cn(s.link, s.link__tr)} to='/inprogress'>Яхтинг</Link>
              <Link className={cn(s.link, s.link__tr)} to='/inprogress'>Горные лыжи</Link>
            </div>
          </div>

          <div className={s.footer__column}>
            <div className={s.footer__column_socialMedia}>
              <div className={s.footer__down__title}>Мы в социальных сетях</div>
              <div className={s.socialMedia}>
                <img src={inst} alt={'instagram'}/>
                <img src={youtube} alt={'youtube'}/>
                <img src={vk} alt={'vk'}/>
                <img src={whatsapp} alt={'whatsApp'}/>
                <img src={tg} alt={'telegram'}/>
              </div>
            </div>
            <LanguageSelector/>
            <div className={cn(s.footer__column, s.docs)}>
              <Link className={cn(s.link, s.link__politics)} to='/inprogress'>Политика конфиденциальности</Link>
              <Link className={cn(s.link, s.link__politics)} to='/inprogress'>Политика обработки персональных данных</Link>
              <Link className={cn(s.link, s.link__politics)} to='/inprogress'>Договор оферта</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}