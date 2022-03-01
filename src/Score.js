import React, {useState} from 'react';
import Home from './Home';

function Score() {
  const [score, setScore] = useState(0);
 
  const [score2, setScore2] = useState(0);
 
  return (
   <>
<div className="flex flex-row" >
<div className="w-1/2">

<><Home/></>
<p className="text-9xl" onClick={() => setScore(score+1)}>{score} </p>

<button onClick={() => setScore(score-1)} className=" bg-gray-300 rounded text-white m-1 py-0 px-1 font-bold">
  -1
</button>
</div>
<div className="w-1/2">
<><Home/></>
<p className="text-9xl" onClick={() => setScore2(score2+1)}> {score2}</p>

<button onClick={() => setScore2(score2-1)} className=" bg-gray-300 rounded text-white m-1 py-0 px-1 font-bold">
  -1
</button>
</div>
</div>
   </>
  );
}
export default Score;