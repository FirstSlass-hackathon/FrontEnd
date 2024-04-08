import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContinentAfrica from './pages/ContinentAfrica/ContinentAfrica';
import s from './app.module.scss';

const App = () => {
  return (
    <div className={s.app}>
      <HomePage/>
      <Routes>
            <Route path="/africa" component={ContinentAfrica} />
      </Routes>
    </div>
  );
}

export default App;