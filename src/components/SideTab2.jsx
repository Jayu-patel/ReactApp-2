import { useContext } from "react"
import { AppContext } from "./context"

const SideTab2=()=>{
    const {post} = useContext(AppContext)
    let arr = []
    for(let i=10; i<20; i++){
        arr.push(post[i])
    }
    // <p> {Number(e.width / 10).toFixed(0)} minutes ago</p>
    const off=(a)=>{
        a.innerHTML = "confirmed"
        a.style.background = "white"
        a.style.color = "#282828"
    }
    return(
        <>
            <div className="scroll s3">
                {
                    arr.map((e,i)=>(
                        <div className="req" key={i}>
                            <div className="req_img">
                                <img src={e?.image} alt="" />
                            </div>
                            <div className="req_box">
                                <h3>{e?.firstName} {e?.lastName}</h3>
                                <p>{e?.age} Mutual Fridends</p>
                                <div className={i}>
                                    <button className="confirm_btn btn" onClick={(a)=>{off(a.target)}}>Confirm</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SideTab2