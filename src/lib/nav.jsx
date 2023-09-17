"use client";
import { useEffect, useState } from 'react';

const NavBar
  = () => {
    const [textMode, setTextMode] = useState(true);
    const [imageMode, setImageMode] = useState(false);
    function timeDifference(end_time) {
      const startDate = new Date(); // Current time
      const endDate = new Date(end_time);
    
      // Calculate the time difference in milliseconds
      const timeDiff = endDate - startDate;
    
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      // console.log("days", days);
    
      return { days, hours, minutes, seconds };
    }
    
    const [countDown, setCountDown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        const future = "2023-12-16T00:00:00";
        const count = timeDifference(future);
        console.log(count);
        setCountDown(count);
      }, 1000);
    
      // Cleanup: Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
    return (
      <nav id="upper-navbar" className="fixed top-0 flex justify-evenly items-center gap-20 shadow-xl h-14 w-full z-[4] px-20">
        <div className='flex ms-4 font-bold uppercase text-xl w-[10rem] cursor-pointer text-blue-600'>
          Chat with Ai
        </div>
        <a href='#about' id='about-btn' className='duration-300 shadow-xl w-20 h-8 border-[2px] rounded-2xl font-bold uppercase text-center hover:text-blue-400 hover:border-blue-400'>About</a>
        <button 
        onClick={()=>{setTextMode(true),setImageMode(false)}}
        className={`shadow-xl w-20 h-8 border-[2px] rounded-2xl font-bold uppercase ${textMode ? "text-blue-400 border-blue-400":"hover:text-blue-400 hover:border-blue-400"}`}>
          Text
          </button>
        <button
        onClick={()=>{setTextMode(false),setImageMode(true)}}
        className={`shadow-xl w-20 h-8 border-[2px] rounded-2xl font-bold uppercase ${imageMode ? "text-blue-400 border-blue-400":"hover:text-blue-400 hover:border-blue-400"}`}>
          Image
        </button>
        {/* <div className='flex justify-end items-end font-bold text-red-500 ms-[12rem]'>
          The API session will expire in{" "}
          {countDown.days > 0 ? countDown.days + " days " : ""}
          {countDown.hours >= 0 ? countDown.hours + " hr " : ""}
          {countDown.minutes >= 0 ? countDown.minutes + " min " : ""}
          {countDown.seconds >= 0 ? countDown.seconds + " sec " : ""}
        </div> */}
      </nav>
    )
  }

export default NavBar
