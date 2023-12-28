import React from "react";
import "../Styles/ClubInfo.css";
import SyncedSliders from "../Components/SyncedSliders";
import SimpleSlide from "../Components/SimpleSlide";
import Footer from "../Components/Footer";
import ScrollUp from "../Components/ScrollUp";

function ClubInfo() {
  const musicClubs = [
    {
      imageSrc: "/musicClub/musicClub01.jpg",
      title: "봉현회",
      content: "기타 동아리",
      
    },
    {
      imageSrc: "/musicClub/musicClub02.jpg",
      title: "CODA",
      content: "밴드 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub03.jpg",
      title: "Assemble",
      content: "춤 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub04.jpg",
      title: "수레바퀴",
      content: "밴드 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub05.jpg",
      title: "유니콘",
      content: "치어리딩 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub06.jpeg",
      title: "춤바람",
      content: "춤 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub07.jpeg",
      title: "한림극회",
      content: "연극 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub11.jpg",
      title: "두레박",
      content: "버스킹 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub08.jpg",
      title: "먹메",
      content: "사물놀이 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub09.jpeg",
      title: "힙합PD",
      content: "힙합 동아리",
    },
    {
      imageSrc: "/musicClub/musicClub10.jpg",
      title: "X-Ray",
      content: "밴드 동아리",
    },

  ]
  const religionClubs = [
    {
      imageSrc: "/religionClub/religionClub01.jpeg",
      title: "CCC",
      content: "기독교 동아리",
    },
    {
      imageSrc: "/religionClub/religionClub02.jpeg",
      title: "한림불회(대불련)",
      content: "불교 동아리",
    },
    {
      imageSrc: "/religionClub/religionClub03.jpeg",
      title: "가톨릭학생회",
      content: "천주교 동아리",
    },
    {
      imageSrc: "/religionClub/religionClub01.jpeg",
      title: "CCC",
      content: "기독교 동아리",
    },
    {
      imageSrc: "/religionClub/religionClub02.jpeg",
      title: "한림불회(대불련)",
      content: "불교 동아리",
    },
    {
      imageSrc: "/religionClub/religionClub03.jpeg",
      title: "가톨릭학생회",
      content: "천주교 동아리",
    },
  ]
  const academicClubs = [
    {
      imageSrc: "/academicClub/academicClub01.jpg",
      title: "FIMP",
      content: "생물연구 동아리",
    },
    {
      imageSrc: "/academicClub/academicClub02.jpeg",
      title: "시리우스",
      content: "타로 동아리",
    },
    {
      imageSrc: "/preparing_Image.png",
      title: "CHAOS",
      content: "스터디 동아리",
    },
    {
      imageSrc: "/academicClub/academicClub01.jpg",
      title: "FIMP",
      content: "생물연구 동아리",
    },
    {
      imageSrc: "/academicClub/academicClub02.jpeg",
      title: "시리우스",
      content: "타로 동아리",
    },
    {
      imageSrc: "/preparing_Image.png",
      title: "CHAOS",
      content: "스터디 동아리",
    },
  ]

  const volunteerClubs =[
    {
      imageSrc:"/volunteerClub/volunteerClub01.png",
      title : "Give",
      content : "재능 기부 동아리"
    },
    {
      imageSrc : "/volunteerClub/volunteerClub02.jpeg",
      title : "RCY",
      content : "봉사 동아리"
    },
    {
      imageSrc: "/preparing_Image.png",
      title: "준비중",
      content: "",
    },
    {
      imageSrc:"/volunteerClub/volunteerClub01.png",
      title : "Give",
      content : "재능 기부 동아리"
    },
    {
      imageSrc : "/volunteerClub/volunteerClub02.jpeg",
      title : "RCY",
      content : "봉사 동아리"
    },
    {
      imageSrc: "/preparing_Image.png",
      title: "준비중",
      content: "",
    },
  ]
  const sportsClubs = [
    {
      imageSrc: "/sportsClubs/sportsClub01.jpg",
      title: "공굴리기",
      content: "볼링 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub02.jpg",
      title: "데구르르",
      content: "볼링 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub03.jpg",
      title: "레이서스",
      content: "야구 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub04.jpg",
      title: "매치포인트",
      content: "탁구 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub05.jpg",
      title: "스네이크",
      content: "야구 동아리",
    },
    {
      imageSrc: "/preparing_Image.png",
      title: "스카이",
      content: "배구 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub06.jpg",
      title: "케미",
      content: "농구 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub07.jpg",
      title: "키커",
      content: "축구동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub08.jpg",
      title: "피닉스",
      content: "미식축구 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub09.jpg",
      title: "한림FC",
      content: "여자축구 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub10.jpg",
      title: "해강박",
      content: "검도 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub11.jpg",
      title: "Tie-Break",
      content: "테니스 동아리",
    },
    {
      imageSrc: "/sportsClubs/sportsClub12.png",
      title: "X-TRIC",
      content: "익스트림 스포츠 동아리",
    },
  ]
  const artsClubs = [
    {
      imageSrc : "/artsClubs/artClub01.png",
      title : "영상틀",
      content : "영상 제작 동아리",
    },
    {
      imageSrc : "/artsClubs/artClub02.jpg",
      title : "천지",
      content : "만화 동아리",
    },
    {
      imageSrc : "/artsClubs/artClub03.jpg",
      title : "푸메토",
      content : "만화 동아리",
    },
    {
      imageSrc : "/artsClubs/artClub04.jpg",
      title : "하얀도화지",
      content : "미술 동아리",
    },
    {
      imageSrc : "/artsClubs/artClub05.jpg",
      title : "한빛사진회",
      content : "사진 동아리",
    },
    {
      imageSrc : "/artsClubs/artClub06.jpeg",
      title : "IDENTITY",
      content : "보드 동아리",
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
            <SimpleSlide className="category1" category="공연" categoryAbout = {"공연함"} slideData={musicClubs} />
            <SimpleSlide className="category1" category="체육" categoryAbout = {"운동함"} slideData={sportsClubs} />
            <SimpleSlide className="category1" category="취미예술" categoryAbout = {"예술적인 활동 함"} slideData={artsClubs} />
            <SimpleSlide className="category1" category="학술" categoryAbout = {"공부함"} slideData={academicClubs} />
            <SimpleSlide className="category1" category="봉사" categoryAbout = {"봉사함"} slideData={volunteerClubs} />
            <SimpleSlide className="category1" category="종교" categoryAbout = {"종교활동함"} slideData={religionClubs} />
          </div>
          <Footer style={{ marginTop : "200px"}}/>
        </div>
        <ScrollUp/>
      </div>
    );
  }
  
  export default ClubInfo;