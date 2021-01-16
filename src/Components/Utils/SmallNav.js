import React from 'react'

function SmallNav() {
    return (
        <nav class="navbar navbar-expand navbar-light" >
            <div class="container-fluid">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item px-2"> UserName </li>
                    <li class="nav-item px-2">RoomNo. 102 </li>
                    <li class="nav-item px-2">Oct 1- Oct 12 </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <button>Create Task</button>
                </ul>
                
            </div>

        </nav>
    )
}

export default SmallNav
