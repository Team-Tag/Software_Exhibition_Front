import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Admin.css';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [posts, setPosts] = useState([]);
    const [selectClub, setClub] = useState("sportsClub");
    const [selectedData, setSelectedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    
    useEffect(() => {
        axios.get('/api/board')
            .then(response => {
                setPosts(response.data);
                setSelectedData(response.data); // 초기에 전체 데이터를 보여줌
                console.log(response.data);
            })
            .catch(error => {
                console.error('GET 데이터 불러오기 실패: ', error);
            });
    }, []);

    const selectChange = (e) => {
        setClub(e.target.value);
        if (e.target.value === 'all'){
            setSelectedData(posts); // "전체"가 선택되었을 때 전체 데이터를 보여줌
        } else {
            const data = posts.filter(club => club.department === e.target.value);
            setSelectedData(data);
        }
        setCurrentPage(1); // 카테고리가 변경되면 페이지를 1로 리셋
    };
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = selectedData.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const removePost = (id) => {
        const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
        if (confirmDelete) {
            axios.delete(`/api/board/${id}`)
                .then(response => {
                    if (response.status === 200) {
                        const updatedPosts = posts.filter(post => post.id !== id);
                        setPosts(updatedPosts);
                    } else {
                        console.error('DELETE삭제 실패(200):', response.statusText);
                    }
                })
                .catch(error => {
                    console.log(id);
                    console.error('DELETE삭제 실패 ', error);
                });
        }
    };
    return (
        <div className='Admin'>
            <div className='underHeader'>
                <div className='leftBar'>
                    <Link to="/AdminAdd"><div>추가하기</div></Link>
                </div>
                <h1>관리자 페이지</h1>
                <select className='selectBox' onChange={selectChange} value={selectClub}>
                    <option value="all">전체</option>
                    <option value="공연">공연</option>
                    <option value="체육">체육</option>
                    <option value="취미예술">취미예술</option>
                    <option value="학술">학술</option>
                    <option value="종교">종교</option>
                    <option value="봉사">봉사</option>
                </select>
                {currentPosts.map(post => (
                    <div className='Admin_body' key={post.id}>
                        <div className='Admin_clubbox'>
                            <div className='iconBox'>
                                <svg className='icon' onClick={() => removePost(post.id)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                <Link to={{
                                    pathname: '/AdminModify',
                                    search: `?id=${post.id}`,
                                }}>
                                    <svg className='icon' id='secondicon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                                </Link>
                            </div>
                            <div id='department'>{post.department}</div>
                            <div id='title'>{post.title}</div>
                            <div id='data'>{post.date}</div>
                        </div>
                    </div>
                ))}
                  {/* 페이지 네비게이션 추가 */}
                <ul className='pagination'>
                {Array(Math.ceil(selectedData.length / postsPerPage))
                    .fill()
                    .map((_, index) => (
                        <div key={index} className='page_item'>
                            <div className='page_button' onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </div>
                        </div>
                    ))}
            </ul>
            </div>
        </div>
    );
}
export default Admin;
