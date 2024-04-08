import React from "react";
import { Header } from '../../components/Header';
import { Main } from "../../components/Main";
// import { Footer } from "../../components";
import s from './style.module.scss';

export default function HomePage() {

	React.useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);

  return (
    <>
      <main className={s.content}>
        <Header/>
        <Main/>
        {/* <Footer/> */}
      </main>
    </>
  );
}
