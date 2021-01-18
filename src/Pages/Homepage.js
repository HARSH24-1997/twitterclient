import React, { useState, useEffect } from 'react';
import Section0 from '../Components/Dashboard/Section0/Navbar';
import Header from '../Components/Dashboard/Header/Header';
import Section1 from '../Components/Dashboard/Section1/Section1';
import Section2 from '../Components/Dashboard/Section2/Section2';
import Section3 from '../Components/Dashboard/Section3/Section3';
import socketIOClient from "socket.io-client";
import { url } from "../Const";
import axios from "axios";

function Homepage() {

    const [Section2Data, setSection2Data] = useState()
    const [Data,setData] = useState([])

    const mainSec = (id) => {
        setSection2Data(Data[id])
    }

    useEffect(() => {
       const fetchtweets = async () => {
            try {
                const resp = await axios.get("https://twitterserverharsh.herokuapp.com/mentions", { withCredentials: true })
                // const resp = await axios.get("http://localhost:8000/mentions", { withCredentials: true })
                var result = resp.data
                for (let i = 0; i < result.length - 1; i++) {
                    let temp = result[i]
                    for (let j = i + 1; j < result.length; j++) {
                      if (result[j].id_str === temp['in_reply_to_status_id_str']) {
                        if (!result[j].replies) {
                          result[j].replies = []
                        }
                        result[j].replies.unshift(result.splice(i, 1)[0])
                        i--
                      }
                    }
                  }
                result = result.filter(prop => prop.replies || prop.user.screen_name !== sessionStorage.getItem("screen_name"))
                for(let i = 0; i < result.length ; i++){
                    if(result[i].replies===undefined){
                        result[i].replies=[]
                    }
                }
                console.log(result);
                setSection2Data(result[0])
                setData(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchtweets();
    }, []);

    useEffect(() => {
        const socket = socketIOClient("https://twitterserverharsh.herokuapp.com");
        socket.on("follow", data => {
          setData(oldTweets => {
    
            const oldCopy = JSON.parse(JSON.stringify(oldTweets))
    
            for (let tweet of oldCopy) {
              if (tweet.id_str === data['in_reply_to_status_id_str']) {
    
                if (tweet.replies) {
                  tweet.replies = tweet.replies.filter(el => el.id_str !== data.id_str)
                }
                tweet.replies = tweet.replies ? [...tweet.replies, data] : [data]
                setSection2Data(tweet)
                return oldCopy
              }
            }
            return oldTweets
          })

        });
    }, []);
    
    useEffect(() => {
        const socket = socketIOClient("https://twitterserverharsh.herokuapp.com");
        socket.on("mention", data => {
            let flag
            setData(Tweets => {
                const Temp = JSON.parse(JSON.stringify(Tweets))
                flag = true
                for (let props of Temp) {
                    if (props.id_str === data['in_reply_to_status_id_str']) {
                        if (props.replies) {
                            props.replies = props.replies.filter(x => x.id_str !== data.id_str)
                        }
                        props.replies = props.replies ? [...props.replies, data] : [data]
                        setSection2Data(props)
                        flag = false
                        return Temp
                    }
                }
                return Tweets
            })
            if (flag) {
                setData(Tweets => {
                    Tweets = Tweets.filter(tweet => tweet.id !== data.id)
                    return [data, ...Tweets]
                });
            }
        });
    }, []);


    return (
        <>
            <div className="container-fluid p-0 m-0" style={{ height: "100vh", width: "100vw" }}>
                <div className="p-0 m-0" style={{ height: "100%", width: "4%", float: "left" }}><Section0 /></div>
                <div className="p-0 m-0" style={{ height: "15%", width: "96%", float: "right" }}><Header /></div>
                <div className="p-0 m-0" style={{ height: "84%", width: "96%", float: "right" }}>
                    <div className=" px-0 pt-2 m-0 row" style={{ height: "100%" }}>
                        <div className="col-3">
                            <Section1 Data={Data} changeSec={mainSec}/>
                        </div>
                        <div className="col-6 ">
                            <Section2 Data={Section2Data} />
                        </div>
                        <div className="col-3">
                            <Section3 Data={Section2Data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
