import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/homePage_cards/advantages_card1.jpg';
import img2 from '../../../assets/images/homePage_cards/advantages_card2.jpg';
import img3 from '../../../assets/images/homePage_cards/advantages_card3.jpg';
import img4 from '../../../assets/images/homePage_cards/advantages_card4.jpg';

export const CardAdvantages = ({advantages, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.small, s.adv)}>
          <img src={img} className={s.img} alt={"img"}></img>
          <div className={cn(s.info, s.info__adv)}>{advantages}</div>
      </div>
    </>
  )
}

const advantages = [
  {advantages: 'направление', img: img1},
  {advantages: 'направление', img: img2},
  {advantages: 'виды отдыха', img: img3},
  {advantages: 'виды отдыха', img: img4}
];

const cardTravels = advantages.map((item, index) => (
  <CardAdvantages key={index} {...item} />
));

export default cardTravels;