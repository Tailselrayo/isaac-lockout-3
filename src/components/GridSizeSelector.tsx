import { Index, createSignal } from "solid-js";
import { DotCheckmark } from "./DotCheckmark";
import { GridSize } from "~/types/GridSize";

interface GridSizeSelectorProps {
  onChange: (size: GridSize) => void;
}

export function GridSizeSelector(props: GridSizeSelectorProps) {
  const [selectedSize, setSelectedSize] = createSignal<GridSize>("md");

  const options = {
    sm: "small",
    md: "medium",
    lg: "large",
  };

  const handleClick = (size: GridSize) => {
    //check if selectedSize is already set, do nothing if so
    if (selectedSize() === size) return;
    //if a change happen, run the parent callback and update compenent
    setSelectedSize(size);
    props.onChange(size);
  };

  return (
    <div class="flex space-x-3">
      <Index each={Object.keys(options)}>
        {(stringSize, i) => {
          const size = stringSize() as GridSize
          return (
            <DotCheckmark
              value={selectedSize() === size}
              description={options[size]}
              onClick={() => handleClick(size)}
            />
          );
        }}
      </Index>
    </div>
  );
}
