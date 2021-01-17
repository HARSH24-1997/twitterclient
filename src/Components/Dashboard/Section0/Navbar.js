import React from 'react'
import dots from "../../../Images/dots.svg"
import diamond from "../../../Images/diamond.svg"
import clock from "../../../Images/clock.svg"
import chat from "../../../Images/chat.svg"
import card from "../../../Images/card.svg"
import avatar from "../../../Images/avatar.svg"
import home from "../../../Images/home.svg"
import setting from "../../../Images/setting.svg"
import shop from "../../../Images/shop.svg"
import people from "../../../Images/people.svg"
import axios from "axios";
import {useHistory} from "react-router-dom"
import "../Index.css"

function Navbar() {

    let history = useHistory();
    const logout = ()=>{
        axios.get("https://twitterhdesk.herokuapp.com/logout")
        .then(()=>{
            history.push("/")
        })
    }

    return (
        <>
            <nav class="navbar p-0" style={{height:"100%",backgroundColor:"#F7F6F3"}}>
                <ul class="navbar-nav mx-auto mb-auto">
                    <li class="nav-item "> 
                        <img src={dots} height="25vh" width="45vw" alt="dots"></img>
                    </li>
                    <li class="nav-item pb-3">
                       <img src={diamond} alt="diamond" height="25vh" width="45vw"></img>
                    </li> 
                    <li class="nav-item pt-5">
                        <img src={clock} alt="clock" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-4">
                       <img src={home}  alt="home" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-4">
                       <img src={people} alt="people" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-4">
                       <img src={chat} alt="chat" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-4">
                       <img src={card} alt="card" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-4">
                       <img src={shop} alt="shop" height="20vh" width="45vw"></img>
                    </li>
                </ul>
                
                <ul class="navbar-nav mx-auto mt-auto">
                    <li class="nav-item " onClick={logout}>
                        <img src={setting} alt="setting" height="25vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pb-2">
                       {/* <img src={sessionStorage.getItem("profileurl")} alt="avatar" height="25vh" width="45vw"></img> */}
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
