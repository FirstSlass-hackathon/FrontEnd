import React from "react";
// import { AboutAfrica } from "../Africa/AboutAfrica";
import { CountriesList } from "../Africa/CountriesList";
import { CountriesInfo } from "../Africa/CountriesInfo";
import { ImpressionsList } from "../Africa/ImpressionsList";
// import { RewiewList } from "../Africa/RewiewList";
// import { TravelsList } from "../Africa/TravelsList";
import { Advantages } from "../Main/Advantages";
import { Order } from "../Main/Order";
import s from './style.module.scss';

export const Africa = () => {
  return (
    <>
      <main className={s.content}>

        {/* <section className={s.main__section}>
          <AboutAfrica/>
        </section> */}

        <section className={s.main__section}>
          <CountriesInfo/>
        </section>

        <section className={s.main__section}>
          <CountriesList/>
        </section>

        <section className={s.main__section}>
          <ImpressionsList/>
        </section>

        {/* <section className={s.main__section}>
          <RewiewList/>
        </section> */}

        {/* <section className={s.main__section}>
          <TravelsList/>
        </section>
         */}

        <section className={s.main__section}>
          <Advantages/>
        </section> 

        <section className={s.main__section}>
          <Order/>
        </section>
      </main>
    </>
  );
}