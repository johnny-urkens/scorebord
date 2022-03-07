import React, {useState, useEffect} from 'react'

const Straftijd = () => {
    const [time, setTime] = useState(120000);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(()=>{
        let interval = null;

        if (timerOn){
            interval = setInterval(()=>{
                // console.log(time)
            if(time === 1000){
                clearInterval(interval);
                setTimerOn(false);
            }
            setTime((previousTime)=> previousTime -1000);
            },1000);
        }else if (!timerOn){
            clearInterval(interval);
        }
        return()=>clearInterval(interval);
    },[timerOn,time]);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
  return (
   <div> 
        <div >Straftijd</div>
        <div className="text-2xl">
            {minutes} : {seconds} 
        </div>
        {!timerOn && time === 120000 && (
          <button onClick={() => setTimerOn(true)} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">Start</button>
        )}
         {!timerOn && time === 0 && (
          <button onClick={() => setTime(120000)} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">reset</button>
        )}
       
    </div>
  )
}

export default Straftijd;