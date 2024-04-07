import React from "react";
import { HeroSection } from "..";
import { AboutUs } from "..";
import { Directions } from "..";
import { Continents } from "..";
import { Travels } from "..";
import { Advantages } from "..";
import { Impressions } from "..";
import { Order } from "..";
import s from './style.module.scss';

export const Main = () => {
  return (
    <>
      <main className={s.content}>
        <section className={s.main__section}>
          <HeroSection/>
        </section>

        <section className={s.main__section}>
          <AboutUs/>
        </section>

        <section className={s.main__section}>
          <Directions/>
        </section>

        <section className={s.main__section}>
          <Continents/>
        </section>

        <section className={s.main__section}>
          <Travels/>
        </section>

        <section className={s.main__section}>
          <Advantages/>
        </section>

        <section className={s.main__section}>
          <Impressions/>
        </section>

        <section className={s.main__section}>
          <Order/>
        </section>
      </main>
    </>
  )
}