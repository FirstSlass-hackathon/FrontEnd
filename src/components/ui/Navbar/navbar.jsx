import React from "react";
import { Link } from "react-scroll";
import { scroller } from 'react-scroll';
import s from './style.module.scss';
import arrowDown from '../../../assets/images/Line 10.svg';

export const NavBar = () => {

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
        <Link className={s.link__nav} to={'directions'} smooth={true} onClick={() => scrollToComponent('directions')}>Направления</Link>
        <img src={arrowDown} alt={"arrow_down"}/>
      </div>
      <div className={s.navbar__block}>
        <Link className={s.link__nav} to={'travels'} smooth={true} onClick={() => scrollToComponent('travels')}>Виды путешествий</Link>
        <img src={arrowDown} alt={"arrow_down"}/>
      </div>
      <div className={s.navbar__block}>
        <Link className={s.link__nav} to={'aboutus'} smooth={true} onClick={() => scrollToComponent('aboutus')}>О нас</Link>
        <img src={arrowDown} alt={"arrow_down"}/>
      </div>
      <div className={s.navbar__block}>
        <Link className={s.link__nav} to={'impressions'} smooth={true} onClick={() => scrollToComponent('impressions')}>Истории</Link>
      </div>
    </div>
  )
}

export default NavBar