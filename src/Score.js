import React, {useState} from 'react';
import Home from './Home';


const start = {
  ploeg1: 0,
  ploeg2: 0,
}

function Score() {
  const [score, setScore] = useState(0);
 
  const [score2, setScore2] = useState(0);

  const [lijst1, setLijst1] = useState([start])

  const click1 = ()=>{
    setScore(score+1)
    const test = (score+1)
    console.log(test)
    const newLijst = [...lijst1]
    newLijst.push({ploeg1:test,ploeg2:score2})
    setLijst1(newLijst)
   console.log(lijst1)
  }
  const click3 = ()=>{
    setScore(score-1)
    const test = (score-1)
    console.log(test)
    const newLijst = [...lijst1]
    newLijst.push({ploeg1:test,ploeg2:score2})
    setLijst1(newLijst)
   console.log(lijst1)
  }
  const click2 = ()=>{
    setScore2(score2+1)
    const test2 = (score2+1)
    const newLijst = [...lijst1]
    newLijst.push({ploeg1:score,ploeg2:test2})
    setLijst1(newLijst)
   console.log(lijst1)
  }
  const click4 = ()=>{
    setScore2(score2-1)
    const test2 = (score2-1)
    const newLijst = [...lijst1]
    newLijst.push({ploeg1:score,ploeg2:test2})
    setLijst1(newLijst)
   console.log(lijst1)
  }
 
  return (
   <>
<div className="flex flex-row " >
<div className="w-1/2">

<><Home/></>

{/* <p className="text-9xl" onClick={() => setScore(score+1)}>{score} </p> */}
<p className="text-9xl" onClick={click1}>{score} </p>

<button onClick={click3} className=" bg-gray-300 rounded text-white m-1 py-0 px-1 font-bold">

  -1
</button>
</div>
<div className="w-1/2">
<><Home/></>
<p className="text-9xl" onClick={click2}> {score2}</p>

<button onClick={click4} className=" bg-gray-300 rounded text-white m-1 py-0 px-1 font-bold">
  -1
</button>
</div>
</div>
   </>
  );
}
export default Score;