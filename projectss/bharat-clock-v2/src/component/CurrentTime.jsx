import { useEffect } from "react";
import { useState } from "react";

let ClockTime=()=>{
const[time,setTime]=useState(new Date());
//! This will run properly but does not cancel the time if we switch on another page...?
// useEffect(()=>{
//     setTime(new Date())
// })

useEffect(()=>{
    console.log("Time Started")
    let interId=setInterval(()=>{
        setTime(new Date());
    },1000)

    return ()=>{
        clearInterval(interId);
        console.log("Time has been cleared")
    }

},[])

    return <p className="lrad">This is the current time: {time.toDateString()}- {time.toTimeString()}
    <h1>{time.toTimeString()}</h1>
    
    </p>
};

export default ClockTime;