import './App.css';

import {Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import AboutUs from './Pages/AboutUs';
import ClubQuiz from './Pages/ClubQuiz';
import ClubInfo from './Pages/ClubInfo';
import ClubroomLocator from './Pages/ClubroomLocator';
import Admin from './Pages/Admin';
import AdminAdd from './Components/AdminAdd';
import AdminModify from './Pages/AdminModify';
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
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AdminAdd" element={<AdminAdd />} />
        <Route path="/AdminModify" element={<AdminModify />} />
      </Routes>
    </div>
  );
}

export default Routing;
