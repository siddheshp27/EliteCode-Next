import { useClientContext } from "./../../Context";
import React from "react";

export default function Console({ output }) {
  const { fileName } = useClientContext();
  return (
    <div className="h-full w-full p-1 bg-[#1e1e1e] rounded-md">
      <div className="h-1/5 px-2  font-bold   border-4 rounded-md">Output</div>
      <div className="h-4/5 text-white">
        {JSON.stringify(output)}
        {output.status && <h1 className="bg-red-500">Compilation error</h1>}
        {output.status && fileName == "java" && (
          <h1 className="bg-green-500">All the Testcases Passed</h1>
        )}
        {fileName == "java" && (
          <div>
            {output.output != undefined && (
              <div>
                {JSON.parse(output.output).output}
                {JSON.parse(output.output).expected_output}
                {JSON.parse(output.output).input}
              </div>
            )}
          </div>
        )}
        {fileName != "java" && (
          <div>
            Output:
            <div>{output.output?.trim()}</div>
          </div>
        )}
      </div>
    </div>
  );
}
