"use client";
import React, { useContext, useState } from "react";
import Split from "react-split";

import Compiler from "./ProblemPage/Compiler";
import Console from "./ProblemPage/Console";
import Problem from "./ProblemPage/Problem";
import { useClientContext } from "../Context";

export default function ProblemPage({ probid }) {
  const [consoleState, setConsoleState] = useState(true);
  const { handleSubmit } = useClientContext();

  const toggleConsole = (e) => {
    e.preventDefault();
    setConsoleState((prev) => !prev);
  };

  function HorizontalSpilt() {
    return (
      <Split
        direction="vertical"
        sizes={consoleState ? [70, 30] : [100]}
        gutterSize={8}
        gutterAlign="center"
        className="h-5/6"
      >
        <Compiler />
        {consoleState && <Console />}
      </Split>
    );
  }

  const Bottom = () => {
    return (
      <div className="bg-[#252627] mt-2 h-12 rounded-md flex justify-between  px-3 ">
        <div
          onClick={toggleConsole}
          className="bg-[#252729] text-sm font-medium text-[#d3d3e699] flex items-center "
        >
          <button>Console</button>
          <img
            src={`./assets/${consoleState ? "des" : "asc"}arrow.svg`}
            className="h-4 m-1 relative top-[1.5px]"
          />
        </div>
        <button id="hero-cta" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  };

  return (
    <Split
      direction="horizontal"
      sizes={[45, 55]}
      gutterSize={8}
      gutterAlign="center"
      className="pr-2 h-[100vh]  flex"
    >
      <div className="mt-2 w-[99.5%] ml-2 py-2 bg-[#252729] rounded-t-md ">
        <div className="px-2">
          <ul className="flex justify-between  w-3/5 text-sm relative bottom-1">
            <li>Description</li>
            <li>Editorial</li>
            <li>Solutions</li>
            <li>Submissions</li>
          </ul>
        </div>
        <Problem probid={probid} />
      </div>
      <div className="h-full">
        <HorizontalSpilt />
        <Bottom />
      </div>
    </Split>
  );
}
