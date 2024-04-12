import React from "react";
// import { Logo } from "..";
import { Button } from "../ui/Button/Button";
import { NavBar } from '../ui/Navbar/navbar';
import s from './styles.module.scss';
import {scrollToOrder} from '../Main/Main';

export const Header = () => {
  return (
    <div className={s.header}>
      {/* <Logo/> */}
      <NavBar/>
      <Button text={'Оставить заявку'} onClick={scrollToOrder} />
    </div>
  )
}