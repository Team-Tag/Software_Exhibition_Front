import React from "react";
import "../Styles/ClubInfo.css";
import SyncedSliders from "../Components/SyncedSliders";
import SimpleSlide from "../Components/SimpleSlide";
import Footer from "../Components/Footer";
import ScrollUp from "../Components/ScrollUp";

function ClubInfo() {
  const slides = [
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄소년단",
      content: "아미들 위험함",
      
    },
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄소년단",
      content: "뷔 존잘",
    },
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄소년단",
      content: "대성 존잘",
    },
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄소년단",
      content: "뷔 = 대성",
    },
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄소년단",
      content: "남주혁 = 대성",
    },
  ]
  const slides2 = [
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄조끼",
      content: "아미들 위험함",
    },
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄조끼",
      content: "뷔 존잘",
    },
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄조끼",
      content: "대성 존잘",
    },
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄조끼",
      content: "뷔 = 대성",
    },
    {
      imageSrc: "https://newsimg.sedaily.com/2023/06/14/29QUQACUOS_16.jpg",
      title: "방탄조끼",
      content: "남주혁 = 대성",
    },
  ]
    return (

      <div className="ClubInfo-wrap">
        <div className="ClubInfo-content-wrap">
          <div className="section1-wrap">
            <SyncedSliders/>
          </div>
          <div className="section2-wrap">
            <div className="ClubInfo-typo-wrap">
              <p>분과별 동아리</p>
            </div>
            <SimpleSlide className="category1" category="공연" categoryAbout = {"공연함"} slideData={slides} />
            <SimpleSlide className="category1" category="체육" categoryAbout = {"운동함"} slideData={slides2} />
            <SimpleSlide className="category1" category="취미예술" categoryAbout = {"예술적인 활동 함"} slideData={slides} />
            <SimpleSlide className="category1" category="학술" categoryAbout = {"공부함"} slideData={slides2} />
            <SimpleSlide className="category1" category="봉사" categoryAbout = {"봉사함"} slideData={slides} />
            <SimpleSlide className="category1" category="종교" categoryAbout = {"종교활동함"} slideData={slides2} />
          </div>
          <Footer style={{ marginTop : "200px"}}/>
        </div>
        <ScrollUp/>
      </div>
    );
  }
  
  export default ClubInfo;