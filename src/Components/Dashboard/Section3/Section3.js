import React,{useEffect} from 'react'
import Avatar from "../../../Images/avatar.svg";

function Section3({Data}) {

    useEffect(() => {
        console.log(Data);
    }, [Data])

    return (
        <>
            <div className="container-fluid border " style={{ height: "75%", borderRadius: "10px" }}>
                <div className="pt-4">
                 {  Data===undefined?<div></div>:<img src={Data.user.profile_image_url} style={{ height: "20vh", width: "20vw",borderRadius:'60%' }}></img>}
                </div>
                <center>
                {  Data===undefined?<div></div>:<h3 className="mx-auto"><b>{Data.user.name}</b></h3>}
                </center>
                <center> <small className="text-muted">Online</small></center>

                <div className="px-5 py-2 d-flex justify-content-between">
                    <button className="rounded-pill btn btn-outline-primary">{' '} Call {' '}</button>
                    <button className="rounded-pill btn btn-outline-primary">Mobile</button>
                </div>

                <div className="px-5 py-2 d-flex justify-content-between" >
                    <div className="float-left text-muted">Room</div>
                    <div className="float-right ">102</div>
                </div>
                <div className="px-5 py-2 d-flex justify-content-between" >
                    <div className="float-left text-muted">Category</div>
                    <div className="float-right ">Standard</div>
                </div>
                <div className="px-5 py-2 d-flex justify-content-between" >
                    <div className="float-left text-muted">Country</div>
                    <div className="float-right ">Canada</div>
                </div>
            </div>
            <div className="container border" style={{ height: "25%", borderRadius: "10px" }}>
                <small >Task</small>
                <div className="form-check pt-2" >
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        Clean the Room
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        Call Customer care
                 </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                        Change the Tower and bedsheets.
                    </label>
                </div>
            </div>
        </>
    )
}

export default Section3
