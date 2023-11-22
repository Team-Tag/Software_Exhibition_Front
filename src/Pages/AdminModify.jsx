import { useEffect ,useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Styles/AdminAdd.css';

//
const AdminModify=()=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [posts, setPosts] = useState({
        department: "",
        title: "",
        details: "",
        period: "",
        pay: "",
        location: "",
        url: "",
        date: ""
    });
    const [isSaved,setSaved]=useState(false);
    const [department, setdepartment] = useState(posts.department);
    const [title, setTitle] = useState(posts.title);
    const [details, setdetails] = useState(posts.details);
    const [period, setperiod] = useState(posts.period);
    const [pay, setpay] = useState(posts.pay);
    const [location1, setlocation] = useState(posts.location);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        axios.get(`/api/board`)
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('데이터 불러오기 실패: ', error);
            });
    }, [id]);
   
   /**파일 업로드 */
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${year}/${month}/${day}`;

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('department', department);
        formData.append('title', title);
        formData.append('details', details);
        formData.append('period', period);
        formData.append('pay', pay);
        formData.append('location', location1);
        formData.append('date', formattedDate);
        formData.append('file', selectedFile);
        try {
          const response = await axios.put(`/api/board/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(`<PUT ${id}번 데이터 전송 완료`, response.data);
          setSaved(true);
          setdepartment('');
          setTitle('');
          setdetails('');
          setperiod('');
          setpay('');
          setlocation('');
          setSelectedFile(null);
        } catch (error) {
          console.error('PUT 안됨 ㅋ', error);
        }
      };
    return (
        <div className='AdminModify'>
            <h1>수정하기 </h1>
            <div className='AdminAddBox'>
                <div className='inputBox'>
                    <h3>분과</h3>
                    <input
                        type="text"
                        placeholder="변경할 내용이 있을 경우 입력해주세요"
                        value={department}
                        onChange={(e) => setdepartment(e.target.value)}
                    />
                </div>
                
                <div className='inputBox'>
                    <h3>동아리 이름 </h3>
                    <input
                        type="text"
                        placeholder="변경할 내용이 있을 경우 입력해주세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                
                <div className='inputBox'>
                    <h3>활동내역</h3>
                    <textarea 
                        placeholder="변경할 내용이 있을 경우 입력해주세요"
                        value={details}
                        onChange={(e) => setdetails(e.target.value)}
                    />
                </div>

                <div className='inputBox'>
                    <h3>활동날짜</h3>
                    <input 
                        type="text"
                        placeholder="변경할 내용이 있을 경우 입력해주세요"
                        value={period}
                        onChange={(e) => setperiod(e.target.value)}
                    />
                </div>

                <div className='inputBox'>
                    <h3>회비</h3>
                    <input 
                        type="text"
                        placeholder="변경할 내용이 있을 경우 입력해주세요"
                        value={pay}
                        onChange={(e) => setpay(e.target.value)}
                    />
                </div>

                
                <div className='inputBox'>
                    <h3>위치</h3>
                    <input 
                        type="text"
                        placeholder="변경할 내용이 있을 경우 입력해주세요"
                        value={location1}
                        onChange={(e) => setlocation(e.target.value)}
                    />
                </div>

                <div className='inputBox'>
                    <h3>사진 추가</h3>
                    <input  type="file" accept="image/*" onChange={handleFileChange} />
                </div>

                {!isSaved &&<button className='allPush' onClick={handleUpload}>수정하기</button>}
                {isSaved &&<button className='allPush' >저장완료</button>}
            </div>
        </div>
    );
}
export default AdminModify;