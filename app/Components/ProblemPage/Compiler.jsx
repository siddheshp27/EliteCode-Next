// import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

const Compiler = () => {
  const [languageType, setlanguageType] = useState("py");
  const [fileName, setFileName] = useState("py");
  const [code, setCode] = useState(`print("Hello Word")`);
  const [outputValue, setOutputValue] = useState("Output goes here");
  const [screenMode, setScreenMode] = useState(false);

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const languageData = {
    py: {
      name: "script.py",
      language: "python",
      value: "print('Hello World')",
    },
    js: {
      name: "script.js",
      language: "javascript",
      value: "console.log('Hello World')",
    },
    cpp: {
      name: "script.cpp",
      language: "cpp",
      value: `#include <iostream>

        int main() {
            std::cout << "Hello, World!" << std::endl;
            return 0;
        }`,
    },
    java: {
      name: "Main.java",
      language: "java",
      value: `public class Main {
          public static void main(String[] args) {
              System.out.println("Hello World");
          }
      }`,
    },
  };
  const file = languageData[fileName];

  const handleChange1 = (event) => {
    setlanguageType(event.target.value);
    setFileName(event.target.value);

    setCode(languageData[languageType].value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendCompilerCode = async () => {
      const payload = {
        languageType,
        code: languageData[languageType].value,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const output = await axios.post(
          "http://localhost:8080/compile",
          payload,
          {
            headers: headers,
          }
        );
        console.log(output);
        setOutputValue(output.data.output);
      } catch (error) {
        console.log(error);
      }
    };
    sendCompilerCode();
  };

  const handleFullScreen = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      console.log(document.fullscreenElement);
    }

    document.addEventListener("fullscreenchange", () => {
      setScreenMode(document.fullscreenElement);
    });
  };

  return (
    <div
      className="mt-2  w-full bg-[#252729] rounded-md h-full  "
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col h-full ">
        <div className="flex items-center p-1">
          <select
            id="language"
            className=" bg-[#252729] text-sm font-medium text-[#d3d3e699] border-0 focus:ring-0  "
            onChange={handleChange1}
            value={languageType}
          >
            <option value="cpp">C++</option>
            <option value="py">Python</option>
            <option value="java">Java</option>
            <option value="js">Javascript</option>
          </select>
          <div className="absolute right-5 ">
            <img
              className="w-4"
              onClick={handleFullScreen}
              src={
                screenMode
                  ? "./src/assets/minimize.svg"
                  : "./src/assets/maximize.svg"
              }
            />
          </div>
        </div>
        <div className="bg-[#1e1e1e] w-full h-[5px]"></div>
        <div className=" w-full  rounded-t-lg h-full ">
          <Editor
            height="99%"
            width="100%"
            theme="vs-dark"
            onMount={handleEditorDidMount}
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
            onChange={handleEditorChange}
          />
          <div className="bg-[#1e1e1e] w-full h-[1%]"></div>
        </div>
      </div>
    </div>
  );
};

export { Compiler , handleSubmit};
