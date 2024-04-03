"use client";
import { LockoutCase } from "@/components/LockoutCase";
import { useChallenges } from "@/hooks/useChallenges";

export default function Home() {
  const {challenges} = useChallenges();

  return (
    <div className="flex flex-col space-y-4 p-16 bg-gray-300 min-h-screen justify-center items-center">
      <div id="grid-start" className="grid grid-cols-5 gap-2">
        {challenges.map((challenge, index) => {
          return (
            <div key={index} className="flex h-28 w-28 justify-center items-center ">
              <LockoutCase description={challenge.challenge} difficulty="hard" />
            </div>
          );
        })}
      </div>
      <a href="/#grid-start" className="flex justify-center items-center px-4 py-2 rounded-md shadow-md font-bold text-white bg-red-800">
        <button>
          Align Grid
        </button>
      </a>
    </div>
  );
}
