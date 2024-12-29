import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
   
const navigate = useNavigate();

    const handleClick = () =>{
      fetch('http://localhost:8000/blogs/'+ blog.id,{
         method:'DELETE',
      }).then(()=>{
         navigate('/');
      })
    }
    const {id} = useParams(); 
    const {data : blog , isLoading,error} = useFetch('http://localhost:8000/blogs/'+ id)
    return (  
       <div className="blog-details">
        {isLoading && <h3>Loading....</h3> }
        {error && <div>{error}</div>}
        {blog && (
           <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
           </article>
        )}
        <button onClick={handleClick}>Delete</button>
       </div>
    );
}
 
export default BlogDetails;