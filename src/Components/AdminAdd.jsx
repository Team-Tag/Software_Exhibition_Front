import { useState } from 'react';
import '../Styles/AdminAdd.css';
import axios from 'axios';
//새로운 workspace
//12.28일 hoon branch에 new commit추가

const AdminAdd = () => {
    const [isSaved,setSaved]=useState(false);
    const [department, setdepartment] = useState('');
    const [title, setTitle] = useState('');
    const [details, setdetails] = useState('');
    const [period, setperiod] = useState('');
    const [pay, setpay] = useState('');
    const [location, setlocation] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    
    // const [isSaved,setSaved]=useState[false];
    /**분과 선택 */
   const selectChange=(e)=>{
        setdepartment(e.target.value);
   }
   /**파일 업로드 */
   const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${year}/${month}/${day}`;
    const handleUpload = async () => {
        //q11
        if (!department || !title || !details || !period || !pay  ||!location ||!selectedFiles) {
          console.error('모든 필드를 입력하세요.');
          return;
        }

        const formData = new FormData();
        formData.append('department', department);
        formData.append('title', title);
        formData.append('details', details);
        formData.append('period', period);
        formData.append('pay', pay);
        formData.append('location', location);
        formData.append('date', formattedDate);

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
          }
          
        try {
          const response = await axios.post('/api/board', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          console.log('데이터 업로드 성공', response.data);
          setSaved(true);
          setdepartment('');
          setTitle('');
          setdetails('');
          setperiod('');
          setpay('');
          setlocation('');
          setSelectedFiles([]);
        } catch (error) {
          console.error('데이터 업로드 실패', error);
        }
      };

    return (
        <div className='AdminAdd'>
            {/**데이터 입력 폼*/ }
            <div className='AdminAddBox'>
                <div className='inputBox_1'>
                    <div className='input_1' >
                        <p>동아리 대표사진 등록하기</p>
                        <div className='imageView'>
                            <label for="file">
                                <svg class="btn_upload" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                            </label>
                            <input  type="file" accept="image/*" id='file' onChange={handleFileChange} />
                        </div>
                       
                    </div>
                    <div className='inputBox_1_right'>
                        <div>
                            <h3>분과선택 </h3>
                            <select className='selectBox' onChange={selectChange} value={department}>
                                    <option   value="공연">공연</option>
                                    <option  selected value="체육">체육</option>
                                    <option  value="취미예술">취미예술</option>
                                    <option  value="학술">학술</option>
                                    <option  value="종교">종교</option>
                                    <option  value="봉사">봉사</option>
                            </select>
                        </div>
                        <div>
                            <h3>동아리 이름 </h3>
                            <input
                                type="text"
                                placeholder="동아리 이름"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>등록일:{formattedDate}</p>
                        </div>
                    </div>
                </div>
                
                <div className='inputBox'>
                    <div className='inputBox_bundle'>
                        <div className='inputBox_head'>
                            <h3>활동 내역</h3>
                        </div>
                        <textarea 
                            placeholder="동아리에 대한 상세설명을 입력하세요"
                            value={details}
                            onChange={(e) => setdetails(e.target.value)}
                        />
                    </div>
                   
                </div>
                <div className='inputBox'>
                    <div className='inputBox_bundle'>
                        <div className='inputBox_head'>
                            <h3>활동날짜</h3>
                        </div>
                        <textarea 
                            placeholder="동아리 활동 날짜를 입력하세요"
                            value={period}
                            onChange={(e) => setdetails(e.target.value)}
                        />
                    </div>
                   
                </div>
                
                {/* <div className='inputBox'>
                    <h3>활동날짜</h3>
                    <input 
                        type="text"
                        placeholder="활동날짜"
                        value={period}
                        onChange={(e) => setperiod(e.target.value)}
                    />
                </div> */}
                <div className='inputBox'>
                    <div className='inputBox_bundle'>
                        <div className='inputBox_head'>
                            <h3>회비</h3>
                        </div>
                        <input 
                        type="text"
                        placeholder="회비를 입력하세요"
                        value={pay}
                        onChange={(e) => setpay(e.target.value)}
                    />
                    </div>
                   
                </div>
                {/* <div className='inputBox'>
                    <h3>회비</h3>
                    <input 
                        type="text"
                        placeholder="회비"
                        value={pay}
                        onChange={(e) => setpay(e.target.value)}
                    />
                </div> */}

                
                <div className='inputBox'>
                    <h3>동아리방 위치</h3>
                    <input 
                        type="text"
                        placeholder="동아리방 위치를 입력하세요"
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                    />
                </div>

                <div className='inputBox'>
                    <h3>사진 추가</h3>
                    <input  type="file" accept="image/*" onChange={handleFileChange} multiple/>
                </div>

                {!isSaved &&<button className='allPush' onClick={handleUpload}>전체 업로드</button>}
                {isSaved &&<button className='allPush' >저장완료</button>}
            </div>
        </div>
    );
}

export default AdminAdd;
