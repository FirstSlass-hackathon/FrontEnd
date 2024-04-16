import React from 'react';
import s from './style.module.scss';
import cardCountriesList from '../../ui/Cards/CardCountriesList';

export const CountriesList = () => {

  return (
    <div className={s.countrieslist}>
      <div className={s.cards}>
        {cardCountriesList.map((card, index) => (
            <div key={index} className={s.card}>
              {card}
            </div>
          ))}
      </div>
    </div>
  );
}