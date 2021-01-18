import React from 'react'
import Avatar from "../../Images/avatar.svg";

function TweetCard({Name,Chat,Index,changeSec,Img}) {

    const changeMainSection=(id)=>{
        console.log(id,"changeMainSec");
         changeSec(id);
    }

    return (
        <div className="container border" style={{borderRadius:"10px",cursor:"pointer"}} onClick={()=>changeMainSection(Index)}>
        <span className="clearfix" style={{display:"flex"}}>
            <span className="float-left py-2 my-2">
                <img src={Img} style={{height:"3.5vh",width:"3.5vw"}}/>
            </span>
            <span className="float-right px-4 py-2 my-2">
                    <p className="my-0" style={{}}><b>{Name}</b></p>
                    <p className=" my-0" style={{fontSize:"0.7rem"}}>{Chat}</p>
                
            </span>
        </span>
        </div>
    )
}

export default TweetCard
