import React from "react";
// import { HeroSection } from "../ui/HeroSection";
import { AboutUs } from "../Main/AboutUs";
import { Directions } from "../Main/Directions";
// import { Continents } from "../Main/Continents";
// import { Travels } from "../Main/Travels";
// import { Advantages } from "../Main/Advantages";
import { Impressions } from '../Main/Impressions';
// import { Order } from "../Main/Order";
import s from './style.module.scss';

export const Main = () => {
  return (
    <>
      <main className={s.content}>
{/*        <section className={s.main__section}>
          <Impressions/>
  </section>*/}
{/*        <section className={s.main__section}>
          <HeroSection/>
  </section>*/}

        <section className={s.main__section}>
          <AboutUs/>
        </section>

       <section className={s.main__section}>
          <Directions/>
        </section>

        {/* <section className={s.main__section}>
          <Continents/>
        </section> */}

        {/* <section className={s.main__section}>
          <Travels/>
        </section> */}

        {/* <section className={s.main__section}>
          <Advantages/>
        </section> */}

        <section className={s.main__section}>
          <Impressions/>
        </section>

        {/* <section className={s.main__section}>
          <Order/>
        </section> */}
      </main>
    </>
  )
}