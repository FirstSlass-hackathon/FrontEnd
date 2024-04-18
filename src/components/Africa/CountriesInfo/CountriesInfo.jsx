import React, { useState } from 'react';
import s from './style.module.scss';
import img1 from '../../../assets/images/africa_countries/africa_countries_photo_1.svg';
import img2 from '../../../assets/images/africa_countries/africa_coutries_photo_2.png';

export const CountriesInfo = () => {
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const offsetX = (e.clientX - left) / width * 100;
    const offsetY = (e.clientY - top) / height * 100;

    setZoomStyle({
      transformOrigin: `${offsetX}% ${offsetY}%`
    });
  };
  
  return (
    <div className={s.countriesInfo}>
      <div className={s.text}>
        <h2 className={s.title}>страны Африки</h2>
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
        <div className={s.countriesInfo__img_small}>
        <div className={s.imgContainer} onMouseMove={handleMouseMove}>
          <img className={`${s.imgZoom} ${s.img}`} src={img1} alt={'desert'} style={zoomStyle}/>
          </div>
        </div>

      </div>
      
      <div className={s.countriesInfo__img}>
        <div className={s.imgContainer} onMouseMove={handleMouseMove}>
          <img className={`${s.imgZoom} ${s.img}`} src={img2} alt={'beach'} style={zoomStyle}/>
        </div>
      </div>
    </div>
  )
}