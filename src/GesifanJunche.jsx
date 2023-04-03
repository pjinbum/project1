import React from 'react'
import { useEffect , useState } from 'react';
import './GesifanJunche.css'
import videoTim from './당신이 마주할 대전, 당신에게 대전이란.mp4'


const GesifanJunche = (props) => {
  // localStorage.clear()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();

    const post = {
      title: title,
      content: content,
      date: date.toLocaleString(),
      comments: []
    };

    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      savedPosts.push(post);
      localStorage.setItem('posts', JSON.stringify(savedPosts));
      setPosts(savedPosts);
    } else {
      localStorage.setItem('posts', JSON.stringify([post]));
      setPosts([post]);
     
    }

    setTitle('');
    setContent('');
  }

    


  return (
    
    <div style={{position :'absolute',top:'0', left:'0', width : '100vw' , height : '100vh' , backgroundColor : '#fff', zIndex :'100' , textAlign :'center'}}>
      <div>
        <video width="1800" height="900" controls autoplay>
        <source src={videoTim} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
        <div>
            <img src="" alt="" />
        </div>
      </div>  
      <div className='bin'></div>
      <div style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center' , alignItems : 'center'}}>
         <div>
             <h3>자유게시판</h3>
         </div>
         <p style={{textAlign :'center'}}>자유게시판은 자유롭게 의견을 게시 할 수 있는 <strong>열린공간</strong> 열린공간이며,<br></br>
            자율과 책임이 공존하는 사이버문화 정착을 위하여 <strong>실명</strong> 으로 운영되고 있습니다.<br></br>
            게시된 의견에 대하여는  <strong>원칙적으로 답변하지 않습니다.</strong>원칙적으로 답변하지 않습니다.<br></br>
            시정관련 건의사항 또는 <strong>답변을 원하시는 사항은 국민신문고 코너를 이용</strong>하시기 바랍니다</p>

           <div><button className='sinmungo-btn' >국민신문고 코너 바로가기</button></div> 
      </div>
      <div className='bin'></div>
      <div style={{display : 'flex' , justifyContent : 'center' , textAlign :'center' }}>
         <div style={{position :'relative', width:'1000px' }}>
         <h3>인기게시글</h3>
         <p>시민들이 주목한 게시글을 확인해보세요</p>
         <button style={{position : 'absolute' , top: '20px',right :'0' , height :'40px' , backgroundColor:'#fff',cursor:'pointer' }} onClick={()=>{
             document.querySelector('.gesifan-box').classList.add('on')
             document.querySelector('.Gesifangongji').classList.remove('on')
             document.querySelector('.Gesifanpage').classList.add('on')
         }}> 전체글 보러가기 </button>
         </div>
      </div>
      <div style={{width:'700px'}}>
        <strong style={{textAlign :'left' , marginLeft:'480px'}}><span>Today</span> <span>2023년 03월 31일</span></strong>
      </div>
      <div>
        슬라이드 인기글 구현하기
      </div>  
      <div className='bin'></div>
      <div style={{display : 'flex' , justifyContent : 'center' }}>
        <button className='menu-three' onClick={()=>{

          document.querySelector('.gesifan-box').classList.add('on')
          document.querySelector('.Gesifangongji').classList.add('on')
          document.querySelector('.Gesifanpage').classList.remove('on')
         
        }}>공지사항</button>
        <button className='menu-three' onClick={()=>{
           document.querySelector('.gesifan-box').classList.remove('on')
           document.querySelector('.Gesifangongji').classList.remove('on')
           document.querySelector('.Gesifanpage').classList.remove('on')
        }}>게시글 작성하기</button>
        <button className='menu-three' onClick={()=>{
                document.querySelector('.gesifan-box').classList.add('on')
                document.querySelector('.Gesifangongji').classList.remove('on')
                document.querySelector('.Gesifanpage').classList.add('on')
        }}>전체게시글</button>
      </div>
      <div className='bin'></div> 
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <div className='gesifan-box' >
          <h3 style={{textAlign :'left' , marginLeft:'480px'}}><strong>양식에 따라 게시글을 작성해주세요!</strong></h3>
          
          <form onSubmit={handleSubmit}>
            <div style={{display : 'flex' , justifyContent : 'center'}}>
                <div style={{width : '900px',borderTop : '1px solid gray'}}>
                    <table style={{borderCollapse: 'collapse'}}>
                        <tr style={{borderBottom : '1px solid gray' , height:'50px'}}>
                            <td> <span>게시글 선택</span></td>
                            <td style={{textAlign :'left' }}>
                              <div>
                                 <select name="" id="">
                                   <option value="">칭찬합니다</option>
                                   <option value="">제안합니다</option>
                                   <option value="">알립니다</option>
                                   <option value="">신고합니다</option>
                                   <option value="">개선해주세요</option>
                                 </select>
                             </div>
                            </td>
                        </tr>
                        
                        <tr style={{borderBottom : '1px solid gray' , height:'50px'}}>
                            <td><label htmlFor="title">제목</label></td>
                            <td style={{textAlign :'left'}}>
                              <input type="text" id="title" value={title} onChange={handleTitleChange} required />
                            </td>
                        </tr>
                        <tr style={{borderBottom : '1px solid gray'}}>
                            <td> <label htmlFor="content">내용</label></td>
                            <td> <textarea id="content" value={content} onChange={handleContentChange} required style={{width :'800px' , height :'400px'}}></textarea></td>
                        </tr>
                    </table>
                
                </div>
            </div>
            <div>
              <h3 style={{textAlign :'left' , marginLeft:'480px'}}>제출 전 꼭 읽고 체크해주세요</h3>
              <div style={{display :'flex' , justifyContent : 'center'}}>
                <pre style={{textAlign : 'left' ,border : '1px solid gray', padding:'15px'}}>
                    상업성 광고 , 저속한 표현, 특정인에 대한 비방, 정치적 목적이나 성향, 동일인이라고 인정 되는 자가 동일 또는 <br></br>
                    유사 내용을 반복한 게시글 등은 관리자에 의해 통보없이 삭제될 수 있습니다.<br></br>
                    또한 , 홈페이지를 통하여 불법유해 정보를 게시하거나 배포하면 정보통신망 이용촉진 및 정보보호 등에 관한<br></br>
                    법률 제 74조 에 의거 <strong>1년이하의 징역 똑는 1천만원 이하의 벌금</strong>에 처해질수 있습니다.<br></br>
                    본문에 개인정보 &#40; 주민등록번호 , 핸드폰 등  &#41; 가 포함되진 않도록 주의바랍니다
                </pre>              
                

              </div>
            <div><input style={{marginLeft :'700px'}} type="checkBox" /><span>동의합니다</span></div>
            </div>

            <button className='cancle-btn' type="button">취소하기</button>
            <button className='uplode-btn' type="submit">글올리기</button>
          </form>
         
          
      </div>
       {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <div className='Gesifanpage'  style={{width :'100vw', height :'700px' , backgroundColor :'red' ,zIndex :'500'}}>
          <ul>
                <div style={{display : 'flex' , justifyContent : 'center'}}>
                  <tr className='Gesifan-sort'>
                    <td>번호</td>
                    <td>유형</td>
                    <td>제목</td>
                    <td>내용</td>
                    <td>등록일</td>
                    <td>조회수</td>
                  </tr>
                </div>
            {posts.map((post, index) => (
              <li key={index}>
                
                  <div style={{display : 'flex' , justifyContent : 'center'}}>
                    <tr className='Gesifan-sort'>
                      <td>{index+1}</td>
                      <td>유형</td>
                      <td>{post.title}</td>
                      <td>{post.content}</td>
                      <td>{post.date}</td>
                      <td>조회수</td>
                    </tr>
                  </div>
                
                
                {/* <ul>
                  {post.comments.map((comment, commentIndex) => (
                    <li key={commentIndex}>
                      <p>{comment.comment}</p>
                      <small>{comment.date}</small>
                    </li>
                  ))}
                </ul> */}
                {/* <form onSubmit={(event) => {
                  event.preventDefault();
                  const comment = event.target.elements.comment.value;
                  const date = new Date();
                  const commentItem = {
                    comment: comment,
                    date: date.toLocaleString()
                    
                  };                 
                  post.comments.push(commentItem);
                  const savedPosts = JSON.parse(localStorage.getItem('posts'));
                  localStorage.setItem('posts', JSON.stringify(savedPosts));
                  setPosts(savedPosts);
                  event.target.reset();
                  
                }}>
                  <label htmlFor="comment">댓글 작성</label>
                  <input type="text" id="comment" required />
                  <button type="submit">작성</button>
                </form> */}
              </li>
            ))}
          </ul>
      </div>
      <div className='bin'></div>
      <div className='Gesifangongji' style={{width :'100vw', height :'700px' , backgroundColor :'aqua' ,zIndex :'500'}}>

      </div>
      <div style={{width : '100vw' , height : '200px' , backgroundColor : 'yellowgreen' }}>

      


      </div>
         
    
    </div>
  );
}

export default GesifanJunche