import { Link } from 'react-scroll';//, Element
import {   useState } from 'react';
import '../Styles/ClubQuiz.css';
import BestClub from '../Components/BestClub';
import ProgressBar from '@ramonak/react-progress-bar';
const selectedKey=[];
const pushit=[];
// const recommend=[];
const ClubQuiz=()=>{
  // const parsedData = JSON.parse(jsonData);

    const quizSteps = [
      
        {
          key: 1,
          question: "드디어 종강이다!!! 나는 이번 주말에??",
          answers: [
            { key: "11", text: "DIY키트 만들어야지~ ", value: "예술" },
            { key: "12", text: "운동은 못 참지", value: "체육" },
            { key: "13", text: "공연 보러가자!", value: "음악" },
            { key: "14", text: "그 동안 못 갔던 봉사 다녀야지", value: "봉사" },
            { key: "15", text: "기도하러 가자", value: "종교" },
            { key: "16", text: "하고 싶었던 공부해야지~", value: "학술" },
          ],
        },
        {
          key: 2,
          question: "고된 하루를 마치고 침대에 누으면 유투브에 뜨는 컨텐츠는?",
          answers: [
            { key: "21", text: "켄들, 퍼즐같은 DIY 만들기", value: "a_lot" },
            { key: "22", text: "짐종국, 아놀드 형님, 텍사스 프로 박재훈", value: "moderate" },
            { key: "23", text: "나의 고막을 책임질 PLAYLIST", value: "not_much" },
            { key: "24", text: "자원봉사 브이로그", value: "not_much" },
            { key: "25", text: "찬양가, 나무아미타불", value: "not_much" },
            { key: "26", text: "벌거벗은 세계사, 궤도의 과학 이야기", value: "not_much" }
          ],
        },
        {
          key: 3,
          question: "방학때 떠날 여행지를 선택하자면 ",
          answers: [
            { key: "31", text: "서울의 감각있는 미술관" },
            { key: "32", text: "헬스장 있는 호텔" },
            { key: "33", text: "좋아하는 가수가 콘서트를 개최하는 지역" },
            { key: "34", text: "자원봉사를 할 수 있는 나라" },
            { key: "35", text: "선교활동을 할 수 있는 나라" },
            { key: "36", text: "박물관이 많은 나라" }
          ],
        },
        // 추가 질문들
        {
          key: 4,
          question: "당신은 지금 뮤지컬을 보고있습니다..",
          answers: [
            { key: "41", text: "나의 댄스DNA가 나를 자극한다." },//춤바람 유니콘
            { key: "42", text: "악기를 다루는 모습에 감탄이 나온다."},//코다 먹메
            { key: "43", text: "나도 나만의 음악을 만들어 보고 싶다고 생각한다." },//힙합피디
            { key: "44",text:"멋진 작품에 들은 많은 사람들의 노력에 감탄한다."},//한림극회
            { key: "45",text:"마이크를 잡고 노래하는 모습을 상상한다."},//두레박

          ],
        },
        {
          key: 5,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "51", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "52",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "53", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "54", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "55",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 6,
          question: "어떤 동아리 분위기를 선호하시나요?",
          answers: [
            { key: "61", text: "친화적이고 활발한 분위기", value: "friendly_active" },
            { key: "62", text: "조용하고 집중적인 분위기", value: "quiet_focused" },
            { key: "63", text: "다양한 분위기 체험", value: "diverse_experience" },
          ],
        },
        {
          key: 7,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "71", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "72",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "73", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "74", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "75",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 8,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "81", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "82",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "83", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "84", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "85",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 9,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "91", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "92",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "93", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "94", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "95",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 5,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "51", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "52",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "53", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "54", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "55",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 10,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "101", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "102",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "103", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "104", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "105",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박11
          ],
        },
        {
          key: 11,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "111", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "112",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "113", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "114", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "115",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 12,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "121", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "122",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "123", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "124", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "125",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 13,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "131", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "132",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "133", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "134", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "135",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 14,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "141", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "142",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "143", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "144", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "145",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        },
        {
          key: 15,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "151", text: "스우파 직관  티켓" },//춤바람 유니콘
            { key: "152",text:"비긴어게인 버스킹 관람권"},//코다 먹메
            { key: "153", text: "쇼미더머니 본선 관람권"},//힘팝피디
            { key: "154", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회
            { key: "155",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//두래박

          ],
        }

      ];
     
    const [cntQuizNum,setNum]=useState(0);
    // item선택 항목 저장
    const [selectedItems, setSelectedItems] = useState([]);
    /**clickNExt함수는 클릴하면 다음 질문으로 넘어가게 하는 함수*/
    const clickNext=()=>{
        setNum(cntQuizNum+1);
        const num=pushit.length;
        const pushKey=pushit[num-1];
        selectedKey.push(pushKey);
        // cntLogic();
    };
    const clickBefore=()=>{
        setNum(cntQuizNum-1);
    };
    const handleClick = (answer) => {
      setSelectedItems(answer);
      selectKey(answer)
    };
    const selectKey=(answer)=>{
      pushit.push(answer);
        // console.log(...pushit);
    };

    return(
        <div className="ClubFinder_wrap" >
            <div className="ClubFinder_box1">
                <h1>내게 맞는 동아리 찾기</h1>
                <h2>48개의 동아리 중 내게 맞는 동아리를 찾아보세요</h2>
                {/* <div  id="FindClub_btn"></div>             */}
                <Link id="FindClub_btn"to="Question" smooth={true} duration={700}>START</Link>
            </div>
            <div name="Question" className="box2_article">
              <div >
              <h1 className="Question_Title">동아리 추천해줄게</h1>
              </div>
                <div>
                    <h1>질문{cntQuizNum+1}</h1>
                    {/* 7개 중에 1인 7/1*/}
                    <ProgressBar className='ProgressBar' completed={Math.floor(((cntQuizNum)/15)*100)}/>
                    <div className='Question_box'>
                        {(cntQuizNum<15 && cntQuizNum>-1) &&<svg onClick={clickBefore}  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>                            }                            
                        {(cntQuizNum<15 && cntQuizNum>-1) && 
                            <div className='Main_Question' key={quizSteps.cntQuizNum}>
                                <h1>{quizSteps[cntQuizNum].question}</h1>
                                <ul>
                                    {quizSteps[cntQuizNum].answers.map((answer,index)=>(
                                        <li  onClick={()=>handleClick(answer.key)} className={selectedItems===answer.key ? 'selected' : ''} key={index}>
                                            {answer.text} 
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            }
                            {cntQuizNum===15 && 
                            <BestClub  selectedKey={selectedKey}/>
                           
                            }
                            {(cntQuizNum<15 && cntQuizNum>-1) &&<svg onClick={clickNext} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
}                            {/* <button name="next" >다음!!!</button> */}
                    </div>
                </div>            
            </div>
        </div>
    );
}
export default ClubQuiz;