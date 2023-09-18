
"use client";
require('dotenv').config();
import OpenAI from "openai";
import { useEffect, useState } from "react";


const Search = () => {
  const [searchKeys, setSearchKeys] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [sassyGirl, setSassyGirl] = useState(false)
  const [flirty, setFlirty] = useState(false);
  const [normal, setNormal] = useState(true);
  const [apiKey, setApiKey] = useState(process.env.OPENAI_API_KEY);


  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  const onHandleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchKeys(e.target.value);
  }

  const onHandleRadioBtn = (e) => {
    if (e == 1) {
      setNormal(true);
      setSassyGirl(false);
      setFlirty(false);
    } else if (e == 2) {
      setNormal(false);
      setSassyGirl(true);
      setFlirty(false);
    } else if (e == 3) {
      setNormal(false);
      setSassyGirl(false);
      setFlirty(true);
    }
  }

  const handleSearch = () => {
    setSearchKeys("");
    setSearchResult([]);

    var temp = [];
    console.log(searchKeys);
    var personality = "";
    if(normal){
      personality = "You are a personal Assistant.";
    }else if(sassyGirl){
      personality = "You are a sassy girl.";
    }else if(flirty){
      personality = "You are a flirty personal assistant.";
    }
    const chatCompletion = openai.chat.completions.create({
      messages: [
        { role: "system", content:  personality},
        { role: "user", content: searchKeys },],
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
      <div className="flex flex-col gap-3 rounded-xl bg-slate-900 bg-opacity-80 p-5">
        <div className="flex gap-3 justify-evenly w-full">
          <label onClick={() => onHandleRadioBtn(1)} className={`font-bold cursor-pointer ${normal? "text-blue-500":""}`}>Personal Assistant</label>
          <label onClick={() => onHandleRadioBtn(2)} className={`font-bold cursor-pointer ${sassyGirl? "text-blue-500":""}`}>Sassy Girl</label>
          <label onClick={() => onHandleRadioBtn(3)} className={`font-bold cursor-pointer ${flirty? "text-blue-500":""}`}>Flirty Assistant</label>
        </div>

        <div className="flex gap-x-3">
          <textarea
            type="text"
            placeholder="Search..."
            value={searchKeys}
            onChange={onHandleSearchChange}
            className="bg-slate-700 bg-opacity-70 w-full min-h-[3.5rem] overflow-y-scroll h-auto outline-none border-[2px] rounded-2xl p-3 placeholder-white placeholder-co focus:border-blue-500 font-bold"
          />
          <button className="pe-4" onClick={() => handleSearch()}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="w-full flex justify-end">
          <div className="cursor-pointer" onClick={()=>setSearchResult([])} hidden={searchResult.length <= 0}>clear</div>
        </div>
        <div id="search-content" hidden={searchResult.length <= 0} style={{ whiteSpace: 'pre-line' }} className="w-full max-h-[25rem] rounded-xl bg-slate-700 bg-opacity-75 overflow-y-scroll p-5">
          {searchResult.map((r) => {
            return r;
          })}
        </div>
      </div>

    </div>
  )
}

export default Search