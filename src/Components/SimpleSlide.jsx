import React, { Component } from "react";
import Slider from "react-slick";
import '../Styles/SimpleSlide.css';
import model1 from '../media/main03_model6.png';
class SimpleSlide extends Component {
    render(){
        return(
            <div className="clublide-wrap">
                <div className="SimpleSlide-model-wrap"><img src={model1}/></div>
                <div className="SimpleSlide-card-wrap"><div></div></div>
                <div className="SimpleSlide-category-slide">

                </div>
            </div>
        );
    }
}
export default SimpleSlide;