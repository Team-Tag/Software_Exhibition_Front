import React ,{useState,useEffect} from "react";
import '../Styles/Header.css';
import mainLogo from '../media/mainLogo.png'
import {Link} from 'react-router-dom';
function Header({headerClassName , isMenuChecked, handleMenuIconChange}) {
  const headerClass = `header ${headerClassName}`;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(()=>{
    setIsChecked(isMenuChecked);
  },[isMenuChecked]);

  const handleCheckboxChange = () => {
    // checkbox의 상태를 반전시킴
    setIsChecked(isChecked);

    // checkbox 상태 변경 후에 원하는 동작을 수행할 수 있습니다.
    console.log(`Checkbox가 ${isChecked ? "체크 해제" : "체크"}되었습니다.`);

    // handleMenuIconChange 함수 호출
    handleMenuIconChange(); // handleMenuIconChange 함수에 따라 메뉴 아이콘 상태가 변경됩니다.
  };

  return (
      <div className= {headerClass}>
        <Link className="header-logo" to = "/"><img src={mainLogo} alt="메인 로고"/></Link>
        <div className="header-menu">
            <Link className="header-menu-item" to="/AboutUs"><p>만든이들</p></Link>
            <Link className="header-menu-item" to="/ClubInfo"><p>동아리 소개</p></Link>
            <Link className="header-menu-item" to="/ClubroomLocator"><p>동방 찾기</p></Link>
            <Link className="header-menu-item" to="/Admin"><p>관</p></Link>
            <Link className="header-menu-item2" to="/ClubQuiz"><p>내게 맞는 동아리 찾기</p></Link>
        </div>
        <div className="menubar">
          <input type="checkbox" id="menuicon" checked={isChecked} onChange={handleCheckboxChange} /> 
          <label for="menuicon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div class="sideMenu">
            <ul id="sideMenu-ul">
              <li><Link className="side-menu-item" to="/AboutUs"><p>만든이들</p></Link></li>
              <li><Link className="side-menu-item" to="/ClubInfo"><p>동아리 소개</p></Link></li>
              <li><Link className="side-menu-item" to="/ClubroomLocator"><p>동방 찾기</p></Link></li>
              <li><Link className="side-menu-item"to="/Admin"><p>관리자 페이지</p></Link></li>
              <li><Link className="side-menu-item" to="/ClubQuiz"><p>내게 맞는 동아리 찾기</p></Link></li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Header;
