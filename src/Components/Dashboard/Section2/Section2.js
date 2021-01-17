import React from 'react'
import Chat from '../../Utils/Chat';
import Navbar from '../../Utils/SmallNav';
import Input from '../../Utils/Input';



function Section2() {
    return (
        <div className="container-fluid  p-0 border" style={{height:"100%",width:"100%",borderRadius:"8px"}}>
            <Navbar />
            <div>
                <div className="py-3 px-3"><small>Today</small></div>
                <Chat />
            </div>
            <div style={{position:"absolute",bottom:"25px"}}>
            <Input />
            </div>
        </div>
    )
}

export default Section2
