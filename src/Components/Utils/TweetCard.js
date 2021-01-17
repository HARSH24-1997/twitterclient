import React from 'react'
import Avatar from "../../Images/avatar.svg";

function TweetCard() {
    return (
        <div className="container border" style={{borderRadius:"10px"}}>
        <span className="clearfix" style={{display:"flex"}}>
            <span className="float-left py-2">
                <img src={Avatar} style={{height:"3.5vh",width:"3.5vw"}}/>
            </span>
            <span className="float-right px-4 py-2">
                    <h5>Name</h5>
                    <h5>Chat</h5>
                
            </span>
        </span>
        </div>
    )
}

export default TweetCard
