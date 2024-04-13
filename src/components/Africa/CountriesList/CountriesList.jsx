import React from 'react';
import s from './style.module.scss';
import cardCountriesList from '../../ui/Cards/CardCountriesList';

export const CountriesList = () => {

  return (
    <div className={s.countrieslist}>
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
      </div>
      <div className={s.Cards}>
        {cardCountriesList}
      </div>
    </div>
  );
}