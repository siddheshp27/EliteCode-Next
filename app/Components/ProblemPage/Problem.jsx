import { useState, useEffect } from "react";
import axios from "axios";

export default function Problem({ probid }) {
  const [problemData, setProblemData] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/problems", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: probid }),
      });

      const { msg } = await res.json();

      setProblemData(msg);
    }
    fetchData();
  }, []);

  function Prob() {
    if (problemData) {
      console.log(problemData);
      return <h1>{problemData}</h1>;
    }
    return null;
  }
  // const url = "http://localhost:8080";
  // const test = async () => {
  //   const t = await axios.get(`${url}/problems/1`);
  //   console.log(t);
  // };

  // test();

  return (
    <div>
      <Prob />
    </div>
  );
}
