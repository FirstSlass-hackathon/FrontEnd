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

  // Обновляем цвет бэкграунда в зависимости от текущего пути
  useEffect(() => {

    if (location.pathname === '/africa') {
      // setBackgroundColor('var(--gradient-colors)');
      setBackgroundColor('rgba(72, 57, 42, 0.65)');

    } else {
      setBackgroundColor('rgba(255, 255, 255, 0.65)');
    }
  }, [location.pathname]);
  
  return (
    <div className={s.header} style={{ background: backgroundColor }}>
      <div className={s.headerContent}>
        <img src={logo} alt={'logo'}/>
        <NavBar />
        <Button text={'Оставить заявку'} onClick={scrollToOrder} colorScheme={'black'}/>
      </div>
    </div>
  )
}
