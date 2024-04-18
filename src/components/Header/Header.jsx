import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/Button/Button";
import { NavBar } from '../ui/Navbar/navbar';
import { scrollToOrder } from '../Main/Main';
import logo from '../../assets/images/logo-3 1.svg';
import s from './styles.module.scss';

export const Header = () => {

  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState('');
  const [colorScheme, setColorScheme] = useState('');
  const [colorLink, setColorLink] = useState('');
  const [line, setLine] = useState('');

  // Обновляем цвет бэкграунда в зависимости от текущего пути
  useEffect(() => {

    if (location.pathname === '/africa') {
      setBackgroundColor('rgba(72, 57, 42, 0.30)');
      setColorScheme('white');
      setColorLink('white');
      setLine('white');

    } else {
      setBackgroundColor('rgba(255, 255, 255, 0.65)');
      setColorScheme('black');
      setColorLink('black');
      setLine('black');
    }
  }, [location.pathname]);
  
  return (
    <div className={s.header} style={{ background: backgroundColor }}>
      <div className={s.headerContent}>
        <img src={logo} alt={'logo'}/>
        <NavBar colorLink={colorLink} line={line}/>
        <Button text={'Оставить заявку'} onClick={scrollToOrder} colorScheme={colorScheme}/>
      </div>
    </div>
  )
}
