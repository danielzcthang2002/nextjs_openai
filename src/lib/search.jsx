
"use client";
require('dotenv').config();
import OpenAI from "openai";
import { useEffect, useState } from "react";


const Search = () => {
  const [searchKeys, setSearchKeys] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [apiKey, setApiKey] = useState(process.env.OPENAI_API_KEY);

  useEffect(() => {
    console.log(apiKey);
    // Update apiKey if the environment variable changes
    // setApiKey(apiKey);
  }, [apiKey]);
  console.log(apiKey);

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  const onHandleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchKeys(e.target.value);
  }

  const handleSearch = () => {
    setSearchKeys("");
    setSearchResult([]);
    var temp = [];
    console.log(searchKeys);

    const chatCompletion = openai.chat.completions.create({
      messages: [{ role: "user", content: searchKeys }],
      stream: true,
      model: "gpt-3.5-turbo",
    }).then(async (res) => {
      for await (const chunck of res) {
        console.log(chunck.choices[0].delta.content);
        var result = chunck.choices[0].delta.content;
        temp.push(result);
        if (result != null && result != "") {
          setSearchResult(temp);
        }

      }
    });
  }
  return (
    <div className="flex flex-col justify-center p-5 w-full">
      <div className="flex gap-x-3">
        <textarea
          type="text"
          placeholder="Search..."
          value={searchKeys}
          onChange={onHandleSearchChange}
          className="bg-slate-700 bg-opacity-70 w-full min-h-[3.5rem] overflow-y-scroll h-auto outline-none border-[2px] rounded-2xl p-3 placeholder-white placeholder-co focus:border-blue-500 font-bold"
        // onFocus={() => {
        //   // Add logic here to show/hide the search content
        //   document.getElementById("search-content").style.display = "block";
        // }}
        // onBlur={() => {
        //   // Add logic here to show/hide the search content
        //   document.getElementById("search-content").style.display = "none";
        // }}
        />
        <button className="pe-4" onClick={() => handleSearch()}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div id="search-content" style={{ whiteSpace: 'pre-line' }} className="w-full h-auto rounded-xl bg-slate-700 bg-opacity-75 my-4 overflow-y-hidden p-5">
        {searchResult.map((r) => {
          return r;
        })}
      </div>
    </div>
  )
}

export default Search