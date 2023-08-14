import logo from "../images/airbnb.png";

function Navbar(){
  return(
      <nav className="navbar-container">
        <img src={logo} alt="logo" className="logo"/>
      </nav>
  )
}

export default Navbar;