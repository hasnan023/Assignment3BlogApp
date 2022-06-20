// import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {

  const [posts,setPosts] = useState([]);

  useEffect(()=> {
    
    const fetchPosts = async ()=>{
     const res = await axios.get("http://localhost:5000/api/posts/")
     setPosts(res.data)
    }
    fetchPosts()
   //axios.get("http://localhost:5000/api/posts/")
   //.then(res =>{
    //console.log(res.data)
   //})
   //.catch(err =>{
    //console.log(err)
   
    //})
},[])
  return (
    <>
    <Header/>
    <div className="home"> 
      <Posts posts={posts}/>
      <Sidebar/>
      {/* <Footer/> */}
      
      
    </div> 
    </>
    )
}
