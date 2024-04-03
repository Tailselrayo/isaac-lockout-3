import { useState } from "react";

interface LockoutCaseProps {
  description: string;
  difficulty?: "custom" | "easy" | "medium" | "hard";
}

export function LockoutCase(props: LockoutCaseProps) {
  const [lockedOut, setLockedOut] = useState<boolean>(false);

  const border = {
    custom: "border-white",
    easy: "border-green-500",
    medium: "border-blue-500",
    hard: "border-red-500",
  };

  return (
    <button
      onClick={() => setLockedOut((bool) => !bool)}
      className={`flex justify-center rounded-md hover:italic bg-gradient-to-tr ${lockedOut?"from-red-600 to-red-500 hover:red-500":"from-gray-800 to-gray-700"} border-2 items-center ${!lockedOut&&border[props.difficulty??"custom"]} w-full h-full text-white hover:bg-gray-700`}
    >
      {props.description}
    </button>
  );
}
