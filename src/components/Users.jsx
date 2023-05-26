import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const User=()=>{
    const [post, setPost] = useState({})
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const {id} = params

    useEffect(()=>{
        axios.get(`https://dummyjson.com/users/${id}`).then(
            res => {
                setPost(res.data)
                setLoad(true)
            }
        ).catch((e)=>{
            console.log("User not found",e)
        })
    },[id])
    
    const goBack=()=>{
        navigate("/user")
    }
    return(
        load ? 
        <div className="user-box ind-user">
            <div className="sec1">
                <button onClick={()=>goBack()}><i className="fa-solid fa-arrow-left"></i> Back</button>
                <div className="image">{
                    post ? <img src={post.image} alt="" /> : <div>j</div>
                }
                </div>
                <h1>{post.firstName} {post.lastName}</h1>
                <h4>{post.email}</h4>
            </div>
            <div className="sec2">
                <div className="details">
                    <h2>Name :  {post.firstName}  {post.maidenName}  {post.lastName}</h2>
                    <h2>Gender :  {post.gender}</h2>
                    <h2>Age :  {post.age}</h2>
                    <h2>Username -  {post.username}</h2>
                    <h2>Address : {post.address?.address}, {post.address?.city}</h2>
                    <h2>Company :  {post.company?.name}</h2>
                    <h2>Department :  {post.company?.department}</h2>
                </div>
            </div>
        </div>: 
        <div className="spin spin2">
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

export default User