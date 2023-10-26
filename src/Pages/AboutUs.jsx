import React from "react";

import "../Styles/AboutUs.css";
import logo from "../media/mainLogo.png";
import Developer from "../Components/Developer.jsx";
import Footer from "../Components/Footer";
import menber01 from "../media/menber01.png";
import menber02 from "../media/menber02.png";
import menber03 from "../media/menber03.png";
import menber04 from "../media/menber04.png";
import menber05 from "../media/menber05.png";
import ScrollUp from "../Components/ScrollUp";

function AboutUs() {
  const frontData = [
    {
      imageUrl : `${menber01}`,
      backColor : "#E4D339",
      name : "21학번 김대성",
      major : "콘텐츠IT전공",
      role : "프론트 쌉고수, UI/UX 디자이너",
    },
    {
      imageUrl : `${menber02}`,
      backColor : "#7BDB4E",
      name : "20학번 노기훈",
      major : "빅데이터IT전공",
      role : "프론트장인",
    }
  ]
  const BackData = [
    {
      imageUrl : `${menber05}`,
      backColor : "#DD4949",
      name : "20학번 김선우",
      major : "빅데이터IT전공",
      role : "태그팀장",
    },
    {
      imageUrl : `${menber03}`,
      backColor : "#F9DBAE",
      name : "20학번 지우림",
      major : "빅데이터IT전공",
      role : "개발 팀장",
    }
  ]
  const GameData = [
    {
      imageUrl : `${menber04}`,
      backColor : "#F3943C",
      name : "20학번 최예찬",
      major : "콘텐츠IT전공",
      role : "게임 장인",
    },

  ]
    return (
      <>
        <div className="aboutUs-wrap">
          <div className="aboutUs-section1">
            <div className="title-tag">
              <p>Purpose of Creation</p>
            </div>
            <div className="aboutUs-head1">
              <p>개발 스토리</p>
            </div>
            <div className="aboutUs-tagline">
              <p>한림대학교 대표 학술 동아리 “CAERAN”</p>
            </div>
            <div className="aboutUs-History">
              <div className="History-typo">
                <p>
                  학생들에게 학교 내 중앙 동아리 정보를 손쉽게 접근하고 
                  검색할 수 있는 편리한 플랫폼을 제공하여 동아리 활동을 
                  촉진합니다.
                </p>
                <p>
                  개개인의 관심사와 전공을 고려하여 동아리 추천 서비스를 제공하여 학생들이 
                  가장 적합한 동아리를 찾을 수 있도록 돕습니다.
                </p>
                <p>
                동아리방 찾기 게임을 추가하여 학생들에게 다양한 중앙 동아리를 더욱 흥미롭게 
                발견하고, 학교 내 동아리에 대한 시각적 경험을 제공하는 것입니다.
                </p>
              </div>
              <div className="History-model">
                  <img src={logo} alt="Logo"/>
              </div>
            </div>
            <div className="aboutUs-section1-gradient"></div>
          </div>
          <div className="aboutUs-section2">
            <div className="title-tag">
              <p>Member Intro</p>
            </div>
            <div className="aboutUs-head2">
              <p>멤버 소개</p>
            </div>
            <div className="developer-componet-wrap">
              <Developer developerName={"프론트엔드 / Front-End"} developerColor={"#FFB803"} developerData={frontData}/>
              <Developer developerName={"백엔드 / Back-End"} developerColor={"#22C81F"} developerData={BackData}/>
              <Developer developerName={"게임 / Game"} developerColor={"#DB2D2D"} developerData={GameData}/>
            </div>
          </div>
          <ScrollUp/>
        </div>
        <Footer/>
      </>

    );
  }
  
  export default AboutUs;