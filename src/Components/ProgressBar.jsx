import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

ProgressBar=()=>{
  return (
    <div>
      {/* 다음과 같이 ProgressBar 컴포넌트를 사용할 수 있습니다. */}
      <ProgressBar
        completed={0} // 진행률 (0부터 100 사이의 값)
        bgColor="#F9DE67" // 진행 바의 배경색F9DE67
        height="10px" // 진행 바의 높이
      />
    </div>
  );
}

export default ProgressBar;
