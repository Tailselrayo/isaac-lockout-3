import bossesJson from "@/json/bosses.json";
import { Boss } from "@/types/Boss";

export function bossPicker(
  difficulty?: "easy" | "custom" | "medium" | "hard",
  chapters?: number[]
) {
  const bosses: Boss[] = bossesJson.bosses;

  //initiating useful variables and parameters
  const difficultyFactor = {
    custom: { threshold: 0, modifier: 0 },
    easy: { threshold: 3, modifier: 1 },
    medium: { threshold: 2, modifier: 2 },
    hard: { threshold: 1, modifier: 3 },
  };
  var bossTable: { boss: Boss; difficultyFactor: number, id:number }[] = [];

  const addToTab = (boss: Boss, difficultyFactor: number) => {
    for (let i = 0; i < boss.weight; i++) {
      bossTable.push({ boss, difficultyFactor, id:i });
    }
  };

  const defineY = (bossWeight: number, difficultyFactor: number) => {
    const factor = Math.ceil(difficultyFactor);
    if (difficulty === "hard") {
      return Math.min(bossWeight, factor);
    } else if (difficulty === "easy") {
      return Math.max(bossWeight - 3, factor);
    } else if (difficulty === "medium") {
      return Math.max(bossWeight - 2, factor);
    } else return bossWeight;
  };

  //initiating a weighted boss list from available options
  for (const boss of bosses) {
    //go through every forbidden chapter, if the boss going through is from any of those, return
    for (let i = 0; i < (chapters?.length ?? 0); i++) {
      if (chapters && chapters[i] === boss.chapter) return;
    }
    const difficultyLevel =
      boss.weight /
      (boss.chapter + difficultyFactor[difficulty ?? "custom"].modifier);
    //check difficulty
    if (difficultyLevel < difficultyFactor[difficulty ?? "custom"].threshold)
      return;
    addToTab(boss, difficultyLevel);
  }

  //pick a random boss from the available boss and attribute them a number of necessary kills
  const chosenElement = bossTable[Math.floor(Math.random() * bossTable.length)];
  return ({boss: chosenElement.boss,Y:  defineY(chosenElement.boss.weight, chosenElement.difficultyFactor)})
}
