import { useState } from "react";

const Home = () => {

    //let nametest = "mario";
    //Events
    const handleClick = () => {
        console.log("Clicked");
        SetName("Jane");
        SetAge(27);
    }
    const handleClickMe = (e) => {
        console.log("Clicked", e.target);
    }
    const handleClickAgain = (name,e) =>{
        console.log(name,e.target);
    }

    //State 
    const[nametest, SetName]= useState("mario");
    const[age,SetAge] = useState(25);
    return ( 
    
        <div className="home">
           <h1>Home Page</h1>
           <p>{nametest}</p>
           <p>{age}</p>
           <button onClick={handleClick}>Click Me</button>
           <button onClick={(e) => handleClickMe(e)}>Click Me , I have EventArg</button>
           <button onClick={(e) => {handleClickAgain("namrata",e)}}>Click To Get Name</button>
        </div>

        
     );
}
 
export default Home;