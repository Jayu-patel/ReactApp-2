import { useParams } from "react-router-dom"
const FriendTab=()=>{

    const students = {
        student1 : {
            name: "Jay",
            age: "20"
        },

        student2 : {
            name: "Parth",
            age: "20"
        }
    }

    console.log(students.student2.name)



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