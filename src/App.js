
// import React , { Component } from 'react';
// import Klok from './Klok';
// import Countdown from './Countdown';
// import Score from './Score';
// import TimeOut from './TimeOut';


// class App extends Component {
  
//   render() {
//     return (
//       <div className="App container mx-auto mt-3 font-normal">
//         {/* <div className="text-5xl text-red-700">Scorebord</div> */}
//         <div >
//         <div className="text-center">
//         <Score/>
//         </div>
//         <div className="text-center" >
//         <TimeOut />
//         </div>
//     <div className="float-right mr-10"><Countdown /></div>
//     <div className="float-left ml-10"><Countdown /></div>
//         </div>
        
//       </div>
    
//     );
//   }
// }



// export default App;
import React, {useState} from 'react'
import Klok from './Klok';
import Score from './Score';
import Straftijd from './Straftijd';

const App = () => {

  const [speeltijd, setSpeeltijd] = useState(0)
  const [keuze, setKeuze] = useState(false)
  const vijftien = ()=>{
    setSpeeltijd(1);
    setKeuze(true);
  }
  const vijfentwintig = ()=>{
    setSpeeltijd(25);
    setKeuze(true);
  }
  const dertig = ()=>{
    setSpeeltijd(30);
    setKeuze(true);
  }
  if(keuze === false){
    return(
<div className="text-center">
  <h1 className="text-5xl">Scorebord met klok</h1>
  <br/>
  <h3 className="text-2xl">Kies de speelduur</h3>
  <br/>
<div className="text-center">
  <button onClick={()=>vijftien()} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">15 min</button>
  <button onClick={()=>vijfentwintig()} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">25 min</button>
  <button onClick={()=>dertig()} className=" bg-green-800 rounded text-white m-1 py-0 px-1 font-bold">30 min</button>
</div>
</div>
    )
  }else{
  return (
    <div className="App container mx-auto mt-3 font-normal">
             {/* <div className="text-5xl text-red-700">Scorebord</div> */}
             <div >
             <div className="text-center">
             <Score/>
             </div>
             <div className="text-center" >
             <Klok time={speeltijd} />
             </div>
         <div className="float-right mr-10"><Straftijd /></div>
         <div className="float-left ml-10"><Straftijd /></div>
             </div>
            
    </div>
  )}
}

export default App;