import React,{useEffect} from 'react'
import Loader from "../Components/Utils/Loader";
import { useParams, useHistory } from "react-router-dom";

function End(props) {

    console.log(props);
    // let { data } = useParams();
    let history = useHistory();


    useEffect(() => {
        const { token, tokenSecret, screen_name, profile_image_url, name } = props.match.params;
        sessionStorage.setItem("token", token)
        sessionStorage.setItem("tokenSecret", tokenSecret)
        sessionStorage.setItem("screen_name", screen_name)
        sessionStorage.setItem("profile_image_url", profile_image_url)
        sessionStorage.setItem("name", name)
        history.push("/home");
    }, [])

    return (
        <Loader />
    )
}

export default End
