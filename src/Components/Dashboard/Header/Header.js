import React from 'react'
import "./Index.css"

function Header() {
    return (
        <>
            <nav className="navbar navbar-light t" style={{ height: "max-content", width: "100%", backgroundColor: "white" }}>
                <span className="ml-auto px-5"><small className="underline">Update</small></span>
                <div className=" clearfix mr-auto px-5">
                    <span className="px-5"><small>Session: 45min</small></span>
                    <span className="px-5"><small>Username: Harsh</small></span>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="container">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item pt-2 px-2"> <h3><b>Conversation</b></h3> </li>
                        <li className="nav-item pt-2 px-2" >
                            <input type="text" className="form-control form-control-sm" id="inlineFormInputGroup" placeholder="Search" />
                        </li>
                        
                    </ul>
                    <div className="px-5 pt-2"><a className="btn btn-outline-primary navbar-btn ml-auto">Online</a></div>
                </div>
            </nav>
        </>
    )
}

export default Header
