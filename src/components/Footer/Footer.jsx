import React from "react";
import { Link } from "react-router-dom";
import cn from 'classnames';
import s from './styles.module.scss';
import phone from '../../assets/images/phone-line.svg';
import mail from '../../assets/images/mail-line.svg';
import logo from '../../assets/images/logo-3 1.svg';



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
            <h3>Направления</h3>
            <div className={s.footer__column_links}>
              <Link className={cn(s.link, s.upper)} to='/africa'>африка</Link>
              <Link className={cn(s.link, s.upper)} to='/'>азия</Link>
              <Link className={cn(s.link, s.upper)} to='/'>австралия</Link>
              <Link className={cn(s.link, s.upper)} to='/'>европа</Link>
              <Link className={cn(s.link, s.upper)} to='/'>америка</Link>
            </div>
          </div>

          <div className={s.footer__column}>
            <h3>Виды отдыха</h3>
            <div className={s.footer__column_links}>
              <Link className={cn(s.link, s.travel)} to='/'>Пляжный отдых</Link>
              <Link className={cn(s.link, s.travel)} to='/'>Кайтсерфинг</Link>
              <Link className={cn(s.link, s.travel)} to='/'>Дайвинг</Link>
              <Link className={cn(s.link, s.travel)} to='/'>Яхтинг</Link>
              <Link className={cn(s.link, s.travel)} to='/'>Горные лыжи</Link>
            </div>
          </div>

          <div className={s.footer__column}>
            <div className={s.footer__column_socialMedia}>
              <h3>Мы в социальных сетях</h3>
              <div>icons</div>
            </div>
            <div className={cn(s.footer__column, s.docs)}>
              <Link className={s.link} to='/'>Политика конфиденциальности</Link>
              <Link className={s.link} to='/'>Политика обработки персональных данных</Link>
              <Link className={s.link} to='/'>Договор оферта</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}