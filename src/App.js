import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import s from './app.module.scss';
import ContinentAfrica from './pages/ContinentAfrica/ContinentAfrica';

const App = () => {
  return (
    <div className={s.app}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/africa" element={<ContinentAfrica/>}/>
      </Routes>

    </div>
  );
}

export default App;