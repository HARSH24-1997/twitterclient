import React from 'react'

function Signup() {
    return (
          <div class="col-10 mx-auto border p-5 shadow-lg" >
            <center><h1>Sign up</h1></center>
            <form>
              <div class="form-group my-3"> <input type="email" class="form-control" placeholder="Enter email" id="form9"/> </div>
              <div class="form-group my-3"> <input type="password" class="form-control" placeholder="Password" id="form10"/></div>
            <center> <button type="submit" class="btn btn-primary">Submit</button></center>
            </form>
      </div>
    )
}

export default Signup
