import React from 'react';
import '../Styles/SlideButton.css'
function SlideButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="custom-slider-button">
      {children}
    </button>
  );
}

export default SlideButton;