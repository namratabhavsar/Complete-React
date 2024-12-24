import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

       //Outputting List Example
       const[blogs,SetBlogs] = useState([
        {title:'Computer Blog', body:'Computer Description....',author:'Namrata',id:1 },
        {title:'Electrical Blog', body:'Electrical Description....',author:'Yoshi',id:2 },
        {title:'Civil Blog', body:'Civil Description....',author:'Jane',id:3 },
        {title:'Business Blog', body:'Business Description....',author:'Mario',id:4 },
        {title:'Finance Blog', body:'Finance Description....',author:'Namrata',id:5 }
    ])

   const handleClick = (id) =>{
    const newBlogs = blogs.filter((item) => item.id !=id);
    SetBlogs(newBlogs);
   }

   const updateTitle = (id) =>{
    const updatedBlogs = blogs.filter((item) =>  item.id ==id ? item.title = "Updated Title" : item.title);
    SetBlogs(updatedBlogs);
   }
    return ( 
        <div className="home">
           <BlogList blogsprop={blogs} title= {"All Blogs !"} handleClick={handleClick} updateTitle={updateTitle}/>

        </div>
     );
}
 
export default Home;