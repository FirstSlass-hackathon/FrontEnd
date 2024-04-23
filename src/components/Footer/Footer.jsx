import React from "react";
import { Link } from "react-router-dom";
import { LanguageSelector } from '../ui/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div className={s.footer}>
      <section className={s.footer__up}>
        <div className={s.footer__up_textBlock}>
          <div className={s.footer__up__title}>{t('footer.contacts_1')}</div>
          <div className={s.footer__up__title}>{t('footer.contacts_2')}</div>
          <div className={s.footer__up__name}>{t('footer.available')}</div>
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
            <div className={s.footer__down__title}>{t('footer.directions')}</div>
            <div className={s.footer__column_links}>
              <a className={cn(s.link, s.link__main, s.upper)} href='/africa'>{t('footer.africa')}</a>
              <a className={cn(s.link, s.link__main, s.upper)} href='/inprogress'>{t('footer.asia')}</a>
              <a className={cn(s.link, s.link__main, s.upper)} href='/inprogress'>{t('footer.australia')}</a>
              <a className={cn(s.link, s.link__main, s.upper)} href='/inprogress'>{t('footer.europe')}</a>
              <a className={cn(s.link, s.link__main, s.upper)} href='/inprogress'>{t('footer.america')}</a>
            </div>
          </div>

          <div className={s.footer__column}>
            <div className={s.footer__down__title}>{t('footer.holidayTypes')}</div>
            <div className={s.footer__column_links}>
              <a className={cn(s.link, s.link__tr)} href='/inprogress'>{t('footer.beachHoliday')}</a>
              <a className={cn(s.link, s.link__tr)} href='/inprogress'>{t('footer.kitesurfing')}</a>
              <a className={cn(s.link, s.link__tr)} href='/inprogress'>{t('footer.diving')}</a>
              <a className={cn(s.link, s.link__tr)} href='/inprogress'>{t('footer.yachting')}</a>
              <a className={cn(s.link, s.link__tr)} href='/inprogress'>{t('footer.skiing')}</a>
            </div>
          </div>

          <div className={s.footer__column}>
            <div className={s.footer__column_socialMedia}>
              <div className={s.footer__down__title}>{t('footer.socialMedia')}</div>
              <div className={s.socialMedia}>
                <img src={inst} alt={'instagram'}/>
                <img src={youtube} alt={'youtube'}/>
                <img src={vk} alt={'vk'}/>
                <img src={whatsapp} alt={'whatsApp'}/>
                <img src={tg} alt={'telegram'}/>
              </div>
            </div>
            <LanguageSelector />
            <div className={cn(s.footer__column, s.docs)}>
              <a className={cn(s.link, s.link__politics)} href='/inprogress'>{t('footer.privacyPolicy')}</a>
              <a className={cn(s.link, s.link__politics)} href='/inprogress'>{t('footer.personalDataProcessingPolicy')}</a>
              <a className={cn(s.link, s.link__politics)} href='/inprogress'>{t('footer.offerAgreement')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}