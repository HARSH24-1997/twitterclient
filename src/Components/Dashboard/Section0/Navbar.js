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
import { Link } from "react-router-dom";
import "../Index.css"

function Navbar() {
    return (
        <>
            <nav class="navbar p-0" style={{height:"100%",backgroundColor:"#F7F6F3"}}>
                <ul class="navbar-nav mx-auto mb-auto">
                    <li class="nav-item "> 
                        <img src={dots} height="25vh" width="45vw" alt="dots"></img>
                    </li>
                    <li class="nav-item">
                       <img src={diamond} alt="diamond" height="25vh" width="45vw"></img>
                    </li>
                </ul>
                <ul class="navbar-nav mx-auto my-auto">
                    <li class="nav-item pt-0">
                        <img src={clock} alt="clock" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-2">
                       <img src={home}  alt="home" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-2">
                       <img src={people} alt="people" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-2">
                       <img src={chat} alt="chat" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-2">
                       <img src={card} alt="card" height="20vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pt-2">
                       <img src={shop} alt="shop" height="20vh" width="45vw"></img>
                    </li>
                </ul>
                <ul class="navbar-nav mx-auto mt-auto">
                    <li class="nav-item ">
                        <img src={setting} alt="setting" height="25vh" width="45vw"></img>
                    </li>
                    <li class="nav-item pb-2">
                       <img src={avatar} alt="avatar" height="25vh" width="45vw"></img>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
