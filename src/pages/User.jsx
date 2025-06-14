import React from 'react'
import {useState} from 'react'
import { useLocation } from 'react-router-dom';
import p1 from "../assets/images/p1.png"
import {useNavigate} from 'react-router-dom'

 

const User = () => {

 
   const [name, setName] = useState('');

    const isValidName = /^[a-zA-Z\s]+$/.test(name.trim());
  const navigate = useNavigate();
     const handleClick = () => {
     
      if(name!=null && isValidName)
      {
           
    navigate('/Quiz', { state: { name, key } });

      }
      else
      {
        
      }
  };

      const location = useLocation();
  const key = location.state?.key;
  return (
    <div className="flex flex-row items-center justify-center min-h-screen">
        <div className="bg-white w-[400px] flex flex-row gap-6 py-8 px-8 border-2 border-black rounded">
             {/* Left: Input */}
             
        <div className="flex-1 flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 border-black rounded px-4 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          
          <button onClick={()=>handleClick()}  className={ ` text-black py-2 px-8  m-2 rounded border-2 border-black    ${isValidName
                ? 'bg-yellow-200 hover:bg-green-300 hover:scale-105 transition-transform duration-300'
                : 'bg-yellow-200 hover:bg-red-400 hover:scale-105 transition-transform duration-300'}`}>Start Test</button>
        </div>

        {/* Right: Image and Key */}
        <div className="flex-1 relative flex flex-col items-center justify-center">
          <img
            src={p1}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-2 font-bold text-black text-8xl">
            {key}
          </h1>
        </div>

        </div>


    </div>
  )
}

export default User
