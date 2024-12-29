import { useState } from "react";
import { useNavigate } from 'react-router';
const CreateBlog = () => {
const[title,setTitle] = useState('');
const[body,setBody] = useState('');
const[author,setAuthor] = useState('Namrata');
const [isPending,setIsPending] = useState(false);
const navigate = useNavigate();
const hansleSubmit = (e) =>{
   e.preventDefault();
   const blog = {title,body,author};
  
   setIsPending(true);
   fetch('http://localhost:8000/blogs', {
    method:'POST',
    Headers :{"content-type": "application/json"},
    body: JSON.stringify(blog)
   }).then(()=>{
    console.log('new blog added');
    setIsPending(false);
    navigate("/");
   })
}
    return (    
        <div className="create ">
            <h2>Create New Blog</h2>
           <form onSubmit={hansleSubmit}>
           <label>Blog Title :</label>
            <input
            type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            required 
            ></input>
            <label>Blog Body</label>
            <textarea
            value={body}
            onChange={(e)=> setBody(e.target.value)}
            required
            ></textarea>
            <label>Written By :</label>
            <select 
            value={author} 
            onChange={(e)=> setAuthor(e.target.author)}>
                <option>Namrata</option>
                <option>Mario</option>
                <option>Yoshi</option>
            </select>
           { !isPending && <button>Add New Blog</button>}
           {isPending && <button>Adding New Blog...</button>}
           </form>
        </div>
     );
}
export default CreateBlog;