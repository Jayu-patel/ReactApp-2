import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { like } from "../store/slices/likeSlice";

const Cat = () => {
    const dispatch = useDispatch()

    const state = useSelector(state => state)
    const stateB = useSelector(state => state?.apiA?.data?.users)
    console.log(state.like)

    const f=(e,a,n)=>{
      dispatch(like({...e, n: i}))
    }
    console.log(state.like)
    
    return (
      !(state.apiB.isLoading) ?
      <div className="catpage sc">
        {state?.apiB?.data?.map((e,i) => {
          return <div className="cards" key={e.id}>
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
              <Link to={"/"+i} preventScrollReset>
                  <img src={e?.url} alt=" " />
                </Link>
            </div>
            <div className="detail">
              <div className="btn-sec">
                <div><i className={`fa fa-heart heart btn `+state?.like[i]?.style} aria-hidden="true" style={
                  {cursor : "pointer", color: state.like[i].style}
                  } onClick={()=>{dispatch(like({...e, n: i}))}
                  }></i> {Number(e.width / 10).toFixed(0)}k</div>
              </div>

              <div className="btn-sec">
                <div><i className="fa fa-commenting-o" aria-hidden="true"></i> {Number(e.width / 14).toFixed(2)}k</div>
              </div>

              <div className="btn-sec">
                <div><i className="fa fa-share" aria-hidden="true"></i> {(Number(e.width / 17).toFixed(2))}k</div>
              </div>
            </div>
          </div>
        })}
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
