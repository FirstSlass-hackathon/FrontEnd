import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/impressions_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/impressions_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/impressions_card3.jpg';


export const CardImpression = ({title, text, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.size, s.imp)}>
          <img src={img} className={s.img} alt={"img"}></img>
          <div className={cn(s.info, s.info__imp)}>
            <div className={s.info__title_imp}>{title}</div>
            <div className={s.info__title_text}>{text}</div>
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'Незабываемая поездка', text: 'с восхождением на Эльбрус', img: img1},
  {title: 'Шикарные', text: 'отели в сингапуре', img: img2},
  {title: 'Тибетский', text: 'рай', img: img3}
];

const cardImpressions = titles.map((item, index) => (
  <CardImpression key={index} {...item} />
));

export default cardImpressions;