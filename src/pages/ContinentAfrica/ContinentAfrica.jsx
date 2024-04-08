import React from "react";
import s from './style.module.scss';

export default function ContinentAfrica() {

	React.useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);

  return (
    <>
      <main className={s.content}>
        <h1>Africa</h1>
      </main>
    </>
  );
}