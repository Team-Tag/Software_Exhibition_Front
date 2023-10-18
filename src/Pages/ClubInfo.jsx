import React from "react";
import "../Styles/ClubInfo.css";
import SyncedSliders from "../Components/SyncedSliders";
import SimpleSlide from "../Components/SimpleSlide";
function ClubInfo() {
    return (
      <div className="ClubInfo-wrap">
        <div className="ClubInfo-content-wrap">
          <div className="section1-wrap">
            <SyncedSliders/>
          </div>
          <div className="section2-wrap">
            <div className="ClubInfo-typo-wrap"><p>분과별 동아리</p></div>
            <SimpleSlide className="category1"/>
            <SimpleSlide className="category2"/>
            <SimpleSlide className="category3"/>
            <SimpleSlide className="category4"/>
            <SimpleSlide className="category5"/>
            <SimpleSlide className="category6"/>
          </div>

        </div>
        
      </div>
    );
  }
  
  export default ClubInfo;