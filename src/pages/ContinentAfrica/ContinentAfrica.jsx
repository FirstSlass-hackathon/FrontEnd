import React from "react";
import { Header } from '../../components/Header';
import { Africa } from "../../components/Africa";
import { Footer } from "../../components/Footer";
import s from './style.module.scss';
import { ImpressionsList } from "../../components/Africa/ImpressionsList";

export default function ContinentAfrica() {

	React.useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);

  return (
    <>
      <main className={s.content}>
        
        <div id="absolute" className={s.absolute}>
          <Header/>
        </div>
        <h1>Africa</h1>
        <Africa/>
        <ImpressionsList/>
        <Footer/>
      </main>
    </>
  );
}