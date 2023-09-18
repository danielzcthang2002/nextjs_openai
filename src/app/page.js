"use client";
// import OpenAI from "openai";

import { useEffect, useState } from "react";
import $ from 'jquery';
import About from "@/lib/about";

import Search from "@/lib/search";


function Homepage() {

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
      // console.log(count);
      setCountDown(count);
    }, 1000);

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 20) {
        // Code to execute when scroll is greater than 20
        $("#upper-navbar").removeClass("!bg-transparent");
        $("#upper-navbar").addClass("!bg-slate-800 shadow-lg");
      } else {
        // Code to execute when scroll is not greater than 20
        $("#upper-navbar").removeClass("!bg-slate-800 shadow-lg");
      }

      if (scroll > 260) {
        $('#about-btn').addClass("text-blue-400 border-blue-400");
      } else {
        $('#about-btn').removeClass("text-blue-400 border-blue-400");
      }
    };

    // Check initial scroll position when component mounts
    const initialScroll = window.scrollY;
    if (initialScroll > 20) {
      // Code to execute when initial scroll is greater than 20
      $("#upper-navbar").addClass("!bg-slate-800");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div
        className="absolute top-0 w-[100%] h-[50rem]"
        style={{
          backgroundImage: `url("/images/ai7.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent from-60% to-slate-800"></div>
      </div>
      <div className="container flex flex-col mt-[3.5rem] relative z-[3]">
        <div className="flex">

          <div className="flex flex-col justify-start items-start h-[50rem] w-full">
            <div className='flex justify-start items-start font-bold text-red-500 mt-[1rem] mb-[10rem]'>
              The API session will expire in{" "}
              {countDown.days > 0 ? countDown.days + " days " : ""}
              {countDown.hours >= 0 ? countDown.hours + " hr " : ""}
              {countDown.minutes >= 0 ? countDown.minutes + " min " : ""}
              {countDown.seconds >= 0 ? countDown.seconds + " sec " : ""}
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[2.5rem] font-bold">Feeling Lonely? </h1>
              <p className="font-semibold text-[1rem]">Chat with AI is all you need.</p>
            </div>
            <div className="flex flex-col gap-3 ps-10">
              <h1 className="text-[2.5rem] font-bold">Need Some Help? </h1>
              <p className="font-semibold text-[1rem]">Chat with AI is here to help.</p>
            </div>
            <div className="flex flex-col gap-3 ps-20">
              <h1 className="text-[2.5rem] font-bold">Want creativity? </h1>
              <p className="font-semibold text-[1rem]">Chat with AI makes it happen.</p>
            </div>
          </div>
          <Search/>
        </div>
        <About />
      </div>

    </div>
  )
}

export default Homepage