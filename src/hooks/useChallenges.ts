import { Challenge } from "@/types/Challenge";
import { useEffect, useState } from "react";
import challenges from "@/json/challenges.json";
import { bossPicker } from "@/utils/bossPicker";

export function useChallenges() {
  const ch5: Challenge = challenges["challenge-5"];

  //stocks challenge as their description
  const [challengeList, setChallengeList] = useState<{challenge: string, difficulty: string}[]>([]);

  useEffect(()=>{
    if (challengeList.length<25) {
      addAChallengeToList();
    }
  })

  const formDesc = (splitedDesc: string[]) => {
    return splitedDesc.toString().replaceAll(",", " ");
  };

  //letters contains all letters to change in desc, newContent is the added
  const replaceLetters = (
    splitedDesc: string[],
    letters: string[],
    newContent: string[]
  ) => {
    const changedDesc: string[] = [];
    for (const word of splitedDesc) {
      if (letters.includes(word)) {
        changedDesc.push(newContent[letters.indexOf(word)]);
      } else changedDesc.push(word);
    }
    return formDesc(changedDesc);
  };

  const addAChallengeToList = () => {
    if (challengeList.length < 25) {
      const newChal = ch5;
      //verify challenge integrity

      if (newChal.parameters) {
        const result = bossPicker();
        const newDesc = replaceLetters(
          newChal.description.split(" "),
          ["X", "Y"],
          [result!.boss.name, result!.Y.toString()]
        );
        setChallengeList((list)=>list.concat([{challenge: newDesc, difficulty: "hard"}]))
      }
    }
  };
  return ({
    challenges: challengeList,
    challengesHandlers: {addAChallengeToList }
  })
}
