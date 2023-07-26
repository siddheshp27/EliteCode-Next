import { useState, useEffect } from "react";
import axios from "axios";

export default function Problem({ probid }) {
  const [problemData, setProblemData] = useState();

  useEffect(async () => {
    const res = await fetch("/api/problems", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ msg: "hi" }),
    });
    setProblemData(res.json());
  }, []);

  function Prob() {
    if (problemData) {
      return <h1>{JSON.stringify(problemData)}</h1>;
    }
    return <h1>whiffed</h1>;
  }
  // const url = "http://localhost:8080";
  // const test = async () => {
  //   const t = await axios.get(`${url}/problems/1`);
  //   console.log(t);
  // };

  // test();

  return (
    <div>
      <div></div>
    </div>
  );
}
