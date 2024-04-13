import React from "react";
import s from './style.module.scss';
import { ImpressionsList } from "../../components/Africa/ImpressionsList";

export default function ContinentAfrica() {

	React.useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);

  return (
    <>
      <main className={s.content}>
        <ImpressionsList/>
      </main>
    </>
  );
}