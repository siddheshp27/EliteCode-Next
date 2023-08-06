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
  {
    // const url = "http://localhost:8080";
    // const test = async () => {
    //   const t = await axios.get(`${url}/problems/1`);
    //   console.log(t);
    // };
    // test();
  }
  return (
    <div className="h-full bg-red-500 w-full">
      <h1 className="text-xl font-bold">1.Probname</h1>
      <ul className="flex w-1/3 justify-between">
        <li>difficulty</li>
        <li>like </li>
        <li>dislike</li>
        <li>start</li>
        <li>share</li>
      </ul>
      <p>
        You have n computers. You are given the integer n and a 0-indexed
        integer array batteries where the ith battery can run a computer for
        batteries[i] minutes. You are interested in running all n computers
        simultaneously using the given batteries. Initially, you can insert at
        most one battery into each computer. After that and at any integer time
        moment, you can remove a battery from a computer and insert another
        battery any number of times. The inserted battery can be a totally new
        battery or a battery from another computer. You may assume that the
        removing and inserting processes take no time. Note that the batteries
        cannot be recharged. Return the maximum number of minutes you can run
        all the n computers simultaneously.
      </p>
      <div>
        examples
        <div>inp outp</div>
        examples
        <div>inp outp</div>
      </div>
      <div>
        constraints
        <div>inp outp</div>
      </div>
      <ul className="flex w-1/3 justify-between">
        <li>Accepted </li>
        <li>Submissions </li>
        <li>Acceptance Rate</li>
      </ul>
      <Prob />
    </div>
  );
}
