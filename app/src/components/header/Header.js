import { Link } from "react-router-dom";




function Header (props){

    return(
      <>
        <h1>Travel Destenation</h1>  
        <nav>
                <Link to="/"> Home</Link>
          </nav>
      
      </>
    

    );
}
export default Header;