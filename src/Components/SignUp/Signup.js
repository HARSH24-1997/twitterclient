import React from 'react'

function Signup() {
    return (
          <div className="col-10 mx-auto border p-5 shadow-lg" >
            <center><h1>Sign up</h1></center>
            <form>
              <div className="form-group my-3"> <input type="email" className="form-control" placeholder="Enter email" id="form9"/> </div>
              <div className="form-group my-3"> <input type="password" className="form-control" placeholder="Password" id="form10"/></div>
            <center> <button type="submit" className="btn btn-primary">Submit</button></center>
            </form>
      </div>
    )
}

export default Signup
