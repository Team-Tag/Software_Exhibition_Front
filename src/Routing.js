import './App.css';

import {Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import AboutUs from './Pages/AboutUs';
import ClubQuiz from './Pages/ClubQuiz';
import ClubInfo from './Pages/ClubInfo';
import ClubroomLocator from './Pages/ClubroomLocator';

// ClubroomLocator.
function Routing() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ClubQuiz" element={<ClubQuiz />} />
        <Route path="/ClubInfo" element={<ClubInfo />} />
        <Route path="/ClubroomLocator" element={<ClubroomLocator />} />
      </Routes>
    </div>
  );
}

export default Routing;
