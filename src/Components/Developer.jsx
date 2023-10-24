import React from "react";

function Developer({ developerName, developerColor, developerData }) {
  return (
    <div className="developer-wrap">
      <div style={{ width: "100px", height: "15px", backgroundColor: developerColor}}></div>
      <div className="developer-title">
        <p>{developerName}</p>
      </div>
      <div className="developer-member-wrap">
        {developerData.map((deData) => (
          <div key={deData.id} className="developer-member">
            <div className="member-img">
              <img src={deData.imageUrl} alt="멤버 사진" style={{backgroundColor : deData.backColor}}/>
            </div>
            <div className="developer-typo">
              <h1>{deData.name}</h1>
              <p>{deData.major}</p>
              <p>{deData.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developer;
