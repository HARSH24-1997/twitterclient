import React, { useState } from 'react'
import search from "../../Images/search.svg";
import axios from "axios";

function SmallNav({Data}) {
  const [Msg, setMsg] = useState('')

  const Submit = (e) => {
    e.preventDefault()
    console.log(Msg,"Herer");
    axios.post("https://twitterserverharsh.herokuapp.com/reply", {
      status: Msg, 
      in_reply_to_status_id: Data.id_str 
    }, { withCredentials: true })
    setMsg("")
  }

  return (
    <nav className="navbar navbar-expand navbar-light" >
      <div className="container-fluid px-5">
        <form onSubmit={Submit}>
          {/* <input type="text" className="form-control form-control-sm" id="inlineFormInputGroup"  size="70" placeholder="Send" />
          <img  src={search} style={{marginLeft: "-50px",height: "20px",width: "50px"}}/> */}
          <div className="input-group mb-3">
            <input type="text" className="form-control" style={{zIndex:"1"}}size="60" placeholder="Send" onChange={(event)=>setMsg(event.target.value)} aria-label="Amount (to the nearest dollar)" />
            <div class="input-group-append">
          <img className="py-2" src={search} style={{position:"absolute",zIndex:"100",marginLeft: "-50px",height: "35px",width: "50px"}}/>
            </div>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default SmallNav
