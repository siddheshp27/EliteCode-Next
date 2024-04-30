"use client";
import React, { useState, useRef } from "react";
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
  const { languageData, setLanguageData } = useClientContext();
  const [consoleOutput, setConsoleOutput] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);
  const { fileName } = useClientContext();
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
        className="h-[93%]"
      >
        <Compiler editorRef={editorRef} />
        {consoleState && (
          <Console output={consoleOutput} submitLoading={submitLoading} />
        )}
      </Split>
    );
  }

  const Bottom = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLanguageData((prev) => {
        const temp = { ...prev[fileName], value: editorRef.current.getValue() };
        return { ...prev, [fileName]: temp };
      });
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
            console.log(output);
            setConsoleOutput(output);
            setSubmitLoading(false);
            return;
          }
          count++;
          setTimeout(polling, 7500);
        }
        setTimeout(polling, 4000);
      }
    };
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

        <button
          className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-white text-black hover:bg-black hover:text-white my-1 pt-4 "
          disabled={submitLoading}
          onClick={handleSubmit}
        >
          <span className="text-sm tracking-widest poppins-font font-extrabold rounded-xl transition-all text-center px-1 py-0.5 focus:outline-none">
            Submit
          </span>
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
      className="pr-2 h-[90%]  flex"
    >
      <div className="mt-2 w-[99.5%] ml-2 bg-[#252729] text-white gap-4 rounded-t-md poppins-font text-lg py-4">
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
      <div>
        <HorizontalSpilt />
        <Bottom />
      </div>
    </Split>
  );
}
