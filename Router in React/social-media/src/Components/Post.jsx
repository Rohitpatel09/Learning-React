import { MdDeleteSweep } from "react-icons/md";

const Post=({pst,HandleDelete})=>{

    return<>
    <div className="card post-card" style={{width: "50rem"}}>
  <div className="card-body">
    <h5 className="card-title title">{pst.title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>HandleDelete(pst.title)}>
    <MdDeleteSweep />
  </span></h5>
    <p className="card-text">{pst.body}</p>
   
    <span className="badge text-bg-primary hashtag">{pst.tags[0]}</span>
    <span className="badge text-bg-primary hashtag">{pst.tags[1]}</span>
    <span className="badge text-bg-primary hashtag">{pst.tags[2]}</span>
    <div className="alert alert-success reaction" role="alert">
  This post has been reacted by {pst.reaction} people.
</div>
  </div>
</div>
    </>
}
export default Post;