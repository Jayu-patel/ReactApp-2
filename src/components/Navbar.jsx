import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="logo"><h1>HAPPY CATS</h1></div>
            <div className="nav">
                <li><NavLink to="/" preventScrollReset>Home</NavLink></li>
                <li><NavLink to="/user" preventScrollReset>Useres</NavLink></li>
                <li><NavLink to="/contact" preventScrollReset>Contact Us</NavLink></li>
                <li><NavLink to="/login" preventScrollReset>Login</NavLink></li>
            </div>
        </div>
    )
}

export default Navbar