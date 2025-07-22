import { Typer } from "./components/Typer"
import { Button } from "./components/Button"
import React, { useState } from 'react';

function App() {
  const [pressed, setPressed] = useState(false);
  const [text, setText] = useState("");
  return (
    <>
      <div className="relative bg-blue-900 h-screen w-screen">
        <div className="absolute top-64 left-[925px]">
          <div className="relative right-[140px] bottom-[100px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div>
          <div className="relative bottom-[138px] right-[94px] text-4xl font-bold">
            <span className="text-green-500">Webinar</span>
            <span className="text-white">.gg</span>
          </div>
          <div className="relative right-[130px] text-white text-3xl font-extrabold">
            Verify Your Age
          </div>
          <div className="relative right-[220px] top-[60px] text-gray-400">
            Please confirm your birth year. This data will not be stored.
          </div>
          <div className="relative right-[190px] top-[80px]">
            <Typer
              type={"text"}
              placeholder={"Your Birth Year"}
              onChange={(e) => {
                setText(e.target.value);
              }} />
          </div>
          <div className="relative right-[190px] top-[120px]">
            <Button
              placeholder={"Continue"}
              onClick={() => {
                setPressed(!pressed);
                console.log(text);
              }}
              disabled={!pressed} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
