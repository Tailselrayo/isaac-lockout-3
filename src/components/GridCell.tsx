import { Match, Switch, createSignal } from "solid-js";
import {AiOutlineStar, AiFillStar} from "solid-icons/ai"

interface GridCellProps {
  name: string;
  size: "sm" | "md" | "lg";
  onHover: () => void;
}

export function GridCell(props: GridCellProps) {
  const [lockedOn, setLockedOn] = createSignal(false);
  const [tagged, setTagged] = createSignal(false);
  const [tagHover, setTagHover] = createSignal(false);

  const cellSizes = {
    sm: "w-24 h-24",
    md: "w-28 h-28",
    lg: "w-32 h-32",
  };

  const cellModes = {
    default:
      "bg-gray-900 text-yellow-50 hover:bg-gradient-to-bl hover:from-gray-900 hover:to-gray-800",
    validated:
      "bg-red-500 text-gray-900 hover:bg-gradient-to-bl hover:from-red-500 hover:to-red-400",
    //will need to be configured when challenge fetching will be ok
    waiting: "bg-gray-300",
  };

  return (
    <div class="flex relative w-full h-full">
      <button
        class={`flex items-center justify-center font-bold ${
          cellSizes[props.size]
        } ${cellModes[lockedOn() ? "validated" : "default"]}`}
        onClick={() => setLockedOn(!lockedOn())}
        onMouseOver={props.onHover}
      >
        {props.name}
      </button>
      <button
        class="flex absolute top-0 right-0 text-white justify-center items-center p-1 w-8 h-8"
        onClick={() => setTagged(!tagged())}
        onMouseEnter={() => setTagHover(true)}
        onMouseLeave={() => setTagHover(false)}
      >
        <Switch>
          {/*When mouse is over right top corner, and cell not validated, show empty star */}
          <Match when={tagHover() && !tagged() && !lockedOn()}>
            <AiOutlineStar size={20} color="white"/>
          </Match>
          <Match when={!lockedOn() && tagged()}>
            <AiFillStar size={20} color="white"/>
          </Match>
        </Switch>
      </button>
    </div>
  );
}
