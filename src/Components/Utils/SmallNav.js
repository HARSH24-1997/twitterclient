import React from 'react'

function SmallNav({Name,Image}) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light" >
            <div className="container-fluid">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item px-2"><img src={Image}  height="25vh" width="45vw"/></li>
                    <li className = "nav-item pr-2"> <b>{Name}</b> </li>
                    <li className="nav-item px-4">RoomNo. 102 </li>
                    <li className="nav-item px-4">Oct 1- Oct 12 </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                <a className="btn btn-outline-primary navbar-btn ml-auto">Clear Task</a>
                </ul>
                
            </div>

        </nav>
    )
}

export default SmallNav
