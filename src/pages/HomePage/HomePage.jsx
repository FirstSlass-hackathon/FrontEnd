import React from "react";
import { Header } from "../../components";
import { Main } from "../../components";
import { Footer } from "../../components";
import s from './style.module.scss';

export const HomePage = () => {

	React.useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);

  return (
    <>
      <main className={s.content}>
        <Header/>
        <Main/>
        <Footer/>
      </main>
    </>
  );
}
