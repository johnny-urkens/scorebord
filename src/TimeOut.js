import React, {useState, useEffect} from 'react'

const TimeOut = ({setTimeOut}) => {

  const [time, setTime] = useState(5000);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(()=>{
    let interval = null;

    if (timerOn){
        interval = setInterval(()=>{
          if(time === 1000){
            clearInterval(interval);
            setTimerOn(false);
            setTimeOut(false);
          }
            setTime((previousTime)=> previousTime -1000);
        },1000);
    }else if (!timerOn){
        clearInterval(interval);
    }
    return()=>clearInterval(interval);
},[timerOn,time,setTimeOut]);

let seconds = ("0" + (Math.floor((time / 1000) % 60) % 60)).slice(-2);
let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  return (
    <div>       
    <div className="text-3xl text-red-800">Time out</div>
    <div className="text-7xl">
        {minutes} : {seconds} 
    </div>
    {!timerOn && time !== 0 && (
      <button onClick={() => setTimerOn(true)} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">Start</button>
    )}
</div>
  )
}

export default TimeOut;