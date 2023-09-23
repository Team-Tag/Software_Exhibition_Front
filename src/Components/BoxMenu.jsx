import React from "react";
import '../Styles/BoxMenu.css';
function BoxMenu(props) {
    const boxColor = {
        backgroundColor: props.color 
    };
    const fontWeight={
        width : props.width
    };
    return (
        <div className="BoxMenu" style={boxColor}>
                <div className="title" style={fontWeight}>{`${props.title}`}</div>
                <p className="about" style={fontWeight}>{`${props.about}`}</p>
        </div>
    );
}

export default BoxMenu;
