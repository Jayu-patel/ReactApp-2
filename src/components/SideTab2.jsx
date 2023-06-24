import { useSelector } from "react-redux/es/hooks/useSelector"

const SideTab2=()=>{
    const state = useSelector(state => state?.apiA?.data?.users)
    const arr = []

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const n = getRandomInt(5,19)
    
    state?.forEach((_,i) => {
        if(i>n && i<n+11){
            arr.push(state[i])
        }
    });

    const off=(a)=>{
        if(a.innerHTML === "Confirm"){
            a.innerHTML = "Confirmed"
            a.style.background = "white"
            a.style.color = "#282828"
            a.nextElementSibling.style.display = "none"
        }
        else{
            a.innerHTML = "Confirm"
            a.style.background = "rgba(53, 0, 211, 0.8)"
            a.style.color = "white"
            a.nextElementSibling.style.display = "inline-block"
        }
    }

    const off2=(a)=>{
        a.parentElement.parentElement.parentElement.innerHTML = "Deleted!"
    }
    return(
        <>
            <div className="scroll s3">
                {
                    arr?.map((e,i)=>
                    (
                        <div className="req" key={i}>
                            <div className="req_img">
                                <img src={e?.image} alt="" />
                            </div>
                            <div className="req_box">
                                <h3>{e?.firstName} {e?.lastName}</h3>
                                <p>{e?.age} Mutual Fridends</p>
                                <div className={i}>
                                    <button className="confirm_btn btn" onClick={(a)=>{off(a.target)}} >Confirm</button>
                                    <button onClick={(a)=>{off2(a.target)}}>Delete</button>
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