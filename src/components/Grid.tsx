import { Index, createSignal } from "solid-js";
import { GridChallenge } from "~/types/GridChallenge";
import { GridCell } from "./GridCell";
import { A } from "@solidjs/router";
import { GridSizeSelector } from "./GridSizeSelector";

interface GridProps {
  challenges: GridChallenge[];
  defaultSize?: "sm" | "md" | "lg";
}

export function Grid(props: GridProps) {
  const [displayedDes, setDisplayedDes] = createSignal("");
  const [size, setSize] = createSignal<"sm"|"md"|"lg">(props.defaultSize??"md")

  return (
    <div id="grid-start" class="flex flex-col items-center justify-center space-y-1">
      <div class="grid grid-cols-5 gap-2">
        <Index each={props.challenges}>
          {(challenge, i) => (
            <GridCell
              name={challenge().name}
              size={size()}
              onHover={() => setDisplayedDes(challenge().description)}
            />
          )}
        </Index>
      </div>
      <div class="flex p-2 w-full bg-white">
        {displayedDes()}
      </div>
      <div class="flex justify-between items-center p-2 w-full">
        <A href="/#grid-start">
          <button>
            Center Grid
          </button>
        </A>
        <GridSizeSelector onChange={setSize}/>
      </div>
    </div>
  );
}
