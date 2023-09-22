import './App.css';
import {Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import AboutUs from './Pages/AboutUs';
import ClubFinder from './Pages/ClubFinder';
import ClubInfo from './Pages/ClubInfo';
import ClubroomLocator from './Pages/ClubroomLocator';
function Routing() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ClubFinder" element={<ClubFinder />} />
        <Route path="/ClubInfo" element={<ClubInfo />} />
        <Route path="/ClubroomLocator" element={<ClubroomLocator />} />
      </Routes>
    </div>
  );
}

export default Routing;
