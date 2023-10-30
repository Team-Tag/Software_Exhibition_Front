import React from "react";
import "../Styles/ScrollUp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesUp } from '@fortawesome/free-solid-svg-icons';

function ScrollUp(props) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="scroll__container">
            <button id="top" onClick={scrollToTop} type="button" >
                <FontAwesomeIcon icon={faAnglesUp} style={{color: "#ffffff",}} />
            </button>
        </div>
    );
}

export default ScrollUp;
