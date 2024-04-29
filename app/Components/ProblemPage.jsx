"use client";
import React, { useContext, useState, useRef } from "react";
import Split from "react-split";

import Compiler from "./ProblemPage/Compiler";
import Console from "./ProblemPage/Console";
import Problem from "./ProblemPage/Problem";
import { useClientContext } from "../Context";
import { addInQueue } from "../api/submit/route";
import { getSubmission } from "../api/problems/route";
import { v4 } from "uuid";

export default function ProblemPage({ probid }) {
  const editorRef = useRef(null);

  const [consoleState, setConsoleState] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [code, setCode] = useState(`print("Hello Word")`);
  const { fileName } = useClientContext();
  const toggleConsole = (e) => {
    e.preventDefault();
    setConsoleState((prev) => !prev);
  };

  const handleSubmit = async () => {
    setSubmitLoading(true);
    console.log(editorRef.current.getValue());
    console.log(fileName);
    const code = editorRef.current.getValue();
    const id = v4();
    const queueRes = await addInQueue({
      probid,
      id,
      code,
      languageType: fileName,
    });

    if (queueRes.success) {
      let count = 0;
      async function polling() {
        const output = await getSubmission(id);
        if (output || count > 5) {
          console.log("Hellyeah", output);
          return;
        }
        count++;
        setTimeout(polling, 7500);
      }
      setTimeout(polling, 7500);
    }
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
        <Compiler setCode={setCode} editorRef={editorRef} />
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
            src={`/image/${consoleState ? "des" : "asc"}arrow.svg`}
            className="h-4 m-1 relative top-[1.5px]"
          />
        </div>
        <button id="hero-cta" disabled={submitLoading} onClick={handleSubmit}>
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
      {/* <div className="h-full"> */}
      <div>
        <HorizontalSpilt />
        <Bottom />
      </div>
    </Split>
  );
}
