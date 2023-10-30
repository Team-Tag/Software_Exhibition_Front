import { Link } from 'react-scroll';//, Element
import {   useState} from 'react';
import '../Styles/ClubQuiz.css';
import BestClub from '../Components/BestClub';
import ProgressBar from '@ramonak/react-progress-bar';

const selectedKey=[];//각 질문에서 최종적으로 고른 질문
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
          key: 4,//공연
          question: "당신은 지금 뮤지컬을 보고있습니다..",
          answers: [//2봉횬회  1수레바퀴 1xray 1코다 2유티콘 2춤바랑 2어셈블 2한림극회 2두레박 2먹메(사물) 2힙합피디 
            { key: "41", text: "나의 댄스DNA가 나를 자극한다." },//춤바람5 유니콘4 어셈블2
            { key: "42", text: "악기를 다루는 모습에 감탄이 나온다."},// 먹메8 봉현회0
            { key: "43", text: "나도 나만의 음악을 만들어 보고 싶다고 생각한다." },//힙합피디9
            { key: "44",text:"멋진 작품에 들은 많은 사람들의 노력에 감탄한다."},//한림극회6
            { key: "45",text:"마이크를 잡고 노래하는 모습을 상상한다."},//두레박7
          ],
        },
        {
          key: 5,
          question: "누군가 당신에게 티켓을 선물한다면 받고싶은 티켓은 ?",
          answers: [
            { key: "51", text: "스우파 직관  티켓" },//춤바람5유니콘4 어셈블2
            { key: "52",text:"예술의 전당에서 하는 클래식 공연 티켓 or 한국의 멋, 풍물놀이 티켓 "},//먹메 봉현회
            { key: "53", text: "쇼미더머니 본선 관람권"},//힘팝피디9
            { key: "54", text: "현재 없어서 못 구한다는 대학로의 연극 티켓" },//한림극회6
            { key: "55",text:"비긴어게인 버스킹 관람권"},//두레박
            { key: "56",text:"슈퍼밴드 직관 관람권"},//수레바퀴3 xray10 코다1
          ],
        },
        {
          key: 6,//체육
          question: "당신의 심장을 뛰게할 순간은?",
          answers: [//각 4점1볼링 ,1익스트림스포츠, 1축구, 1야구, 1농구, 1배구, 1검도, 1테니스, 1탁구, 1미식축구 
            { key: "61", text: "저 핀 하나만 쓰러트리면 볼링 스코어 150점" },//데구르르0,공굴리기1
            { key: "62", text: "언덕에서 하는 스릴있는 패러글라이딩"},//엑스트릭2
            { key: "63", text: "터치다운 레전드 갱신 " },//미식축구3
            { key: "64", text: "전국 검도 대전 우승" },//검도 해강박4
            { key: "65", text: "학과 대항전 승부차기 순간 (내가 골 넣으면 우승)" },//축구  키커5 한림fc6
          ],
        },
        {
          key: 7,
          question: "당신이 바라는 레전드 순간은?",
          //당신 손아귀에 있는 종이,,,바로 티켓,,,그 티켓은 바로!!!!
          answers: [
            { key: "71", text: "홈런으로 역전" },//야구 레이7 스네이트8 
            { key: "72",text:"레전드 트릭샷 성공"},//탁구9
            { key: "73", text: "모든 스파이크를 방어하는 미친 리베로! "},//배구 스카이10
            { key: "74",text:"3연속 3점슛 득점"},//농구케미11
            { key: "75",text:"레전드 랠리 갱신"},//테니스 타이브레이크12

          ],
        },
        {
          key: 8,//학술
          question: "축제날! 어느 부스에 가볼까나?!",
          answers: [
            { key: "81", text: "축제는 무슨 열람실 가야지!" },//카오스
            { key: "82",text:"당신을 맞춰볼게요 타로부스"},//시리우스
            { key: "83", text: "학술이여도 채집활동은 한번 해봐야지!"},//핌프
          ],
        },
        {
          key: 9,
          question: "신이 한가지 선물을 준다면 ?",
          answers: [
            { key: "91", text: "중간고사 족보" },//카오스
            { key: "92",text:"다음 달 운세가 적힌 편지"},//시리우스
            { key: "93", text: "귀여운 고양이 "},//핌프
          ],
        },
        {//종교
          key: 10,
          question: "종교가 있으신가요?",
          answers: [//4
            { key: "101", text: "불교" },//한림불회(대불련)
            { key: "102",text:"기독교"},//ccc
            { key: "103", text: "천주교"},//가톨릭학생화
            { key: "104", text: "무교"},//가톨릭학생화

          ],
        },
        {
          //취미예술
          key: 11,
          question: "풍경이 좋은 카페에 간 당신..?!",
          answers: [
            { key: "111", text: "남는건 사진!  바로 카메라부터 킨다" },//영상틀,한빛사진회
            { key: "112",text:"여긴..?스즈메..?"},//푸메토,천지
            { key: "113", text: "풍경보다 카페에 있는 보드게임이 꿀잼"},//아이덴티티
            { key: "114", text: "이 풍경을 그림으로 남겨야해!" },//하얀도화지
          ],
        },
        {
          key: 12,
          question: "당신은 지금 전시회에 있습니다. 그 전시회의 이름은...",
          answers: [
            { key: "121", text: "요시고 사진 전시회" },//영상틀,한빛사진회
            { key: "122",text:"홍대전시회 진격의 거인전"},//푸메토,천지
            { key: "123", text: "보드게임 박람회"},//힘팝피디
            { key: "124", text: "반고흐 인 서울 전시회" },//하얀도화지
          ],
        },
        {//공통
          key: 13,
          question: "희망하는 회비가 있다면 얼마인가요?",
          answers: [
            { key: "131", text: "5000원~10000원" },
            { key: "132",text:"10000원~15000원"},
            { key: "133",text:"15000원~"},

          ],
        },
    
        {
          key: 14,
          question: "동아리 잠바를 희망하시나요?",
          answers: [
            { key: "141", text: "예" },//춤바람 유니콘
            { key: "142",text:"아니요"},//코다 먹메
         
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
      selectKey(answer);
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
                    {(cntQuizNum<14 && cntQuizNum>-1)&&<h1 className='Qustion_head'>질문{cntQuizNum+1}</h1>}
                    {cntQuizNum===14&&<h1 className='Qustion_head'>당신에게 이런 동아리를 추천합니다</h1>}

                    {/* 7개 중에 1인 7/1*/}
                    <ProgressBar className='ProgressBar' completed={Math.floor(((cntQuizNum)/14)*100)}/>
                    <div className='Question_box'>
                        {(cntQuizNum<14 && cntQuizNum>-1) &&<svg onClick={clickBefore}  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>                            }                            
                        {(cntQuizNum<14 && cntQuizNum>-1) && 
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
                            {cntQuizNum===14 && 
                            <BestClub  selectedKey={selectedKey}/>
                           
                            }
                            {(cntQuizNum<14 && cntQuizNum>-1) &&<svg onClick={clickNext} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
}                            {/* <button name="next" >다음!!!</button> */}
                    </div>
                </div>            
            </div>
        </div>
    );
}
export default ClubQuiz;