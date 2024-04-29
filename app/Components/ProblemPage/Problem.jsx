import { useState, useEffect } from "react";
import { getProblem } from "../../api/problems/route";

export default function Problem({ probid }) {
  const [problemData, setProblemData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await getProblem(probid);

      setProblemData(res);
    }

    return () => fetchData();
  }, []);

  function Prob() {
    if (problemData) {
      return (
        <div className="h-full bg-slate-600 text-white w-full">
          <div className="p-2">
            <h1 className="text-xl font-bold">
              {problemData.question_id}.{problemData.question_title}
            </h1>
            <ul className="flex w-1/3 justify-between">
              <li>{problemData.difficulty_level}</li>
            </ul>
            <p>{problemData.question_text}</p>
            {/* <div>
              <div>
                <strong>Input:</strong>[2,7,11,15], target = 9 <br />
                <strong>Output:</strong>[0,1] <br />
                <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we
                return [0, 1].
              </div>
              <div>
                <strong>Input:</strong> nums = [3,2,4], target = 6<br />
                <strong>Output:</strong> [1,2]
                <br />
              </div>
              <div>
                <strong>Input:</strong> nums = [3,3], target = 6<br />
                <strong>Output:</strong> [0,1]
                <br />
              </div>
            </div> */}
          </div>
          <ul className="flex w-1/3 justify-between">
            {/* <li>{problemData.likes} </li>
            <li>{problemData.dislikes}</li> */}
          </ul>
        </div>
      );
    }
    return null;
  }

  return <Prob />;
}
