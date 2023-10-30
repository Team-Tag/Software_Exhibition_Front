import React from "react";
import '../Styles/Header.css';
import mainLogo from '../media/mainLogo.png'
import {Link} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function Header(props) {
 let istrue=''
 
  const headerClass = `header ${props.headerClassName}`;//headerClassName
  return (
        <div className= {headerClass}>
          <Link  to = "/"><img  className="header-logo" src={mainLogo} alt="메인 로고"/></Link>
          <div className="header-menu">
              <Link  className="header-menu-item" to='/AboutUs'><p>만든이들{istrue}</p></Link>
              <Link  className="header-menu-item" to="/ClubInfo"><p>동아리 소개</p></Link>
              <Link  className="header-menu-item" to='/ClubroomLocator'><p>동방 찾기</p></Link>
              <Link  className="header-menu-item2" to="/ClubQuiz"><p>내게 맞는 동아리 찾기</p></Link>
          </div>
        </div>
  );
}

export default Header;
