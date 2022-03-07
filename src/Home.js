import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const Home = () => {
    const [name, setName] = useState('');
    const [isSet, setIsSet] = useState(false);
    console.log(isSet);
  
if(isSet === true){
    return(
        <div className="text-4xl">{name}</div>
    )
}
  return (
    
    <div className="mb-2">
   <form>
   <label>team:</label>
    <input value={name} placeholder="  vul in aub"  onInput={e => setName(e.target.value)} className="border-2"/>
    <button type="submit" onClick={()=> setIsSet(true)} className=" bg-green-500 rounded text-white m-1 py-2 px-4 font-bold"><FaCheck/></button>
   </form>
    </div>
  )
}

export default Home