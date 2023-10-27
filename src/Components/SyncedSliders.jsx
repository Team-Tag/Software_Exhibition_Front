import React, { Component } from "react";
import Slider from "react-slick";
import "../Styles/SyncedSliders.css";
class SyncedSliders extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }

    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
    
    render() {
      const settingsMain = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
  
      const settingsThumbs = {
        
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };
      const slideData = [
        // 공연분과
        {
          clubName : "먹메",
          clubTitle : "재미와 미소가 노는 곳.",
          clubImg :"/bestClub/mukmae.jpg",
        },
        {
          clubName : "봉현회",
          clubTitle : "현실을 멜로디로 표현합니다.",
          clubImg :"/bestClub/bonghyeonhoe.jpg",
        },
        {
          clubName : "수레바퀴",
          clubTitle : "음악의 바퀴, 함께 회전합니다.",
          clubImg :"/bestClub/sulebakwi.jpg",
        },
        {
          clubName : "유니콘",
          clubTitle : "함성과 미소로 화려하게!",
          clubImg :"/bestClub/yunikon.jpg",
        },
        {
          clubName : "춤바람",
          clubTitle : "춤은 바람처럼 자유로워요.",
          clubImg :"/bestClub/chumbalam.jpg",
        },
        {
          clubName : "한림극회",
          clubTitle : "무대 위의 역할, 우리가 소환합니다.",
          clubImg :"/bestClub/hanlimgeughoe.jpg",
        },
        {
          clubName : "힙합PD",
          clubTitle : "비트와 리릭의 만남, 힙합의 세계로.",
          clubImg :"/bestClub/hiphopPD.jpeg",
        },
        {
          clubName : "Assemble",
          clubTitle : "춤의 마법, 함께 조합해요.",
          clubImg :"/bestClub/Assemble.jpg",
        },
        {
          clubName : "CODA",
          clubTitle : "우리의 노래, 여기에서 시작됩니다.",
          clubImg :"/bestClub/CODA.jpg",
        },
        {
          clubName : "X-Ray",
          clubTitle : "음악의 광선, 음악의 미래를 밝히다.",
          clubImg :"/bestClub/X-Ray.jpg",
        },
        // 체육분과
        {
          clubName : "공굴리기",
          clubTitle : "공의 굴림에 열정을 담다, 볼링 동아리.",
          clubImg :"/bestClub/gong.jpg",
        },
        {
          clubName : "데구르르",
          clubTitle : "스페어와 스트라이크를 향한 볼링 모험.",
          clubImg :"/bestClub/deguleu.jpg",
        },
        {
          clubName : "레이서스",
          clubTitle : "야구를 향한 열정을 무한 경주로.",
          clubImg :"/bestClub/racers.jpg",
        },
        {
          clubName : "매치포인트",
          clubTitle : "탁구의 매치포인트를 찾아라!",
          clubImg :"/bestClub/matchpoint.jpg",
        },
        {
          clubName : "스네이크",
          clubTitle : "야구장을 미끄러져 오르다.",
          clubImg :"/bestClub/snake.jpg",
        },
        {
          clubName : "케미",
          clubTitle : "농구 코트에서 화려한 화학 반응.",
          clubImg :"/bestClub/kemi.jpg",
        },
        {
          clubName : "키커",
          clubTitle : "축구 경기장의 슛맨.",
          clubImg :"/bestClub/kicker.jpg",
        },
        {
          clubName : "피닉스",
          clubTitle : "미식축구의 전장, 남자의 힘을 불태우다.",
          clubImg :"/bestClub/Phoenix.jpg",
        },
        {
          clubName : "한림FC",
          clubTitle : "여자축구의 힘, 함께 빛나다.",
          clubImg :"/bestClub/hallymFC.jpg",
        },
        {
          clubName : "해강박",
          clubTitle : "마스터가 되어 검도의 기술을 연마.",
          clubImg :"/bestClub/haeobakgak.jpg",
        },
        {
          clubName : "Tie-Break",
          clubTitle : "테니스 코트에서 결정적인 순간.",
          clubImg :"/bestClub/TieBreak.jpg",
        },
        {
          clubName : "X-TRIC",
          clubTitle : "극한 스포츠의 경험, 경계를 넘어.",
          clubImg :"/bestClub/Extric.png",
        },
        // 취미예술
        {
          clubName : "영상틀",
          clubTitle : "이야기를 영상으로 풀어내는 예술.",
          clubImg :"/bestClub/yeongsangteul.png",
        },
        {
          clubName : "천지",
          clubTitle : "만화로 창조되는 무한한 상상력.",
          clubImg :"/bestClub/cheonji.jpg",
        },
        {
          clubName : "푸메토",
          clubTitle : "만화의 세계, 감성의 흐름.",
          clubImg :"/bestClub/pumeto.jpg",
        },
        {
          clubName : "하얀도화지",
          clubTitle : "미술로 표현하는 아름다움의 도화지.",
          clubImg :"/bestClub/hayandohwaji.jpg",
        },
        {
          clubName : "한빛사진회",
          clubTitle : "좋은 순간을 사진으로 담아냅니다.",
          clubImg :"/bestClub/hanbichsajinhoe.jpg",
        },
        {
          clubName : "IDENTITY",
          clubTitle : "보드의 매력, 독특한 아이덴티티.",
          clubImg :"/bestClub/IDENTITY.jpg",
        },
        // 학술분과
        {
          clubName : "시리우스",
          clubTitle : "별빛같은 미래를 타로와 함께 예측합니다.",
          clubImg :"/bestClub/siliuseu.jpg",
        },
        {
          clubName : "FIMP",
          clubTitle : "자연과 생명을 탐구하는 생물연구 동아리.",
          clubImg :"/bestClub/FIMP.jpg",
        },
        //봉사분과
        {
          clubName : "GIVE",
          clubTitle : "사랑과 재능을 나누는, 재능 기부 동아리.",
          clubImg :"/bestClub/GIVE.png",
        },
        {
          clubName : "RCY",
          clubTitle : "아무도 남겨두지 않을, 봉사의 힘.",
          clubImg :"/bestClub/RCY.jpg",
        },
        //종교분과
        {
          clubName : "CCC",
          clubTitle : "영혼의 음악, 기독교의 가족.",
          clubImg :"/bestClub/CCC.jpg",
        },
        {
          clubName : "대불련",
          clubTitle : "평화와 깨달음을 찾는 불교의 모임.",
          clubImg :"/bestClub/daebullyeon.jpg",
        },
        {
          clubName : "카톨릭학생회",
          clubTitle : "믿음과 사랑으로 결집하는 천주교의 모험.",
          clubImg :"/bestClub/gatollig.jpg",
        },
      ]
      return (
        
        <div className="SyncedSliders-container-wrap">
          
          <div className="typo-wrap">
            <div className="title-tag">
                <p>Club Introduction</p>
            </div>
            <h2>동아리 소개</h2>
          </div>
          <div className="slideMain-wrap">
            <Slider {...settingsMain}
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
            >
              {slideData.map((slide, index) => (
              <div className="club-wrap" key={index}>
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">{slide.clubName}</p>
                    <p className="club-title">{slide.clubTitle}</p>
                  </div>
                  <div className="club-img">
                    <img src={slide.clubImg} alt="베스트 동아리 사진"/>
                  </div>
                </div>
              </div>
              ))}
            </Slider>
          </div>
          <div className="slideThumbs-wrap">
            <Slider 
            {...settingsThumbs}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}
            >
              {slideData.map((slide, index) => (
              <div className="small-img"  key={index}>
                <img 
                src={slide.clubImg} 
                style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "15px",
                }}
                alt="베스트 동아리 사진"/>
              </div>
              ))}
            </Slider>
          </div>
        </div>
      );
    }
  }
  
  export default SyncedSliders;