import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/travels_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/travels_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/travels_card3.jpg';

export const CardTravel = ({title, travel, moto, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.size, s.tr)}>
          <img src={img} className={s.img} alt ={"img"}></img>
          <div className={s.info}>
            <div className={s.info__block}>
              <div className={s.info__title_tr}>{title}</div>
              <div className={s.info__travel_tr}>{travel}</div>
            </div>
            {/* <div className={s.info__moto}>{moto}</div> */}
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'виды отдыха', travel: 'Кайтсерфинг', moto: 'ощутите свободу с кайтсерфингом!', img: img1},
  {title: 'виды отдыха', travel: 'Горные лыжи', moto: 'покоряйте вершины с нами!', img: img2},
  {title: 'виды отдыха', travel: 'Уединение на острове', moto: 'тропический рай', img: img3}
];

const cardTravels = titles.map((item, index) => (
  <CardTravel key={index} {...item} />
));

export default cardTravels;