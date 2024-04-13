import React from 'react';
import s from './style.module.scss';
import img1 from '../../../assets/images/africa_countries_photo_1.svg';
import img2 from '../../../assets/images/africa_coutries_photo_2.png';

export const CountriesInfo = () => {
  return (
    <div className={s.countriesInfo}>
      <div className={s.text}>
        <h2 className={s.title}>Страны Африки</h2>
        <h1 className={s.name}>
          <span>АФРИКА - </span>
          <span className={s.highlight}>МЕЧТА</span>
          <br/>
          <span>ПУТЕШЕСТВЕННИКА,</span>
          <br/>
          <span className={s.highlight}>ИССЛЕДУЙТЕ </span>
          <span>ЕЁ БЕЗ ОГРАНИЧЕНИЙ!</span>
        </h1>
        <p className={s.description}>
          Откройте для себя удивительное разнообразие Африки - 
          от экзотических пляжей до древних пирамид!
        <br/>
        <br/>
          Не упускайте возможность отправиться в увлекательное путешествие по 
          загадочной Африке и открыть для себя её уникальные красоты и тайны.
        </p>
        <img className={s.countriesInfo__img_small} src={img1} alt={'desert'}/>
      </div>
      
      <div className={s.countriesInfo__img}>
        <img src={img2} alt={'beach'}/>
      </div>
    </div>
  )
}
