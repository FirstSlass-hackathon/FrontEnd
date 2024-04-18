import React from "react";
import cover from '../../../assets/images/africa_countries/Africa_cover.png';
import s from './style.module.scss';

export const ImageSection = () => {
  return (
    <div className={s.imageSection}>
      <img className={s.cover} src={cover} alt={'cover'}/>
      <div className={s.cover__title}>Африка</div>
    </div>
  )
}