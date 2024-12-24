const BlogList= ({title,blogsprop,handleClick,updateTitle}) => {

    const blogs = blogsprop;
    return ( 
       <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((item) =>(
                <div className="blog-preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>written by  {item.author}</p>
                    <button onClick={() => handleClick(item.id)}>Delete</button>
                    <button onClick={() => updateTitle(item.id)}>Update</button>
                </div>
            ))}
       </div>
     );
}
 
export default BlogList;