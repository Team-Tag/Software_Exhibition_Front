import React, { useState } from "react";
import '../Styles/ClubFinder.css'
// import img_ma from '../media/madoung_finder.png'

 
function ClubFinder() {
  const [modalOpen,setModalOpen]=useState(false);
  const [count,setCount]=useState(1);
  const showModal=()=>{
    setModalOpen(true);
  }
  const closeModal=()=>{
      setModalOpen(false);
  }
  const upCount=()=>{
    setCount(count+1);
  }
  const downCount=()=>{
    setCount(count-1);
  }
    return (
      <div className="ClubFinder_wrap">
        <div className="ClubFinder_box1">
            <h1>내게 맞는 동아리 찾기</h1>
            <h2>48개의 동아리 중 내게 맞는 동아리를 찾아보세요</h2>
            <div id="FindClub_btn" onClick={showModal}>START</div>
        </div>
        <div className="">

        </div>
        {modalOpen && 
        <div className="ClubFinder_modal">
          <div className="modal_box">
            <div id="modal_header">내게 맞는 동아리 찾기</div>
            <div id="modal_article">
              <div>STEP {count}</div>
              <h3>{count}번의 내용 설명</h3>
              <div>쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르
                륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~
                쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~쭈르륵~</div>
            </div>
            <div id="modal_btn">
              <svg  onClick={downCount} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
              <svg onClick={upCount} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
            </div>
            <div id="closeModal" onClick={closeModal}>❌</div>
          </div>
          
        </div>}
        
      </div>
      
    );
  }
  
  export default ClubFinder;