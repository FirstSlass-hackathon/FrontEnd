import React from "react";
import { Button } from "../ui/Button/Button";
import { NavBar } from '../ui/Navbar/navbar';
import { scrollToOrder } from '../Main/Main';
import logo from '../../assets/images/logo-3 1.svg';
// import videoBackground from '../../assets/video/Travel2 comp.mp4'; // Replace 'background-video.mp4' with your video file
import s from './styles.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContent}>
        <img src={logo} alt={'logo'}/>
        <NavBar />
        <Button text={'Оставить заявку'} onClick={scrollToOrder} colorScheme={'black'}/>
      </div>
    </div>
  )
}

// export default Header;