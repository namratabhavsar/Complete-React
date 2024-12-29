import { Link } from "react-router";
const NotFound = () => {
    return ( 
        <div className="nof-found">
            <h2>Sorry!</h2>
            <p>That page does not exist!</p>
            <Link to='/'>Back to the Home Page...</Link>
        </div>
     );
}
 
export default NotFound;