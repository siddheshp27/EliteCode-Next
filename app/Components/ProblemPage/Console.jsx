import { useClientContext } from "./../../Context";
import React from "react";

export default function Console({ output }) {
  const { fileName } = useClientContext();

  function isJSONParsable(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }
  return (
    <div className="h-full w-full p-1 bg-[#1e1e1e] rounded-md">
      <div className="h-1/5 px-2  font-bold   border-4 rounded-md">Output</div>
      <div className="h-4/5 text-white">
        {output?.output != undefined &&
          !output?.status &&
          isJSONParsable(output.output) && (
            <h1 className="text-red-500 font-bold">
              Error :{JSON.stringify(JSON.parse(output.output).issue)}
            </h1>
          )}
        {output?.status && fileName == "java" && (
          <h1 className="text-green-500">All the Testcases Passed</h1>
        )}
        {fileName == "java" && (
          <div>
            {output?.output != undefined &&
              isJSONParsable(output?.output) &&
              !JSON.parse(output.output).error && (
                <div className="text-red-500">
                  <h1>Input : {JSON.parse(output.output).input}</h1>
                  <h1>
                    Expected Output :{JSON.parse(output.output).expected_output}
                  </h1>
                  <h1>Output : {JSON.parse(output.output).output}</h1>
                </div>
              )}
          </div>
        )}
        {fileName != "java" && !isJSONParsable(output?.output) && (
          <div className="text-green-500">
            <div>{output.output?.trim()}</div>
          </div>
        )}
      </div>
    </div>
  );
}
