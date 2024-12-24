const BlogList= ({title,blogsprop,handleClick}) => {

    const blogs = blogsprop;
   
    return ( 
       <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((item) =>(
                <div className="blog-preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>written by  {item.author}</p>
                    <button onClick={() => handleClick(item.id)}>Delete</button>
                </div>
            ))}
       </div>
     );
}
 
export default BlogList;