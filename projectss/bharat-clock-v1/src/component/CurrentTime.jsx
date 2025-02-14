let ClockTime=()=>{
    let time=new Date();

    return <p className="lrad">This is the current time: {time.toDateString()}- {time.toTimeString()}
    <h1>{time.toDateString()}</h1>
    </p>
};

export default ClockTime;