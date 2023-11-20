import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="logo"><h1>HAPPY CATS</h1></div>
            <div className="nav">
                <li><Link to="/" preventScrollReset>Home</Link></li>
                <li><Link to="user" preventScrollReset>Useres</Link></li>
                <li><Link to="contact" preventScrollReset>Contact Us</Link></li>
                <li><Link to="login" preventScrollReset>Login</Link></li>
            </div>
        </div>
    )
}

export default Navbar