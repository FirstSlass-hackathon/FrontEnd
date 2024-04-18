import React from "react";
import { Link } from "react-scroll";
import { scroller } from 'react-scroll';
import s from './style.module.scss';
import lineBlack from '../../../assets/images/Line 10.svg';
import lineWhite from '../../../assets/images/Line_white.svg';

export const NavBar = ({colorLink, line, ...props}) => {

  const textColor = colorLink === 'white' ? 'white' : 'black'; // Цвет текста
  const lineColor = line === 'white' ? lineWhite : lineBlack ;

  const scrollToComponent = (elementName) => {
    scroller.scrollTo(elementName, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
    })
  }

  return (
    <div className={s.navbar}>
      <div className={s.navbar__block}>
        <Link style={{ color: textColor }} className={s.link__nav} to={'directions'} smooth={true} onClick={() => scrollToComponent('directions')}>Направления</Link>
        <img src={lineColor} alt={"line"}/>
      </div>
      <div className={s.navbar__block}>
        <Link style={{ color: textColor }} className={s.link__nav} to={'travels'} smooth={true} onClick={() => scrollToComponent('travels')}>Виды путешествий</Link>
        <img src={lineColor} alt={"line"}/>
      </div>
      <div className={s.navbar__block}>
        <Link style={{ color: textColor }} className={s.link__nav} to={'aboutus'} smooth={true} onClick={() => scrollToComponent('aboutus')}>О нас</Link>
        <img src={lineColor} alt={"line"}/>
      </div>
      <div className={s.navbar__block}>
        <Link style={{ color: textColor }} className={s.link__nav} to={'impressions'} smooth={true} onClick={() => scrollToComponent('impressions')}>Истории</Link>
      </div>
    </div>
  )
}

export default NavBar