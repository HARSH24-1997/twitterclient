import React from 'react'
import Avatar from "../../Images/avatar.svg";

function Chat() {
    return (
        <div className="clearfix p-0 m-0" style={{display:"flex"}} >
            <span className="float-left py-2 px-4">
                <img src={Avatar} style={{height:"3.5vh",width:"3.5vw"}}/>
            </span>
            <div className="float-right">
            <div className="clearfix" style={{display:"flex"}}>
                <div className="float-left">
                   <span><h5> Hi there ! </h5></span>
                   <span><h5> I have a problem in my room , It needs to be cleared </h5></span>
                   <span><h5> chat </h5></span>
                   <span><h5> This is What I said to you</h5></span>

                </div>
                <div className="float-right">
                <h5 className="px-4"> 10:34 </h5>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Chat
