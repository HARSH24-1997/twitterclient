import React from 'react'
import "./Login.css";

function Login() {
    return ( 
          <div className="col-10 mx-auto border my-auto p-5 shadow-lg" >
            <center><h1>Log in</h1></center>
            <form>
              <div className="form-group my-3"> <input type="email" className="form-control" placeholder="Enter email" id="form9"/> </div>
              <div className="form-group my-3"> <input type="password" className="form-control" placeholder="Password" id="form10"/></div>
              <center> <button type="submit" className="btn btn-primary">Submit</button></center>
            </form>
          </div>
    )
}

export default Login
