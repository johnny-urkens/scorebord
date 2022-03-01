import React, { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('');
    const [isSet, setIsSet] = useState(false);
    console.log(isSet);
  
if(isSet === true){
    return(
        <div className="text-3xl">{name}</div>
    )
}
  return (
    <div>
   <form>
   <label>Teamnaam:</label>
    <input value={name} placeholder="  vul in aub" onInput={e => setName(e.target.value)}/>
    <button type="submit" onClick={()=> setIsSet(true)} className=" bg-gray-300 rounded text-white m-1 py-2 px-4 font-bold">Submit</button>
   </form>
    </div>
  )
}

export default Home