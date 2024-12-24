const Navbar = () => {
    return (

        <nav className="navbar">
            <h1>The Nam Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/Create" style={{
                    color : "white",
                    backgroundColor : "#f1356d",
                    fontSize: "8px"
                }}>New Blog</a>
            </div>
        </nav>

      );
}
 
export default Navbar;
