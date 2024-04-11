import React from "react";
import { Link } from "react-router-dom";
import s from './style.module.scss';
import arrowDown from '../../../assets/images/arrow-down.png';

export const NavBar = () => {
  return (
    <div className={s.navbar}>
      <div>
        <Link className={s.link} to='/'>Направления</Link>
        <img src={arrowDown} alt={"arrow_down"}/>
      </div>
      <div>
        <Link className={s.link} to='/'>Виды путешествий</Link>
        <img src={arrowDown} alt={"arrow_down"}/>
      </div>
      <div>
        <Link className={s.link} to='/'>О нас</Link>
        <img src={arrowDown} alt={"arrow_down"}/>
      </div>
      <div>
        <Link className={s.link} to='/'>Истории</Link>
        <img src={arrowDown} alt={"arrow_down"}/>
      </div>
    </div>
  )
}

export default NavBar