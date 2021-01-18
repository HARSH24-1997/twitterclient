import React,{useEffect} from 'react'
import Chat from '../../Utils/Chat';
import Navbar from '../../Utils/SmallNav';
import Input from '../../Utils/Input';



function Section2({Data}) {

    useEffect(() => {
        console.log(Data)
    }, [Data])

    console.log(Data,"Changes");

    return (
        <div className="container-fluid  p-0 border" style={{height:"100%",width:"100%",borderRadius:"8px"}}>
            {Data===undefined?<div></div>:<Navbar Name={Data.user.name} Image={Data.user.profile_image_url}/>}
            <div>
                <div className="py-3 px-3"><small>Today</small></div>
                {Data===undefined?<div></div>:<Chat Data={Data} />}
            </div>
            <div style={{position:"absolute",bottom:"25px"}}>
            <Input Data={Data}/>
            </div>
        </div>
    )
}

export default Section2
