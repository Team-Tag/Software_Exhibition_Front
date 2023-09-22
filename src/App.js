import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Styles/Header.css';
import Header from './Components/Header';
import Routing from './Routing';

function App() {
  const [scrollDirection, setScrollDirection] = useState('none');//스크롤 초기 상태 
  const [prevScrollY, setPrevScrollY] = useState(0); // 이전 스크롤 위치를 저장

  useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      //if (위치가 top : 0이라면 none상태입니다.) 초기 상태를 관리 하기 위해 넣어줌
      //else if(만약에 기존 값과 스크롤 이벤트 발생시에 값이 기존 값보다 낮다면 down)
      //else(그렇치 않다면 up이 됩니다.)
      //log는 확인용 지워도됨
      if (currentScrollY === 0) {
        setScrollDirection('none');
        console.log("none");
      } else if (currentScrollY > prevScrollY) {
        if (scrollDirection !== 'down') {
          setScrollDirection('down');
          console.log("down");
        }
      } else {
        if (scrollDirection !== 'up') {
          setScrollDirection('up');
          console.log("up");
        }
      }

      // 현재 스크롤 위치를 prevScrollY 상태에 저장
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);//addEventListnener로 스크롤에 대한 스크롤 정보를 가져옴

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection, prevScrollY]); // scrollDirection과 prevScrollY를 의존성 배열에 추가

  // 스크롤 방향에 따라 스타일 변경
  //down인 경우 scroll-down 그렇지 않은 경우는 up
  const headerClasses = `header ${scrollDirection === 'down' ? 'scroll-down' : 'scroll-up'}`;

  return (
    <BrowserRouter>
      <div className="App">
        {/* Header의 props에 headerClasses를 매개 변수로 보냄 */}
        <Header headerClassName={headerClasses} />
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
