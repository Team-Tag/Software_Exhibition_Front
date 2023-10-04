import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; // Slick Carousel 스타일 가져오기
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel 테마 스타일 가져오기
//css
import './index.css';
import './Styles/Font.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

