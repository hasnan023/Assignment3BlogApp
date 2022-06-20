import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SinglePost.css' 

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/"   );
      // +path
      setPost(res.data)
     //console.log(res)
    };
    getPost()
  }, 
  [path]);

  return (
    <div className="singlePost"> 
    <div className="singlePostWrapper">
    {post.photo && (
        <img
        className="singlePostImg"alt="" 
        src={post.photo}
        />
      )}
    <h1 className="singlePostTitle">
      
      {post.title}

<div className="postEditIcons">
<i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
<i className=" singlePostIcon fa-solid fa-trash"></i>
</div>
</h1>
<div className="singlePostInfo">
  <span className="singlePostAuthor=">
    Author :<b>{post.username}</b></span>
  <span className="singlePostDate=">{new Date(post.createdAt).toDateString()}</span>
  <p className="singlePostDescription">
    {post.desc}</p>
</div>
    
    </div>
      </div>
  )
}
