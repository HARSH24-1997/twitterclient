import React from 'react'

function AuthNav() {
    return (
        <nav className="navbar navbar-expand navbar-light" >
            <div className="container">
                <a className="btn btn-outline-primary navbar-btn ml-auto" href="https://twitterserverharsh.herokuapp.com/login">Twitter Login</a>
                {/* <a className="btn btn-outline-primary navbar-btn ml-auto" href="http://localhost:8000/login">Twitter Login</a> */}
             </div>
        </nav>
    )
}

export default AuthNav
