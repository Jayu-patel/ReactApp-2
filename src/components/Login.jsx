import { useState } from "react"
const Login=()=>{
    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )
    let name,value
    const input=(e)=>{
        name = e.target.name
        value = e.target.value

        setUser({...user, [name]:value})
    }
    const post = async (e) =>{
        e.preventDefault()
        if(user.name!="" && user.email!="" && user.password!=""){
        const {name, email, password} = user
        const res = await fetch('https://mern-app2-5zlq.onrender.com/post',{
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            name, email, password
          })
        })
    
        let data =  await res.json()
        setUser({
            name: "",
            email: "",
            password: ""
        })
        }
        else{
            window.alert("Please Enter All Details")
        }
        
      }

    return(
        <div className="userbox user-box home-box">
            <h1>Login Page</h1>
            <form>
                <div>
                <label>Username</label>
                <input type="text" name="name" placeholder="Enter username"
                    value={user.name}
                    onChange={input}
                    />
                </div>

                <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter email"
                    value={user.email}
                    onChange={input}
                    />
                </div>

                <div>
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password"
                    value={user.password}
                    onChange={input}
                    />
                </div>

                <button id="last3" onClick={post}>Submit</button>
            </form >
        </div>
    )
}

export default Login