import React, { useState } from 'react';
import s from './style.module.scss';
import poster from '../../../assets/images/africa_countries/amazingAfrica_1.jpg';
import element1 from '../../../assets/images/africa_countries/amazingAfrica_2.jpg';
import element2 from '../../../assets/images/africa_countries/amazingAfrica_3.jpg';
import element3 from '../../../assets/images/africa_countries/amazingAfrica_4.jpg';
import element4 from '../../../assets/images/africa_countries/amazingAfrica_5.jpg';

export const Amazing = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={s.container} onMouseMove={handleMouseMove}>
      <div className={s.amazing}>
        <div className={s.amazing__title}>
          <span className={s.amazing__text}>такая удивительная Африка</span>
          <div className={s.amazing__name}>
            <span>Попробуйте</span>
            <br/>
            <span>Африку</span> <span className={s.highlight}>на вкус</span>
          </div>
        </div>
        <div className={s.amazing__photo}>
          <div className={s.amazing__poster}>
            <div className={s.zoomContainer}>
              <img src={poster} alt={'photo1'} className={s.zoom} />
            </div>
          </div>
          <div className={s.amazing__block}>
            <div className={s.zoomContainer}>
              <img src={element1} alt={'photo2'} className={s.zoom} />
            </div>
            <div className={s.zoomContainer}>
              <img src={element2} alt={'photo3'} className={s.zoom} />
            </div>
            <div className={s.zoomContainer}>
              <img src={element3} alt={'photo4'} className={s.zoom} />
            </div>
            <div className={s.zoomContainer}>
              <img src={element4} alt={'photo5'} className={s.zoom} />
            </div>
          </div>
        </div>
      </div>
      <div className={s.customCursor} style={{ left: cursorPos.x, top: cursorPos.y }}></div>
    </div>
  )
}