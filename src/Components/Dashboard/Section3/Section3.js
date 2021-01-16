import React from 'react'
import Avatar from "../../../Images/avatar.svg";

function Section3() {
    return (
        <>
        <div className="container border " style={{height:"75%",width:"100%"}}>
            <img src={Avatar} style={{height:"25vh",width:"20vw"}}></img>
            <center>
                <h1 className="mx-auto">Name</h1></center>
           <center> <small>Online</small></center>
            <div className="row"  style={{ display: "flex" }}>
                <button>call</button>
                <button>mobile</button>
            </div>

            <div className="clearfix" style={{display:"flex"}}>
                    <span className="float-left">Room</span>
                    <span className="float-right">102</span>
            </div>
            <div className="clearfix" style={{ display: "flex" }}>
                <div className="float-right">
                    Standard
                </div>
                <div className="float-left">
                     Category
                </div>
            </div>
            <div className="clearfix" style={{ display: "flex" }}>
                <div className="float-right">
                    India
                </div>
                <div className="float-left">
                    Country
                </div>
            </div>
        </div>
        <div className="container border" style={{height:"25%"}}>
            <small>Task</small>
            <h1>Hello</h1>
        </div>
        </>
    )
}

export default Section3
