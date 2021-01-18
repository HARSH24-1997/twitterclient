import React,{useEffect} from 'react'
import Card from "../../Utils/TweetCard";
import "./Section1.css";
import Expiry from "../Section1/Expiry";

function Section1({Data,changeSec}) {

    // useEffect(() => {
    //     console.log
    // }, [Data])
  
    
   
    return (
        <>
       {Data===[]?<></>:<div style={{height:"100%"}}>
            {Data.map((props,index)=><Card Name={props.user.name} keys={index} Chat={props.text} Index={index} Img={props.user.profile_image_url} changeSec={changeSec}/>)}
            <h6><span>expired tweets</span></h6>
            {Expiry.map((props,index)=><Card Name={props.Name} keys={index} Chat={props.chat}/>)}            
        </div>}
        </>
    )
}

export default Section1
