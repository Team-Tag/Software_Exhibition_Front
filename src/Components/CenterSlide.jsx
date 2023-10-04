import React, { Component } from "react";
import Slider from "react-slick";
import '../Styles/SlickSlides.css';
import model1 from '../media/main03_model1.png';
import model2 from '../media/main03_model2.png';
import model3 from '../media/main03_model3.png';
import model4 from '../media/main03_model4.png';
import model5 from '../media/main03_model5.png';
import model6 from '../media/main03_model6.png';
import model7 from '../media/main03_model7.png';
export default class CenterSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      slideIndex1: null,
      slideIndex2: null,
    };
  }

  componentDidMount(){
    this.setState({ 
      slideIndex1: this.slider1, 
      slideIndex2: this.slider2 
    });
  };


  render() {
    const settings1 = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const settings2 = {
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      slidesToShow: 7, 
      infinite: true,
      speed: 500,
      focusOnSelect: true,
      arrows : false,

    };
    return (
      <div className="container-wrap">
        <div className="typo-wrap">
          <p>봉현회</p>
        </div>
        <div className="slide-wrap">
          <div className="slide1-wrap">
            <Slider {...settings1}
            asNavFor={this.state.slideIndex2}
            ref={slider => (this.slider1 = slider)}
            >
              <div className="slick-slider-top">
                <img src={model1} />
              </div>
              <div className="slick-slider-top">
                <img src={model2} />
              </div>
              <div className="slick-slider-top">
                <img src={model3} />
              </div>
              <div className="slick-slider-top">
                <img src={model4} />
              </div>
              <div className="slick-slider-top">
                <img src={model5} />
              </div>
              <div className="slick-slider-top">
                <img src={model6} />
              </div>
              <div className="slick-slider-top">
                <img src={model7} />
              </div>
              <div className="slick-slider-top">
                <img src={model1} />
              </div>
              <div className="slick-slider-top">
                <img src={model2} />
              </div>
              <div className="slick-slider-top">
                <img src={model3} />
              </div>
              <div className="slick-slider-top">
                <img src={model4} />
              </div>
              <div className="slick-slider-top">
                <img src={model5} />
              </div>
            </Slider>
          </div>
          <div className="slide2-wrap">
            <Slider 
            {...settings2}
            asNavFor={this.state.slideIndex1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}
            >
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg"
                  alt="이미지 1"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg"
                  alt="이미지 2"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg"
                  alt="이미지 3"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/08/dog04.jpg"
                  alt="이미지 4"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg"
                  alt="이미지 5"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg"
                  alt="이미지 6"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg"
                  alt="이미지 7"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/08/dog04.jpg"
                  alt="이미지 8"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg"
                  alt="이미지 9"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg"
                  alt="이미지 10"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg"
                  alt="이미지 11"
                />
              </div>
              <div className="slick-slider-bottom">
                <img
                  src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg"
                  alt="이미지 12"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
