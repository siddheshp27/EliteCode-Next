"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ClientContext = createContext({});

export const ClientContextProvider = ({ children }) => {
  const [languageType, setLanguageType] = useState("py");
  const [fileName, setFileName] = useState("py");
  const [code, setCode] = useState(`print("Hello Word")`);
  const [languageData, setLanguageData] = useState({
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
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    const sendCompilerCode = async () => {
      const payload = {
        languageType,
        code: languageData[fileName].value,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const output = await axios.post(
          "http://3.109.208.152:5000/compile",
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

  const addInQueue = (event) => {
    event.preventDefault();
    const pid = uuidv4();
    async function fetchData() {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: { pid, code, fileName },
      });

      const { message } = await res.json();

      console.log(message);
    }
    fetchData();
  };

  const values = {
    handleSubmit,
    addInQueue,
    languageData,
    setLanguageData,
    setLanguageType,
    fileName,
    setFileName,
    code,
    setCode,
  };

  return (
    <ClientContext.Provider value={values}>{children}</ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
