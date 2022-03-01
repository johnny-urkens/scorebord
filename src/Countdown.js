// import React from 'react'
// import { useState, useEffect } from 'react';

// const Countdown = (props) => {
//     const {initialMinute = 2,initialSeconds = 0} = props;
//     const [ minutes, setMinutes ] = useState(initialMinute);
//     const [seconds, setSeconds ] =  useState(initialSeconds);
//     useEffect(()=>{
//     let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             } 
//         }, 1000)
//         return ()=> {
//             clearInterval(myInterval);
//           };
//     });

//     return (
//         <div>
//         { minutes === 0 && seconds === 0
//             ? null
//             : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
//         }
//         </div>
//     )
// }

// export default Countdown;
import React, { Component } from "react";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 120000
      };
      startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            alert("Countdown ended");
          }
        }, 10);
      };
      stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
      };
      resetTimer = () => {
        if (this.state.timerOn === false) {
          this.setState({
            timerTime: this.state.timerStart
          });
        }
      };
     
  render() {

    const { timerTime, timerStart, timerOn } = this.state;
let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);


    return (
      <div >
        <div >Straftijd</div>
        {/* <div className="Countdown-label">Hours : Minutes : Seconds</div> */}
  
    <div className="text-2xl">
   {minutes} : {seconds}
</div>
{timerOn === false &&
  (timerStart === 0 || timerTime === timerStart) && (
    <button onClick={this.startTimer} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">Start</button>
  )}
{timerOn === true && timerTime >= 1000 && (
  <button onClick={this.stopTimer} className=" bg-red-800 rounded text-white m-1 py-0 px-1 font-bold float-left">Stop</button>
  )}

{(timerOn === false || timerTime < 1000) &&
  (timerStart !== timerTime && timerStart > 0) && (
    <button onClick={this.resetTimer} className=" bg-red-800 rounded text-white m-1 py-0 px-1 font-bold float-left">Reset</button>
  )}
      </div>
    );
  }
}
export default Countdown;