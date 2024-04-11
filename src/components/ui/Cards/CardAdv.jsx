import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/Rectangle 12.svg';
import img2 from '../../../assets/images/Frame 59.svg';

export const CardAdvantages = ({advantages, img, ...props}) => {
  return (
    <>
      <div className={cn(s.component, s.small, s.adv)}>
          <img src={img} className={s.img} alt={"img"}></img>
          <div className={s.info}>{advantages}</div>
      </div>
    </>
  )
}

const advantages = [
  {advantages: 'направление', img: img1},
  {advantages: 'направление', img: img2},
  {advantages: 'виды отдыха', img: img2},
  {advantages: 'виды отдыха', img: img2}
];

const cardTravels = advantages.map((item, index) => (
  <CardAdvantages key={index} {...item} />
));

export default cardTravels;