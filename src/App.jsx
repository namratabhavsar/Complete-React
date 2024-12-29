import Navbar from "./Navbar" 
import Home from "./Home"
import CreateBlog from "./CreateBlog";
import {Routes, Route } from "react-router";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar remains constant */}
      < div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
