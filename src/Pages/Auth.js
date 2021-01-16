import React from 'react'
import Login from '../Components/Login/Login';
import Signup from '../Components/SignUp/Signup';
import "./Index.css"

function Auth() {
    return (
        <div className="container" >
            <div className="row d-flex align-items-center" style={{height:"100vh"}}>
                <div className="col-6 p-5" style={{height:"500px",borderRight:"groove"}}>
                    <Login/>
                </div>
                <div className="col-6 p-5"  style={{height:"500px"}}>
                    <Signup/>
                </div>
            </div>
        </div>
    )
}

export default Auth
