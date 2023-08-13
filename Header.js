
import { NavLink } from "react-router-dom";
import './Header.css'

function Header (){
    return(
        <>
       <header>
        <nav>
          <div className="left">
          <NavLink to="/" className="NavLink"><h1>EventBright</h1></NavLink>
          </div>
          <div className="right">
            <ul>
              <li> <NavLink to="/" className="NavLink">Home</NavLink></li>
              <li> <NavLink to="/create" className="NavLink">CreateEvent</NavLink></li>
              <li> <NavLink to="/login"  className="NavLink">Login</NavLink></li>
              <li> <NavLink to="/register"  className="NavLink">Register</NavLink></li>
              
            </ul>
          </div>
        </nav>
      </header>
        </>
    )
}
export default Header;