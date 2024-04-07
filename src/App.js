import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components';
import { ContinentAfrica } from './components';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/africa' element={<ContinentAfrica/>}/>
    </Routes>
  );
}

export default App;
