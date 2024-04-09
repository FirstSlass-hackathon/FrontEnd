import React from "react";
import cn from 'classnames';
import s from './styles.module.scss';
import phone from '../../assets/images/phone-line.png';
import mail from '../../assets/images/mail-line.png';
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <div className={s.footer}>
      <section className={s.footer__up}>
        <div className={s.footer__up_textBlock}>
          <h1>Наши
            <br/>
            контакты</h1>
          <h3>Мы на связи 24 часа</h3>
        </div>
        
        <div className={s.footer__up_contacts}>
          <img className={s.footer__up_img} src={phone} alt={phone}/>
          <Link className={s.link} to='/'>+7 (999) 555 66 77</Link>
        </div>

        <div className={s.footer__up_contacts}>
          <img className={s.footer__up_img} src={mail} alt={mail}/>
          <Link className={s.link} to='/'>info@firstclass.com</Link>
        </div>
      </section>

      <section className={s.footer__down}>
        <div className={s.footer__logo}>logo</div>
        <div className={s.footer__columns}>
          <div className={s.footer__column}>
            <h3>Направления</h3>
            <div className={s.footer__column_links}>
              <Link className={s.link} to='/'>африка</Link>
              <Link className={s.link} to='/'>азия</Link>
              <Link className={s.link} to='/'>австралия</Link>
              <Link className={s.link} to='/'>европа</Link>
              <Link className={s.link} to='/'>америка</Link>
            </div>
          </div>

          <div className={s.footer__column}>
            <h3>Виды отдыха</h3>
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