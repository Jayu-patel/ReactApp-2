import { Link } from "react-router-dom"
const SideTab=()=>{
    return(
        <>
            <div className="scroll s2">
                <div className="side_tab_sec1">
                    <h4><i className="fa fa-duotone fa-user"></i> Jay Patel </h4>
                     <li> 
                        <Link to={"/t/Friend"}>
                            <i className="fa fa-solid fa-user-group"></i> Friends
                        </Link>
                        </li>
                     <li> 
                        <Link to={"/t/Most Recent"}>
                            <i className="fa fa-solid fa-business-time"></i> Most Recent
                        </Link>
                        </li>
                     <li> 
                        <Link to={"/t/Groups"}>
                            <i className="fa fa-solid fa-people-group"></i> Groups
                        </Link>
                        </li>
                     <li> 
                        <Link to={"/t/Marketplace"}>
                            <i className="fa fa-solid fa-store"></i> Marketplace
                        </Link>
                        </li>
                     <li> 
                        <Link to={"/t/Watch"}>
                            <i className="fa fa-duotone fa-tv"></i> Watch
                        </Link>
                        </li>
                     <li> 
                        <Link to={"/t/Memories"}>
                            <i className="fa fa-solid fa-clock-rotate-left"></i> Memories
                        </Link>
                    </li>
                </div>
                <div className="line"></div>
                <div className="side_tab_sec2">
                    <h4>Your shortcuts</h4>
                    <li> 
                        <Link to={"/t/Error 404 Not Found!"}>
                            Silly Cats Group
                        </Link>
                    </li>
                    <li> 
                        <Link to={"/t/Error 404 Not Found!"}>
                            Kohli fan-group
                        </Link>
                    </li>
                    <li> 
                        <Link to={"/t/Error 404 Not Found!"}>
                            21st century Humor
                        </Link>
                    </li>
                    <li> 
                        <Link to={"/Error 404 Not Found!"}>
                            Dank Memers
                        </Link>
                    </li>
                    <li> 
                        <Link to={"/t/Error 404 Not Found!"}>
                            Bole Jo Koyal Listner
                        </Link>
                    </li>
                </div>
            </div>
        </>
    )
}

export default SideTab