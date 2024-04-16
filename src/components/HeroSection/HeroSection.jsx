import React from "react";
import { Button } from "../ui/Button/Button";
import { NavBar } from '../ui/Navbar/navbar';
import { scrollToOrder } from '../Main/Main';
import logo from '../../assets/images/logo-3 1.svg';
import backgroundImage from '../../assets/images/africa_countries/Africa_cover.png'; // Заменить на фотку львов
import s from './styles.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <img src={backgroundImage} alt="background" className={s.backgroundImage} />
      <div className={s.headerContent}>
        <img src={logo} alt={'logo'}/>
        <NavBar />
        <Button text={'Оставить заявку'} onClick={scrollToOrder} colorScheme={'white'}/>
      </div>
    </div>
  )
}

export default Header;
