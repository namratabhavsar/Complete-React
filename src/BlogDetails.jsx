import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams(); 
    const {data : blog , isLoading,error} = useFetch('http://localhost:8000/blogs/'+ id)
    return (  
       <div>
        {isLoading && <h3>Loading....</h3> }
        {error && <div>{error}</div>}
        {blog && (
           <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
           </article>
        )}
       </div>
    );
}
 
export default BlogDetails;