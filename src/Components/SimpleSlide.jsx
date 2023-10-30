import React, {useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import '../Styles/SimpleSlide.css';
import "../Styles/SyncedSliders.css";
import "../Styles/Modal.css"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark } from '@fortawesome/free-solid-svg-icons';


function SimpleSlide({ category , categoryAbout ,slideData}) {
        // 슬라이드 세팅
        const [slidesToShow, setSlidesToShow] = useState(3); // 초기값은 더 큰 화면을 위해 3으로 설정
        const settingsCategory = {
            infinite: true,
            speed: 500,
            slidesToShow, //상태 관리
            slidesToScroll: 1,
            focusOnSelect: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
        };
        
        //모달 창
        const [modalOpen, setModalOpen] = useState(false);
        const [modalContent, setModalContent] = useState("");
        const modalBackground = useRef();
        useEffect(() => {
            //모달 상태에 따른 스타일 적용
            
            if (modalOpen) {
              // 모달이 열렸을 때 스크롤 비활성화
              document.body.style.overflow = 'hidden';
            } else {
              // 모달이 닫혔을 때 스크롤 활성화
              document.body.style.overflow = 'auto';
            }
            

            //화면이 768px 이하면 slideTo
            const updateSlidesToShow = () => {
                if (window.innerWidth <= 768) {
                  setSlidesToShow(1); // 768px 이하 화면에서는 한 번에 한 슬라이드만 보이도록 설정
                } else {
                  setSlidesToShow(3); // 더 큰 화면에서는 한 번에 세 개의 슬라이드를 보이도록 설정
                }
              };
          
              updateSlidesToShow();
          
              window.addEventListener("resize", updateSlidesToShow);
          
              return () => {
                window.removeEventListener("resize", updateSlidesToShow);
              };
            }, []);

        const handleOpenModal = (clubName) => {
            axios.get(`/api/getSlideContent/${clubName}`)
            .then(response => {
                setModalContent(response.data);
                
            })
            .catch(error => {
                console.error('슬라이드 내용을 가져오는 중 오류 발생:', error);

            });
            
            setModalOpen(true);
            if (modalOpen) {
                document.body.style.overflow = 'hidden';
              } else {
                document.body.style.overflow = 'auto';
              }
        };
        //categoryColors
        const categoryColors = {
            공연: "#225DA2",
            체육: "#22A25D",
            취미예술: "#EFCE20",
            학술: "#E98427",
            봉사: "#DE4A36",
            종교: "#6A22A2",
        };
        
        const boxColor = categoryColors[category] || "#888"; 
        return(
                <div className="clubslide-wrap">
                    <div className={`category-model ${category}-model`} >
                    </div>
                    <div className="clubslide-box" style={{ backgroundColor: boxColor }}>
                        <div className="clubslide-text">
                            <h1>{ category }</h1>
                            <p>{categoryAbout}</p>
                        </div>
                        <div className="clubslide-slide">
                            <Slider {...settingsCategory}>
                                {slideData.map((slide, index) => (
                                <div className="clubslide-slieCard" key={index} onClick={() => handleOpenModal(slide.title)}>
                                    <div className="clubslide-slieCard-img">
                                        <img src={slide.imageSrc} alt="동아리사진"/>
                                    </div>
                                    <div className="clubslide-slieCard-text">
                                    <h1>{slide.title}</h1>
                                    <p>{slide.content}</p>
                                    </div>
                                </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    {
                    modalOpen &&
                    <div className={'modal-container'} ref={modalBackground} onClick={e => {
                        if (e.target === modalBackground.current) {
                        setModalOpen(false);
                        }
                    }}>
                        <div className={'modal-content'}>
                            <div className="modal-box">
                                <div className="modal-typo">
                                    <div className="department-name">
                                        <p>{category}</p>
                                    </div>
                                    <div className="club-name">
                                        <p>{modalContent.clubName}</p>
                                    </div>
                                    <div className="club-img">
                                        <img src={modalContent.photoUrl} alt="활동사진"/>
                                    </div>
                                </div>
                                <div className="modal-detail">
                                <div className={'modal-close-box'}>
                                    <div className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                                        <FontAwesomeIcon icon={faCircleXmark} style={{fontSize: '35px' , color: "#ffffff",}} />
                                    </div>
                                </div>
                                <div className={'modal-content-wrap'}>
                                    <h2>활동 내용</h2>
                                    <p>{modalContent.activityDescription}</p>
                                    <h2>활동 시기</h2>
                                    <p>{modalContent.activitySchedule}</p>
                                    <h2>회비</h2>
                                    <p>{modalContent.membershipFee}</p>
                                    <h2>위치</h2>
                                    <p>{modalContent.clubLocation}</p>
                                </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
        );
    }
export default SimpleSlide;