import React from "react";
import { useEffect, useState } from "react";
import '../Styles/Main.css';
import { Link } from 'react-router-dom';
import main_model1 from '../media/main01_model.svg';
import Footer from "../Components/Footer";
import BoxMenu from "../Components/BoxMenu";
import ScrollUp from "../Components/ScrollUp";




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
                <img src={main_model1} alt="메인모델"/>
              </div>
            </div>
          </section>
          <section className="main02">
            <div className="tit-wrap">
              <p style={{opacity: (position -1000)/100,}}>너의 동아리<br/>내가 찾아줄게</p>
            </div>
          </section>
          <section className="main03">
            <div className="footprint-wrap">
              <div style={{opacity: (position -1800)/100,}} className="footprint01"></div>
              <div style={{opacity: (position -1850)/100,}} className="footprint02"></div>
              <div style={{opacity: (position -1900)/100,}} className="footprint03"></div>
              <div style={{opacity: (position -1950)/100,}} className="footprint04"></div>
              <div style={{opacity: (position -1960)/100,}} className="footprint05"></div>
              <div style={{opacity: (position -2100)/100,}} className="footprint06"></div>
              <div style={{opacity: (position -2150)/100,}} className="footprint07"></div>
              <div style={{opacity: (position -2200)/100,}} className="footprint08"></div>
              <div style={{opacity: (position -2250)/100,}} className="footprint09"></div>
              <div style={{opacity: (position -2300)/100,}} className="footprint10"></div>
              <div style={{opacity: (position -2400)/100,}} className="footprint11"></div>
              <div style={{opacity: (position -2450)/100,}} className="footprint12"></div>
              
              <div style={{opacity: (position -2470)/100,}}className="model03-model01"></div>
              <div style={{opacity: (position -1980)/100,}}className="model03-model02"></div>
              <div style={{opacity: (position -2300)/100,}}className="model03-model03"></div>
              <div style={{opacity: (position -2480)/100,}}className="slide-box"></div>
            
            </div>
            
          </section>
          <section className="main04">
            <div className="boxmenu-wrap" style={{opacity: (position -3000)/100,}}>
              <Link to="/ClubroomLocator">
                <BoxMenu 
                color="white" 
                width = "255px"
                title="나에게 맞는 동아리 찾기" 
                about="준비된 질문을 통해 나에게 맞는 동아리를 추천 해드립니다." />
              </Link>

              <Link to="/ClubFinder">
                <BoxMenu 
                width = "200px"
                color= "yellow" 
                title="동아리방 찾기" 
                about="지도를 통해 궁금한 동아리의 동아리방을 확인 할 수 있어요"/> 
              </Link>
            </div>
          </section>
          <ScrollUp/>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Main;
  
