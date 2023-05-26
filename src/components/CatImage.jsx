import { useParams } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "./context";

const CatImage=()=>{
    const {data} = useContext(AppContext)

    const params = useParams()
    const {id} = params
    return(
        <div className="cat-image">
            <div>
                <img src={data[id]?.url} alt="" />
            </div>
        </div>
    )
}

export default CatImage