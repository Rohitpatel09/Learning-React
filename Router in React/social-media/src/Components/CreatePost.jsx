import { useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const CreatePost=({HandleAdd})=>{
const[id,setId]=useState("");
const[title,setTitle]=useState("");
const[content,setContent]=useState("");
const[reaction,setReaction]=useState(0);
const[tag,setTag]=useState("");

//!this will reload the page
// const HandleId=(event)=>{
//  setId(event.target.value);
// }
// const HandleTitle=(event)=>{
// setTitle(event.target.value);
// }
// const HandleContent=(event)=>{
// setContent(event.target.value);
// }
// const HandleReaction=(event)=>{
//   setReaction(event.target.value)
// }
// const HandleTag=(event)=>{
// setTag(event.target.value);
// }
const navigate=useNavigate();
//state for loader
const[loader,setLoader]=useState(false);
const HandleSubmit=(event)=>{
  event.preventDefault();
  setLoader(true);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title:title,
        body:content,
        reaction:Number(reaction),
        userId:id,
        tags:tag.split(",").map(tag=>tag.trim()),
    })
   
})
  .then(res => res.json())
  .then(post=>{HandleAdd(post)
    setLoader(false);
  navigate("/")
  }
);

// Reset fields after submission
setId("");
setTitle("");
setContent("");
setReaction(0);
setTag("");
}

    return<>
   {loader===true && <Loader></Loader>} 
 {!loader &&<div> <h2 className="cnt">Submit a Post</h2>
    <form className="create-post" onSubmit={HandleSubmit}>
    <label htmlFor="userId" className="lit">User ID:</label>
    <input type="text" id="userId" value={id}  name="userId" placeholder="Enter your Id" required className="lit" onChange={(event)=>setId(event.target.value)}/>


        <label htmlFor="title" className="lit">Title:</label>
        <input type="text" id="title"  value={title} name="title" placeholder="How are you feeling today..." required className="lit" onChange={(event)=>setTitle(event.target.value)}/>
        
        <label htmlFor="body" className="lit">Content:</label>
        <textarea id="body" name="body" value={content} placeholder
        ="Tell us more about it" rows="4" required className="lit"  onChange={(event)=>setContent(event.target.value)}></textarea>
        
        <label htmlFor="reaction" className="lit">Reactions:</label>
        <input type="number" id="reaction" value={reaction} name="reaction" min="0" required className="lit"  onChange={(event)=>setReaction(event.target.value)}/>
        
        
        <label htmlFor="tags" className="lit">Tags (comma-separated):</label>
        <input type="text" id="tags" value={tag}  name="tags" className="lit" onChange={(event)=>setTag(event.target.value)}/>
        
        <button type="submit" className="btn btn-success" >Submit Post</button>
      
    </form></div>}
</>
}
export default CreatePost;