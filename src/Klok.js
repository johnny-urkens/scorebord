import React, {useState, useEffect} from 'react'
import TimeOut from './TimeOut';
import useSound from "use-sound";
import sound from './sound/Scoreboard-horn.mp3'



const Klok = (props) => {
 
    const[play] = useSound(sound);
  
    

  var tijd = ((props.time)*60000)-2000;
  // console.log(tijd);
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [timeOut, setTimeOut] = useState(false);
    
    const startTimeOut =()=>{
      play();
      setTimerOn(false);
      setTimeOut(true);
      
      
    }

    useEffect(()=>{
        let interval = null;

        if (timerOn){
            interval = setInterval(()=>{
                // console.log(time)
            if(time >tijd){
                clearInterval(interval);
                setTimerOn(false);
            }
            setTime((previousTime)=> previousTime +1000);
            },1000);
        }else if (!timerOn){
            clearInterval(interval);
        }
        return()=>clearInterval(interval);
    },[timerOn,time,tijd]);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    if(timeOut === true){
      return(
      <div><TimeOut setTimeOut={setTimeOut}/></div>)
    }
    
  return (
    <div>       
        <div className="text-3xl text-red-800">Timer </div>
        <div className="text-9xl">
       
             {minutes} : {seconds} 
        </div>
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)} className=" bg-orange-800 rounded text-white m-1 py-0s px-1 font-bold">Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)} className=" bg-red-800 rounded text-white m-1 py-0 px-1 font-bold float-left">Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">Hervatten</button>
        )}
        {time !== 0 && <button onClick={play} className=" bg-orange-600 rounded text-white m-1 py-0 px-1 font-bold">Toeter</button>}
        {timerOn && <button onClick={()=> startTimeOut()} className=" bg-orange-400 rounded text-white m-1 ml-10 py-0s px-1 font-bold">TimeOut</button>}
        
        
    </div>
  )
}

export default Klok