import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"


const CatImage=()=>{
    const state = useSelector(state => state)

    const params = useParams()
    const {id} = params
    return(
        <div className="cat-image">
            <div>
                <img src={state?.apiB?.data[id]?.url} alt="" />
            </div>
        </div>
    )
}

export default CatImage