import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"


const Cat = () => {
    const fun=(e)=>{
      if(e.style.color === "red"){
        e.style.color = "white"
      }
      else{
        e.style.color = "red"
      }
    }

    const state = useSelector(state => state)
    const stateB = useSelector(state => state?.apiA?.data?.users)
    
    return (
      !(state.apiB.isLoading) ?
      <div className="catpage scr">
        {state?.apiB?.data?.map((e,i) => (
          <div className="cards" key={e.id}>
            <div className="head">
              <div className="head-img">
                  <img src={stateB[i]?.image} alt=" " />
              </div>
              <div className="head-detail">
                <h2>{stateB[i]?.firstName} {stateB[i]?.lastName}</h2>
                {/* {Number(e.width / 10).toFixed(0)} */}
                <p> {stateB[i]?.age} minutes ago</p>
              </div>
            </div>
            <div className="image2">
              <NavLink to={"/"+i} preventScrollReset>
                  <img src={e?.url} alt=" " />
                </NavLink>
            </div>
            <div className="detail">
              <div className="btn-sec">
                <div><i className="fa fa-heart heart" aria-hidden="true" style={{cursor : "pointer"}} onClick={(e)=>{fun(e.target)}}></i> {Number(e.width / 10).toFixed(0)}k</div>
              </div>

              <div className="btn-sec">
                <div><i className="fa fa-commenting-o" aria-hidden="true"></i> {Number(e.width / 14).toFixed(2)}k</div>
              </div>

              <div className="btn-sec">
                <div><i className="fa fa-share" aria-hidden="true"></i> {(Number(e.width / 17).toFixed(2))}k</div>
              </div>
            </div>
          </div>
        ))}
      </div> :
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
      
    )
}

export default Cat
