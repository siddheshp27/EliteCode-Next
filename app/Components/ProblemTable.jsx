import React from "react";
import { Meteors } from "../ui/meteors";
import { useRouter } from "next/navigation";

const ProblemTable = ({ problems }) => {
  const handleClick = () => {
    router;
  };
  const router = useRouter();
  return (
    <div className="overflow-x-auto w-screen relative px-8 rounded-3xl mb-4 ">
      <div className="absolute inset-0 h-full w-screen bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-800 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <table className="min-w-full  divide-y-2 rounded-3xl p-2 divide-gray-200 bg-transparent text-sm ">
          <thead className="ltr:text-left rtl:text-right bebas-font text-xl tracking-widest">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                Sr.No
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                Problem Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                Tag
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                Difficulty
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                Total submissions
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-white">
                Total accepted
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-400 text-center poppins-font">
            {problems.map((item, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap font-bold px-4 py-2 text-white">
                  {item.question_id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-white">
                  {item.question_title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-white">
                  {item.topic_tagged_text}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-white">
                  {item.difficulty_level}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-white">
                  {item.total_submission}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-white">
                  {item.total_accepted}
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-white"
                    onClick={() => router.push(`/problem/${item.question_id}`)}
                  >
                    <span className="absolute -start-full transition-all group-hover:start-4">
                      <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    <span className="text-sm tracking-widest poppins-font font-extrabold rounded-xl transition-all group-hover:ms-4 text-center bg-white px-1 py-0.5 focus:outline-none">
                      Solve
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Meteors number={80} />
      </div>
    </div>
  );
};

export default ProblemTable;
