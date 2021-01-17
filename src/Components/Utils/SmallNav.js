import React from 'react'

function SmallNav() {
    return (
        <nav class="navbar navbar-expand navbar-light bg-light" >
            <div class="container-fluid">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item px-2"> UserName </li>
                    <li class="nav-item px-2">RoomNo. 102 </li>
                    <li class="nav-item px-2">Oct 1- Oct 12 </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                <a className="btn btn-outline-primary navbar-btn ml-auto">Clear Task</a>
                </ul>
                
            </div>

        </nav>
    )
}

export default SmallNav
