import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const {data:blogs,isLoading,error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading....</div>}
            {blogs && <BlogList blogsprop={blogs} />}
        </div>
     );
}
 
export default Home;