import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import s from './app.module.scss';

const App = () => {
  return (
    <div className={s.app}>
      <HomePage/>
    </div>
  );
}

export default App;