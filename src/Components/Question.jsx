import { useState } from "react";
const FirstQuestionSelect=[];
// const canNext=FirstQuestionSelect.length()>2;
const Question=(props)=>{
     const [color,setColor]=useState(["rgb(14, 33, 176)","rgb(14, 33, 176)","rgb(14, 33, 176)",
     "rgb(14, 33, 176)","rgb(14, 33, 176)","rgb(14, 33, 176)"]);
    // const colorChange=useRef();
    const FirstQuestionName=['공연','스포츠','취미예술','학술','봉사','종교']
    const userSelectOn=(value)=>{
        FirstQuestionSelect.push(value);
        const selectIndex=FirstQuestionName.indexOf(value)
        const colorBundle=[...color];
        if(colorBundle[selectIndex]==="rgba(123, 123, 123, 0.27)"){
            colorBundle[selectIndex]="rgb(14, 33, 176)";
            setColor(colorBundle)
            return 0;
        }
        colorBundle[selectIndex]="rgba(123, 123, 123, 0.27)"
        setColor(colorBundle)
        console.log(FirstQuestionSelect);
    }
    const userOnClick=(value)=>{
        userSelectOn(value);
    }
    // const canNext=()=>{
    //     if(FirstQuestionSelect.length()>2){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
        switch(props.count){
            case 1: 
             return(
                    <div>
                        <div className="Step_num">STEP 1 </div>
                        <h1 className="Step_question">선호하는 3개의 분야를 선택해주세요!</h1>
                        <div className="Step1_box">
                            <div className="Step1_card"  onClick={()=>userOnClick("공연")} style={{backgroundColor:color[0]}}>공연</div>
                            <div className="Step1_card" onClick={()=>userOnClick("스포츠")} style={{backgroundColor:color[1]}}>스포츠</div>
                            <div className="Step1_card" onClick={()=>userOnClick("취미예술")} style={{backgroundColor:color[2]}}>취미예술</div>
                            <div className="Step1_card" onClick={()=>userOnClick("학술")} style={{backgroundColor:color[3]}}>학술</div>
                            <div className="Step1_card" onClick={()=>userOnClick("봉사")} style={{backgroundColor:color[4]}}>봉사</div>
                            <div className="Step1_card" onClick={()=>userOnClick("종교")} style={{backgroundColor:color[5]}}>종교</div>
                        </div>
                        {/* {FirstQuestionSelect.length()>2?<div>다음</div>:<div>못감</div>} */}
                    </div>
                );
            case 2:
                return(
                    <div>
                        <div className="Step_num">STEP 2 </div>
                        <h1 className="Step_question">선호하는 분야를 선택해주세요!</h1>
                        <div className="Step1_box">
                        <div className="Step1_card"  onClick={()=>userOnClick("공연")} style={{backgroundColor:color[0]}}>공연</div>
                            <div className="Step1_card" onClick={()=>userOnClick("스포츠")} style={{backgroundColor:color[1]}}>스포츠</div>
                            <div className="Step1_card" onClick={()=>userOnClick("취미예술")} style={{backgroundColor:color[2]}}>취미예술</div>
                        </div>
                    </div>
            );
            case 3: 
            return(
                <div>
                        <div className="Step_num">STEP 3 </div>
                        <h1 className="Step_question">3번질문 ㄱ</h1>
                        <div className="Step1_box">
                        <div className="Step1_card"  onClick={()=>userOnClick("공연")} style={{backgroundColor:color[0]}}>공연</div>
                            <div className="Step1_card" onClick={()=>userOnClick("스포츠")} style={{backgroundColor:color[1]}}>스포츠</div>
                            <div className="Step1_card" onClick={()=>userOnClick("취미예술")} style={{backgroundColor:color[2]}}>취미예술</div>
                            <div className="Step1_card" onClick={()=>userOnClick("학술")} style={{backgroundColor:color[3]}}>학술</div>
                            <div className="Step1_card" onClick={()=>userOnClick("봉사")} style={{backgroundColor:color[4]}}>봉사</div>
                            <div className="Step1_card" onClick={()=>userOnClick("종교")} style={{backgroundColor:color[5]}}>종교</div>
                        </div>
                </div>
            );
            case 4: return(
                <div>
                        <div className="Step_num">STEP 4 </div>
                        <h1 className="Step_question">4번질문 딱대</h1>
                        <div className="Step1_box">
                        <div className="Step1_card"  onClick={()=>userOnClick("공연")} style={{backgroundColor:color[0]}}>공연</div>
                            <div className="Step1_card" onClick={()=>userOnClick("학술")} style={{backgroundColor:color[3]}}>학술</div>
                            <div className="Step1_card" onClick={()=>userOnClick("봉사")} style={{backgroundColor:color[4]}}>봉사</div>
                            <div className="Step1_card" onClick={()=>userOnClick("종교")} style={{backgroundColor:color[5]}}>종교</div>
                        </div>
                </div>
            );
            case 5: return(
                <div>
                        <div className="Step_num">STEP 5 </div>
                        <h1 className="Step_question">5번질문 어서오고</h1>
                        <div className="Step1_box">
                        <div className="Step1_card"  onClick={()=>userOnClick("공연")} style={{backgroundColor:color[0]}}>공연</div>
                            <div className="Step1_card" onClick={()=>userOnClick("취미예술")} style={{backgroundColor:color[2]}}>취미예술</div>
                            <div className="Step1_card" onClick={()=>userOnClick("봉사")} style={{backgroundColor:color[4]}}>봉사</div>
                        </div>
                </div>
            );
            case 6: return(
                <div>
                        <div className="Step_num">STEP 6 </div>
                        <h1 className="Step_question">6번 질문어서오고</h1>
                        <div className="Step1_box">
                        <div className="Step1_card"  onClick={()=>userOnClick("공연")} style={{backgroundColor:color[0]}}>공연</div>
                            <div className="Step1_card" onClick={()=>userOnClick("스포츠")} style={{backgroundColor:color[1]}}>스포츠</div>
                            <div className="Step1_card" onClick={()=>userOnClick("종교")} style={{backgroundColor:color[5]}}>종교</div>
                        </div>
                </div>
            );
            case 7: return(
                <div className="Finder_Result">
                    <div>당신에게 이런 동아리를 추천합니다.</div>
                    <h3>{props.count}번의 내용 설명</h3>
                    <div>case 1</div>
                </div>
            );
            default:
                return 0;
        }
}
export default Question;