import React from 'react'
import search from "../../Images/search.svg";

function SmallNav() {
    return (
        <nav class="navbar navbar-expand navbar-light" >
          <div className="container-fluid px-5">
          <input type="text" className="form-control form-control-sm" id="inlineFormInputGroup"  size="70" placeholder="Send" />
          <img src={search} style={{marginLeft: "-50px",height: "20px",width: "50px"}}/>
          </div>
        </nav>
    )
}

export default SmallNav
