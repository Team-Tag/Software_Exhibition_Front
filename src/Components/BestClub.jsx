// import { useState } from "react";
const artsClubs = [
  {
    name: "DIY 동아리",
    department: "예술",
    count: 1,
    key: "1",
  },
  {
    name: "서예 동아리",
    department: "예술",
    count: 1,
    key: "2",
  },
  {
    name: "사진 동아리",
    department: "예술",
    count: 1,
    key: "3",
  },
  {
    name: "무용 동아리",
    department: "예술",
    count: 1,
    key: "4",
  },
  // ...
];

const sportsClubs = [
  {
    name: "축구 동아리",
    department: "체육",
    count: 1,
    key: "1",
  },
  {
    name: "농구 동아리",
    department: "체육",
    count: 1,
    key: "2",
  },
  {
    name: "탁구 동아리",
    department: "체육",
    count: 1,
    key: "3",
  },
  {
    name: "수영 동아리",
    department: "체육",
    count: 1,
    key: "4",
  },
  // ...
];

const musicClubs = [
  {
    name: "국악 동아리",
    department: "음악",
    count: 1,
    key: "1",
  },
  {
    name: "로큰롤 밴드",
    department: "음악",
    count: 1,
    key: "2",
  },
  {
    name: "재즈 밴드",
    department: "음악",
    count: 1,
    key: "3",
  },
  {
    name: "관현악단",
    department: "음악",
    count: 1,
    key: "4",
  },
  // ...
];

const volunteeringClubs = [
  {
    name: "사회봉사 동아리",
    department: "봉사",
    count: 1,
    key: "1",
  },
  {
    name: "환경보호 동아리",
    department: "봉사",
    count: 1,
    key: "2",
  },
  {
    name: "아동보호 동아리",
    department: "봉사",
    count: 1,
    key: "3",
  },
  {
    name: "노인 돌봄 동아리",
    department: "봉사",
    count: 1,
    key: "4",
  },
  // ...
];

const religiousClubs = [
  {
    name: "기독교 동아리",
    department: "종교",
    count: 1,
    key: "1",
  },
  {
    name: "불교 동아리",
    department: "종교",
    count: 1,
    key: "2",
  },
  // ...
];

const academicClubs = [
  {
    name: "수학 동아리",
    department: "학술",
    count: 1,
    key: "1",
  },
  {
    name: "과학 동아리",
    department: "학술",
    count: 1,
    key: "2",
  },
];

  const BestClub=(props)=>{
    const { selectedKey } = props;
    let maxNum=0;
    let bestClub='';
    

    const updateClub=(count,name)=>{
        maxNum=count;
        bestClub=name;
      
    };

    const resultLogic=(selectedKey)=>{
        //max를 저장하는 변수 만들고 카운트 올릴때 마다 max최신화 max는 카운트의 최대값과 동아리명을 같이 저장 
        const num=selectedKey.length;
        let clubBundle;
        let clubDetail;
        //각 질문에서 선택한 개수 만큼 
        for(let i=0;i<num;i++){
            clubBundle=Math.floor(selectedKey[i]/10);//몇 번쨰 질문인지
            clubDetail=selectedKey[i]%10;//질문지에서 몇번을 골랐는지 
            switch(clubBundle){
                case 1://1번 질문
                    if(clubDetail===1){//1번째 선택
                        let len=artsClubs.length;//예술 동아리 카운트 증가 시킬거임 
                        for(let i=0;i<len;i++){
                            (artsClubs[i].count)+=5;
                            if(artsClubs[i].count>maxNum){
                              updateClub(artsClubs[i].count,artsClubs[i].name);
                            }
                        }
                    }else if(clubDetail===2){
                        let len=sportsClubs.length;
                        for(let i=0;i<len;i++){
                            sportsClubs[i].count+=5;
                            if(sportsClubs[i].count>maxNum){
                              updateClub(sportsClubs[i].count,sportsClubs[i].name);
                            }
                        }
                    }
                    else if(clubDetail===3){
                        let len=musicClubs.length;
                        for(let i=0;i<len;i++){
                            musicClubs[i].count+=5;
                            if(musicClubs[i].count>maxNum){
                              updateClub(musicClubs[i].count,musicClubs[i].name);
                            }
                        }
                    }
                    else if(clubDetail===4){
                        let len=volunteeringClubs.length;
                        for(let i=0;i<len;i++){
                            volunteeringClubs[i].count+=5;
                            if(volunteeringClubs[i].count>maxNum){
                              updateClub(volunteeringClubs[i].count,volunteeringClubs[i].name);
                            }
                        }
                    }
                    else if(clubDetail===5){
                        let len=religiousClubs.length;
                        for(let i=0;i<len;i++){
                            religiousClubs[i].count+=5;
                            if(religiousClubs[i].count>maxNum){
                              updateClub(religiousClubs[i].count,religiousClubs[i].name);
                            }
                        }
                    }
                    else if(clubDetail===6){
                        let len=academicClubs.length;
                        for(let i=0;i<len;i++){
                          academicClubs[i].count+=5;
                          if(academicClubs[i].count>maxNum){
                            updateClub(academicClubs[i].count,academicClubs[i].name);
                          }
                      }
                    }
                    break;
                case 2:
                  if(clubDetail===1){//1번째 선택
                    let len=artsClubs.length;//예술 동아리 카운트 증가 시킬거임 
                    for(let i=0;i<len;i++){
                        (artsClubs[i].count)+=5;
                        if(artsClubs[i].count>maxNum){
                          updateClub(artsClubs[i].count,artsClubs[i].name);
                        }
                    }
                }else if(clubDetail===2){
                    let len=sportsClubs.length;
                    for(let i=0;i<len;i++){
                        sportsClubs[i].count+=5;
                        if(sportsClubs[i].count>maxNum){
                          updateClub(sportsClubs[i].count,sportsClubs[i].name);
                        }
                    }
                }
                else if(clubDetail===3){
                    let len=musicClubs.length;
                    for(let i=0;i<len;i++){
                        musicClubs[i].count+=5;
                        if(musicClubs[i].count>maxNum){
                          updateClub(musicClubs[i].count,musicClubs[i].name);
                        }
                    }
                }
                else if(clubDetail===4){
                    let len=volunteeringClubs.length;
                    for(let i=0;i<len;i++){
                        volunteeringClubs[i].count+=5;
                        if(volunteeringClubs[i].count>maxNum){
                          updateClub(volunteeringClubs[i].count,volunteeringClubs[i].name);
                        }
                    }
                }
                else if(clubDetail===5){
                    let len=religiousClubs.length;
                    for(let i=0;i<len;i++){
                        religiousClubs[i].count+=5;
                        if(religiousClubs[i].count>maxNum){
                          updateClub(religiousClubs[i].count,religiousClubs[i].name);
                        }
                    }
                }
                else if(clubDetail===6){
                    let len=academicClubs.length;
                    for(let i=0;i<len;i++){
                      academicClubs[i].count+=5;
                      if(academicClubs[i].count>maxNum){
                        updateClub(academicClubs[i].count,academicClubs[i].name);
                      }
                  }
                }
    
                    break;
                case 3:
                  if(clubDetail===1){//1번째 선택
                    let len=artsClubs.length;//예술 동아리 카운트 증가 시킬거임 
                    for(let i=0;i<len;i++){
                        (artsClubs[i].count)+=5;
                        if(artsClubs[i].count>maxNum){
                          updateClub(artsClubs[i].count,artsClubs[i].name);
                        }
                    }
                }else if(clubDetail===2){
                    let len=sportsClubs.length;
                    for(let i=0;i<len;i++){
                        sportsClubs[i].count+=5;
                        if(sportsClubs[i].count>maxNum){
                          updateClub(sportsClubs[i].count,sportsClubs[i].name);
                        }
                    }
                }
                else if(clubDetail===3){
                    let len=musicClubs.length;
                    for(let i=0;i<len;i++){
                        musicClubs[i].count+=5;
                        if(musicClubs[i].count>maxNum){
                          updateClub(musicClubs[i].count,musicClubs[i].name);
                        }
                    }
                }
                else if(clubDetail===4){
                    let len=volunteeringClubs.length;
                    for(let i=0;i<len;i++){
                        volunteeringClubs[i].count+=5;
                        if(volunteeringClubs[i].count>maxNum){
                          updateClub(volunteeringClubs[i].count,volunteeringClubs[i].name);
                        }
                    }
                }
                else if(clubDetail===5){
                    let len=religiousClubs.length;
                    for(let i=0;i<len;i++){
                        religiousClubs[i].count+=5;
                        if(religiousClubs[i].count>maxNum){
                          updateClub(religiousClubs[i].count,religiousClubs[i].name);
                        }
                    }
                }
                else if(clubDetail===6){
                    let len=academicClubs.length;
                    for(let i=0;i<len;i++){
                      academicClubs[i].count+=5;
                      if(academicClubs[i].count>maxNum){
                        updateClub(academicClubs[i].count,academicClubs[i].name);
                      }
                  }
                }
                    break;
                case 4:
                    console.log("4번째 질문");
                    console.log(clubDetail);
    
                    break;
                case 5:
                    console.log("5번째 질문");
                    console.log(clubDetail);
    
                    break;
                case 6:
                    console.log("6번째 질문");
                    console.log(clubDetail);
    
                    break;
                default:console.log("error");
                break;;
            }
        }
    };
    resultLogic(selectedKey);

    return(
    <>
    <div>
      <h1>이런 동아리를 추천합니다</h1>
      <h1>{bestClub}</h1>
      <h2>{maxNum}</h2>
    </div>
 
    </>
       
    );
};


export default BestClub;