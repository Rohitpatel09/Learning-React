import { useState } from "react";
import Post from "./Post";
import Welcome from "./Welcome";
import Loader from "./Loader";
const PostList=({details,HandleDelete,AddPosts})=>{
const[fetching,setFetching]=useState(false);
    const HandlePost=()=>{
        setFetching(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=>{AddPosts(data.posts)
            setFetching(false);
        });
       
    }
    return<>

    {fetching===true &&<Loader></Loader>}
    {!fetching && details.length===0 &&<Welcome HandlePost={HandlePost}></Welcome>}
    {!fetching && details.map(pst=><Post pst={pst} HandleDelete={HandleDelete} key={pst.id}></Post>)}
    
    </>
}
export default PostList;