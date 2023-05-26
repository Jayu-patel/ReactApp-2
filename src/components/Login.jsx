const Login=()=>{
    return(
        <div className="userbox user-box home-box scr">
            <h1>Login Page</h1>
            <form>
                <div>
                <label>Username</label>
                <input type="text" placeholder="Enter username"/>
                </div>

                <div>
                <label>Email</label>
                <input type="email" placeholder="Enter email"/>
                </div>

                <div>
                <label>Password</label>
                <input type="password" placeholder="Enter password"/>
                </div>

                <button id="last3">Submit</button>
            </form >
        </div>
    )
}

export default Login