import React from "react";
import { Logo } from "..";
import { Button } from "..";
import { Navbar } from "..";
import './style.module.scss';

export const Header = () => {
  return (
    <>
      <Logo/>
      <Navbar/>
      <Button/>
    </>
  )
}