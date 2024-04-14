import React from "react";
import { Button } from "../ui/Button/Button";
import { NavBar } from '../ui/Navbar/navbar';
import {scrollToOrder} from '../Main/Main';
import logo from '../../assets/images/logo-3 1.svg';
import s from './styles.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <img src={logo} alt={'logo'}/>
      <NavBar/>
      <Button text={'Оставить заявку'} onClick={scrollToOrder} colorScheme={'white'}/>
    </div>
  )
}