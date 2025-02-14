
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Siderbar';
import CreatePost from './Components/CreatePost';

import PostList from './Components/PostList';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Login from './Components/Login';

function App() {
 const[select,setSelect]=useState("Home");
const HandleHome=(home)=>{
setSelect(home);
}
const HandleCreatePost=(createpost)=>{
setSelect(createpost);
}

const[details,setDetails] =useState([])

const HandleDelete=(deleteitem)=>{
  let newdetails=details.filter((post)=>post.title !==deleteitem)
  setDetails(newdetails);
}


const HandleAdd=(post)=>{
setDetails([post,...details]);

};

//API se jo post ka rhi ha vo add karta h(API jab call hogi tab button ko click karege tab ydi API KO DIRECT CALL KARNA HA TOH USEEFFECT HOOK USE KAR SKTE H)
const AddPosts=(posts)=>{
const newPosts=posts.map(post=>({
  id: post.id.toString(), 
  title: post.title,
  body: post.body,
  reaction: post.reactions.likes - post.reactions.dislikes, 
  userId: `user-${post.userId}`,
  tags: post.tags || [],
}))
  setDetails([...newPosts, ...details]);
}

/*UseEffect hook api call karne ke liya jada use hota h ydi kisi api ko page load hote hi ya phir kisi dependencies ke change hone pe api ko call karna h useeffect hook use karn he 
jisse aapn ne example dekha ki button ke click hone par api call ho par useeffect hook ko use karke aapn ne api ko direct call karna dekha*/

//?Removing the compo from memoey when we re-direct on another page

// const controller= new AbortController();
// const signal=controller.signal;


// useEffect(()=>{
//   fetch('https://dummyjson.com/posts',{signal})
//   .then(res => res.json())
//   .then(data=>AddPosts(data.posts));

// return ()=>{
//   console.log("killing")
  
//   controller.abort()}

// },[])

  return (
    <div className='app-container'>
 <Sidebar HandleHome={HandleHome} HandleCreatePost={HandleCreatePost} select={select}></Sidebar>
   <div className='container'>
   <Header></Header>
   <Outlet></Outlet>
   {select==="Home"?<PostList details={details} AddPosts={AddPosts} HandleDelete={HandleDelete} ></PostList>:
   <CreatePost HandleAdd={HandleAdd}></CreatePost>}

   <Footer></Footer>
   </div>
    </div>
  )
}

export default App
