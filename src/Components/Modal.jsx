
import React, { useState, useRef } from "react";
import "../Styles/Modal.css";

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const modalBackground = useRef();
    
    const handleOpenModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    return (
      <>
        <div className={'btn-wrapper'}>
          
          <div className={'modal-open-btn , modal-test'}  onClick={() => handleOpenModal("1번 모달")}>
                1번 모달
          </div>
          <div className={'modal-open-btn , modal-test'}  onClick={() => handleOpenModal("2번 모달")}>
                2번 모달
          </div>
          <div className={'modal-open-btn , modal-test'}  onClick={() => handleOpenModal("3번 모달")}>
                3번 모달
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
                <p>{modalContent}</p>
                <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                    모달 닫기
                </button>
            </div>
          </div>
        }
      </>
    );
  };
  
  export default Modal;