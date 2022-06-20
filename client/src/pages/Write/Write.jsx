import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import "./write.css"

import { Context } from "../../context/Context";

export default function Write() {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [file,setFile] = useState(null);
const { user } = useContext(Context);

const handleSubmit =async (e) =>{
  e.preventDefault();
  console.log("Hey")
  const newPost = {
   username:user.username,
    title,
    desc,
  };
  if(file){
    const data = {title, desc}
    try{
await axios.post("http://localhost:5000/api/upload",data);
    }catch(err){}
  }
  try{
  const res= await axios.post("http://localhost:5000/api/posts", newPost);
  window.location.replace("http://localhost:5000/api/posts/" + res.data._id)
} catch(err){}
};
return (
    <div className="write">
       {file && (
         <img className="writeImg" 
         src={URL.createObjectURL(file)} alt=""/> 
       )
       }
         
      <form className="writeForm">
          <div className="writeFormGroup">
              <label htmlfor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
              </label>

         
          <input type="file" id="fileInput" 
          
          onChange={(e) => setFile(e.target.files[0])}
          /* style={{display:"none"}} */
          />
          <input type="text" placeholder="Title" className="writeInput" 
          autoFocus={true}
          onChange = {e=>setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
              <textarea placeholder="tell your stroy.." type="text" className="writeInput writeText"
              onChange = {e=>setDesc(e.target.value)}
              ></textarea>
          </div>
          <button className="writeSubmit"  onClick={(e) => handleSubmit}>Publish</button>
      </form>

    </div>
  )
}
