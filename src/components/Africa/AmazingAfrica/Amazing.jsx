import React from 'react';
import s from './style.module.scss';
import poster from '../../../assets/images/africa_countries/amazingAfrica_1.jpg';
import element1 from '../../../assets/images/africa_countries/amazingAfrica_2.jpg';
import element2 from '../../../assets/images/africa_countries/amazingAfrica_3.jpg';
import element3 from '../../../assets/images/africa_countries/amazingAfrica_4.jpg';
import element4 from '../../../assets/images/africa_countries/amazingAfrica_5.jpg';

export const Amazing = () => {
  return (
    <div className={s.container}>
      <div className={s.amazing}>
        <div className={s.amazing__title}>
          <span className={s.amazing__text}>такая удивительная Африка</span>
          <span className={s.amazing__name}>Попробуйте Африку на вкус</span>
        </div>
        <div className={s.amazing__photo}>
          <div className={s.amazing__poster}>
            <img src={poster} alt={'photo1'}/>
          </div>
          <div className={s.amazing__block}>
            <img src={element1} alt={'photo2'}/>
            <img src={element2} alt={'photo3'}/>
            <img src={element3} alt={'photo4'}/>
            <img src={element4} alt={'photo5'}/>
          </div>
        </div>
      </div>
    </div>
  )
}