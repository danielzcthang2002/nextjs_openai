"use client";
// import OpenAI from "openai";

import { useEffect, useState } from "react";
import $ from 'jquery';
import About from "@/lib/about";


function Homepage() {
  // const openai = new OpenAI({
  //   apiKey: process.env.OPENAI_API_KEY,
  //   dangerouslyAllowBrowser: true,
  // });

  // const chatCompletion = openai.chat.completions.create({
  //   messages: [{ role: "user", content: "Say this is a test" }],
  //   model: "gpt-3.5-turbo",
  // });
  // console.log(chatCompletion);


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

      if (scroll > 30) {
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
          <div className="flex flex-col justify-center items-start h-[50rem] w-full">
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
          <div className="flex flex-col justify-center p-5 w-full">
            <div className="flex gap-x-3">
              <textarea
                type="text"
                placeholder="Search..."
                className="bg-slate-700 bg-opacity-70 w-full min-h-[1rem] h-auto outline-none border-[2px] rounded-2xl p-3 placeholder-white placeholder-co focus:border-blue-500 font-bold"
                onFocus={() => {
                  // Add logic here to show/hide the search content
                  document.getElementById("search-content").style.display = "block";
                }}
                onBlur={() => {
                  // Add logic here to show/hide the search content
                  document.getElementById("search-content").style.display = "none";
                }}
              />
              <button className="pe-4">
              <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <div id="search-content" className="w-full h-[30rem] rounded-xl bg-slate-700 bg-opacity-75 my-4 overflow-y-hidden">

            </div>
          </div>
        </div>


        <About />
      </div>

    </div>
  )
}

export default Homepage