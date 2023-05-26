import React,{useEffect, useState} from "react"
import axios from "axios";

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [posts, setPosts] = useState([])
    const [load, setLoad] = useState(false)

    const [data, setData] = useState([])
    const [post, setPost] = useState([])
    const [load2, setLoad2] = useState(false)

    useEffect(()=>{
        axios.get(`https://dummyjson.com/users`).then(
            res => {
                setPosts(res.data.users)
                setLoad(true)
            }
        ).catch((e)=>{
            console.log("User not found")
        })
    },[])

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    const key ="live_tImLeo4OWAXw3SmAMajWtCuzmrSrtc3ZnPW9mLjiqfNxbKTKdiGMFw8ycYrMRIJx"
    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=30`, {
         headers: {
            "x-api-key": key,
        },
        })
        .then((res) => res.json())
        .then((json) => {
            setData(json)
            setLoad2(true)
        })
    }, [])

    useEffect(()=>{
      axios.get(`https://dummyjson.com/users`).then(
          res => {
              setPost(res.data.users)
          }
      ).catch((e)=>{
          console.log("User not found")
      })
  },[])
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    return( 
    <AppContext.Provider value={{posts ,load, data, post, load2}}>
        {children}
    </AppContext.Provider>)
}

export {AppContext, AppProvider}