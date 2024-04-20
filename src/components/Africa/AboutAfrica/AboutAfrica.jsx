import React, { useState } from 'react';
import s from './style.module.scss';
// import Button from '../../ui/Button/Button';
import image1 from '../../../assets/images/africa_countries/AboutAfrica_pyramid.jpg'
import image2 from '../../../assets/images/africa_countries/AboutAfrica_man.jpg'
import image3 from '../../../assets/images/africa_countries/AboutAfrica_looking_woman.jpg'
import image4 from '../../../assets/images/africa_countries/AboutAfrica_trees.jpg'
// import cardAdvantages from '../../ui/Cards/CardAdv';
// import {scrollToOrder} from '../Main';

export const AboutAfrica = () => {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { width, height } = target.getBoundingClientRect();

    const xTilt = (-(offsetX - (width / 2)) / 3) / 3;
    const yTilt = ((offsetY - (height / 2)) / 3) / 3;

    setTiltStyle({
      '--xTilt': `${xTilt}deg`,
      '--yTilt': `${yTilt}deg`
    });
  };

  return (
    <div className={s.aboutAfrica}>
      <div className={s.firstColumn}> {/* Первый ряд */}
      <div className={`${s.pyramidImage} ${s.imageContainer}`} onMouseMove={handleMouseMove}>
        <img src={image1} alt={'photo1'} style={tiltStyle} />
      </div>
        <div className={s.description}>
          <p>Африка&nbsp;&mdash; это загадочный континент, наполненный дикой
          красотой и&nbsp;удивительными приключениями.
          </p>
          <p>
          От&nbsp;бескрайних пустынь
          до&nbsp;густых джунглей, от&nbsp;величественных гор до&nbsp;бескрайних
          пляжей&nbsp;&mdash; здесь каждый найдет что-то по&nbsp;своему вкусу.
          </p>
        </div>

          {/*<Button className={s.button} onClick={scrollToOrder} text={'Оставить заявку'} colorScheme={'black'}/>*/}
      </div>
      <div className={s.secondColumn} onMouseMove={handleMouseMove}> {/* Второй ряд */}
        <img className={s.manImage} src={image2} alt={'photo2'} style={tiltStyle} />
        <img className={s.womanImage} src={image3} alt={'photo3'} style={tiltStyle} />
      </div>
      <div className={s.text}> {/* Третий ряд */}
        <div>
          <h2 className={s.title}>Африка</h2>
          <h1 className={s.name}>
            <span className={s.highlight}>УНИКАЛЬНЫЕ </span>
            <span>ТУРЫ</span>
            <br/>
            <span>ПО УДИВИТЕЛЬНЫМ</span>
            <br/>
            <span>УГОЛКАМ АФРИКИ</span>
          </h1>
        </div>
        <div className={`${s.treesImage} ${s.imageContainer}`} onMouseMove={handleMouseMove}>
          <img src={image4} alt={'photo4'} style={tiltStyle} />
        </div>
      </div>
    </div>
  );
}