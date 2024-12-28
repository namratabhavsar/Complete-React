import {Link} from 'react-router';  
const Navbar = () => {
    return (

        <nav className="navbar">
            <h1>The Nam Blog</h1>
            <div className="links">
                <Link to="/" className='menu'>Home</Link>
                <Link to="/create" className='menu'>New Blog</Link>
              
            </div>
        </nav>

      );
}
 
export default Navbar;
