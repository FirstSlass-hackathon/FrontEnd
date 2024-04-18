import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useLocation } from "react-router-dom";
import s from './style.module.scss';
import lineBlack from '../../../assets/images/Line 10.svg';
import lineWhite from '../../../assets/images/Line_white.svg';

export const NavBar = ({colorLink, line, ...props}) => {

  const location = useLocation();
  const textColor = colorLink === 'white' ? 'white' : '#464E4D'; // Цвет текста
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
      {location.pathname === '/' && (
        <>
          <div className={s.navbar__block}>
            <ScrollLink style={{ color: textColor }} className={s.link__nav} to={'directions'} smooth={true} onClick={() => scrollToComponent('directions')}>Направления</ScrollLink>
            <img src={lineColor} alt={"line"}/>
          </div>
          <div className={s.navbar__block}>
            <ScrollLink style={{ color: textColor }} className={s.link__nav} to={'travels'} smooth={true} onClick={() => scrollToComponent('travels')}>Виды путешествий</ScrollLink>
            <img src={lineColor} alt={"line"}/>
          </div>
          <div className={s.navbar__block}>
            <ScrollLink style={{ color: textColor }} className={s.link__nav} to={'aboutus'} smooth={true} onClick={() => scrollToComponent('aboutus')}>О нас</ScrollLink>
            <img src={lineColor} alt={"line"}/>
          </div>
          <div className={s.navbar__block}>
            <ScrollLink style={{ color: textColor }} className={s.link__nav} to={'impressions'} smooth={true} onClick={() => scrollToComponent('impressions')}>Истории</ScrollLink>
          </div>
        </>
      )}

      {location.pathname === '/africa' && (
        <div className={s.navbar__block}>
          <RouterLink style={{ color: textColor }} className={s.link__nav} to={'/'}>Главная</RouterLink>
        </div>
      )}
    </div>
  )
}

export default NavBar