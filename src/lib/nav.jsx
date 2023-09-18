"use client";
import { useEffect, useState } from 'react';

const NavBar
  = () => {
    // const [textMode, setTextMode] = useState(true);
    // const [imageMode, setImageMode] = useState(false);
    
    return (
      <nav id="upper-navbar" className="fixed top-0 flex justify-evenly items-center gap-20 shadow-xl h-14 w-full z-[4] px-20">
        <div className='flex ms-4 font-bold uppercase text-xl w-[10rem] cursor-pointer text-blue-600'>
          Chat with Ai
        </div>
        <a href='#about' id='about-btn' className='duration-300 shadow-xl w-20 h-8 border-[2px] rounded-2xl font-bold uppercase text-center hover:text-blue-400 hover:border-blue-400'>About</a>
        {/* <button 
        onClick={()=>{setTextMode(true),setImageMode(false)}}
        className={`shadow-xl w-20 h-8 border-[2px] rounded-2xl font-bold uppercase ${textMode ? "text-blue-400 border-blue-400":"hover:text-blue-400 hover:border-blue-400"}`}>
          Text
          </button>
        <button
        onClick={()=>{setTextMode(false),setImageMode(true)}}
        className={`shadow-xl w-20 h-8 border-[2px] rounded-2xl font-bold uppercase ${imageMode ? "text-blue-400 border-blue-400":"hover:text-blue-400 hover:border-blue-400"}`}>
          Image
        </button> */}
        
      </nav>
    )
  }

export default NavBar
