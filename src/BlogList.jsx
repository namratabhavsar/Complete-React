import { Link } from "react-router";
const BlogList= ({blogsprop}) => {

    const blogs = blogsprop;
    return ( 
       <div className="blog-list">
       
        {blogs.map((item) =>(
                <div className="blog-preview" key={item.id}>
                   <Link to={`/blogs/${item.id}`}>
                    <h2>{item.title}</h2>
                    <p>written by  {item.author}</p>
                   </Link>
                </div>
            ))}
       </div>
     );
}
 
export default BlogList;