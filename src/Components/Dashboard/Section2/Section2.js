import React from 'react'
import Chat from '../../Utils/Chat';
import Navbar from '../../Utils/SmallNav';
import Input from '../../Utils/Input';



function Section2() {
    return (
        <div className="container border" style={{height:"100%",width:"100%"}}>
            <Navbar />
            <div >
                <div className="py-3"><small>Today</small></div>
                <Chat />
            </div>
            <div style={{position:"absolute",bottom:"0px"}}>
            <Input />
            </div>
        </div>
    )
}

export default Section2
