import React from 'react';
import Section0 from '../Components/Dashboard/Section0/Navbar';
import Header from '../Components/Dashboard/Header/Header';
import Section1 from '../Components/Dashboard/Section1/Section1';
import Section2 from '../Components/Dashboard/Section2/Section2';
import Section3 from '../Components/Dashboard/Section3/Section3';

function Homepage() {
    return (
        <>
        <div className="container-fluid p-0 m-0" style={{height:"100vh",width:"100vw"}}>
        <div className="p-0 m-0" style={{height:"100%",width:"4%",float:"left"}}><Section0/></div>
        <div className="p-0 m-0" style={{height:"15%",width:"96%",float:"right"}}><Header/></div>
        <div className="p-0 m-0" style={{height:"84%",width:"96%",float:"right"}}>
        <div className=" px-0 pt-2 m-0 row"  style={{height:"100%"}}>
            <div className="col-3">
                    <Section1/>
            </div>
            <div className="col-6 ">
                    <Section2/>
            </div>
            <div className="col-3">
                    <Section3/>
            </div>
        </div>    
        </div>
        </div>
        </>
    )
}

export default Homepage
