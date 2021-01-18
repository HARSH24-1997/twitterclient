import React from 'react'
import Avatar from "../../Images/avatar.svg";

function Chat({ Data }) {
    return (
        <div className="clearfix p-0 m-0" style={{ display: "flex" }} >
            <span className="float-left py-2 px-4">
                {Data === undefined ? <span></span> : <img src={Data.user.profile_image_url} style={{ height: "3.5vh", width: "3.5vw" }} />}
            </span>
            <div className="float-right">
                <div className="clearfix" style={{ display: "flex" }}>
                    <div className="float-left">
                        {Data === undefined ? <span></span> : <span><p>{Data.text}</p></span>}
                    </div>
                    <div className="float-right">
                        <h5 className="px-4"> 10:34 </h5>
                    </div>
                </div>
                {Data === undefined ? <span></span> : <div >
                    {Data.replies.map((props, index) => {
                        return (
                            <>
                                <p><b>Reply By {sessionStorage.getItem("screen_name")}</b></p>
                                <p>{props.text}</p>
                            </>
                        )
                    })
                    }
                </div>}
            </div>
        </div>
    )
}

export default Chat
