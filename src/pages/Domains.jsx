import React from 'react'
import {useNavigate} from 'react-router-dom'
import User from './User.jsx'
import p2 from "../assets/images/p2.png"

const categories = [
  "Web Development",
  "Computer Networking (Cyber Security)",
  "Artificial Intelligence & DS",
  "App Development"
];


const Domains = () => {
    const navigate = useNavigate();

    
const handleClick = (key) => {
    navigate('/User', { state: { key } });
};

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen">
        <img src={p2} className="absolute top-0 left-0 w-full h-full object-cover -z-10"></img>
        <div className="bg-white p-8 shadow-xl w-[400px] flex flex-col gap-6 shadow">
     
     { categories.map((type,key) => (
           
           <button key={key} className="bg-blue-600 text-white py-2 rounded-xl hover:scale-105 transition-transform duration-300" onClick= {() => handleClick(key+1)}>
    {type}
  </button>
      )) }
      
     
        </div>
    </div>
  )
}

export default Domains
