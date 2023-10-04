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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
  
      const settingsThumbs = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  
      return (
        
        <div className="container-wrap">
          <div className="typo-wrap">
              <h2>동아리 소개</h2>
            </div>
          <div className="slideMain-wrap">
            <Slider {...settingsMain}
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
            >
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>  
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
              <div className="club-wrap">
                <div className="club-info-wrap">
                  <div className="club-text">
                    <p className="club-name">씨애랑</p>
                    <p className="club-title">한림대학교 대표IT동아리</p>
                  </div>
                  <div className="club-img">이미지입니다.</div>
                </div>
              </div>
    
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
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
                <div>Slide 4</div>
                <div>Slide 5</div>
                <div>Slide 6</div>
                <div>Slide 7</div>
                <div>Slide 8</div>
                <div>Slide 9</div>
                <div>Slide 10</div>
                <div>Slide 11</div>
                <div>Slide 12</div>
              </Slider>
          </div>
        </div>
      );
    }
  }
  
  export default SyncedSliders;