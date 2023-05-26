import { useParams } from "react-router-dom"
const FriendTab=()=>{
    const param = useParams()
    const {type} = param
    return(
        <div className="fri">
            <div>
                <h1>{type}</h1>
                <p>This page is not complited yet</p>
            </div>
        </div>
    )
}

export default FriendTab