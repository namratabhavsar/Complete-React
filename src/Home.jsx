import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const {data:blogs,isLoading,error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading....</div>}
            {blogs && <div><h2>All Blogs !</h2><BlogList blogsprop={blogs} /></div>}
        </div>
     );
}
 
export default Home;