import React from "react";
import { useEffect, useState } from "react";
import '../Styles/Main.css';
import main_model1 from '../media/model_main01.svg';
import Footer from "../Components/Footer";
import BoxMenu from "../Components/BoxMenu";
import CenterSlider from "../Components/CenterSlide";

function Main() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [position, setPosition] = useState(0);
  function onScroll(){
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }

  useEffect(() => {
    setIsTextVisible(true);
    window.addEventListener("scroll", onScroll);
    return ()=>{
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

    return (
      <div className="wrap">
        <div className="content-wrap">
          <section className="main01">
            <div className={`typo-wrap ${isTextVisible ? 'fade-in-text' : ''}`}>
              <div className="type01">
                <div className="fill"></div>
              </div>
              <div className="type02">
                <div className="fill"></div>
              </div>
              <div className="type03">
                <div className="fill"></div>
              </div>
              <div className="type04">
                <div className="fill"></div>
              </div>
            </div>
            <div className={`model-wrap ${isTextVisible ? 'fade-in-model' : ''}`}>
              <div className="model">
                <img src={main_model1}/>
              </div>
            </div>
          </section>
          <section className="main02">
            <div className="tit-wrap">
              <p style={{opacity: (position -1200)/100,}}>너의 동아리<br/>내가 찾아줄게</p>
            </div>
          </section>
          <section className="main03">
            <div className="container-wrap">
              <CenterSlider/>
            </div>
          </section>
          <section className="main04">
            <div className="boxmenu-wrap" style={{opacity: (position -2500)/100,}}>
              <BoxMenu 
              color="white" 
              width = "255px"
              title="나에게 맞는 동아리 찾기" 
              about="준비된 질문을 통해 나에게 맞는 동아리를 추천 해드립니다."/>
              <BoxMenu 
              width = "200px"
              color= "yellow" 
              title="동아리방 찾기" 
              about="지도를 통해 궁금한 동아리의 동아리방을 확인 할 수 있어요"/>
              
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Main;
  