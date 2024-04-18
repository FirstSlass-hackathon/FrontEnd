import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/travels_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/travels_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/travels_card3.jpg';

export const CardTravel = ({title, travel, moto, price, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.size1, s.str)}>
          <img src={img} className={s.img} alt ={"img"}></img>
          <div className={s.info}>
            <div className={s.info__block}>
              <div className={s.info__title_tr}>{title}</div>
              <div className={s.info__travel_tr}>{travel}</div>
              <div className={s.info__moto}>{moto}</div>
              <div className={s.info__price}>{price}</div>
            </div>
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'виды отдыха', travel: 'Кайтсерфинг', moto: 'ОЩУТИТЕ СВОБОДУ С КАЙТСЕРФИНГОМ!', price: '6750$', img: img1},
  {title: 'виды отдыха', travel: 'Горные лыжи', moto: 'ПОКОРЯЙТЕ ВЕРШИНЫ С НАМИ!', price: '6750$', img: img2},
  {title: 'виды отдыха', travel: 'Уединение на острове', moto: 'ОТПРАВЛЯЙТЕСЬ В ТРОПИЧЕСКИЙ РАЙ', price: '6750$', img: img3}
];

const cardTravels = titles.map((item, index) => (
  <CardTravel key={index} {...item} />
));

export default cardTravels;