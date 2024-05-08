import { Show, createSignal } from "solid-js";

interface DotCheckmarkProps{
  value: boolean;
  description: string;
  onClick: () => void;
}

export function DotCheckmark(props: DotCheckmarkProps) {
  return(
    <div class="flex space-x-1 items-center">
      <button class="rounded-full bg-white w-4 h-4 p-0.5" onClick={props.onClick}>
        <Show when={props.value}><div class="rounded-full h-full w-full bg-gray-900"></div></Show>
      </button>
      <span class="text-sm italic text-black">{props.description}</span>
    </div>
  )
}