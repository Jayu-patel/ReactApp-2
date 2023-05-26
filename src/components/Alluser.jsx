import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./context";

const Alluser=()=>{

    const {posts , load} = useContext(AppContext)
    
    return (
      load ? 
      <div className="user-box use scr">
        {posts.map((e) => (
          <Link to={"/user/"+e.id} key={e.id} preventScrollReset>
            <div
              className="all-user"
              key={e.id}
            >
              <div className="user-detail-image">
                <img src={e.image} key={e.id} alt="" />
              </div>
              <div className="user-detail">
                <h2>
                  {e.firstName} {e.lastName}
                </h2>
                <p className="email">{e.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>: 
      <div className="spin">
      <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  </div>
    );
}

export default Alluser